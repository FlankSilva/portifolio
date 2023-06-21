import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

import { Main } from '../Main'

import profileCicle from '@/assets/profile-circle.png'
import profile from '@/assets/flank.webp'
import quoteLeft from '@/assets/quote-left.png'
import quoteRight from '@/assets/quote-right.png'

export const About = () => {
  return (
    <Flex
      bg="#000"
      width="100%"
      justifyContent="center"
      align="center"
      paddingTop="7rem"
      paddingBottom="4rem"
      id="about"
    >
      <Main>
        <Flex
          width={['82%', '82%', '82%', '82%', '100%']}
          gap="40px"
          flexDir={['column', 'column', 'column', 'column', 'row']}
          marginLeft={'auto'}
          marginRight={'auto'}
        >
          <Flex flexDirection="column" flex={1}>
            <Text
              color="#c4343c"
              fontSize="1.1rem"
              fontWeight={800}
              marginBottom="20px"
            >
              CITAÇÂO
            </Text>
            <Text fontSize="14px" position="relative" display={'flex'}>
              <Image
                src={quoteLeft}
                alt=""
                width={28}
                height={23}
                style={{
                  width: '28px',
                  height: '23px',
                  position: 'relative',
                  left: '-7px',
                }}
              />
              A programação web é como um universo infinito de possibilidades,
              onde cada linha de código pode transformar ideias em realidade,
              conectando pessoas, informações e experiências de forma dinâmica e
              interativa.
              <Image
                src={quoteRight}
                alt=""
                width={28}
                height={23}
                style={{
                  width: '28px',
                  height: '23px',
                  marginTop: 'auto',
                }}
              />
            </Text>
            <Text
              marginTop="30px"
              color="#c4343c"
              fontWeight={800}
              fontSize="1.1rem"
            >
              OCUPAÇÕES ATUAIS
            </Text>
            <Text fontSize="14px">Web Development Pleno</Text>
          </Flex>
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={['100%', '100%', '100%', '100%', '240px']}
            height="240px"
          >
            <Image
              src={profileCicle}
              alt="profile circle"
              width={240}
              height={240}
            />
            <Image
              src={profile}
              alt="Flank Silva"
              width={250}
              height={250}
              style={{
                position: 'absolute',
                borderRadius: '50%',
                width: '160px',
                height: '160px',
              }}
            />
          </Box>
          <Flex flex={1} flexDir="column" position="relative" top="-40px">
            <Text as="h2" color="#c4343c" fontSize="3.75rem" fontWeight="bold">
              Olá,
            </Text>
            <Text fontSize="14px">
              Sou Flank Silva, entusiasta das melhores tecnologias de
              desenvolvimento web, mobile e API. <br />
              Atualmente focado em aplicações(Node.js, ReactJS e React Native).
              <br />
              Iniciei no mundo da programação em 2015, quando tive o primeiro
              contato com Excel VBA. Desde então fiquei apaixonado pelo poder
              que os algoritmos proporciona as pessoas.
              <br /> Acredito que o sucesso está relacionado em trazer soluções
              para as pessoas de forma que torne nossas vidas mais produtivas.
              🚀
              <br />
            </Text>
          </Flex>
        </Flex>
      </Main>
    </Flex>
  )
}
