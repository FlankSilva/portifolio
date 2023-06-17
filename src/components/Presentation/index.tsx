import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'

import { Main } from '../Main'

import bgCode from '../../assets/bg-code.png'
import { CardSkeleton } from '../CardSkeleton'
import { CardReact } from '../CardReact'
import { MenuVideos } from '../Icons/MenuVideos'

interface PresentationProps {
  children: React.ReactNode
}

export const Presentation = ({ children }: PresentationProps) => {
  return (
    <Main>
      <Box w="100%" pos="relative" height="100vh">
        <Box
          display={['none', 'none', 'flex']}
          pos="absolute"
          width="100%"
          bottom="25px"
          justifyContent="center"
        >
          <CardSkeleton />
          <CardReact />
          <Box position="absolute" left="-9px" top="151px">
            <MenuVideos />
          </Box>
          <Image
            src={bgCode}
            alt="bg-code"
            width={1014}
            height={333}
            style={{
              zIndex: '-1',
              boxShadow: '1px -5px 40px rgba(33, 140, 116,0.5)',
            }}
          />
        </Box>
        {children}
      </Box>
    </Main>
  )
}
