"use client";

import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";

export default function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-5xl text-center"
    >
      <h1 className="font-manrope text-5xl font-bold tracking-[-0.045em] text-[#071A63] md:text-6xl lg:text-7xl lg:leading-[1.02]">

        An Ecosystem for Growth,

        <br />

        Powered by <AuroraText>AI Intelligence.</AuroraText>

      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 lg:text-xl">

        We engineer AI, automation, software and performance marketing into
        one intelligent ecosystem that builds authority, generates qualified
        demand and helps ambitious businesses scale.

      </p>
    </motion.div>
  );
}