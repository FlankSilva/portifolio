import { Flex, Button, Text, Box } from '@chakra-ui/react'
import { Main } from '../Main'
import { Title } from '../Title'

import { Input, TextArea } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import Link from 'next/link'

export const Contact = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  return (
    <Flex
      id="contact"
      w={'100%'}
      justify={'center'}
      padding={['0 40px', '0 40px', '0 40px', '0']}
      bg={'rgb(11, 11, 11)'}
    >
      <Main>
        <Title title="Fale Comigo" />
        <Flex
          flexDir={['column', 'column', 'row', 'row']}
          gap={['2rem', '2rem', '3rem', '6rem', '8rem']}
        >
          <form
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="name"
              placeholder="Digite seu nome"
              name="nome"
              register={register}
            />
            <Input
              id="email"
              placeholder="Digite seu e-mail"
              name="email"
              register={register}
            />
            <Input
              id="subject"
              name="subject"
              placeholder="Digite o assunto"
              register={register}
            />
            <TextArea
              id="message"
              name="message"
              placeholder="Sua mensagem... "
              register={register}
            />

            <Button
              bg={''}
              border={'1px solid rgb(0, 173, 111)'}
              color={'#fff'}
              type="submit"
              height={'48px'}
              rounded={'none'}
              _hover={{
                bg: 'rgb(0, 173, 111)',
              }}
            >
              Enviar
            </Button>
          </form>
          <Flex
            flexDir={'column'}
            width={'100%'}
            maxW={'660px'}
            paddingBottom={'40px'}
          >
            <Text as={'h3'} color={'rgb(0, 173, 111)'} fontSize={'2rem'}>
              E-mail para contato
            </Text>
            <Text>flank.silva.0@gmail.com</Text>

            <Text
              as={'h3'}
              color={'rgb(0, 173, 111)'}
              fontSize={'2rem'}
              mt={'40px'}
              mb={'20px'}
            >
              Minhas redes
            </Text>
            <Flex flexDir={'column'} gap={'20px'}>
              <Flex align={'center'} gap={'17px'}>
                <Link
                  href={'https://www.linkedin.com/in/flank-silva-0a3a5317a/'}
                  target="_blank"
                >
                  <Box p={'0.3rem'} bg={'#fff'} borderRadius={'10px'}>
                    <LinkedInIcon size="30" />
                  </Box>
                </Link>
                <Text>/flank-silva-0a3a5317a</Text>
              </Flex>
              <Flex align={'center'} gap={'17px'}>
                <Link href={'https://github.com/FlankSilva'} target="_blank">
                  <Box p={'0.3rem'} bg={'#fff'} borderRadius={'10px'}>
                    <GitHubIcon size="30" fill="#000" />
                  </Box>
                </Link>
                <Text>/FlankSilva</Text>
              </Flex>
              <Flex align={'center'} gap={'17px'}>
                <Link
                  href={'https://www.youtube.com/@devjunior6354'}
                  target="_blank"
                >
                  <Box p={'0.3rem'} bg={'#fff'} borderRadius={'10px'}>
                    <YoutubeIcon size="30" />
                  </Box>
                </Link>
                <Text>/@devjunior6354</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Main>
    </Flex>
  )
}
