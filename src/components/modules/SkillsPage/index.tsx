'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

import { Box } from '@/components/elements/Box'
import { Footer } from '@/components/elements/Footer'
import { Header } from '@/components/elements/Header'
import { Drawer } from '@/components/elements/Drawer'
import { Title } from '@/components/elements/Title'
import { Skills } from '@/components/elements/Skills'
import { SkillProps } from '@/components/elements/Skills/CardSkill'
import { skills } from '@/mock/skills'

export function SkillsPage() {
  const [skillsList, setSkillsList] = useState<SkillProps[]>([])
  const [hiddenNextButton, setHiddenNextButton] = useState(false)

  // Memoiza a lista de skills para evitar recálculos
  const allSkills = useMemo(() => skills({ size: '100' }), [])

  // Carrega as skills imediatamente no mount
  useEffect(() => {
    if (allSkills.length > 0) {
      setSkillsList(allSkills)
      setHiddenNextButton(true)
    }
  }, [allSkills])

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
    <div className="bg-black-900 text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <Drawer />
      <main className="w-full flex-1">
        <section className="flex flex-col items-center bg-black-950 pt-[8rem] pb-[4rem]">
          <Box>
            <div className="flex flex-col items-center text-zinc-100">
              <Title title="Minhas Habilidades" />
              <p className="text-lg lg:text-xl leading-relaxed text-center max-w-3xl mt-8">
                Domino tecnologias modernas para desenvolvimento{' '}
                <strong className="text-green-500">Full Stack</strong>, com
                expertise em{' '}
                <strong className="text-green-500">
                  React, Next.js, Node.js
                </strong>{' '}
                e diversas outras ferramentas que me permitem criar soluções
                completas e escaláveis.
              </p>
            </div>
          </Box>
        </section>

        <section className="flex flex-col items-center bg-black-950 pb-[4rem]">
          <Box>
            <Skills
              skills={skillsList}
              handleNextSkills={handleNextSkills}
              hiddenNextButton={hiddenNextButton}
              hideTitle={true}
            />
          </Box>
        </section>
      </main>
      <Footer />
    </div>
  )
}

