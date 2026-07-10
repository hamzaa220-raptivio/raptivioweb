"use client";

import { motion } from "framer-motion";
import { Industry } from "./case-study-data";

interface Props {
  industries: Industry[];
  selected: Industry;
  onChange: (industry: Industry) => void;
}

export default function IndustryFilter({
  industries,
  selected,
  onChange,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {industries.map((industry) => {
        const active = industry === selected;

        return (
          <motion.button
            key={industry}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => onChange(industry)}
            className={`relative overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active
                ? "border-[#071A63] bg-[#071A63] text-white shadow-lg"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#F4B400] hover:text-[#071A63] hover:shadow-md"
            }`}
          >
            {active && (
              <motion.div
                layoutId="industry-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#071A63]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{industry}</span>
          </motion.button>
        );
      })}
    </div>
  );
}