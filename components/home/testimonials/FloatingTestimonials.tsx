"use client";

import {
  motion,
  MotionValue,
} from "framer-motion";

import FloatingCard from "./FloatingCard";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

interface Props {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export default function FloatingTestimonials({
  opacity,
  y,
}: Props) {
  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="absolute inset-0 z-40"
    >
      {/* TOP LEFT */}

      <FloatingCard
        x={120}
        y={70}
      >
        <TestimonialCard testimonial={testimonials[0]} />
      </FloatingCard>

      {/* TOP RIGHT */}

      <FloatingCard
        x={980}
        y={110}
        delay={0.4}
      >
        <TestimonialCard testimonial={testimonials[1]} />
      </FloatingCard>

      {/* LEFT */}

      <FloatingCard
        x={40}
        y={470}
        delay={0.8}
      >
        <TestimonialCard testimonial={testimonials[2]} />
      </FloatingCard>

      {/* RIGHT */}

      <FloatingCard
        x={1080}
        y={520}
        delay={1.2}
      >
        <TestimonialCard testimonial={testimonials[0]} />
      </FloatingCard>

      {/* BOTTOM LEFT */}

      <FloatingCard
        x={220}
        y={820}
        delay={1.6}
      >
        <TestimonialCard testimonial={testimonials[1]} />
      </FloatingCard>

      {/* BOTTOM RIGHT */}

      <FloatingCard
        x={920}
        y={820}
        delay={2}
      >
        <TestimonialCard testimonial={testimonials[2]} />
      </FloatingCard>

    </motion.div>
  );
}