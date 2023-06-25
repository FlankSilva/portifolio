import { Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { EnvelopeSimple } from 'phosphor-react'

import { Main } from '../Main'
import { WhatsappIcon } from '../Icons/WhatsappIcon'
import { MenuProps } from '../Menu'

export const Footer = ({ scrollToDiv }: MenuProps) => {
  const [isLargerThan820] = useMediaQuery('(min-width: 820px)', {
    ssr: true,
    fallback: false,
  })

  return (
    <Flex
      w={'100%'}
      justify={'center'}
      padding={['0 10px', '0 30px', '0 30px', '0']}
      bg={'rgb(11, 11, 11)'}
    >
      <Main>
        <Flex
          justify={'space-between'}
          flexDir={'row'}
          w={'100%'}
          gap={'40px'}
          align={'center'}
          marginTop={['20px', '20px', '95px']}
        >
          <Flex
            as={'a'}
            display={'flex'}
            flexDir={'column'}
            align={'center'}
            onClick={() => scrollToDiv('home-mobile')}
          >
            <Text
              display="flex"
              fontFamily="Bruno Ace SC, cursive"
              fontWeight="extrabold"
              fontSize="1.6rem"
              lineHeight={'28px'}
            >
              FLANK SILVA
            </Text>
            <Text
              display="flex"
              fontFamily="Bruno Ace SC, cursive"
              fontWeight="extrabold"
              fontSize="0.7rem"
              color="#d63031"
            >
              {' '}
              ----- WEB - DEVELOPER -----
            </Text>
          </Flex>
          <Flex flex={1} h={'1px'} bg={'#333333'} />
        </Flex>
        <Flex
          flexDir={isLargerThan820 ? 'row' : 'column'}
          justify={isLargerThan820 ? 'flex-end' : ''}
          gap={isLargerThan820 ? '90px' : '25px'}
        >
          <Flex marginTop={'30px'} justifyContent={'space-between'}>
            <Flex flexDir={'column'} width={['190px', '220px']}>
              <Text color={'rgb(0, 173, 111)'} fontWeight={'bold'}>
                MENU
              </Text>
              <Text
                as={'a'}
                onClick={() => scrollToDiv('home-mobile')}
                color={'#666666'}
              >
                Home
              </Text>
              <Text
                as={'a'}
                onClick={() => scrollToDiv('about')}
                color={'#666666'}
              >
                Quem sou
              </Text>
              <Text
                as={'a'}
                onClick={() => scrollToDiv('skills')}
                color={'#666666'}
              >
                Habilidades
              </Text>
              <Text
                as={'a'}
                onClick={() => scrollToDiv('projects')}
                color={'#666666'}
              >
                Projetos
              </Text>
              <Text
                as={'a'}
                onClick={() => scrollToDiv('contact')}
                color={'#666666'}
              >
                Contato
              </Text>
            </Flex>
            <Flex flexDir={'column'} flex={1}>
              <Text color={'rgb(0, 173, 111)'} fontWeight={'bold'}>
                MINHAS REDES
              </Text>
              <Text
                as={'a'}
                href="https://www.linkedin.com/in/flank-silva-0a3a5317a/"
                target="_blank"
                color={'#666666'}
              >
                LinkedIn
              </Text>
              <Text
                as={'a'}
                href="https://www.youtube.com/@devjunior6354"
                target="_blank"
                color={'#666666'}
              >
                Youtube
              </Text>
              <Text
                as={'a'}
                href="https://github.com/FlankSilva"
                target="_blank"
                color={'#666666'}
              >
                Git Hub
              </Text>
            </Flex>
          </Flex>
          <Flex marginTop={isLargerThan820 ? '30px' : ''}>
            <Flex flexDir={'column'} width={['190px', '220px']} gap={'15px'}>
              <Flex gap={'10px'}>
                <Flex
                  bg={'#fff'}
                  rounded={'full'}
                  w={'40px'}
                  h={'40px'}
                  align={'center'}
                  justify={'center'}
                  as={'a'}
                  href="https://api.whatsapp.com/send?phone=19992360973"
                  target="_blank"
                >
                  <WhatsappIcon size="25" />
                </Flex>
                <Text fontSize={'14px'}>
                  TELEFONE PARA <br /> CONTATO
                </Text>
              </Flex>
              <Flex gap={'10px'}>
                <Flex
                  bg={'#fff'}
                  rounded={'full'}
                  w={'40px'}
                  h={'40px'}
                  align={'center'}
                  justify={'center'}
                  as={'a'}
                  href="mailto:flank.silva.0@gmail.com"
                  target="_blank"
                >
                  <EnvelopeSimple size={30} color="#000" />
                </Flex>
                <Text fontSize={'14px'}>
                  E-MAIL PARA <br /> CONTATO
                </Text>
              </Flex>
            </Flex>
            <Flex flex={1} flexDir={'column'} gap={'15px'}>
              <Text fontWeight={'bold'} fontSize={'1.2rem'}>
                (19) 9 92360973
              </Text>
              <Flex flexDir={'column'}>
                <Text fontSize={'1.1rem'} fontWeight={'bold'}>
                  CONTATO
                </Text>
                <Text lineHeight={'10px'}>@flank.silva.0.com</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Text textAlign={'center'} color={'#666666'} margin={'3rem 0'}>
          Copyright © 2018 Flank Silva Dev{' '}
        </Text>
      </Main>
    </Flex>
  )
}
