'use client'

import { SkillsPage } from '@/components/modules/SkillsPage'
import AppProvider from '@/hooks'

export default function Habilidades() {
  return (
    <AppProvider>
      <SkillsPage />
    </AppProvider>
  )
}

