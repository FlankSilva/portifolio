'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'phosphor-react'
import { ProtectedRoute } from '@/components/admin/ProtectedRoute'
import { ProjectForm } from '@/components/admin/ProjectForm'

export default function NewProjectPage() {
  const router = useRouter()

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
                <h1 className="text-2xl font-bold text-green-500">Novo Projeto</h1>
                <p className="text-zinc-200 text-sm mt-1">Crie um novo projeto para seu portfólio</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full max-w-[1400px] mx-auto px-4 py-8 flex-1">
          <div className="border border-zinc-200 rounded-lg p-10 bg-black-600">
            <ProjectForm />
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}

