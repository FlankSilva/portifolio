import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import { Logo } from '../Menu/Logo'
import { listSocialMidia } from '@/mock/socialMidia'
import Link from 'next/link'

export const PresentationMobile = () => {
  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Flex
      display={isLargerThan1092 ? 'none' : 'flex'}
      justify={'center'}
      width={'100%'}
      height={'100%'}
    >
      <Flex flexDir={'column'} align={'center'} marginTop={'150px'}>
        <Logo />
        <Flex gap={3} align="center">
          {listSocialMidia.map((item, index) => (
            <Link
              href={item.link}
              key={`${item.link}-${index}`}
              target="_blank"
            >
              <Box
                bg="#fff"
                borderRadius="10px"
                width="2.7rem"
                height="2.7rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {item.icon}
              </Box>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
