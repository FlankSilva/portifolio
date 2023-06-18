import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Main } from '../Main'
import { CardSkill, SkillProps } from './CardSkill'
import React from 'react'

export interface SkillsProps {
  skills: SkillProps[]
  hiddenNextButton: boolean
  handleNextSkills: () => void
}

export const Skills = ({
  skills,
  handleNextSkills,
  hiddenNextButton,
}: SkillsProps) => {
  return (
    <Flex w="100%" justify="center" bg="gray.900" position="relative">
      <Main>
        <Text
          as="h1"
          fontSize="3.75rem"
          color="#fff"
          fontWeight="bold"
          textAlign="center"
          marginTop="4rem"
          marginBottom="2rem"
          id="skills"
        >
          Minhas Skills
        </Text>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
          marginBottom="40px"
        >
          {skills.map((item, index) => (
            <CardSkill
              title={item.title}
              description={item.description}
              icon={item.icon}
              key={`${item.title}-${index}`}
            />
          ))}
        </Flex>
        {!hiddenNextButton && (
          <Flex
            flexDir="column"
            align="center"
            height="120px"
            position="absolute"
            width="100%"
            bottom="30px"
          >
            <Box
              width="100%"
              height="30px"
              background="linear-gradient(to bottom, rgba(23, 25, 35, 0.7) 0%, rgba(23, 25, 35, 1) 90%)"
              position="relative"
              top="2px"
            />
            <Flex
              bg="gray.900"
              width="100%"
              alignItems="center"
              justifyContent="center"
              height="100%"
            >
              <Button
                bg="rgb(0, 173, 111)"
                color="#fff"
                onClick={handleNextSkills}
                padding="1.5rem 4rem"
              >
                Mais
              </Button>
            </Flex>
          </Flex>
        )}
      </Main>
    </Flex>
  )
}
