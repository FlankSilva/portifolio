import codeImg from '@/assets/code-icon.webp'
import { Orbitron } from 'next/font/google'
import Image from 'next/image'

import { GitHubIcon } from '../Icons/GitHubIcon'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import Link from 'next/link'

const orbitron = Orbitron({ subsets: ['latin'] })

export function PresentationLogo() {
  return (
    <div className="flex flex-col items-center mt-8">
      <Image src={codeImg} width={130} alt="" />
      <span
        className={`${orbitron.className} font-bold md:text-xl leading-3 md:leading-4`}
      >
        FLANK SILVA
      </span>
      <span
        className={`${orbitron.className} text-[7px] font-bold leading-4 md:leading-4 text-red-400`}
      >
        FRONTEND DEVELOPMENT
      </span>
      <div className="flex gap-4">
        <div className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://github.com/FlankSilva'}
            target="_blank"
          >
            <GitHubIcon size={21} fill="#000" />
          </Link>
        </div>
        <div className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://www.linkedin.com/in/flank-silva-0a3a5317a/'}
            target="_blank"
          >
            <LinkedInIcon size={21} />
          </Link>
        </div>
        <div className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center">
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://www.youtube.com/@devjunior6354'}
            target="_blank"
          >
            <YoutubeIcon size={21} />
          </Link>
        </div>
      </div>
    </div>
  )
}
