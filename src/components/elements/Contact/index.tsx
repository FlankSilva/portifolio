'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Box } from '../Box'
import { Button, Input, TextArea } from '../Form'
import { Title } from '../Title'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { formStagger, formItem, getAnimationVariants, hoverRotate, hoverScale } from '@/utils/animations'
import { formValidate } from '@/utils/validateForm'

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  const { register, handleSubmit, formState, resetField } = useForm({
    resolver: zodResolver(formValidate),
  })

  const onSubmit = async (data: any) => {
    setIsLoading(true)

    try {
      fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false)

          resetField('nome')
          resetField('email')
          resetField('subject')
          resetField('message')
        })
    } catch (error) {
      setIsLoading(false)
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center pb-[4rem] bg-black-950"
    >
      <Title title="Fale comigo" />

      <Box>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={getAnimationVariants(formItem)}
          className="text-center mb-8 px-4 lg:px-0"
        >
          <p className="text-zinc-100 text-lg">
            Interessado em conversar? Estou aberto a oportunidades{' '}
            <strong className="text-green-500">100% remotas</strong> e projetos
            que valorizem qualidade, autonomia e boas práticas.
          </p>
        </motion.div>
        <div ref={ref} className="flex justify-around w-full flex-col md:flex-row md:items-start items-center px-4 lg:px-0">
          <motion.form
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={getAnimationVariants(formStagger)}
            className="flex flex-col gap-3 w-full max-w-[500px] md:max-w-[450px] lg:max-w-[450]"
          >
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="nome"
                register={register}
                placeholder="Digite seu nome"
                messageError={formState.errors.nome?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="email"
                register={register}
                placeholder="Digite seu e-mail"
                messageError={formState.errors.email?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="subject"
                register={register}
                placeholder="Digite o assunto"
                messageError={formState.errors.subject?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <TextArea
                name="message"
                register={register}
                placeholder="Digite sua menssagem"
                messageError={formState.errors.message?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <Button onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
                Enviar
              </Button>
            </motion.div>
          </motion.form>
          <motion.div
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={getAnimationVariants(formStagger)}
            className="flex flex-col justify-start w-full max-w-[500px] md:max-w-[300px] mt-11 md:mt-0"
          >
            <motion.h3
              variants={getAnimationVariants(formItem)}
              className="text-[2rem] text-green-500"
            >
              E-mail para contato
            </motion.h3>
            <motion.span variants={getAnimationVariants(formItem)}>
              flank.silva.0@gmail.com
            </motion.span>

            <motion.h3
              variants={getAnimationVariants(formItem)}
              className="text-[2rem] text-green-500 mt-12 md:mt-16"
            >
              Minhas redes
            </motion.h3>
            <motion.div
              variants={getAnimationVariants(formStagger)}
              className="flex flex-col gap-3"
            >
              <motion.a
                variants={getAnimationVariants(formItem)}
                whileHover="hover"
                href="https://www.linkedin.com/in/flank-silva-0a3a5317a/"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil do LinkedIn de Flank Silva"
              >
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="bg-zinc-50 rounded p-[1.5px]"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverRotate)}
                  >
                    <LinkedInIcon size={30} />
                  </motion.div>
                </motion.div>
                <span>/flank-silva-0a3a5317a</span>
              </motion.a>
              <motion.a
                variants={getAnimationVariants(formItem)}
                whileHover="hover"
                href="https://github.com/FlankSilva"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil do GitHub de Flank Silva"
              >
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="bg-zinc-50 rounded p-[1.5px]"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverRotate)}
                  >
                    <GitHubIcon size={30} fill="#000" />
                  </motion.div>
                </motion.div>
                <span>/FlankSilva</span>
              </motion.a>
              <motion.a
                variants={getAnimationVariants(formItem)}
                whileHover="hover"
                href="https://www.youtube.com/@devjunior6354"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar canal do YouTube de Flank Silva"
              >
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="bg-zinc-50 rounded p-[1.5px]"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverRotate)}
                  >
                    <YoutubeIcon size={30} />
                  </motion.div>
                </motion.div>
                <span>/@devjunior6354</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Box>
    </section>
  )
}
