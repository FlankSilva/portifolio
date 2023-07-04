import { Box } from '../Box'
import { Title } from '../Title'
import { CardProject } from './CardProject'
import { StepsCard } from './StepsCard'

export interface ProjectData {
  id?: number
  name?: string
  description?: string
  link?: string
  repo?: string
  repoName?: string
  image?: any
}

interface ProjectsProps {
  setIndexProject: (index: number) => void
  indexProject: number
  dataProjects: ProjectData[]
  pauseInterval: () => void
  resumeInterval: () => void
}

export function Projects({
  setIndexProject,
  indexProject,
  dataProjects,
  pauseInterval,
  resumeInterval,
}: ProjectsProps) {
  return (
    <section
      id="project"
      className="flex flex-col items-center justify-center  bg-black-900 "
    >
      <Title title="Projetos" />

      <Box>
        <div className="flex justify-center border-b-[1px] border-black-500 pb-[4rem] w-full">
          <div className="w-full px-9 lg:px-0 flex flex-col items-center gap-4">
            <CardProject
              project={dataProjects[indexProject]}
              pauseInterval={pauseInterval}
              resumeInterval={resumeInterval}
            />
            <StepsCard
              data={dataProjects}
              indexProject={indexProject}
              setIndexProject={setIndexProject}
            />
          </div>
        </div>
      </Box>
    </section>
  )
}
