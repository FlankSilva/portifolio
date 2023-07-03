import Image from 'next/image'

import mcbookImg from '@/assets/macbook.png'
import { PresentationLogo } from './PresentationLogo'

export function Presentation() {
  return (
    <div className="w-full px-4 lg:px-0 flex flex-col items-center justify-center gap-8">
      <PresentationLogo />

      <Image
        className="w-[970px] px-4 lg:px-0"
        src={mcbookImg}
        width={970}
        alt=""
        priority
      />
    </div>
  )
}

export { PresentationLogo } from './PresentationLogo'
