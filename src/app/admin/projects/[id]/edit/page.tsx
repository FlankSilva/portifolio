'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'phosphor-react'
import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { ProjectForm } from '@/components/admin/ProjectForm'

interface Project {
  id: number
  name: string
  description: string
  stack: string
  link: string
  repo_name: string
  repo: string
  image_url: string | null
}

export default function EditProjectPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Erro ao carregar projeto')
        }

        setProject(data.project)
      } catch (err) {
        setError('Erro ao carregar projeto')
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchProject()
    }
  }, [params.id])

  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-black-900 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            <p className="text-zinc-200 mt-4">Carregando projeto...</p>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  if (error || !project) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-black-900 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-400 text-lg mb-4">{error || 'Projeto não encontrado'}</p>
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="text-green-500 hover:text-green-300 transition-colors"
            >
              Voltar ao Dashboard
            </button>
          </div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black-900 flex flex-col">
        {/* Header */}
        <header className="border-b border-zinc-200 bg-black-600">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="p-2 rounded hover:bg-black-800 transition-colors text-zinc-200"
                aria-label="Voltar"
              >
                <ArrowLeft size={20} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-green-500">Editar Projeto</h1>
                <p className="text-zinc-200 text-sm mt-1">{project.name}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-[1400px] mx-auto px-4 py-8 flex-1">
          <div className="border border-zinc-200 rounded-lg p-10 bg-black-600">
            <ProjectForm
              projectId={project.id}
              initialData={{
                name: project.name,
                description: project.description,
                stack: project.stack,
                link: project.link,
                repoName: project.repo_name,
                repo: project.repo,
                imageUrl: project.image_url,
              }}
            />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}

