"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import profileCicle from "@/assets/profile-circle.png";
import profile from "@/assets/flank.webp";
import { Box } from "@/components/elements/Box";
import { Footer } from "@/components/elements/Footer";
import { Header } from "@/components/elements/Header";
import { Drawer } from "@/components/elements/Drawer";
import { Title } from "@/components/elements/Title";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getAnimationVariants, slideLeft, scale } from "@/utils/animations";

export function AboutPage() {
  const { ref: refContent, isVisible: isVisibleContent } = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <div className="bg-black-900 text-zinc-50 flex flex-col min-h-screen">
      <Header />
      <Drawer />
      <main className="w-full flex-1">
        {/* Seção Hero com foto */}
        <section className="flex flex-col items-center bg-black-950 pt-[8rem] md:pb-[2rem]">
          <div className="px-9 lg:px-0 flex flex-col items-center text-zinc-100">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={getAnimationVariants({
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                  },
                },
              })}
              className="flex flex-row items-center gap-2 md:gap-8 lg:w-[80%]"
            >
              <motion.div
                variants={getAnimationVariants(scale)}
                className="flex justify-center items-center relative"
              >
                <Image
                  src={profileCicle}
                  alt="Círculo decorativo do perfil de Flank Silva"
                  width={260}
                  height={260}
                  className="w-[150px] h-[150px] md:w-[260px] md:h-[260px]"
                />
                <Image
                  src={profile}
                  alt="Foto de perfil de Flank Silva, Senior Full Stack Developer"
                  width={250}
                  height={250}
                  className="absolute rounded-full w-[130px] h-[130px] md:w-[180px] md:h-[180px]"
                />
              </motion.div>
              <motion.div
                variants={getAnimationVariants(slideLeft)}
                className="text-center flex-1"
              >
                <h1 className="text-red-400 text-4xl md:text-6xl font-bold mb-4">
                  Olá,
                </h1>
                <p className="md:text-xl lg:text-2xl">
                  Sou Flank Silva, Senior Full Stack Developer
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section
          ref={refContent}
          className="flex flex-col items-center bg-black-950 "
        >
          <Box>
            <motion.div
              initial="hidden"
              animate={isVisibleContent ? "visible" : "hidden"}
              variants={getAnimationVariants(slideLeft)}
              className="w-full max-w-3xl mx-auto px-4 lg:px-0"
            >
              <Title title="Sobre mim" />
              <div className="mt-8 space-y-6 text-zinc-100 text-base lg:text-lg leading-relaxed">
                <p>
                  Sou <strong className="text-red-400">Flank Silva</strong>,
                  desenvolvedor desde 2016, movido pela curiosidade e pela
                  vontade de transformar tecnologia em algo realmente útil para
                  as pessoas.
                </p>

                <p>
                  Minha jornada começou de forma simples — criando automações e
                  soluções com{" "}
                  <strong className="text-red-400">Excel VBA</strong>. Aquilo
                  despertou em mim um interesse profundo por entender como a
                  tecnologia podia resolver problemas reais. Desde então,
                  mergulhei de cabeça no desenvolvimento{" "}
                  <strong>Web e Mobile</strong>, focando em{" "}
                  <strong className="text-red-400">
                    performance, escalabilidade
                  </strong>{" "}
                  e{" "}
                  <strong className="text-red-400">
                    experiência do usuário
                  </strong>
                  .
                </p>

                <p>
                  Atuei como{" "}
                  <strong className="text-red-400">
                    Analista Sênior na Cenário Capital
                  </strong>
                  , onde liderei refatorações completas e otimizei sistemas
                  críticos que exigiam alta disponibilidade e estabilidade.
                </p>

                <p>
                  Mais recentemente, venho trabalhando na{" "}
                  <strong className="text-red-400">HDN Digital</strong>,
                  contribuindo com o desenvolvimento de aplicações sustentáveis
                  e escaláveis, aplicando conceitos de{" "}
                  <strong>Clean Code</strong>,{" "}
                  <strong>arquitetura limpa</strong> e boas práticas de
                  desenvolvimento moderno.
                </p>

                <p>
                  Ao longo da minha trajetória, busquei sempre me aprimorar por
                  meio de estudos e mentorias. Tenho orgulho de fazer parte da
                  comunidade da{" "}
                  <strong className="text-red-400">Rocketseat</strong>, onde
                  venho aprofundando meus conhecimentos em{" "}
                  <strong className="text-red-400">
                    React, React Native, Next.js e Node.js
                  </strong>
                  , fortalecendo minha base técnica e mentalidade como{" "}
                  <strong className="text-red-400">Full Stack Developer</strong>
                  .
                </p>

                <p>
                  Acredito que bons resultados vêm da tranquilidade, foco e
                  responsabilidade — princípios que aplico em tudo o que faço.
                </p>

                <p>
                  Mais do que escrever código, gosto de criar soluções que unam
                  propósito, qualidade e impacto real.
                </p>

                <p>
                  Hoje, como{" "}
                  <strong className="text-red-400">
                    Senior Full Stack Developer
                  </strong>
                  , sigo evoluindo, explorando novas tecnologias e buscando
                  entregar produtos que inspirem confiança e façam diferença na
                  vida das pessoas.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/#Contact"
                  className="inline-block px-8 py-3 bg-red-400 text-black-950 font-bold rounded hover:bg-red-500 transition-colors"
                >
                  Entre em contato
                </Link>
              </div>
            </motion.div>
          </Box>
        </section>
      </main>
      <Footer />
    </div>
  );
}
