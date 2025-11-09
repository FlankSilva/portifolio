import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { isAuthenticated } from '@/utils/auth'
import { z } from 'zod'

const projectSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  stack: z.string().min(1, 'Stack é obrigatória'),
  link: z.string().url('Link deve ser uma URL válida'),
  repoName: z.string().min(1, 'Nome do repositório é obrigatório'),
  repo: z
    .string()
    .min(1, 'Repositório é obrigatório')
    .refine((val) => val === '#' || val.startsWith('http'), {
      message: 'Repositório deve ser uma URL válida ou # para privado',
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

    const projects = db.prepare('SELECT * FROM projects ORDER BY created_at DESC').all()

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

    const result = db
      .prepare(
        'INSERT INTO projects (name, description, stack, link, repo_name, repo, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)'
      )
      .run(name, description, stack, link, repoName, repo, imageUrl || null)

    const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(result.lastInsertRowid)

    return NextResponse.json({ project, message: 'Projeto criado com sucesso' }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }

    console.error('Erro ao criar projeto:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

