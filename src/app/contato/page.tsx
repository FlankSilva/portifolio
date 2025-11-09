'use client'

import { ContactPage } from '@/components/modules/ContactPage'
import AppProvider from '@/hooks'

export default function Contato() {
  return (
    <AppProvider>
      <ContactPage />
    </AppProvider>
  )
}

