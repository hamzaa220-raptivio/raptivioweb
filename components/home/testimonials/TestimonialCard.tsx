"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Testimonial } from "./testimonial-data";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="relative w-full rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(2,8,23,0.08)] backdrop-blur-xl"
    >
      <div className="absolute left-0 top-0 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#FFCA00] via-[#FFD84A] to-transparent" />

      {/* Stars */}

      <div className="mb-5 flex gap-1">

        {[1,2,3,4,5].map((star)=>(
          <Star
            key={star}
            size={16}
            fill="#FFCA00"
            stroke="#FFCA00"
          />
        ))}

      </div>

      {/* Quote */}

      <p className="text-[17px] leading-8 tracking-[-0.02em] text-[#071A63]">

        &ldquo;{testimonial.quote}&rdquo;

      </p>

      {/* Divider */}

      <div className="my-7 h-px bg-slate-200" />

      {/* Bottom */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white">

          <Image
            src={testimonial.logo}
            alt={testimonial.company}
            width={34}
            height={34}
            className="object-contain"
          />

        </div>

        <div>

          <h4 className="font-semibold text-[#071A63]">

            {testimonial.person}

          </h4>

          <p className="text-sm text-slate-500">

            {testimonial.title}

          </p>

          <p className="mt-1 text-sm font-medium text-[#071A63]">

            {testimonial.company}

          </p>

        </div>

      </div>

    </motion.div>
  );
}
