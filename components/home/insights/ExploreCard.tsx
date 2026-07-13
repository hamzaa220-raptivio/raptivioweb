"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ExploreCard() {
  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
      }}
      className="group w-[430px] shrink-0"
    >
      <Link
        href="/intelligence"
        className="block h-full"
      >
        <div className="flex aspect-square flex-col justify-between rounded-[32px] bg-[#071A63] p-10 text-white">

          <div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">

              <Sparkles size={28} />

            </div>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-blue-200">
              Insights
            </p>

            <h3 className="mt-5 text-4xl font-bold leading-tight">
              Explore
              <br />
              All Articles
            </h3>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              AI, software, marketing,
              automation and growth
              strategies from the
              Raptivio team.
            </p>

            <div className="mt-10 inline-flex items-center gap-3 font-semibold">

              Visit Blog

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

          </div>

        </div>

      </Link>

    </motion.article>
  );
}
