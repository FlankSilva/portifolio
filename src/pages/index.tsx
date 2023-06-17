import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'

import { Presentation } from '@/components/Presentation'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'

import { skills } from '@/mock/skills'
import { SkillProps } from '@/components/Skills/CardSkill'

export default function Home() {
  const [skillsList, setSkillsList] = useState<SkillProps[]>([])
  const [hiddenNextButton, setHiddenNextButton] = useState(false)

  useEffect(() => {
    const newListSkills = skills.slice(0, 6)

    setSkillsList(newListSkills)
  }, [])

  const handleNextSkills = () => {
    const qtdSkills = skills.length
    const qtdActiveSkills = skillsList.length

    if (qtdSkills > qtdActiveSkills) {
      const newListSkills = skills.slice(0, qtdActiveSkills + 6)

      setSkillsList(newListSkills)
    } else {
      setHiddenNextButton(true)
    }
  }

  return (
    <Flex
      w="100vw"
      flexDir="column"
      align="center"
      justify="center"
      bg="rgba(33, 140, 116,0.1)"
    >
      <Presentation>
        <Header />
        <Menu />
      </Presentation>
      <About />
      <Skills
        handleNextSkills={handleNextSkills}
        skills={skillsList}
        hiddenNextButton={hiddenNextButton}
      />
    </Flex>
  )
}
