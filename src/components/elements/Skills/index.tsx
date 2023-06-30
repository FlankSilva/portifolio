import { Box } from '../Box'
import { Button } from '../Form'
import { Title } from '../Title'
import { CardSkill, SkillProps } from './CardSkill'

export interface SkillsProps {
  skills: SkillProps[]
  hiddenNextButton: boolean
  handleNextSkills: () => void
}

export function Skills({
  skills,
  handleNextSkills,
  hiddenNextButton,
}: SkillsProps) {
  return (
    <section id="skills" className="flex flex-col items-center pb-[4rem] ">
      <Title title="Minhas Skills" />

      <Box>
        <div className="flex flex-col items-center">
          <section className="flex flex-wrap gap-7 lg:gap-5 justify-between px-9 lg:px-0">
            {skills.map((item, index) => (
              <CardSkill
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </section>
          {!hiddenNextButton && (
            <div className="mt-4">
              <Button onClick={() => handleNextSkills()}>
                <span className="text-sm font-bold">Mais Skills</span>
              </Button>
            </div>
          )}
        </div>
      </Box>
    </section>
  )
}
