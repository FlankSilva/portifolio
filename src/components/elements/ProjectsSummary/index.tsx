'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getAnimationVariants, slideLeft } from '@/utils/animations'
import { Title } from '../Title'

export function ProjectsSummary() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="project"
      className="flex flex-col items-center bg-black-950 pb-[4rem] pt-[4rem]"
    >
      <Title title="Projetos" />
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
            Desenvolvo projetos que combinam{' '}
            <strong className="text-red-400">tecnologia moderna</strong>,{' '}
            <strong className="text-red-400">boas práticas</strong> e{' '}
            <strong className="text-red-400">experiência do usuário</strong>.
            Cada projeto é uma oportunidade de criar algo impactante e funcional.
          </p>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-500 transition-colors group text-lg"
          >
            <span>Ver todos os projetos</span>
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

