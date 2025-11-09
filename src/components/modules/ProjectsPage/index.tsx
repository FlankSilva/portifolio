'use client'

import { useCallback, useEffect, useState } from 'react'

import { Box } from '@/components/elements/Box'
import { Footer } from '@/components/elements/Footer'
import { Header } from '@/components/elements/Header'
import { Drawer } from '@/components/elements/Drawer'
import { Title } from '@/components/elements/Title'
import { Projects } from '@/components/elements/Projects'

export function ProjectsPage() {
  const [selectItemDataProject, setSelectItemDataProject] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [dataProjects, setDataProjects] = useState<any[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)

  // Carrega projetos da API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects/public')

        if (!response.ok) {
          console.error(
            'Erro na resposta da API:',
            response.status,
            response.statusText
          )
          setProjectsLoading(false)
          return
        }

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
        } else {
          console.warn('Nenhum projeto encontrado na API')
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

  return (
    <div className="bg-black-900 text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <Drawer />
      <main className="w-full flex-1">
        <section className="flex flex-col items-center bg-black-950 pt-[8rem] pb-[4rem]">
          <Box>
            <div className="flex flex-col items-center text-zinc-100">
              <Title title="Meus Projetos" />
              <p className="text-lg lg:text-xl leading-relaxed text-center max-w-3xl mt-8">
                Desenvolvo projetos que combinam{' '}
                <strong className="text-red-400">tecnologia moderna</strong>,{' '}
                <strong className="text-red-400">boas práticas</strong> e{' '}
                <strong className="text-red-400">experiência do usuário</strong>.
                Cada projeto é uma oportunidade de criar algo impactante e
                funcional.
              </p>
            </div>
          </Box>
        </section>

        <section className="flex flex-col items-center bg-black-950 pb-[4rem]">
          {projectsLoading ? (
            <Box>
              <div className="flex flex-col items-center justify-center w-full min-h-[400px]">
                <p className="text-zinc-400">Carregando projetos...</p>
              </div>
            </Box>
          ) : dataProjects.length > 0 ? (
            <Projects
              setIndexProject={handleSetIndexProject}
              indexProject={selectItemDataProject}
              dataProjects={dataProjects}
              pauseInterval={pauseInterval}
              resumeInterval={resumeInterval}
              showOnMobile={true}
              hideTitle={true}
            />
          ) : (
            <Box>
              <div className="flex flex-col items-center justify-center w-full min-h-[400px]">
                <p className="text-zinc-400">Nenhum projeto encontrado.</p>
              </div>
            </Box>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

