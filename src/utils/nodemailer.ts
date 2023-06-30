import { env } from '@/env'
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.USER_EMAIL,
    pass: env.USER_EMAIL_PASS,
  },
})

export const mailOptions = {
  from: env.USER_EMAIL,
  to: env.USER_EMAIL,
}
