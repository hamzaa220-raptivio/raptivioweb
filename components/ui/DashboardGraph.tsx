"use client";

import { motion } from "framer-motion";

export default function DashboardGraph() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#071A63]/70 backdrop-blur-xl">

      {/* Bars */}

      <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-around px-8 pb-8">

        {[45, 70, 55, 90, 68, 95, 82].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height }}
            transition={{
              duration: 0.9,
              delay: i * 0.08,
            }}
            className="w-7 rounded-t-full bg-gradient-to-t from-[#F4B400] to-yellow-300"
          />
        ))}
      </div>

      {/* Graph */}

      <svg
        className="absolute inset-0"
        viewBox="0 0 500 250"
      >
        <motion.path
          d="M20 200 C90 150 120 180 180 120 S300 60 470 40"
          stroke="#F4B400"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />

        {[20, 180, 320, 470].map((x) => (
          <motion.circle
            key={x}
            cx={x}
            cy={100}
            r="5"
            fill="#F4B400"
            animate={{
              scale: [1, 1.6, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}