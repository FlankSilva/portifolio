'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Pencil, Trash, ArrowUp, ArrowDown } from 'phosphor-react'
import Image from 'next/image'

interface Project {
  id: number
  name: string
  description: string
  stack: string
  link: string
  repo_name: string
  repo: string
  image_url: string | null
  display_order: number
  created_at: string
  updated_at: string
}

interface ProjectListProps {
  projects: Project[]
  onDelete: (id: number) => void
  onReorder: () => void
}

export function ProjectList({ projects, onDelete, onReorder }: ProjectListProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [reorderingId, setReorderingId] = useState<number | null>(null)

  const handleReorder = async (projectId: number, direction: 'up' | 'down') => {
    setReorderingId(projectId)
    try {
      const response = await fetch('/api/projects/reorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectId, direction }),
      })

      if (!response.ok) {
        throw new Error('Erro ao reordenar projeto')
      }

      onReorder()
    } catch (err) {
      alert('Erro ao reordenar projeto')
      console.error(err)
    } finally {
      setReorderingId(null)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este projeto?')) {
      return
    }

    setDeletingId(id)
    try {
      await onDelete(id)
    } finally {
      setDeletingId(null)
    }
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-block p-6 rounded-full bg-black-600 border border-zinc-200 mb-4">
          <Pencil size={32} className="text-zinc-200" />
        </div>
        <p className="text-zinc-200 text-lg mb-2">Nenhum projeto cadastrado</p>
        <p className="text-zinc-200 text-sm">Comece criando seu primeiro projeto</p>
      </div>
    )
  }

  return (
    <div className="border border-zinc-200 rounded-lg bg-black-600 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="text-left py-3 px-4 text-zinc-200 font-semibold text-sm">Imagem</th>
              <th className="text-left py-3 px-4 text-zinc-200 font-semibold text-sm">Nome</th>
              <th className="text-left py-3 px-4 text-zinc-200 font-semibold text-sm">Descrição</th>
              <th className="text-left py-3 px-4 text-zinc-200 font-semibold text-sm">Stack</th>
              <th className="text-left py-3 px-4 text-zinc-200 font-semibold text-sm">Link</th>
              <th className="text-center py-3 px-4 text-zinc-200 font-semibold text-sm">Ações</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={project.id}
                className="border-b border-zinc-200 hover:bg-black-800 transition-colors"
              >
                <td className="py-4 px-4">
                  {project.image_url ? (
                    <div className="relative w-20 h-12 rounded overflow-hidden bg-black-900">
                      <Image
                        src={project.image_url}
                        alt={project.name}
                        fill
                        className="object-cover"
                        unoptimized={project.image_url.startsWith('http')}
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-12 bg-black-800 rounded flex items-center justify-center">
                      <Pencil size={20} className="text-zinc-200 opacity-30" />
                    </div>
                  )}
                </td>
                <td className="py-4 px-4">
                  <span className="text-green-500 font-semibold">{project.name}</span>
                </td>
                <td className="py-4 px-4">
                  <p className="text-zinc-200 text-sm line-clamp-2 max-w-md">{project.description}</p>
                </td>
                <td className="py-4 px-4">
                  <p className="text-zinc-150 text-xs line-clamp-2 max-w-xs">{project.stack}</p>
                </td>
                <td className="py-4 px-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-300 text-sm underline truncate block max-w-xs"
                  >
                    {project.link}
                  </a>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleReorder(project.id, 'up')}
                      disabled={reorderingId === project.id || index === 0}
                      className="p-2 border border-zinc-200 hover:bg-black-600 rounded transition-colors text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Mover para cima"
                    >
                      <ArrowUp size={16} weight="bold" />
                    </button>
                    <button
                      onClick={() => handleReorder(project.id, 'down')}
                      disabled={reorderingId === project.id || index === projects.length - 1}
                      className="p-2 border border-zinc-200 hover:bg-black-600 rounded transition-colors text-zinc-200 disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Mover para baixo"
                    >
                      <ArrowDown size={16} weight="bold" />
                    </button>
                    <button
                      onClick={() => router.push(`/admin/projects/${project.id}/edit`)}
                      className="p-2 bg-green-500 hover:bg-green-300 rounded transition-colors text-white"
                      title="Editar"
                    >
                      <Pencil size={16} weight="bold" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      disabled={deletingId === project.id}
                      className="p-2 bg-red-400 hover:bg-red-500 rounded transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Deletar"
                    >
                      <Trash size={16} weight="bold" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

