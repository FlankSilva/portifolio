import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Box } from '../Box'
import { Button, Input, TextArea } from '../Form'
import { Title } from '../Title'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { formValidate } from '@/utils/validateForm'

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)

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
      console.log(error)
    }
  }

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center pb-[4rem] bg-black-950"
    >
      <Title title="Fale comigo" />

      <Box>
        <div className="flex justify-around w-full flex-col md:flex-row md:items-start items-center px-4 lg:px-0">
          <form className="flex flex-col gap-3 w-full max-w-[500px] md:max-w-[450px] lg:max-w-[450]">
            <Input
              name="nome"
              register={register}
              placeholder="Digite seu nome"
              messageError={formState.errors.nome?.message}
            />
            <Input
              name="email"
              register={register}
              placeholder="Digite seu e-mail"
              messageError={formState.errors.email?.message}
            />
            <Input
              name="subject"
              register={register}
              placeholder="Digite o assunto"
              messageError={formState.errors.subject?.message}
            />
            <TextArea
              name="message"
              register={register}
              placeholder="Digite sua menssagem"
              messageError={formState.errors.message?.message}
            />
            <Button onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
              Enviar
            </Button>
          </form>
          <div className="flex flex-col justify-start w-full max-w-[500px] md:max-w-[300px] mt-11 md:mt-0">
            <h3 className="text-[2rem] text-green-500">E-mail para contato</h3>
            <span>flank.silva.0@gmail.com</span>

            <h3 className="text-[2rem] text-green-500 mt-12 md:mt-16">
              Minhas redes
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/flank-silva-0a3a5317a/"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-zinc-50 rounded p-[1.5px]">
                  <LinkedInIcon size={30} />
                </div>
                <span>/flank-silva-0a3a5317a</span>
              </a>
              <a
                href="https://github.com/FlankSilva"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-zinc-50 rounded p-[1.5px]">
                  <GitHubIcon size={30} fill="#000" />
                </div>
                <span>/FlankSilva</span>
              </a>
              <a
                href="https://www.youtube.com/@devjunior6354"
                className="flex gap-3 items-center"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-zinc-50 rounded p-[1.5px]">
                  <YoutubeIcon size={30} />
                </div>
                <span>/@devjunior6354</span>
              </a>
            </div>
          </div>
        </div>
      </Box>
    </section>
  )
}
