import Link from 'next/link'
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'

import { WhatsappIcon } from '../Icons/WhatsappIcon'
import { listSocialMidia } from '@/mock/socialMidia'

export const Header = () => {
  const [isTelaGrande] = useMediaQuery('(min-height: 680px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const [isLargerThan800] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Flex
      justifyContent="space-between"
      align="center"
      paddingTop={isTelaGrande ? '3.5rem' : '1.25rem'}
      id="home"
      display={isLargerThan800 ? 'flex' : 'none'}
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
