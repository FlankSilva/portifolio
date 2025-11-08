'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

import { ProjectData } from '../index'

import defaultImag from '@/assets/breve.jpg'
import { getAnimationVariants, hoverLift, pageTransition } from '@/utils/animations'
import Link from 'next/link'

interface CardProjectProps {
  project: ProjectData
  pauseInterval: () => void
  resumeInterval: () => void
}

export function CardProject({
  project,
  pauseInterval,
  resumeInterval,
}: CardProjectProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project?.id}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getAnimationVariants(pageTransition)}
        whileHover="hover"
        className="border border-zinc-200 px-6 py-9 rounded w-full flex gap-7"
        onMouseMove={() => pauseInterval()}
        onMouseOut={() => resumeInterval()}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={project?.image ? project.image : defaultImag}
            alt="spotify"
            width={857}
            height={483}
            className="w-[432px] h-auto rounded"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-1"
        >
          <p className="text-green-500 font-semibold">Nome do Projeto</p>
          <span className="text-[0.75rem] relative top-[-4px]">
            {project?.name}
          </span>

          <p className="text-green-500 font-semibold">Descrição</p>
          <span className="text-[0.75rem] relative top-[-4px]">
            {project?.description}
          </span>

          <p className="text-green-500 font-semibold">Link do projeto</p>
          <span className="text-[0.75rem] relative top-[-4px]">
            <Link href={project?.link ? project?.link : '#'} target="_blank">
              {project?.link}
            </Link>
          </span>

          <p className="text-green-500 font-semibold">Repositório</p>
          <span className="text-[0.75rem] relative top-[-4px]">
            <Link href={project.repo ? project.repo : '#'}>
              {project?.repoName}
            </Link>
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
