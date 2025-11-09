'use client'

import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { ProjectForm } from '@/components/admin/ProjectForm'

export default function NewProjectPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-black-900 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-green-500 mb-8">Novo Projeto</h1>
          <div className="border border-zinc-200 rounded-lg p-8 bg-black-600">
            <ProjectForm />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

