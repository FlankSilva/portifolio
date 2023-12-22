import React, { useEffect, useState } from 'react'

import { About } from '@/components/elements/About'
import { Box } from '@/components/elements/Box'
import { Drawer } from '@/components/elements/Drawer'
import { Header } from '@/components/elements/Header'

import { skills } from '@/mock/skills'
import { dataProjects as data } from '@/mock'

import { Presentation } from '@/components/elements/Presentation'
import { Skills } from '@/components/elements/Skills'
import { SkillProps } from '@/components/elements/Skills/CardSkill'
import { Projects } from '@/components/elements/Projects'
import { Contact } from '@/components/elements/Contact'
import { Footer } from '@/components/elements/Footer'

export function HomePage() {
  const [skillsList, setSkillsList] = useState<SkillProps[]>([])
  const [hiddenNextButton, setHiddenNextButton] = useState(false)
  const [selectItemDataProject, setSelectItemDataProject] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const qtdProject = data.length
    let interval: any

    if (!isPaused) {
      interval = setInterval(() => {
        setSelectItemDataProject((prevCount: number) => {
          if (qtdProject === prevCount + 1) {
            return 0
          }
          return prevCount + 1
        })
      }, 4000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [selectItemDataProject, isPaused])

  const handleSetIndexProject = (index: number) => {
    setSelectItemDataProject(index - 1)
  }

  const pauseInterval = () => {
    setIsPaused(true)
  }

  const resumeInterval = () => {
    setIsPaused(false)
  }

  useEffect(() => {
    const newListSkills = skills({ size: '100' }).slice(0, 4)

    setSkillsList(newListSkills)
  }, [])

  const handleNextSkills = () => {
    const qtdSkills = skills({ size: '100' }).length
    const qtdActiveSkills = skillsList.length
    const qtdNext = 4

    if (qtdSkills > qtdActiveSkills) {
      const newListSkills = skills({ size: '100' }).slice(
        0,
        qtdActiveSkills + qtdNext,
      )

      setSkillsList(newListSkills)
    } else {
      setHiddenNextButton(true)
    }
  }

  return (
    <div id="home" className="bg-black-900 text-zinc-50 flex flex-col">
      <main className="w-full ">
        <Header />
        <Drawer />
        <div className="w-full h-[100vh] flex justify-center">
          <Box>
            <Presentation />
          </Box>
        </div>
        <About />
        <Skills
          skills={skillsList}
          handleNextSkills={handleNextSkills}
          hiddenNextButton={hiddenNextButton}
        />
        <Projects
          setIndexProject={handleSetIndexProject}
          indexProject={selectItemDataProject}
          dataProjects={data}
          pauseInterval={pauseInterval}
          resumeInterval={resumeInterval}
        />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
