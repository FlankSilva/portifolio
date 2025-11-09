import { NextRequest, NextResponse } from 'next/server'
import { queryOne, query } from '@/lib/db'
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
    const project = await queryOne('SELECT * FROM projects WHERE id = $1', [projectId]) as {
      id: number
      display_order: number
    } | null

    if (!project) {
      return NextResponse.json({ error: 'Projeto não encontrado' }, { status: 404 })
    }

    const currentOrder = project.display_order

    if (direction === 'up') {
      // Mover para cima: trocar com o projeto que tem display_order menor
      const previousProject = await queryOne(
        'SELECT * FROM projects WHERE display_order < $1 ORDER BY display_order DESC LIMIT 1',
        [currentOrder]
      ) as { id: number; display_order: number } | null

      if (previousProject) {
        // Trocar as ordens
        await query('UPDATE projects SET display_order = $1 WHERE id = $2', [previousProject.display_order, projectId])
        await query('UPDATE projects SET display_order = $1 WHERE id = $2', [currentOrder, previousProject.id])
      }
    } else {
      // Mover para baixo: trocar com o projeto que tem display_order maior
      const nextProject = await queryOne(
        'SELECT * FROM projects WHERE display_order > $1 ORDER BY display_order ASC LIMIT 1',
        [currentOrder]
      ) as { id: number; display_order: number } | null

      if (nextProject) {
        // Trocar as ordens
        await query('UPDATE projects SET display_order = $1 WHERE id = $2', [nextProject.display_order, projectId])
        await query('UPDATE projects SET display_order = $1 WHERE id = $2', [currentOrder, nextProject.id])
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
