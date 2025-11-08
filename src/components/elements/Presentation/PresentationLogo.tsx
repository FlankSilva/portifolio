'use client'

import { motion } from 'framer-motion'
import codeImg from '@/assets/code-icon.webp'
import { Orbitron } from 'next/font/google'
import Image from 'next/image'

import { createDelayedAnimation, fadeIn, getAnimationVariants, hoverScale } from '@/utils/animations'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import Link from 'next/link'

const orbitron = Orbitron({ subsets: ['latin'] })

export function PresentationLogo() {
  return (
    <div className="flex flex-col items-center mt-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(fadeIn)}
      >
        <Image
          src={codeImg}
          width={130}
          alt="Ícone de código representando desenvolvimento de software"
        />
      </motion.div>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(createDelayedAnimation(0.1, fadeIn))}
        className={`${orbitron.className} font-bold md:text-xl leading-3 md:leading-4`}
      >
        FLANK SILVA
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(createDelayedAnimation(0.2, fadeIn))}
        className={`${orbitron.className} text-[7px] font-bold leading-4 md:leading-4 text-red-400`}
      >
        SENIOR FULL STACK DEVELOPER
      </motion.span>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(createDelayedAnimation(0.3, fadeIn))}
        className="flex gap-4"
      >
        <motion.div
          whileHover="hover"
          variants={getAnimationVariants(hoverScale)}
          className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center"
        >
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://github.com/FlankSilva'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil do GitHub de Flank Silva"
          >
            <GitHubIcon size={21} fill="#000" />
          </Link>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={getAnimationVariants(hoverScale)}
          className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center"
        >
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://www.linkedin.com/in/flank-silva-0a3a5317a/'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil do LinkedIn de Flank Silva"
          >
            <LinkedInIcon size={21} />
          </Link>
        </motion.div>
        <motion.div
          whileHover="hover"
          variants={getAnimationVariants(hoverScale)}
          className="bg-zinc-50 rounded w-8 h-8 flex items-center justify-center"
        >
          <Link
            className="w-full h-full flex items-center justify-center"
            href={'https://www.youtube.com/@devjunior6354'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar canal do YouTube de Flank Silva"
          >
            <YoutubeIcon size={21} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
