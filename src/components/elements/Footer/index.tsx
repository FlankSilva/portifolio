"use client";

import { motion } from "framer-motion";
import { EnvelopeSimple } from "phosphor-react";
import Link from "next/link";

import { Box } from "../Box";
import { WhatsappIcon } from "../Icons/WhatsappIcon";
import { Logo } from "../Logo";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useScrollToDiv } from "@/hooks/ScrollToDivContext";
import { fadeIn, getAnimationVariants, hoverScale } from "@/utils/animations";
import { listmenu } from "@/mock/menuListMock";

export function Footer() {
  const { handleScrollToDiv } = useScrollToDiv();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getAnimationVariants(fadeIn)}
      className="bg-black-950 pt-10 px-4 lg:px-0 flex justify-center"
    >
      <Box>
        <div className="w-full flex flex-col">
          <div className="flex items-center w-full gap-10">
            <Logo showTextInMobile={true} />
            <div className="border-t-[1px] border-green-200 flex-1"></div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end md:gap-16">
            <div className="mt-7 flex">
              <div className="flex flex-col w-[180px] md:w-[220px]">
                <span className="text-green-500 font-bold text-lg">MENU</span>
                <ul>
                  {listmenu.map((item) => (
                    <li className="text-zinc-200" key={item.id}>
                      <a onClick={() => handleScrollToDiv(item.id)}>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col">
                <span className="text-green-500 font-bold text-lg">
                  MINHAS REDES
                </span>
                <ul>
                  <li className="text-zinc-200">
                    <Link
                      href="https://www.linkedin.com/in/flank-silva-0a3a5317a/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li className="text-zinc-200">
                    <Link
                      href={"https://www.youtube.com/@devjunior6354"}
                      target="_blank"
                    >
                      Youtube
                    </Link>
                  </li>
                  <li className="text-zinc-200">
                    <Link href="https://github.com/FlankSilva" target="_blank">
                      Git Hub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <div className="flex flex-col w-[180px] md:w-[220px] gap-3">
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="flex gap-2"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverScale)}
                    className="bg-zinc-50 w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <Link
                      href={"https://api.whatsapp.com/send?phone=19992360973"}
                      target="_blank"
                    >
                      <WhatsappIcon size={20} color="#000" />
                    </Link>
                  </motion.div>
                  <span className="text-[0.700rem] text-zinc-100">
                    TELEFONE PARA <br /> CONTATO
                  </span>
                </motion.div>
                <motion.div
                  whileHover="hover"
                  variants={getAnimationVariants(hoverScale)}
                  className="flex gap-2"
                >
                  <motion.div
                    whileHover="hover"
                    variants={getAnimationVariants(hoverScale)}
                    className="bg-zinc-50 w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <Link
                      href={"mailto:flank.silva.0@gmail.com"}
                      target="_blank"
                    >
                      <EnvelopeSimple size={24} color="#000" />
                    </Link>
                  </motion.div>
                  <span className="text-[0.700rem]">
                    E-MAIL PARA <br /> CONTATO
                  </span>
                </motion.div>
              </div>
              <div className="flex flex-col gap-5 ">
                <span className="text-base font-bold">(19) 9 92360973</span>
                <div className="flex flex-col">
                  <span className="font-bold text-base">CONTATO</span>
                  <span className="text-[0.800rem]">@flank.silva.0.com</span>
                </div>
              </div>
            </div>
          </div>
          <p className="py-12 text-center text-zinc-200 text-sm">
            Copyright © 2023 Flank Silva Dev
          </p>
        </div>
      </Box>
    </motion.div>
  );
}
