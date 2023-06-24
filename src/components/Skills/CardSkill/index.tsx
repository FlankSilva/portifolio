import { Flex, Text } from '@chakra-ui/react'

export interface SkillProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const CardSkill = ({ title, description, icon }: SkillProps) => {
  return (
    <Flex gap="20px" align="center" justify={'center'}>
      <Flex flexDir="column" width="100%" maxW={['70%', '70%', '65%', '350px']}>
        <Text
          as="h3"
          color="rgb(0, 173, 111)"
          fontSize={['1.3rem', '1.3rem', '1.5rem', '1.7rem']}
          fontWeight="bold"
          marginBottom="0.5rem"
        >
          {title}
        </Text>
        <Text fontSize="1rem">{description}</Text>
      </Flex>
      {icon}
    </Flex>
  )
}
