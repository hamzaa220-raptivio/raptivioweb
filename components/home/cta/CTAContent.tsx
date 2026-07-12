"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTAContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="max-w-4xl text-left"
    >
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FFCA00]">
          AI Powered Growth Ecosystem
        </span>
      </div>

      <h2 className="mt-10 text-6xl font-bold tracking-[-0.05em] text-white md:text-8xl">
        Ready to build?
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        Whether you&apos;re launching a startup, scaling an established business
        or modernising your operations with AI, Raptivio helps ambitious
        companies build intelligent software, powerful digital experiences and
        predictable growth systems.
      </p>

      <div className="mt-14">
        <a
          href="/contact"
          className="group inline-flex items-center gap-4 rounded-full bg-[#FFCA00] px-9 py-5 text-lg font-semibold text-[#071A63] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_80px_rgba(255,202,0,.45)]"
        >
          Get Started Today
          <ArrowRight
            size={22}
            className="transition group-hover:translate-x-1"
          />
        </a>
      </div>
    </motion.div>
  );
}
