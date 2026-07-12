"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  x: number;
  y: number;
  delay?: number;
}

export default function FloatingCard({
  children,
  x,
  y,
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
      }}
      animate={{
        opacity: 1,
        x: [x, x + 8, x],
        y: [y, y - 12, y],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay,
        },
        x: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
        y: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className="absolute"
    >
      {children}
    </motion.div>
  );
}