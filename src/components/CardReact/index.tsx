import { Box, Flex, keyframes } from '@chakra-ui/react'
import { ReactIcon } from '../Icons/SoftSkills'

export const CardReact = () => {
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
      width="100px"
      height="100px"
      align="center"
      justifyContent="center"
      border="1px solid #323238"
      borderRadius="4px"
      position="absolute"
      background="#17171a"
      left="741px"
      top="-25px"
    >
      <Box animation={`${spinAnimation} 15s linear infinite`}>
        <ReactIcon size="50" fill="" />
      </Box>
    </Flex>
  )
}
