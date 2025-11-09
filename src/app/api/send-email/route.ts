import { mailOptions, transporter } from '@/utils/nodemailer'
import { NextResponse } from 'next/server'

interface EmailData {
  subject: string
  message: string
  nome: string
  email: string
}

export async function POST(req: Request) {
  try {
    const { subject, message, nome, email }: EmailData = await req.json()

    await transporter.sendMail({
      ...mailOptions,
      subject,
      text: 'Contato portifólio',
      html: `
        <p>${nome} - ${email}<p/>
        <p>${subject}<p/>
        <p>${message}<p/>
      `,
    })

    return NextResponse.json({})
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 })
  }
}
