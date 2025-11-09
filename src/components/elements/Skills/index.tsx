"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

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

  // Memoiza as skills duplicadas para evitar recriação a cada render
  // Com 3 cópias, quando move 1/3, a segunda cópia fica exatamente onde a primeira estava
  const duplicatedSkills = useMemo(
    () => [...skills, ...skills, ...skills],
    [skills]
  );

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
              }}
              animate={
                isPaused
                  ? {}
                  : {
                      x: ["0%", "-33.333%"],
                    }
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 180,
                  ease: "linear",
                },
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
