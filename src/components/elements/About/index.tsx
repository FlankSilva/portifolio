"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import quoteLeft from "@/assets/quote-left.png";
import quoteRight from "@/assets/quote-right.png";
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
            <p className="text-red-400 font-bold mb-4 text-xl">CITAÇÃO</p>
            <p className="flex xl:text-sm">
              <Image
                src={quoteLeft}
                alt=""
                width={28}
                height={24}
                style={{
                  width: "28px",
                  height: "24px",
                  position: "relative",
                  left: "-7px",
                }}
              />
              A programação web é como um universo infinito de possibilidades,
              onde cada linha de código pode transformar ideias em realidade,
              conectando pessoas, informações e experiências de forma dinâmica e
              interativa.
              <Image
                src={quoteRight}
                alt=""
                width={28}
                height={23}
                style={{
                  width: "28px",
                  height: "23px",
                  marginTop: "auto",
                }}
              />
            </p>

            <p className="text-red-400 font-bold mt-8">OCUPAÇÕES ATUAIS</p>
            <p>Full Stack Developer</p>
          </motion.div>
          <motion.div
            variants={getAnimationVariants(createDelayedAnimation(0.2, scale))}
            className="flex justify-center items-center relative  xl:min-w-[16.438rem]"
          >
            <Image
              src={profileCicle}
              alt="profile circle"
              width={260}
              height={260}
            />
            <Image
              src={profile}
              alt="Flank Silva"
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
              Sou Flank Silva, entusiasta das melhores tecnologias de
              desenvolvimento web, mobile e API. <br />
              Atualmente focado em aplicações(Node.js, ReactJS e React Native).
              <br />
              Iniciei no mundo da programação em 2015, quando tive o primeiro
              contato com Excel VBA. Desde então fiquei apaixonado pelo poder
              que os algoritmos proporciona as pessoas.
              <br /> Acredito que o sucesso está relacionado em trazer soluções
              para as pessoas de forma que torne nossas vidas mais produtivas.
              🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
