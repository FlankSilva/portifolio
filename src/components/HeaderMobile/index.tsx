import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '../Icons/HamburgerIcon'
import { Item } from '@/components/Menu/Item'
import { MenuProps } from '../Menu'

import { useMenuMobile } from '@/hooks/MenuMobileContext'

export const HeaderMobile = ({ scrollToDiv }: MenuProps) => {
  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false,
  })

  const [isLargerThan792and1092] = useMediaQuery(
    '(min-width: 792px) and (max-width: 1092px)',
    {
      ssr: true,
      fallback: false,
    },
  )

  const { handleSetOpenClose } = useMenuMobile()

  return (
    <>
      <div id="home-mobile"></div>
      <Flex
        justifyContent={'space-between'}
        padding={'1rem 0.7rem'}
        display={isLargerThan1092 ? 'none' : 'flex'}
        width={'100%'}
        height={'70px'}
        bg={'#000'}
        position={'fixed'}
        zIndex={9999}
        borderBottom={'1px solid rgba(0, 173, 111, 0.6)'}
      >
        <Flex
          as={'a'}
          align={'center'}
          onClick={() => scrollToDiv('home-mobile')}
        >
          <Text
            fontSize={'2rem'}
            color={'rgb(0, 173, 111)'}
            fontWeight={'bold'}
          >
            {'/*'}
          </Text>
          <Text fontSize={'2rem'} margin={'0 4px'} fontWeight={'bold'}>
            F.S DEV
          </Text>
          <Text
            fontSize={'2rem'}
            color={'rgb(0, 173, 111)'}
            fontWeight={'bold'}
          >
            {'*/'}
          </Text>
        </Flex>
        <Flex
          position={'relative'}
          top={'14px'}
          display={isLargerThan792and1092 ? 'flex' : 'none'}
        >
          <Item id="home-mobile" title="HOME" scrollToDiv={scrollToDiv} />
          <Item id="about" scrollToDiv={scrollToDiv} title="QUEM SOU" />
          <Item id="skills" scrollToDiv={scrollToDiv} title="HABILIDADES" />
          <Item id="projects" scrollToDiv={scrollToDiv} title="PROJETOS" />
          <Item id="contact" scrollToDiv={scrollToDiv} title="CONTATO" />
        </Flex>
        <Flex
          as={'a'}
          display={isLargerThan792and1092 ? 'none' : 'flex'}
          onClick={handleSetOpenClose}
        >
          <HamburgerIcon size="40" fill="#000" />
        </Flex>
      </Flex>
    </>
  )
}
