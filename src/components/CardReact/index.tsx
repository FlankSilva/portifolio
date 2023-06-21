import { Box, Flex, keyframes, useMediaQuery } from '@chakra-ui/react'
import { ReactIcon } from '../Icons/SoftSkills'

export const CardReact = () => {
  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

  return (
    <Flex
      display={isLargerThan1092 ? 'flex' : 'none'}
      width={['40px', '40px', '100px']}
      height={['40px', '40px', '100px']}
      align="center"
      justifyContent="center"
      border="1px solid #323238"
      borderRadius="4px"
      position="absolute"
      background="#17171a"
      left={['20%', '20%', '20%', '741px']}
      top="-25px"
    >
      <Box animation={`${spinAnimation} 15s linear infinite`}>
        <Box display={['none', 'none', 'block']}>
          <ReactIcon size="50" fill="" />
        </Box>
        <Box display={['block', 'block', 'none']}>
          <ReactIcon size="20" fill="" />
        </Box>
      </Box>
    </Flex>
  )
}
