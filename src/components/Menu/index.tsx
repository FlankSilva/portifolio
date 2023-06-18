import Image from 'next/image'
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import webIcon from '@/assets/code-icon.webp'
import { Item } from './Item'

export interface MenuProps {
  scrollToDiv: (id: string) => void
}

export const Menu = ({ scrollToDiv }: MenuProps) => {
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
        <Item id="home" title="HOME" scrollToDiv={scrollToDiv} />
        <Item id="about" scrollToDiv={scrollToDiv} title="QUEM SOU" />
        <Item id="skills" scrollToDiv={scrollToDiv} title="HABILIDADES" />
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
        <Item id="projects" scrollToDiv={scrollToDiv} title="PROJETOS" />

        <Item id="contact" scrollToDiv={scrollToDiv} title="CONTATO" />
      </Flex>
    </Flex>
  )
}
