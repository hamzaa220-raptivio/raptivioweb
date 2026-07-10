"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  ExternalLink,
} from "lucide-react";

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import DashboardGraph from "@/components/ui/DashboardGraph";

import { CaseStudy } from "./caseStudies";

interface Props {
  study: CaseStudy;
}

const accentMap = {
  blue: {
    glow: "#2563eb",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  yellow: {
    glow: "#F4B400",
    badge: "bg-[#F4B400]/15 text-[#F4B400] border-[#F4B400]/30",
  },
  green: {
    glow: "#10b981",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  purple: {
    glow: "#8b5cf6",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
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

      <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1fr_520px]">

        {/* LEFT */}

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <span className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] ${accent.badge}`}>
              {study.industry}
            </span>

            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
              {study.country}
            </span>

            <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-300">

              <Sparkles size={14} />

              Live Campaign

            </span>

          </div>

          <h2 className="mt-8 font-manrope text-5xl font-bold leading-tight text-white">
            {study.company}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {study.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {study.services.map((service) => (

              <motion.div
                key={service}
                whileHover={{
                  y: -4,
                }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur"
              >
                {service}
              </motion.div>

            ))}

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.a
              href={study.pdf}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-[#071A63]"
            >

              Read Full Case Study

              <ArrowUpRight size={18} />

            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur"
            >

              <ExternalLink size={18} />

              View Results

            </motion.button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          {/* KPI */}

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <div className="border-b border-white/10 p-7">

              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Primary Metric
              </p>

              <h3
                className="mt-5 text-6xl font-bold"
                style={{
                  color: accent.glow,
                }}
              >
                {study.metric}
              </h3>

              <p className="mt-3 text-lg text-slate-300">
                {study.metricLabel}
              </p>

            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10">

              {[
                {
                  title: "Quality",
                  value: "98%",
                },
                {
                  title: "Channels",
                  value: study.services.length,
                },
                {
                  title: "Market",
                  value: study.country,
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="p-5"
                >

                  <div className="flex items-center gap-2">

                    <Globe2
                      size={14}
                      style={{
                        color: accent.glow,
                      }}
                    />

                    <span className="text-[11px] uppercase tracking-wider text-slate-400">
                      {item.title}
                    </span>

                  </div>

                  <div className="mt-3 text-2xl font-bold text-white">
                    {item.value}
                  </div>

                </div>

              ))}

            </div>

          </motion.div>

                    {/* Dashboard */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <DashboardGraph />
          </motion.div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-3 gap-4">

            {[
              {
                title: "Lead Quality",
                value: "98%",
              },
              {
                title: "Performance",
                value: study.metric,
              },
              {
                title: "Services",
                value: `${study.services.length}`,
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >

                <motion.div
                  animate={{
                    x: [-40, 80, -40],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                  }}
                  className="absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent"
                />

                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {item.title}
                </div>

                <div
                  className="mt-3 text-3xl font-bold"
                  style={{
                    color: accent.glow,
                  }}
                >
                  {item.value}
                </div>

              </motion.div>

            ))}

          </div>

          {/* Activity */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >

            <div className="mb-5 flex items-center justify-between">

              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Campaign Activity
              </h4>

              <div className="flex items-center gap-2">

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                />

                <span className="text-xs text-emerald-300">
                  Live
                </span>

              </div>

            </div>

            <div className="space-y-4">

              {study.services.map((service, index) => (

                <div
                  key={service}
                  className="flex items-center gap-4"
                >

                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${65 + index * 12}%`,
                      background: accent.glow,
                    }}
                  />

                  <span className="text-sm text-slate-300 whitespace-nowrap">
                    {service}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{
          background: `linear-gradient(to top, ${accent.glow}22, transparent)`,
        }}
      />

    </motion.section>
  );
}