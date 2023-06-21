import { Text } from '@chakra-ui/react'

interface TitleProps {
  title: string
  mt?: string
}

export const Title = ({ title, mt = '4rem' }: TitleProps) => {
  return (
    <Text
      as="h1"
      fontSize="3.75rem"
      color="#fff"
      fontWeight="bold"
      textAlign="center"
      marginTop={mt}
      marginBottom="2rem"
      id="skills"
    >
      {title}
    </Text>
  )
}