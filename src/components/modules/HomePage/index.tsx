import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { About } from '@/components/elements/About'
import { Box } from '@/components/elements/Box'
import { Drawer } from '@/components/elements/Drawer'
import { Header } from '@/components/elements/Header'

import { skills } from '@/mock/skills'

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
  const [dataProjects, setDataProjects] = useState<any[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)

  // Memoiza a lista de skills para evitar recálculos
  const allSkills = useMemo(() => skills({ size: '100' }), [])

  // Carrega as skills imediatamente no mount
  useEffect(() => {
    if (allSkills.length > 0) {
      setSkillsList(allSkills)
      setHiddenNextButton(true)
    }
  }, [allSkills])

  // Carrega projetos da API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects/public')
        const data = await response.json()

        if (data.projects && data.projects.length > 0) {
          // Converter formato da API para o formato esperado pelo componente
          const formattedProjects = data.projects.map((project: any) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            stack: project.stack,
            link: project.link,
            repoName: project.repoName,
            repo: project.repo,
            image: project.image,
          }))
          setDataProjects(formattedProjects)
        }
      } catch (error) {
        console.error('Erro ao carregar projetos:', error)
      } finally {
        setProjectsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (dataProjects.length === 0) return

    const qtdProject = dataProjects.length
    let interval: NodeJS.Timeout | undefined

    if (!isPaused) {
      interval = setInterval(() => {
        setSelectItemDataProject((prevCount: number) => {
          if (qtdProject === prevCount + 1) {
            return 0
          }
          return prevCount + 1
        })
      }, 8000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isPaused, dataProjects.length])

  const handleSetIndexProject = useCallback((index: number) => {
    setSelectItemDataProject(index - 1)
  }, [])

  const pauseInterval = useCallback(() => {
    setIsPaused(true)
  }, [])

  const resumeInterval = useCallback(() => {
    setIsPaused(false)
  }, [])

  const handleNextSkills = useCallback(() => {
    const qtdSkills = allSkills.length
    const qtdActiveSkills = skillsList.length
    const qtdNext = 4

    if (qtdSkills > qtdActiveSkills) {
      const newListSkills = allSkills.slice(0, qtdActiveSkills + qtdNext)
      setSkillsList(newListSkills)
    } else {
      setHiddenNextButton(true)
    }
  }, [allSkills, skillsList.length])

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
        {!projectsLoading && dataProjects.length > 0 && (
          <Projects
            setIndexProject={handleSetIndexProject}
            indexProject={selectItemDataProject}
            dataProjects={dataProjects}
            pauseInterval={pauseInterval}
            resumeInterval={resumeInterval}
          />
        )}
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
