import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
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

// GET - Buscar projeto por ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(Number(id))

    if (!project) {
      return NextResponse.json({ error: 'Projeto não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ project })
  } catch (error) {
    console.error('Erro ao buscar projeto:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

// PUT - Atualizar projeto (requer autenticação)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json()
    const { name, description, stack, link, repoName, repo, imageUrl } = projectSchema.parse(body)

    // Verificar se projeto existe
    const existingProject = db.prepare('SELECT * FROM projects WHERE id = ?').get(Number(id))

    if (!existingProject) {
      return NextResponse.json({ error: 'Projeto não encontrado' }, { status: 404 })
    }

    // Atualizar projeto
    db.prepare(
      'UPDATE projects SET name = ?, description = ?, stack = ?, link = ?, repo_name = ?, repo = ?, image_url = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
    ).run(name, description, stack, link, repoName || '', repo || '', imageUrl || null, Number(id))

    const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(Number(id))

    return NextResponse.json({ project, message: 'Projeto atualizado com sucesso' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }

    console.error('Erro ao atualizar projeto:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

// DELETE - Deletar projeto (requer autenticação)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const { id } = await params

    // Verificar se projeto existe
    const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(Number(id)) as
      | { image_url: string | null }
      | undefined

    if (!project) {
      return NextResponse.json({ error: 'Projeto não encontrado' }, { status: 404 })
    }

    // Deletar projeto
    db.prepare('DELETE FROM projects WHERE id = ?').run(Number(id))

    return NextResponse.json({ message: 'Projeto deletado com sucesso' })
  } catch (error) {
    console.error('Erro ao deletar projeto:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

