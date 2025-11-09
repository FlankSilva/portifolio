'use client'

import { ProjectsPage } from '@/components/modules/ProjectsPage'
import AppProvider from '@/hooks'

export default function Projetos() {
  return (
    <AppProvider>
      <ProjectsPage />
    </AppProvider>
  )
}

