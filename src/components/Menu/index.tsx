import Image from 'next/image'
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import webIcon from '@/assets/code-icon.webp'
import { Item } from './Item'

export const Menu = () => {
  const [isTelaGrande] = useMediaQuery('(min-height: 680px)')

  return (
    <Flex
      w="100%"
      justify="center"
      zIndex="999"
      position="absolute"
      bottom={isTelaGrande ? '400px' : '380px'}
      display={['none', 'none', 'flex']}
    >
      <Flex gap="3.4rem" align="center" justify="center">
        <Item title="HOME" />
        <Item title="QUEM SOU" />
        <Item title="HABILIDADES" />
      </Flex>
      <Flex
        flexDirection="column"
        align="center"
        position="relative"
        top="-15px"
      >
        <Box display={['none', 'none', 'none', 'flex']}>
          <Image src={webIcon} width="150" alt="" />
        </Box>
        <Flex display={['none', 'none', 'none', 'flex']}>
          <Text
            display="flex"
            fontFamily="Bruno Ace SC, cursive"
            fontWeight="extrabold"
            fontSize="1.4rem"
          >
            FLANK
          </Text>
          <Text
            display="flex"
            fontFamily="Bruno Ace SC, cursive"
            fontWeight="extrabold"
            fontSize="1.4rem"
            color="#d63031"
            marginLeft="12px"
          >
            {' '}
            | WEB DEV
          </Text>
        </Flex>
      </Flex>
      <Flex gap="3.4rem" align="center" justify="center">
        <Item title="PROJETOS" />

        <Item title="CONTATO" />
      </Flex>
    </Flex>
  )
}
