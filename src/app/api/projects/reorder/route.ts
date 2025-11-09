import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import { isAuthenticated } from '@/utils/auth'
import { z } from 'zod'

const reorderSchema = z.object({
  projectId: z.number(),
  direction: z.enum(['up', 'down']),
})

// POST - Reordenar projetos (requer autenticação)
export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated()

    if (!authenticated) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
    }

    const body = await request.json()
    const { projectId, direction } = reorderSchema.parse(body)

    // Buscar projeto atual
    const project = db.prepare('SELECT * FROM projects WHERE id = ?').get(projectId) as {
      id: number
      display_order: number
    } | undefined

    if (!project) {
      return NextResponse.json({ error: 'Projeto não encontrado' }, { status: 404 })
    }

    const currentOrder = project.display_order

    if (direction === 'up') {
      // Mover para cima: trocar com o projeto que tem display_order menor
      const previousProject = db
        .prepare('SELECT * FROM projects WHERE display_order < ? ORDER BY display_order DESC LIMIT 1')
        .get(currentOrder) as { id: number; display_order: number } | undefined

      if (previousProject) {
        // Trocar as ordens
        db.prepare('UPDATE projects SET display_order = ? WHERE id = ?').run(previousProject.display_order, projectId)
        db.prepare('UPDATE projects SET display_order = ? WHERE id = ?').run(currentOrder, previousProject.id)
      }
    } else {
      // Mover para baixo: trocar com o projeto que tem display_order maior
      const nextProject = db
        .prepare('SELECT * FROM projects WHERE display_order > ? ORDER BY display_order ASC LIMIT 1')
        .get(currentOrder) as { id: number; display_order: number } | undefined

      if (nextProject) {
        // Trocar as ordens
        db.prepare('UPDATE projects SET display_order = ? WHERE id = ?').run(nextProject.display_order, projectId)
        db.prepare('UPDATE projects SET display_order = ? WHERE id = ?').run(currentOrder, nextProject.id)
      }
    }

    return NextResponse.json({ message: 'Ordem atualizada com sucesso' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors[0].message }, { status: 400 })
    }

    console.error('Erro ao reordenar projetos:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}

