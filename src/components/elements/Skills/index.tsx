'use client'

import { motion } from 'framer-motion'

import { Box } from '../Box'
import { Button } from '../Form'
import { Title } from '../Title'
import { getAnimationVariants, staggerContainer, staggerItem } from '@/utils/animations'
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
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={getAnimationVariants(staggerContainer)}
            className="flex flex-wrap gap-7 lg:gap-5 justify-between px-9 lg:px-0"
          >
            {skills.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                variants={getAnimationVariants(staggerItem)}
              >
                <CardSkill
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </motion.div>
            ))}
          </motion.section>
          {!hiddenNextButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <Button onClick={() => handleNextSkills()}>
                <span className="text-sm font-bold">Mais Skills</span>
              </Button>
            </motion.div>
          )}
        </div>
      </Box>
    </section>
  )
}
