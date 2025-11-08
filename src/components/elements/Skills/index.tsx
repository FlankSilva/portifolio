'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Box } from '../Box'
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
  const [isPaused, setIsPaused] = useState(false)

  // Cria múltiplas cópias para garantir continuidade perfeita
  // Com 3 cópias, quando move 1/3, a segunda cópia fica exatamente onde a primeira estava
  const duplicatedSkills = [...skills, ...skills, ...skills]

  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="flex flex-col items-center pb-[4rem]">
        <Title title="Minhas Skills" />
        <Box>
          <p className="text-zinc-400">Carregando skills...</p>
        </Box>
      </section>
    )
  }

  return (
    <section id="skills" className="flex flex-col items-center pb-[4rem]">
      <Title title="Minhas Skills" />

      <Box>
        <div className="flex flex-col items-center w-full overflow-hidden">
          <div
            className="w-full overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8 md:gap-12 lg:gap-16"
              style={{ 
                width: 'max-content',
                willChange: 'transform'
              }}
              animate={isPaused ? {} : {
                x: ['0%', '-33.333%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedSkills.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="flex-shrink-0 w-24 md:w-32 lg:w-36"
                >
                  <CardSkill
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    url={item.url}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Box>
    </section>
  )
}
