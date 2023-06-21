import { Box, Flex, useMediaQuery } from '@chakra-ui/react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CardSkeleton = () => {
  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false,
  })

  return (
    <Flex
      display={isLargerThan1092 ? 'flex' : 'none'}
      width="200px"
      flexDirection="column"
      align="center"
      border="1px solid #323238"
      borderRadius="4px"
      position="absolute"
      background="#17171a"
      left="80%"
      top="77px"
    >
      <Skeleton
        width="55px"
        height="55px"
        borderRadius="50%"
        baseColor="#635b5b"
        highlightColor="#81D8F7"
        style={{
          marginTop: '16px',
          marginBottom: '16px',
        }}
      />
      <Skeleton
        width="159px"
        height="15px"
        baseColor="#373434"
        highlightColor="#444"
        style={{
          marginBottom: '10px',
        }}
      />
      <Skeleton
        width="110px"
        height="15px"
        baseColor="#373434"
        highlightColor="#444"
        style={{
          marginBottom: '26px',
        }}
      />
      <Box
        background="#00875F80"
        w="150px"
        height="35px"
        borderRadius="4px"
        marginBottom="14px"
      />
    </Flex>
  )
}
