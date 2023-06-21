import React from 'react'
import Image from 'next/image'
import { Box, Flex, useMediaQuery } from '@chakra-ui/react'

import { Main } from '../Main'

import { CardSkeleton } from '../CardSkeleton'
import { CardReact } from '../CardReact'
import { MenuVideos } from '../Icons/MenuVideos'

import bgCode from '../../assets/bg-code.png'

interface PresentationProps {
  children: React.ReactNode
}

export const Presentation = ({ children }: PresentationProps) => {
  const [isLargerThan800] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Main>
      <Box w="100%" pos="relative" height={'100vh'} position={'relative'}>
        <Box pos="absolute" width="100%" bottom="25px" justifyContent="center">
          <CardSkeleton />
          <CardReact />
          <Box
            display={isLargerThan1092 ? 'block' : 'none'}
            position="absolute"
            left="-50px"
            top="151px"
          >
            <MenuVideos />
          </Box>
          <Flex display={isLargerThan800 ? 'flex' : 'none'}>
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
          </Flex>
        </Box>
        {children}
      </Box>
    </Main>
  )
}
