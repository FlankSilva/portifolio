'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Pencil, Trash } from 'phosphor-react'
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
  created_at: string
  updated_at: string
}

interface ProjectListProps {
  projects: Project[]
  onDelete: (id: number) => void
}

export function ProjectList({ projects, onDelete }: ProjectListProps) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<number | null>(null)

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group border border-zinc-200 rounded-lg bg-black-600 flex flex-col overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
        >
          {project.image_url ? (
            <div className="relative w-full h-48 overflow-hidden bg-black-900">
              <Image
                src={project.image_url}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized={project.image_url.startsWith('http')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent opacity-60"></div>
            </div>
          ) : (
            <div className="w-full h-48 bg-black-800 flex items-center justify-center">
              <Pencil size={48} className="text-zinc-200 opacity-30" />
            </div>
          )}
          
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-green-500 font-bold text-xl mb-2 line-clamp-1">{project.name}</h3>
            <p className="text-zinc-200 text-sm mb-4 line-clamp-3 flex-1">{project.description}</p>
            
            {project.stack && (
              <div className="mb-4">
                <p className="text-zinc-200 text-xs mb-1">Stack:</p>
                <p className="text-zinc-150 text-xs line-clamp-2">{project.stack}</p>
              </div>
            )}
            
            <div className="mt-auto flex gap-2 pt-4 border-t border-zinc-200">
              <button
                onClick={() => router.push(`/admin/projects/${project.id}/edit`)}
                className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-300 py-2.5 px-4 rounded transition-colors text-white font-medium text-sm"
              >
                <Pencil size={16} weight="bold" />
                Editar
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                disabled={deletingId === project.id}
                className="flex-1 flex items-center justify-center gap-2 bg-red-400 hover:bg-red-500 py-2.5 px-4 rounded transition-colors text-white font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash size={16} weight="bold" />
                {deletingId === project.id ? 'Deletando...' : 'Deletar'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

