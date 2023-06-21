import { Flex, useMediaQuery } from '@chakra-ui/react'

import { Item } from './Item'
import { Logo } from './Logo'

export interface MenuProps {
  scrollToDiv: (id: string) => void
}

export const Menu = ({ scrollToDiv }: MenuProps) => {
  const [isTelaGrande] = useMediaQuery('(min-height: 680px)')

  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Flex
      w="100%"
      justify="center"
      zIndex="999"
      position="absolute"
      bottom={isTelaGrande ? '400px' : '380px'}
      display={isLargerThan1092 ? 'flex' : 'none'}
    >
      <Flex gap="3.4rem" align="center" justify="center">
        <Item id="home" title="HOME" scrollToDiv={scrollToDiv} />
        <Item id="about" scrollToDiv={scrollToDiv} title="QUEM SOU" />
        <Item id="skills" scrollToDiv={scrollToDiv} title="HABILIDADES" />
      </Flex>
      <Flex display={['none', 'none', 'none', 'flex']}>
        <Logo />
      </Flex>
      <Flex gap="3.4rem" align="center" justify="center">
        <Item id="projects" scrollToDiv={scrollToDiv} title="PROJETOS" />

        <Item id="contact" scrollToDiv={scrollToDiv} title="CONTATO" />
      </Flex>
    </Flex>
  )
}
