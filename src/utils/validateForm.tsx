import * as zod from 'zod'

export const formValidate = zod.object({
  nome: zod.string().min(1, 'Nome inválido'),
  email: zod.string().email('E-mail inválido'),
  telefone: zod
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\(\)\-\+]+$/.test(val),
      'Telefone inválido'
    ),
  subject: zod.string().min(1, 'Assunto inválido'),
  message: zod.string().min(1, 'Menssagem inválida'),
})
