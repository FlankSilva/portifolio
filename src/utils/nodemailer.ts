import { env } from '@/env'
import nodemailer from 'nodemailer'

// Validar se as credenciais existem
const hasCredentials = env.USER_EMAIL && env.USER_EMAIL_PASS

export const transporter = hasCredentials
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: env.USER_EMAIL,
        pass: env.USER_EMAIL_PASS,
      },
    })
  : null

export const mailOptions = {
  from: env.USER_EMAIL || '',
  to: env.USER_EMAIL || '',
}
