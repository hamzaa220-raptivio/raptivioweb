"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import FloatingTestimonials from "./FloatingTestimonials";
import Mascot from "./Mascot";

export default function TestimonialScene() {

  const { scrollYProgress } = useScroll();

  const outlineOpacity = useTransform(
    scrollYProgress,
    [0.20, 0.40],
    [1, 0]
  );

  const colorOpacity = useTransform(
    scrollYProgress,
    [0.25, 0.50],
    [0, 1]
  );

  const mascotScale = useTransform(
    scrollYProgress,
    [0.15, 0.50],
    [0.92, 1.08]
  );

  const cardsOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.55],
    [1, 0]
  );

  const cardsY = useTransform(
    scrollYProgress,
    [0.30, 0.60],
    [0, -80]
  );

  return (

    <div className="relative mt-28 h-[1200px]">

      {/* Background Glow */}

      <motion.div
        style={{
          opacity: colorOpacity,
        }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFCA00]/15 blur-[140px]"
      />

      {/* Mascot */}

      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <Mascot
          outlineOpacity={outlineOpacity}
          colorOpacity={colorOpacity}
          scale={mascotScale}
        />
      </div>

      <FloatingTestimonials
        opacity={cardsOpacity}
        y={cardsY}
      />
            <FloatingTestimonials
        opacity={cardsOpacity}
        y={cardsY}
      />

    </div>

  );
}
