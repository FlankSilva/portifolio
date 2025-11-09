'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { memo } from 'react'

import { getAnimationVariants, hoverLift, hoverRotate } from '@/utils/animations'

export interface SkillProps {
  title: string
  description: string
  icon: React.ReactNode
  url?: string
}

function CardSkillComponent({ title, icon, url }: SkillProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center gap-2 md:gap-3 cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center"
      >
        {icon}
      </motion.div>
      <h3 className="text-xs md:text-sm lg:text-base text-green-500 font-bold text-center whitespace-nowrap">
        {title}
      </h3>
    </motion.div>
  )

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar site oficial de ${title}`}
        className="block"
      >
        {content}
      </Link>
    )
  }

  return content
}

// Memoiza o componente para evitar re-renders desnecessários
export const CardSkill = memo(CardSkillComponent)
