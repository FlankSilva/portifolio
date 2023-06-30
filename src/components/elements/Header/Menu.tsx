import { listmenu } from '@/mock'

import { useMenu } from '@/hooks/MenuContext'
import { useScrollToDiv } from '@/hooks/ScrollToDivContext'

export function Menu() {
  const { activeBoxMenu, handleSetActiveBoxMenu } = useMenu()

  const { handleScrollToDiv } = useScrollToDiv()

  return (
    <ul className="hidden md:flex gap-4 items-center">
      {listmenu.map((item) => {
        const activeItem = item.id === activeBoxMenu

        return (
          <li key={item.id}>
            <a
              className={`text-base ${
                activeItem ? 'text-zinc-50' : 'text-zinc-150'
              }`}
              href={item.href}
              onClick={() => {
                handleSetActiveBoxMenu(item.id)
                handleScrollToDiv(item.id)
              }}
            >
              {item.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
