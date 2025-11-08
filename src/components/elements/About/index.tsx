"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import profileCicle from "@/assets/profile-circle.png";
import profile from "@/assets/flank.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  createDelayedAnimation,
  getAnimationVariants,
  scale,
  slideLeft,
  slideRight,
} from "@/utils/animations";
import { Title } from "../Title";

export function About() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="flex flex-col items-center bg-black-950 pb-[4rem]"
    >
      <Title title="Quem sou eu" />
      <div
        ref={ref}
        className="px-9 lg:px-0 flex flex-col items-center text-zinc-100"
      >
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
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
          className="flex flex-col gap-12 lg:w-[80%] xl:flex-row"
        >
          <motion.div
            variants={getAnimationVariants(slideLeft)}
            className="flex flex-col"
          >
            <p className="text-red-400 font-bold mb-4 text-xl">EXPERIÊNCIA</p>
            <p className="xl:text-sm">
              Iniciei minha jornada na programação em 2016, quando percebi o
              potencial da tecnologia para resolver problemas reais. Desde
              então, venho desenvolvendo soluções Web e Mobile com foco em
              performance, escalabilidade e experiência do usuário.
            </p>
            <p className="text-red-400 font-bold mt-8">OCUPAÇÕES ATUAIS</p>
            <p>Senior Full Stack Developer</p>
            <p className="text-red-400 font-bold mt-4">TRAJETÓRIA</p>
            <p className="xl:text-sm mt-2">
              Atuei como Analista Sênior na <strong>CENÁRIO CAPITAL</strong> (4
              anos) e na <strong>HDN Digital</strong> (1,5 anos), liderando
              refatorações completas e otimizando a performance de sistemas
              críticos.
            </p>
          </motion.div>
          <motion.div
            variants={getAnimationVariants(createDelayedAnimation(0.2, scale))}
            className="flex justify-center items-center relative  xl:min-w-[16.438rem]"
          >
            <Image
              src={profileCicle}
              alt="Círculo decorativo do perfil de Flank Silva"
              width={260}
              height={260}
            />
            <Image
              src={profile}
              alt="Foto de perfil de Flank Silva, Senior Full Stack Developer"
              width={250}
              height={250}
              style={{
                position: "absolute",
                borderRadius: "50%",
                width: "180px",
                height: "180px",
              }}
            />
          </motion.div>
          <motion.div
            variants={getAnimationVariants(slideRight)}
            className="flex flex-col"
          >
            <h2 className="text-red-400 text-6xl font-bold mb-4">Olá,</h2>
            <p className="xl:text-sm">
              Sou Flank Silva, Senior Full Stack Developer especializado em
              React, React Native, Next.js e Node.js.
            </p>
            <p className="xl:text-sm mt-4">
              Tenho sólida experiência no desenvolvimento e refatoração de
              aplicações complexas, sempre buscando entregar código limpo,
              sustentável e fácil de manter.
            </p>
            <p className="xl:text-sm mt-4">
              Acredito que bons resultados vêm de tranquilidade, foco e
              responsabilidade — princípios que aplico em tudo o que faço.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
