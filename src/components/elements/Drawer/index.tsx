import { useEffect, useState } from 'react'

import { useMenu } from '@/hooks/MenuContext'
import { listmenu } from '@/mock'
import { useScrollToDiv } from '@/hooks/ScrollToDivContext'

export function Drawer() {
  const [leftElement, setLeftElement] = useState('0px')

  const { isOpenMenu } = useMenu()
  const { handleScrollToDiv } = useScrollToDiv()

  useEffect(() => {
    if (isOpenMenu) {
      setLeftElement('44px')
    } else {
      setLeftElement('0px')
    }
  }, [isOpenMenu])

  return (
    <div
      className={`fixed flex md:hidden flex-col bg-black-500 py-6 px-3 gap-6 top-[25%] z-50 transition-all duration-300 ${
        leftElement === '0px'
          ? 'left-[calc(100%_-_0px)]'
          : 'left-[calc(100%_-_44px)]'
      } `}
    >
      {listmenu.map((item) => {
        return (
          <button key={item.id} onClick={() => handleScrollToDiv(item.id)}>
            {item.icon}
          </button>
        )
      })}
    </div>
  )
}
