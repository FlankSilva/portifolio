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

    // return new Response('Hello, Flank')
    return NextResponse.json({})
  } catch (error) {
    console.log(error)
  }
  return new Response('Hello, Next.js!')
}
