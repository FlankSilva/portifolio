import { mailOptions, transporter } from '@/utils/nodemailer'
import { resend, resendConfig } from '@/utils/resend'
import { NextResponse } from 'next/server'

interface EmailData {
  subject: string
  message: string
  nome: string
  email: string
}

const emailHTML = (nome: string, email: string, subject: string, message: string) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #ef4444;">Novo contato do portfólio</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Assunto:</strong> ${subject}</p>
    <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
    <p><strong>Mensagem:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
`

const emailText = (nome: string, email: string, subject: string, message: string) =>
  `Contato do portfólio\n\nNome: ${nome}\nEmail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`

export async function POST(req: Request) {
  try {
    const { subject, message, nome, email }: EmailData = await req.json()

    // Validar dados obrigatórios
    if (!subject || !message || !nome || !email) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Verificar qual serviço está configurado e usar
    // Prioridade: Gmail SMTP se configurado, senão Resend
    const useGmail = transporter !== null && mailOptions.from && mailOptions.to
    const useResend = resendConfig.isConfigured && resend !== null

    // Tentar Gmail SMTP primeiro (se configurado)
    if (useGmail && transporter) {
      try {
        await transporter.sendMail({
          ...mailOptions,
          subject: `Portfólio - ${subject}`,
          replyTo: email,
          text: emailText(nome, email, subject, message),
          html: emailHTML(nome, email, subject, message),
        })

        return NextResponse.json({ message: 'Email enviado com sucesso' })
      } catch (error: any) {
        console.error('Erro ao enviar email via Gmail SMTP:', error)
        // Se Gmail falhar e Resend estiver configurado, tentar Resend
        if (useResend) {
          // Continuar para tentar Resend
        } else {
          throw error
        }
      }
    }

    // Tentar Resend (se Gmail não estiver configurado ou falhou)
    if (useResend && resend) {
      try {
        await resend.emails.send({
          from: resendConfig.from,
          to: resendConfig.to,
          replyTo: email,
          subject: `Portfólio - ${subject}`,
          text: emailText(nome, email, subject, message),
          html: emailHTML(nome, email, subject, message),
        })

        return NextResponse.json({ message: 'Email enviado com sucesso' })
      } catch (error: any) {
        console.error('Erro ao enviar email via Resend:', error)
        throw error
      }
    }

    // Nenhum serviço configurado
    console.error(
      '❌ Nenhum serviço de email configurado. Configure USER_EMAIL e USER_EMAIL_PASS (Gmail SMTP) ou RESEND_API_KEY, RESEND_FROM_EMAIL e RESEND_TO_EMAIL (Resend)'
    )
    return NextResponse.json(
      { error: 'Serviço de email não configurado. Entre em contato diretamente.' },
      { status: 503 }
    )
  } catch (error: any) {
    console.error('Erro ao enviar email:', error)

    // Mensagens de erro mais específicas
    if (error.code === 'EAUTH') {
      if (error.message?.includes('Missing credentials')) {
        return NextResponse.json(
          { error: 'Credenciais de email não configuradas. Verifique as variáveis de ambiente.' },
          { status: 503 }
        )
      }
      if (error.responseCode === 535) {
        return NextResponse.json(
          { error: 'Credenciais de email inválidas. Verifique USER_EMAIL e USER_EMAIL_PASS no .env. Para Gmail, use uma App Password.' },
          { status: 503 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
