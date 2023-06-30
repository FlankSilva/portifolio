import { ReactNode } from 'react'
import { MenuProvider } from './MenuContext'
import { ScrollToDivProvider } from './ScrollToDivContext'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ScrollToDivProvider>
    <MenuProvider>{children}</MenuProvider>
  </ScrollToDivProvider>
)

export default AppProvider
