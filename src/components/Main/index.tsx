import React from 'react'
import { Flex } from '@chakra-ui/react'

interface BoxProps {
  children: React.ReactNode
}

export const Main = ({ children }: BoxProps) => {
  return (
    <Flex
      w="100%"
      maxW="68.75rem"
      height="100%"
      pos="relative"
      flexDir="column"
      paddingLeft={['0', '0', '0', '10px']}
      paddingRight={['0', '0', '0', '10px']}
    >
      {children}
    </Flex>
  )
}
