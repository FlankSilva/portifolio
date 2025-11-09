'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { listmenu } from '@/mock'

import { useMenu } from '@/hooks/MenuContext'
import { useScrollToDiv } from '@/hooks/ScrollToDivContext'

export function Menu() {
  const { activeBoxMenu, handleSetActiveBoxMenu } = useMenu()
  const { handleScrollToDiv } = useScrollToDiv()
  const pathname = usePathname()

  return (
    <ul className="hidden md:flex gap-4 items-center">
      {listmenu.map((item) => {
        // Verifica se o item está ativo baseado na rota atual
        // Para links de página, verifica se a rota atual corresponde
        // Para seções (sem href), verifica o estado ativo
        const isActiveRoute = item.href && item.href === pathname
        const isActiveSection = !item.href && pathname === '/' && item.id === activeBoxMenu
        const isActive = isActiveRoute || isActiveSection

        if (item.href) {
          return (
            <li key={item.id}>
              <Link
                className={`text-base transition-colors hover:text-green-500 ${
                  isActive
                    ? 'text-green-500 font-bold border-b-2 border-green-500 pb-1'
                    : 'text-zinc-150'
                }`}
                href={item.href}
                onClick={() => handleSetActiveBoxMenu(item.id)}
              >
                {item.title}
              </Link>
            </li>
          )
        }

        return (
          <li key={item.id}>
            <a
              className={`text-base transition-colors hover:text-green-500 ${
                isActive
                  ? 'text-green-500 font-bold border-b-2 border-green-500 pb-1'
                  : 'text-zinc-150'
              }`}
              href={`#${item.id}`}
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
