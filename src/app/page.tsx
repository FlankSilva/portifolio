'use client'

import { HomePage } from '@/components/modules/HomePage'
import AppProvider from '@/hooks'

export default function Home() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}
