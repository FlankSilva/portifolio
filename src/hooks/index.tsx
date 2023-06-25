import { ReactNode } from 'react'

import { MenuMobileProvider } from './MenuMobileContext'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <MenuMobileProvider>{children}</MenuMobileProvider>
)

export default AppProvider
