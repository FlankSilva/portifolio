import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  // Email - Resend (recomendado) ou Gmail SMTP
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().optional(), // Ex: onboarding@resend.dev ou seu domínio verificado
  RESEND_TO_EMAIL: z.string().optional(), // Email que receberá os contatos
  
  // Gmail SMTP (alternativa)
  USER_EMAIL: z.string().optional(),
  USER_EMAIL_PASS: z.string().optional(),
  
  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  DATABASE_URL: z.string().optional(),
  DATABASE_PATH: z.string().optional(),
  SESSION_SECRET: z.string().optional(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❗Invalid environment variable', _env.error.format())

  // Só lança erro em runtime, não durante o build
  if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
    throw new Error('Invalid environment variable.')
  }
}

export const env = _env.success ? _env.data : {
  RESEND_API_KEY: process.env.RESEND_API_KEY || '',
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || '',
  RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL || '',
  USER_EMAIL: process.env.USER_EMAIL || '',
  USER_EMAIL_PASS: process.env.USER_EMAIL_PASS || '',
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || '',
  DATABASE_URL: process.env.DATABASE_URL || '',
  DATABASE_PATH: process.env.DATABASE_PATH || '',
  SESSION_SECRET: process.env.SESSION_SECRET || '',
}
