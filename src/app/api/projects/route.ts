import { NextRequest, NextResponse } from 'next/server'
import { queryAll, queryOne, query } from '@/lib/db'
import { isAuthenticated } from '@/utils/auth'
import { z } from 'zod'

const projectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  stack: z.string().min(1, 'Stack é obrigatória'),
  link: z.string().url('Link deve ser uma URL válida'),
  repoName: z.string().optional().or(z.literal('')),
  repo: z
    .string()
    .optional()
    .or(z.literal(''))
    .or(z.literal('#'))
    .refine((val) => !val || val === '#' || val.startsWith('http'), {
      message: 'Repositório deve ser uma URL válida, # para privado ou vazio',
    }),
  imageUrl: z
    .string()
    .url()
    .optional()
    .or(z.literal(''))
    .or(z.string().refine((val) => val === '' || val.startsWith('http'), {
      message: 'ImageUrl deve ser uma URL válida ou vazia',
    })),
})

// GET - Listar todos os projetos (requer autenticação)
export async function GET(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const projects = await queryAll('SELECT * FROM projects ORDER BY display_order ASC, id ASC')

    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Erro ao listar projetos:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

// POST - Criar novo projeto (requer autenticação)
export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const { name, description, stack, link, repoName, repo, imageUrl } = projectSchema.parse(body)

    // Pegar o maior display_order e adicionar 1
    const maxOrder = await queryOne('SELECT MAX(display_order) as max_order FROM projects') as { max_order: number | null }
    const newOrder = (maxOrder?.max_order ?? 0) + 1

    const result = await query(
      'INSERT INTO projects (name, description, stack, link, repo_name, repo, image_url, display_order) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [name, description, stack, link, repoName || '', repo || '', imageUrl || null, newOrder]
    )

    const project = result.rows[0]

    return NextResponse.json({ project, message: 'Projeto criado com sucesso' }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }

    console.error('Erro ao criar projeto:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
