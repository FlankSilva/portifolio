import { ReactNode, createContext, useContext, useState } from 'react'

interface MenuProviderProps {
  children: ReactNode
}

interface MenuContextData {
  activeBoxMenu: string
  isOpenMenu: boolean

  handleSetActiveBoxMenu: (id: string) => void
  handleSetOpenClose: () => void
}

const MenuContext = createContext({} as MenuContextData)

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [activeBoxMenu, setActiveBoxMenu] = useState('home')
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleSetActiveBoxMenu = (id: string) => {
    setActiveBoxMenu(id)
  }

  const handleSetOpenClose = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <MenuContext.Provider
      value={{
        activeBoxMenu,
        handleSetActiveBoxMenu,
        handleSetOpenClose,
        isOpenMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

function useMenu(): MenuContextData {
  const context = useContext(MenuContext)

  return context
}

export { useMenu, MenuProvider }
