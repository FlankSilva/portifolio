import Link from 'next/link'
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { WhatsappIcon } from '../Icons/WhatsappIcon'

const listSocialMidia = [
  {
    icon: <YoutubeIcon size="25" />,
    link: 'https://www.youtube.com/@devjunior6354',
  },
  {
    icon: <LinkedInIcon size="25" />,
    link: 'https://www.linkedin.com/in/flank-silva-0a3a5317a/',
  },
  {
    icon: <GitHubIcon size="25" fill="#000" />,
    link: 'https://github.com/FlankSilva',
  },
]

export const Header = () => {
  const [isTelaGrande] = useMediaQuery('(min-height: 680px)')

  return (
    <Flex
      justifyContent="space-between"
      align="center"
      paddingTop={isTelaGrande ? '3.5rem' : '1.25rem'}
    >
      <Flex gap={2} align="center">
        {listSocialMidia.map((item, index) => (
          <Link href={item.link} key={`${item.link}-${index}`} target="_blank">
            <Box
              bg="#fff"
              borderRadius="100%"
              width="2.5rem"
              height="2.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {item.icon}
            </Box>
          </Link>
        ))}
      </Flex>
      <Flex display="flex" gap={3} align="center">
        <Box
          bg="#fff"
          borderRadius="100%"
          width="2.5rem"
          height="2.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link
            href="https://api.whatsapp.com/send?phone=19992360973"
            target="_blank"
          >
            <WhatsappIcon size="25" fill="#27ae60" />
          </Link>
        </Box>
        <Text fontSize="0.9rem">
          TELEFONE DE <br /> CONTATO
        </Text>
        <Text fontSize="2.3rem" marginLeft="12px">
          19 992360973
        </Text>
      </Flex>
    </Flex>
  )
}
