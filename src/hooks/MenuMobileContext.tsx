import React, { createContext, useContext, useState } from 'react'

interface MenuMobileContextData {
  isOpen: boolean
  handleSetOpenClose: () => void
}

interface MenuMobileProviderProps {
  children: React.ReactNode
}

const MenuMobileContext = createContext({} as MenuMobileContextData)

const MenuMobileProvider = ({ children }: MenuMobileProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetOpenClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MenuMobileContext.Provider value={{ isOpen, handleSetOpenClose }}>
      {children}
    </MenuMobileContext.Provider>
  )
}

function useMenuMobile(): MenuMobileContextData {
  const context = useContext(MenuMobileContext)

  return context
}

export { useMenuMobile, MenuMobileProvider }
