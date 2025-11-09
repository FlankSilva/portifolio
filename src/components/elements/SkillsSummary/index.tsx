'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'phosphor-react'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { getAnimationVariants, slideLeft } from '@/utils/animations'
import { Title } from '../Title'

export function SkillsSummary() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section
      id="skills"
      className="flex flex-col items-center bg-black-900 pb-[4rem] pt-[4rem]"
    >
      <Title title="Minhas Skills" />
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
            Domino tecnologias modernas para desenvolvimento{' '}
            <strong className="text-green-500">Full Stack</strong>, com expertise
            em <strong className="text-green-500">React, Next.js, Node.js</strong>{' '}
            e diversas outras ferramentas que me permitem criar soluções completas
            e escaláveis.
          </p>
          <Link
            href="/habilidades"
            className="inline-flex items-center gap-2 text-green-500 font-bold hover:text-green-400 transition-colors group text-lg"
          >
            <span>Ver todas as habilidades</span>
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

