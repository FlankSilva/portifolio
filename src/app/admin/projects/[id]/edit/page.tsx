'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
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
          <div className="text-green-500 text-lg">Carregando projeto...</div>
        </div>
      </ProtectedRoute>
    )
  }

  if (error || !project) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-black-900 flex items-center justify-center">
          <div className="text-red-400">{error || 'Projeto não encontrado'}</div>
        </div>
      </ProtectedRoute>
    )
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-500 mb-8">Editar Projeto</h1>
          <div className="border border-zinc-200 rounded-lg p-8 bg-black-600">
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
        </div>
      </div>
    </ProtectedRoute>
  )
}

