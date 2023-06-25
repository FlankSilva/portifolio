import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import webIcon from '@/assets/code-icon.webp'

export const Logo = () => {
  return (
    <Flex flexDirection="column" align="center" position="relative" top="-15px">
      <Box display={'flex'}>
        <Image src={webIcon} width="150" alt="" />
      </Box>
      <Flex display={'flex'} flexDir={'column'} align={'center'}>
        <Text
          display="flex"
          fontFamily="Bruno Ace SC, cursive"
          fontWeight="extrabold"
          fontSize="1.4rem"
          lineHeight={'20px'}
        >
          FLANK SILVA
        </Text>
        <Text
          display="flex"
          fontFamily="Bruno Ace SC, cursive"
          fontWeight="extrabold"
          fontSize="0.8rem"
          color="#d63031"
          marginLeft="12px"
        >
          {' '}
          WEB DEVELOPER
        </Text>
      </Flex>
    </Flex>
  )
}
