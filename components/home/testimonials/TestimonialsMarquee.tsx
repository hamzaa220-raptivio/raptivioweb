"use client";

import { Marquee } from "@/components/ui/marquee";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

export default function TestimonialsMarquee() {
  return (
    <div className="relative mt-20">

      {/* Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      {/* Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-white to-transparent" />

      <Marquee
        pauseOnHover
        repeat={4}
        className="[--gap:2rem] py-6"
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </Marquee>

    </div>
  );
}