import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '../Icons/HamburgerIcon'
import { Item } from '@/components/Menu/Item'
import { MenuProps } from '../Menu'

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

  return (
    <Flex
      justifyContent={'space-between'}
      padding={'1rem 0.7rem'}
      display={isLargerThan1092 ? 'none' : 'flex'}
      width={'100%'}
      height={'70px'}
      bg={'#0b0b0b'}
    >
      <Flex align={'center'}>
        <Text fontSize={'2rem'} color={'rgb(0, 173, 111)'}>
          {'/*'}
        </Text>
        <Text fontSize={'2rem'} margin={'0 4px'}>
          F.S DEV
        </Text>
        <Text fontSize={'2rem'} color={'rgb(0, 173, 111)'}>
          {'*/'}
        </Text>
      </Flex>
      <Flex
        position={'relative'}
        top={'14px'}
        display={isLargerThan792and1092 ? 'flex' : 'none'}
      >
        <Item id="home" title="HOME" scrollToDiv={scrollToDiv} />
        <Item id="about" scrollToDiv={scrollToDiv} title="QUEM SOU" />
        <Item id="skills" scrollToDiv={scrollToDiv} title="HABILIDADES" />
        <Item id="projects" scrollToDiv={scrollToDiv} title="PROJETOS" />
        <Item id="contact" scrollToDiv={scrollToDiv} title="CONTATO" />
      </Flex>
      <Flex display={isLargerThan792and1092 ? 'none' : 'flex'}>
        <HamburgerIcon size="40" fill="#000" />
      </Flex>
    </Flex>
  )
}
