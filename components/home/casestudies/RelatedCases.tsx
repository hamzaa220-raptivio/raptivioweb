"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Sparkles,
} from "lucide-react";

import type { CaseStudy } from "./case-study-data";

interface Props {
  studies: CaseStudy[];
  activeId: string;
  onSelect: (study: CaseStudy) => void;
}

const accentStyles = {
  blue: {
    glow: "from-blue-500/20 via-cyan-500/5 to-transparent",
    border: "border-blue-500/30",
    text: "text-blue-400",
    ring: "bg-blue-500",
  },

  yellow: {
    glow: "from-[#F4B400]/20 via-yellow-300/5 to-transparent",
    border: "border-[#F4B400]/30",
    text: "text-[#F4B400]",
    ring: "bg-[#F4B400]",
  },

  green: {
    glow: "from-emerald-500/20 via-emerald-300/5 to-transparent",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    ring: "bg-emerald-400",
  },

  purple: {
    glow: "from-violet-500/20 via-fuchsia-400/5 to-transparent",
    border: "border-violet-500/30",
    text: "text-violet-400",
    ring: "bg-violet-400",
  },
};

export default function RelatedCases({
  studies,
  activeId,
  onSelect,
}: Props) {
  return (
    <div className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            More Projects
          </p>

          <h3 className="mt-2 font-manrope text-3xl font-bold text-[#071A63]">
            Related Success Stories
          </h3>

        </div>

        <Sparkles className="text-[#F4B400]" />

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <AnimatePresence>

          {studies.map((study) => {

            const accent = accentStyles[study.accent];

            const active = study.id === activeId;

            return (

              <motion.button
                key={study.id}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={() => onSelect(study)}
                className={`group relative overflow-hidden rounded-[28px] border bg-white p-6 text-left shadow-sm transition-all duration-300 hover:shadow-2xl ${
                  active
                    ? accent.border
                    : "border-slate-200"
                }`}
              >

                {/* Background */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent.glow}`}
                />

                {/* Floating Orb */}

                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 12, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                  }}
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-[60px] ${accent.ring} opacity-20`}
                />

                <div className="relative z-10">

                  <div className="flex items-center justify-between">

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${accent.border} ${accent.text}`}
                    >
                      {study.industry}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                  <h4 className="mt-5 font-manrope text-2xl font-bold text-[#071A63]">
                    {study.company}
                  </h4>

                  <div className="mt-6">

                    <div className={`text-5xl font-bold ${accent.text}`}>
                      {study.metric}
                    </div>

                    <div className="mt-2 text-slate-500">
                      {study.metricLabel}
                    </div>

                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">

                    <Globe2 size={16} />

                    {study.country}

                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">

                    {study.services.slice(0, 3).map((service) => (

                      <span
                        key={service}
                        className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                      >
                        {service}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.button>

            );

          })}

        </AnimatePresence>

      </div>

    </div>
  );
}
