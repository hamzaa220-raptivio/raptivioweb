"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
  size?: number;
  color?: string;
  top?: string;
  left?: string;
  delay?: number;
}

export default function FloatingOrb({
  size = 180,
  color = "#F4B400",
  top = "0%",
  left = "0%",
  delay = 0,
}: FloatingOrbProps) {
  return (
    <motion.div
      animate={{
        y: [0, -22, 0],
        x: [0, 18, 0],
        rotate: [0, 10, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: size,
        height: size,
        top,
        left,
        background: color,
      }}
      className="absolute rounded-full opacity-20 blur-[80px]"
    />
  );
}