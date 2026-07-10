"use client";

import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import TypingPlaceholder from "./TypingPlaceholder";

export default function AIConsole() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      whileHover={{ y: -4 }}
      id="intelligence"
      className="scroll-mt-32 mx-auto mt-8 w-full max-w-4xl"
    >
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl">

        {/* Animated Border */}
        <BorderBeam
          size={220}
          duration={8}
          colorFrom="#2563eb"
          colorTo="#7c3aed"
        />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071A63]/10">
              <Sparkles className="h-5 w-5 text-[#071A63]" />
            </div>

            <div>
              <h3 className="text-base font-semibold text-[#071A63]">
                Meet Raptivio AI
              </h3>

              <p className="text-sm text-slate-500">
                Your AI Growth Consultant
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1">

            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-xs font-medium text-green-700">
              Online
            </span>

          </div>

        </div>

        {/* Chat Area */}
        <div className="flex items-center gap-4 px-6 py-5">

          <div className="flex-1">

            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Ask Raptivio AI
            </p>

            <TypingPlaceholder />

          </div>

          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A63] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#0B2A8F]"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}
