"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { BlogPost } from "./blog-data";

interface Props {
  post: BlogPost;
}

const badgeColors = {
  AI: "bg-violet-500/90",
  SEO: "bg-emerald-500/90",
  Marketing: "bg-blue-600/90",
  "Web Development": "bg-[#071A63]/90",
};

export default function InsightCard({
  post,
}: Props) {
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
      className="group w-full shrink-0 md:w-[430px]"
    >
      <Link
        href={post.slug}
        target="_blank"
        className="block"
      >

        <div className="relative overflow-hidden rounded-[32px] bg-[#071120]">

          {/* IMAGE */}

          <div className="relative h-[250px] overflow-hidden rounded-[32px] sm:h-[270px]">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F4B400]/10 blur-3xl" />

            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#071A63]/20 blur-3xl" />

            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 767px) calc(100vw - 4rem), 430px"
              className="object-cover saturate-75 transition duration-700 group-hover:scale-105 group-hover:saturate-100"
            />

            <div className="absolute inset-0 bg-gradient-to-br
from-[#071A63]/70
via-[#071A63]/25
to-[#F4B400]/20
transition-opacity
duration-500
group-hover:opacity-90" />

            <div className="absolute inset-0 bg-gradient-to-t
from-black/70
via-black/20
to-transparent" />

            {/* CATEGORY */}

            <div className="absolute left-6 top-6">

              <span
                className={`rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-md ${badgeColors[post.category]}`}
              >
                {post.category}
              </span>

            </div>

            {/* SUBTLE RAPTIVIO INSIGHTS MARK */}

            <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/75 px-3 py-2 opacity-70 shadow-sm backdrop-blur-md transition-opacity duration-300 group-hover:opacity-90">
              <Image
                src="/logos/raptivio-logo.png"
                alt="Raptivio"
                width={82}
                height={16}
                className="h-auto w-[72px] object-contain sm:w-[82px]"
              />

              <span className="h-3.5 w-px bg-[#071A63]/20" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#071A63]/75 sm:text-[10px]">
                Insights
              </span>
            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="mt-7">

          <h3 className="max-w-[95%] text-[22px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#071A63] transition-colors duration-300 group-hover:text-[#0F3EA8] sm:max-w-[88%] sm:text-[25px]">
            {post.title}
          </h3>

          <div className="mt-5 flex items-center gap-3 text-[15px] text-slate-500">

            <span>{post.readTime}</span>

            <span>•</span>

            <span>{post.date}</span>

          </div>
                    <div className="mt-7 flex items-center justify-between">

            <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#071A63] transition-all duration-300 group-hover:gap-3">

              Read article

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </div>

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              className="h-2 w-2 rounded-full bg-[#F4B400]"
            />

          </div>

        </div>

      </Link>

    </motion.article>
  );
}
