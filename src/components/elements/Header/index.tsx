"use client";

import { motion } from "framer-motion";

import { useMenu } from "@/hooks/MenuContext";
import { getAnimationVariants, slideDown } from "@/utils/animations";
import { Box } from "../Box";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import { Logo } from "../Logo";
import { Menu } from "./Menu";

export function Header() {
  const { handleSetOpenClose } = useMenu();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={getAnimationVariants(slideDown)}
      className="justify-center bg-black-950 shadow-boxBorderMenu fixed w-full z-50"
    >
      <Box>
        <div className="flex items-center justify-between w-full py-5">
          <Logo />
          <Menu />
          <button
            className="flex md:hidden"
            onClick={() => handleSetOpenClose()}
            aria-label="Abrir menu de navegação"
            aria-expanded="false"
          >
            <HamburgerIcon size={30} onClick={() => handleSetOpenClose()} />
          </button>
        </div>
      </Box>
    </motion.div>
  );
}
