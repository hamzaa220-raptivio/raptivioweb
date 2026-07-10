"use client";

import { motion } from "framer-motion";

interface Props {
  color?: "blue" | "yellow" | "green" | "purple";
}

export default function AnimatedBackground({
  color = "blue",
}: Props) {
  const glow = {
    blue: "from-[#071A63]/30 via-blue-500/10 to-transparent",
    yellow: "from-[#F4B400]/30 via-yellow-300/10 to-transparent",
    green: "from-emerald-500/30 via-emerald-300/10 to-transparent",
    purple: "from-violet-500/30 via-fuchsia-400/10 to-transparent",
  };

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px]">

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br ${glow[color]} blur-[120px]`}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-gradient-to-br ${glow[color]} blur-[140px]`}
      />

      {/* Floating Dots */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + i * 0.35,
            repeat: Infinity,
          }}
          className="absolute h-2 w-2 rounded-full bg-white/40"
          style={{
            left: `${8 + i * 7}%`,
            top: `${15 + ((i * 11) % 70)}%`,
          }}
        />
      ))}

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />
    </div>
  );
}