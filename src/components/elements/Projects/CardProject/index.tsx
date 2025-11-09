'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

import { ProjectData } from '../index'

import defaultImag from '@/assets/breve.jpg'
import { getAnimationVariants, hoverLift, pageTransition } from '@/utils/animations'
import Link from 'next/link'

interface CardProjectProps {
  project: ProjectData
  pauseInterval: () => void
  resumeInterval: () => void
  setIndexProject: (index: number) => void
  indexProject: number
  dataProjects: ProjectData[]
}

export function CardProject({
  project,
  pauseInterval,
  resumeInterval,
  setIndexProject,
  indexProject,
  dataProjects,
}: CardProjectProps) {
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = () => {
    const nextIndex = (indexProject + 1) % dataProjects.length
    // Passa o índice baseado em 1 (como o StepsCard espera)
    setIndexProject(nextIndex + 1)
  }

  const handlePrevious = () => {
    const prevIndex = (indexProject - 1 + dataProjects.length) % dataProjects.length
    // Passa o índice baseado em 1 (como o StepsCard espera)
    setIndexProject(prevIndex + 1)
  }

  const handleMouseEnter = () => {
    setIsPaused(true)
    pauseInterval()
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
    resumeInterval()
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project?.id}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getAnimationVariants(pageTransition)}
        whileHover="hover"
        className="border border-zinc-200 px-6 py-12 rounded w-full flex gap-7 min-h-[500px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src={project?.image ? project.image : defaultImag}
            alt={`Preview do projeto ${project?.name || 'projeto'}`}
            width={857}
            height={483}
            className="w-[600px] h-auto rounded object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-1"
        >
          <p className="text-green-500 font-semibold text-[18px]">Nome do Projeto</p>
          <span className="text-[16px] relative top-[-4px]">
            {project?.name}
          </span>

          <p className="text-green-500 font-semibold text-[18px]">Descrição</p>
          <span className="text-[16px] relative top-[-4px]">
            {project?.description}
          </span>

          {project?.stack && (
            <>
              <p className="text-green-500 font-semibold text-[18px]">Stack Tecnológica</p>
              <span className="text-[16px] relative top-[-4px]">
                {project.stack}
              </span>
            </>
          )}

          <p className="text-green-500 font-semibold text-[18px]">Link do projeto</p>
          <span className="text-[16px] relative top-[-4px]">
            <Link
              href={project?.link ? project?.link : '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar projeto ${project?.name}`}
            >
              {project?.link}
            </Link>
          </span>

          <p className="text-green-500 font-semibold text-[18px]">Repositório</p>
          <span className="text-[16px] relative top-[-4px]">
            <Link
              href={project.repo ? project.repo : '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código fonte do projeto ${project?.name}`}
            >
              {project?.repoName}
            </Link>
          </span>
        </motion.div>

        {isPaused && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black-900 hover:bg-black-800 text-green-500 p-2 rounded-lg transition-colors z-10 shadow-lg"
              aria-label="Projeto anterior"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black-900 hover:bg-black-800 text-green-500 p-2 rounded-lg transition-colors z-10 shadow-lg"
              aria-label="Próximo projeto"
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
