import { ReactNode } from 'react'
import Image from 'next/image'

import mcbookImg from '@/assets/macbook.png'

interface PresentationProps {
  children: ReactNode
}

export function Presentation({ children }: PresentationProps) {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center">
      <Image
        className="w-[970px]  absolute bottom-20 sm:bottom-2 md:bottom-2 px-4 lg:px-0"
        src={mcbookImg}
        width={970}
        alt=""
        priority
      />
      {children}
    </div>
  )
}

export { PresentationLogo } from './PresentationLogo'
