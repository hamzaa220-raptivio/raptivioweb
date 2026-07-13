"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Sparkles,
} from "lucide-react";

import AnimatedBackground from "@/components/ui/AnimatedBackground";

import { CaseStudy } from "./case-study-data";

interface Props {
  study: CaseStudy;
}

const accentMap = {
  blue: {
    glow: "#2563eb",
    badge:
      "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },

  yellow: {
    glow: "#F4B400",
    badge:
      "bg-[#F4B400]/15 text-[#F4B400] border-[#F4B400]/30",
  },

  green: {
    glow: "#10b981",
    badge:
      "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },

  purple: {
    glow: "#8b5cf6",
    badge:
      "bg-violet-500/15 text-violet-300 border-violet-500/30",
  },
};

export default function FeaturedCase({
  study,
}: Props) {
  const accent = accentMap[study.accent];

  return (
    <motion.section
      key={study.id}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#071120] shadow-2xl"
    >
      <AnimatedBackground color={study.accent} />

      <div className="relative z-10 grid gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT */}

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <span
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${accent.badge}`}
            >
              {study.industry}
            </span>

            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
              {study.country}
            </span>

            <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">

              <Sparkles size={14} />

              Success Story

            </span>

          </div>

          <h2 className="mt-6 font-manrope text-5xl font-bold leading-tight text-white">
            {study.company}
          </h2>

          <h3 className="mt-5 max-w-xl text-2xl font-semibold leading-snug text-white">
            {study.headline ?? study.metricLabel}
          </h3>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            {study.description}
          </p>

          <div className="mt-8 space-y-4">

            {(study.results ?? []).map((result) => (

              <motion.div
                key={result}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="flex items-start gap-4"
              >

                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    background: `${accent.glow}22`,
                    color: accent.glow,
                  }}
                >
                  <Check size={15} />
                </div>

                <span className="text-[15px] leading-7 text-slate-200">
                  {result}
                </span>

              </motion.div>

            ))}

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {(study.platforms ?? []).map((platform) => (

              <span
                key={platform}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {platform}
              </span>

            ))}

          </div>

          <motion.a
            href="/case-studies"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#071A63]"
          >

            Read Full Case Study

            <ArrowUpRight size={18} />

          </motion.a>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col gap-5">

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >

            <div
              className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full blur-3xl"
              style={{
                background: `${accent.glow}25`,
              }}
            />
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Primary Result
            </p>

            <div
              className="mt-5 text-6xl font-bold"
              style={{
                color: accent.glow,
              }}
            >
              {study.metric}
            </div>

            <p className="mt-3 text-lg text-slate-300">
              {study.metricLabel}
            </p>

          </motion.div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-4">

            {(study.stats ?? []).map((stat) => (

              <motion.div
                key={stat.label}
                whileHover={{
                  y: -5,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  {stat.label}
                </div>

                <div
                  className="mt-3 text-2xl font-bold"
                  style={{
                    color: accent.glow,
                  }}
                >
                  {stat.value}
                </div>

              </motion.div>

            ))}

          </div>

          {/* Project Summary */}

          <motion.div
            whileHover={{
              y: -4,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >

            <div className="mb-6 flex items-center gap-3">

              <Globe2
                size={18}
                style={{
                  color: accent.glow,
                }}
              />

              <h4 className="font-semibold text-white">
                Project Summary
              </h4>

            </div>

            <div className="space-y-4">

              {study.services.map((service) => (

                <div
                  key={service}
                  className="flex items-center gap-3"
                >

                  <div
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: accent.glow,
                    }}
                  />

                  <span className="text-slate-300">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background: `linear-gradient(to top, ${accent.glow}22, transparent)`,
        }}
      />

    </motion.section>
  );
}
