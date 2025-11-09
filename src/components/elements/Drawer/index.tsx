'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useMenu } from '@/hooks/MenuContext'
import { listmenu } from '@/mock'
import { useScrollToDiv } from '@/hooks/ScrollToDivContext'

export function Drawer() {
  const [leftElement, setLeftElement] = useState('0px')

  const { isOpenMenu, activeBoxMenu } = useMenu()
  const { handleScrollToDiv } = useScrollToDiv()
  const pathname = usePathname()

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
        if (item.id === 'project') {
          return null
        }

        // Verifica se o item está ativo
        const isActiveRoute = item.href && item.href === pathname
        const isActiveSection = !item.href && pathname === '/' && item.id === activeBoxMenu
        const isActive = isActiveRoute || isActiveSection

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`transition-colors ${
                isActive ? 'text-green-500' : 'text-zinc-150'
              }`}
            >
              {item.icon}
            </Link>
          )
        }

        return (
          <button
            key={item.id}
            onClick={() => handleScrollToDiv(item.id)}
            className={`transition-colors ${
              isActive ? 'text-green-500' : 'text-zinc-150'
            }`}
          >
            {item.icon}
          </button>
        )
      })}
    </div>
  )
}
