import { env } from '@/env'
import { Resend } from 'resend'

// Verificar se Resend está configurado
const hasResendConfig = env.RESEND_API_KEY && env.RESEND_FROM_EMAIL && env.RESEND_TO_EMAIL

export const resend = hasResendConfig
  ? new Resend(env.RESEND_API_KEY)
  : null

export const resendConfig = {
  from: env.RESEND_FROM_EMAIL || '',
  to: env.RESEND_TO_EMAIL || '',
  isConfigured: hasResendConfig,
}

