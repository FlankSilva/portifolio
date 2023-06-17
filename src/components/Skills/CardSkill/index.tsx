import { Flex, Text } from '@chakra-ui/react'

export interface SkillProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const CardSkill = ({ title, description, icon }: SkillProps) => {
  return (
    <Flex gap="20px" align="center">
      <Flex flexDir="column" width="350px">
        <Text
          as="h3"
          color="rgb(0, 173, 111)"
          fontSize="1.7rem"
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
