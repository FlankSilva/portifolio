"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useMemo, useState, useEffect, useRef } from "react";

import { Box } from "../Box";
import { Title } from "../Title";
import { CardSkill, SkillProps } from "./CardSkill";

export interface SkillsProps {
  skills: SkillProps[];
  hiddenNextButton: boolean;
  handleNextSkills: () => void;
}

export function Skills({
  skills,
  handleNextSkills,
  hiddenNextButton,
}: SkillsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (v) => `${v}%`);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);

  // Memoiza as skills duplicadas para evitar recriação a cada render
  // Com 3 cópias, quando move 1/3, a segunda cópia fica exatamente onde a primeira estava
  const duplicatedSkills = useMemo(
    () => [...skills, ...skills, ...skills],
    [skills]
  );

  // Inicia a animação quando o componente monta
  useEffect(() => {
    animationRef.current = animate(x, [0, -33.333], {
      duration: 180,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [x]);

  // Controla pausa/retomada da animação
  useEffect(() => {
    if (isPaused) {
      // Pausa a animação mantendo a posição atual
      if (animationRef.current) {
        animationRef.current.stop();
      }
    } else {
      // Retoma a animação a partir da posição atual
      const currentX = x.get();
      // Normaliza a posição para estar entre 0 e -33.333
      const normalizedX = ((currentX % 33.333) + 33.333) % 33.333;
      const startX = normalizedX === 0 ? 0 : normalizedX - 33.333;
      const targetX = startX - 33.333;

      // Inicia a animação a partir da posição atual
      animationRef.current = animate(x, [startX, targetX], {
        duration: 180,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });
    }

    return () => {
      if (animationRef.current && isPaused) {
        animationRef.current.stop();
      }
    };
  }, [isPaused, x]);

  if (!skills || skills.length === 0) {
    return (
      <section id="skills" className="flex flex-col items-center pb-[4rem]">
        <Title title="Minhas Skills" />
        <Box>
          <div className="flex flex-col items-center justify-center w-full px-9 lg:px-0 min-h-[200px]">
            <p className="text-zinc-400">Carregando skills...</p>
          </div>
        </Box>
      </section>
    );
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
              className="flex gap-12 md:gap-16 lg:gap-20"
              style={{
                width: "max-content",
                willChange: "transform",
                x: xPercent,
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
  );
}
