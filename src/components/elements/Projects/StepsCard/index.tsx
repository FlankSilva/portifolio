'use client'

import { motion } from 'framer-motion'

import { ProjectData } from '../index'

import { getAnimationVariants, hoverScale } from '@/utils/animations'

interface StepsCardProps {
  data: ProjectData[]
  indexProject: number
  setIndexProject: (index: any) => void
}

export function StepsCard({
  data,
  indexProject,
  setIndexProject,
}: StepsCardProps) {
  return (
    <div className="flex gap-2">
      {data.map((item) => {
        const isActive = indexProject + 1 === item.id
        return (
          <motion.button
            key={item.id}
            whileHover="hover"
            variants={getAnimationVariants(hoverScale)}
            animate={{
              scale: isActive ? 1.2 : 1,
              backgroundColor: isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(149, 165, 166, 1)',
            }}
            transition={{ duration: 0.3 }}
            className={`
            w-[10px] 
            h-[10px] 
            rounded-full
          `}
            onClick={() => setIndexProject(item.id)}
          />
        )
      })}
    </div>
  )
}
