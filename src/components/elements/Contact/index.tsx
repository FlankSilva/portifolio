'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, X, WarningCircle } from 'phosphor-react'

import { Box } from '../Box'
import { Button, Input, TextArea } from '../Form'
import { Title } from '../Title'
import { LinkedInIcon } from '../Icons/LinkedInIcon'
import { GitHubIcon } from '../Icons/GitHubIcon'
import { YoutubeIcon } from '../Icons/YoutubeIcon'
import { WhatsappIcon } from '../Icons/WhatsappIcon'
import { DownloadIcon } from '../Icons/DownloadIcon'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useBotDetection } from '@/hooks/useBotDetection'
import { formStagger, formItem, getAnimationVariants, hoverRotate, hoverScale } from '@/utils/animations'
import { formValidate } from '@/utils/validateForm'
import { applyPhoneMask } from '@/utils/phoneMask'

const whatsappMessage = encodeURIComponent(
  'Olá! Vi seu portfólio e gostaria de entrar em contato.'
)

interface ContactProps {
  hideTitle?: boolean
}

export function Contact({ hideTitle = false }: ContactProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [phoneValue, setPhoneValue] = useState('')
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })
  const { honeypotValue, setHoneypotValue, checkBot } = useBotDetection()

  const { register, handleSubmit, formState, resetField, reset, setValue } = useForm({
    resolver: zodResolver(formValidate),
  })

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    setError(null)
    setShowSuccess(false)

    // Verificar se é bot
    const botCheck = checkBot()
    
    if (botCheck.isBot) {
      setIsLoading(false)
      setError('Detectamos atividade suspeita. Por favor, tente novamente.')
      return
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          botScore: botCheck.botScore,
          fillTime: botCheck.fillTime,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error || 'Erro ao enviar mensagem. Tente novamente.')
        setIsLoading(false)
        return
      }

      // Sucesso
      setIsLoading(false)
      setShowSuccess(true)
      reset() // Limpa todos os campos
      setPhoneValue('') // Limpa o valor da máscara
      setHoneypotValue('') // Limpa o honeypot

      // Esconder mensagem após 5 segundos
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } catch (error) {
      setIsLoading(false)
      setError('Erro ao conectar com o servidor. Tente novamente.')
      console.error('Erro ao enviar formulário:', error)
    }
  }

  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-center pb-[4rem] bg-black-950 relative"
    >
      {/* Mensagem de Sucesso */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-500 border-2 border-green-400 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle size={32} weight="fill" className="text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-white text-sm">
                    Obrigado pelo contato. Responderei em breve.
                  </p>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-white hover:text-green-200 transition-colors"
                  aria-label="Fechar mensagem"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensagem de Erro */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
          >
            <motion.div className="bg-red-500 border-2 border-red-400 rounded-lg p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <X size={32} weight="fill" className="text-white" />
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">Erro ao enviar</h3>
                  <p className="text-white text-sm">{error}</p>
                </div>
                <button
                  onClick={() => setError(null)}
                  className="text-white hover:text-red-200 transition-colors"
                  aria-label="Fechar mensagem"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!hideTitle && <Title title="Fale comigo" />}

      <Box>
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={getAnimationVariants(formItem)}
          className="text-center mb-8"
        >
          <p className="text-zinc-100 text-lg">
            Interessado em conversar? Estou aberto a oportunidades{' '}
            <strong className="text-green-500">100% remotas</strong> e projetos
            que valorizem qualidade, autonomia e boas práticas.
          </p>
        </motion.div>
        <div ref={ref} className="flex justify-around w-full flex-col md:flex-row md:items-start items-center">
          <motion.form
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={getAnimationVariants(formStagger)}
            className="flex flex-col gap-3 w-full max-w-[500px] md:max-w-[450px] lg:max-w-[450] relative"
          >
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="nome"
                register={register}
                label="Nome"
                inputId="contact-nome"
                placeholder="Digite seu nome"
                messageError={formState.errors.nome?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="email"
                register={register}
                label="E-mail"
                inputId="contact-email"
                placeholder="Digite seu e-mail"
                messageError={formState.errors.email?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <div className="flex flex-col gap-1">
                <label htmlFor="contact-telefone" className="text-green-500 text-sm">
                  WhatsApp <span className="text-zinc-400">(opcional)</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    id="contact-telefone"
                    type="text"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={phoneValue}
                    onChange={(e) => {
                      const masked = applyPhoneMask(e.target.value)
                      setPhoneValue(masked)
                      setValue('telefone', masked, { shouldValidate: true })
                    }}
                    onBlur={() => {
                      // Garante que o valor está registrado ao sair do campo
                      setValue('telefone', phoneValue, { shouldValidate: true })
                    }}
                    className="
                      w-full
                      border-[1px] 
                      rounded 
                      bg-black-600
                      text-zinc-150
                      py-1
                      px-3
                      border-green-500
                      outline-none 
                      text-sm 
                      placeholder:text-zinc-200
                    "
                  />
                  {formState.errors.telefone?.message && (
                    <div className="absolute left-[calc(100%_-_30px)]">
                      <WarningCircle size={20} color="red" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <Input
                name="subject"
                register={register}
                label="Assunto"
                inputId="contact-subject"
                placeholder="Digite o assunto"
                messageError={formState.errors.subject?.message}
              />
            </motion.div>
            <motion.div variants={getAnimationVariants(formItem)}>
              <TextArea
                name="message"
                register={register}
                label="Mensagem"
                textAreaId="contact-message"
                placeholder="Digite sua mensagem"
                messageError={formState.errors.message?.message}
              />
            </motion.div>
            {/* Campo Honeypot - invisível para usuários reais, mas bots preenchem */}
            <input
              type="text"
              name="website"
              style={{ 
                position: 'absolute',
                left: '-9999px',
                opacity: 0,
                pointerEvents: 'none',
              }}
              tabIndex={-1}
              autoComplete="off"
              value={honeypotValue}
              onChange={(e) => setHoneypotValue(e.target.value)}
              aria-hidden="true"
            />
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
              <motion.a
                variants={getAnimationVariants(formItem)}
                whileHover="hover"
                href={`https://api.whatsapp.com/send?phone=5519992360973&text=${whatsappMessage}`}
                className="flex gap-3 items-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp com Flank Silva"
              >
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="bg-[#25D366] rounded p-[1.5px]"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverRotate)}
                  >
                    <WhatsappIcon size={30} fill="#fff" />
                  </motion.div>
                </motion.div>
                <span>(19) 99236-0973</span>
              </motion.a>
              <motion.a
                variants={getAnimationVariants(formItem)}
                whileHover="hover"
                href="/curriculo_flank.pdf"
                download="curriculo_flank.pdf"
                className="flex gap-3 items-center"
                aria-label="Baixar currículo de Flank Silva"
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
                    <DownloadIcon size={30} fill="#000" />
                  </motion.div>
                </motion.div>
                <span>Baixar currículo</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Box>
    </section>
  )
}
