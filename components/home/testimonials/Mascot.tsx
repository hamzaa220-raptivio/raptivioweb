"use client";

import Image from "next/image";
import {
  motion,
  MotionValue,
} from "framer-motion";

interface Props {
  outlineOpacity: MotionValue<number>;
  colorOpacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export default function Mascot({
  outlineOpacity,
  colorOpacity,
  scale,
}: Props) {
  return (
    <motion.div
      style={{ scale }}
      className="relative h-[650px] w-[520px]"
    >
      {/* Glow */}

      <motion.div
        style={{
          opacity: colorOpacity,
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[#FFCA00]/20 blur-[120px]"
      />

      {/* Outline */}

      <motion.div
        style={{
          opacity: outlineOpacity,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/mascot/mascot-outline.webp"
          alt="Rapti AI"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Color */}

      <motion.div
        style={{
          opacity: colorOpacity,
        }}
        className="absolute inset-0"
      >
        <Image
          src="/mascot/mascot-color.webp"
          alt="Rapti AI"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}