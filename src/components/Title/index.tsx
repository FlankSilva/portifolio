import { Text } from '@chakra-ui/react'

interface TitleProps {
  title: string
  mt?: string
}

export const Title = ({ title, mt = '4rem' }: TitleProps) => {
  return (
    <Text
      as="h1"
      fontSize={['2.3rem', '2.3rem', '2.3rem', '3.75rem']}
      color="#fff"
      fontWeight="bold"
      textAlign="center"
      marginTop={mt}
      marginBottom="2rem"
    >
      {title}
    </Text>
  )
}
