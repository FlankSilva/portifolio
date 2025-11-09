'use client'

import { AboutPage } from '@/components/modules/AboutPage'
import AppProvider from '@/hooks'

export default function Sobre() {
  return (
    <AppProvider>
      <AboutPage />
    </AppProvider>
  )
}

