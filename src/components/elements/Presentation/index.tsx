'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import mcbookImg from '@/assets/macbook.png'
import { createDelayedAnimation, getAnimationVariants, scale, slideUp } from '@/utils/animations'
import { PresentationLogo } from './PresentationLogo'

export function Presentation() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(scale)}
      >
        <PresentationLogo />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={getAnimationVariants(createDelayedAnimation(0.3, slideUp))}
      >
        <Image
          className="w-[970px]"
          src={mcbookImg}
          width={970}
          alt="MacBook exibindo interface de desenvolvimento"
          priority
        />
      </motion.div>
    </div>
  )
}

export { PresentationLogo } from './PresentationLogo'
