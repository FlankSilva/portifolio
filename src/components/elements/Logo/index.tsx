import { Rocket } from '@/components/elements/Icons/Rocket'
import { useScrollToDiv } from '@/hooks/ScrollToDivContext'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'] })

interface LogoProps {
  showTextInMobile?: boolean
}

export function Logo({ showTextInMobile = false }: LogoProps) {
  const { handleScrollToDiv } = useScrollToDiv()

  return (
    <a
      onClick={() => handleScrollToDiv('home')}
      className="flex gap-1 md:gap-2"
    >
      <Rocket size="30" className="flex" />
      <div
        className={`${
          showTextInMobile ? 'flex' : 'hidden'
        } md:flex flex-col justify-center`}
      >
        <span
          className={`${orbitron.className} font-bold md:text-lg leading-3 md:leading-4 text-zinc-50`}
        >
          FlankSilva
        </span>
        <span className=" text-[5px] md:text-[6px] text-end text-zinc-150">
          WEB DEVELOPMENT FRONT-END
        </span>
      </div>
    </a>
  )
}
