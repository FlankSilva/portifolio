'use client'

import { motion } from 'framer-motion'
import { Orbitron } from 'next/font/google'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getAnimationVariants, scrollReveal } from '@/utils/animations'

const orbitron = Orbitron({ subsets: ['latin'] })

interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={getAnimationVariants(scrollReveal)}
      className="relative mt-[4rem] mb-[4rem]"
    >
      <h1
        className={` ${orbitron.className} px-3 text-3xl md:text-5xl font-bold z-10 text-zinc-50`}
      >
        {title}
      </h1>
    </motion.div>
  )
}
