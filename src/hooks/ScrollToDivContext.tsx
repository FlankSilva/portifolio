import { ReactNode, createContext, useContext } from 'react'

interface ScrollToDivProps {
  children: ReactNode
}

interface ScrollToDivData {
  handleScrollToDiv: (id: string) => void
}

const ScrollToDivContext = createContext({} as ScrollToDivData)

const ScrollToDivProvider = ({ children }: ScrollToDivProps) => {
  const handleScrollToDiv = (id: string) => {
    const element = document.getElementById(id)

    console.log(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ScrollToDivContext.Provider value={{ handleScrollToDiv }}>
      {children}
    </ScrollToDivContext.Provider>
  )
}

function useScrollToDiv() {
  const context = useContext(ScrollToDivContext)

  return context
}

export { useScrollToDiv, ScrollToDivProvider }
