import { Box, Button, Flex, useMediaQuery } from '@chakra-ui/react'
import { Main } from '../Main'
import { CardSkill, SkillProps } from './CardSkill'
import React from 'react'
import { Title } from '../Title'

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
  const [isLargerThan991] = useMediaQuery('(min-width: 991px)', {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  })

  return (
    <Flex
      w="100%"
      justify="center"
      bg="gray.900"
      position="relative"
      id="skills"
    >
      <Main>
        <Title title="Minhas Skills" />
        <Flex
          flexWrap="wrap"
          justifyContent={['center', 'center', 'center', 'space-between']}
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
            bottom={isLargerThan991 ? '30px' : '9px'}
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
                bg=""
                border={'1px solid rgb(0, 173, 111)'}
                color="#fff"
                onClick={handleNextSkills}
                padding="1.5rem 4rem"
                _hover={{
                  bg: 'rgb(0, 173, 111)',
                }}
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
