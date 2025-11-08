'use client'

import { motion } from 'framer-motion'

import { useMenu } from '@/hooks/MenuContext'
import { getAnimationVariants, slideDown } from '@/utils/animations'
import { Box } from '../Box'
import { HamburgerIcon } from '../Icons/HamburgerIcon'
import { Logo } from '../Logo'
import { Menu } from './Menu'

export function Header() {
  const { handleSetOpenClose } = useMenu()

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={getAnimationVariants(slideDown)}
      className="justify-center bg-black-950 shadow-boxBorderMenu fixed w-full z-50"
    >
      <Box>
        <div className="justify-between w-full py-5 px-4 lg:px-0">
          <Logo />
          <Menu />
          <a className="flex md:hidden">
            <HamburgerIcon size={30} onClick={() => handleSetOpenClose()} />
          </a>
        </div>
      </Box>
    </motion.div>
  )
}
