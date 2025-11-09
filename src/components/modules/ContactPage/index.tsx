'use client'

import { Box } from '@/components/elements/Box'
import { Footer } from '@/components/elements/Footer'
import { Header } from '@/components/elements/Header'
import { Drawer } from '@/components/elements/Drawer'
import { Title } from '@/components/elements/Title'
import { Contact } from '@/components/elements/Contact'

export function ContactPage() {
  return (
    <div className="bg-black-900 text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <Drawer />
      <main className="w-full flex-1">
        <section className="flex flex-col items-center bg-black-950 pt-[8rem] pb-[4rem]">
          <Box>
            <div className="flex flex-col items-center text-zinc-100">
              <Title title="Entre em Contato" />
              <p className="text-lg lg:text-xl leading-relaxed text-center max-w-3xl mt-8">
                Interessado em conversar? Estou aberto a oportunidades{' '}
                <strong className="text-green-500">100% remotas</strong> e
                projetos que valorizem qualidade, autonomia e boas práticas.
              </p>
            </div>
          </Box>
        </section>

        <section className="flex flex-col items-center bg-black-950 pb-[4rem]">
          <Contact hideTitle={true} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

