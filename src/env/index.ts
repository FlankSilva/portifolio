import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  USER_EMAIL: z.string(),
  USER_EMAIL_PASS: z.string(),
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
  USER_EMAIL: process.env.USER_EMAIL || '',
  USER_EMAIL_PASS: process.env.USER_EMAIL_PASS || '',
}
