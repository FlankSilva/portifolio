'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getAnimationVariants, slideLeft } from '@/utils/animations'
import { Title } from '../Title'

export function AboutSummary() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="flex flex-col items-center bg-black-950 pb-[4rem] pt-[4rem]"
    >
      <Title title="Quem sou eu" />
      <div
        ref={ref}
        className="px-9 lg:px-0 flex flex-col items-center text-zinc-100 w-full max-w-4xl"
      >
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={getAnimationVariants(slideLeft)}
          className="flex flex-col items-center space-y-8 w-full"
        >
          <p className="text-lg lg:text-xl leading-relaxed text-center max-w-3xl">
            Iniciei minha jornada na programação em 2016. Hoje atuo como{' '}
            <strong className="text-red-400">Senior Full Stack Developer</strong>{' '}
            especializado em React, React Native, Next.js e Node.js, com foco em
            performance e escalabilidade.
          </p>
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-500 transition-colors group text-lg"
          >
            <span>Saiba mais sobre minha trajetória</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

