import { useEffect, useState } from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react'

import { Presentation } from '@/components/Presentation'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'

import { skills } from '@/mock/skills'
import { SkillProps } from '@/components/Skills/CardSkill'
import { MyProjects } from '@/components/MyProjects'
import { HeaderMobile } from '@/components/HeaderMobile'
import { PresentationMobile } from '@/components/Presentation/PresentationMobile'
import { Contact } from '@/components/Contact'
import { Drawer } from '@/components/Drawer'

export default function Home() {
  const [skillsList, setSkillsList] = useState<SkillProps[]>([])
  const [hiddenNextButton, setHiddenNextButton] = useState(false)

  const [isLargerThan1092] = useMediaQuery('(min-width: 1092px)', {
    ssr: true,
    fallback: false,
  })

  const [isLargerThan991] = useMediaQuery('(min-width: 991px)', {
    ssr: true,
    fallback: false,
  })

  const sizeIcon = isLargerThan1092 ? '110' : '70'

  useEffect(() => {
    const newListSkills = skills({ size: sizeIcon }).slice(
      0,
      isLargerThan991 ? 6 : 4,
    )

    setSkillsList(newListSkills)
  }, [sizeIcon, isLargerThan991])

  const handleNextSkills = () => {
    const qtdSkills = skills({ size: sizeIcon }).length
    const qtdActiveSkills = skillsList.length
    const qtdNext = isLargerThan991 ? 6 : 4

    if (qtdSkills > qtdActiveSkills) {
      const newListSkills = skills({ size: sizeIcon }).slice(
        0,
        qtdActiveSkills + qtdNext,
      )

      setSkillsList(newListSkills)
    } else {
      setHiddenNextButton(true)
    }
  }

  const scrollToDiv = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Flex
      w="100vw"
      flexDir="column"
      align="center"
      justify="center"
      bg="rgba(33, 140, 116,0.1)"
      position={'relative'}
    >
      <Presentation>
        <Header />
        <HeaderMobile scrollToDiv={scrollToDiv} />
        <Menu scrollToDiv={scrollToDiv} />

        <PresentationMobile />
      </Presentation>
      <About />
      <Skills
        handleNextSkills={handleNextSkills}
        skills={skillsList}
        hiddenNextButton={hiddenNextButton}
      />
      <MyProjects />
      <Contact />

      <Drawer />
    </Flex>
  )
}
