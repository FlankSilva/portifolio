import * as zod from 'zod'

export const formValidate = zod.object({
  nome: zod
    .string()
    .min(1, 'Nome inválido')
    .max(100, 'Nome muito longo. Máximo de 100 caracteres.'),
  email: zod.string().email('E-mail inválido'),
  telefone: zod
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\(\)\-\+]+$/.test(val),
      'Telefone inválido'
    ),
  subject: zod
    .string()
    .min(1, 'Assunto inválido')
    .max(200, 'Assunto muito longo. Máximo de 200 caracteres.'),
  message: zod
    .string()
    .min(1, 'Mensagem inválida')
    .max(2000, 'Mensagem muito longa. Máximo de 2000 caracteres.'),
})
