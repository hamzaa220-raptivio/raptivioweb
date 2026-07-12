"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "framer-motion";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial-data";

export default function TestimonialsCarousel() {

  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {

    const interval = setInterval(() => {

      next();

    }, 7000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="mt-16">

      <AnimatePresence mode="wait">

        <TestimonialCard
          key={testimonials[active].id}
          testimonial={testimonials[active]}
        />

      </AnimatePresence>

      <div className="mt-10 flex items-center justify-between">

        {/* CLIENTS */}

        <div className="flex flex-wrap gap-5">
          {testimonials.map((item, index) => (

            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`flex items-center gap-3 rounded-full border px-4 py-3 transition-all duration-300 ${
                active === index
                  ? "border-[#F4B400] bg-[#F4B400]/10"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2">

                <Image
                  src={item.logo}
                  alt={item.company}
                  width={24}
                  height={24}
                  className="object-contain"
                />

              </div>

              <span
                className={`text-sm font-medium ${
                  active === index
                    ? "text-[#071A63]"
                    : "text-slate-600"
                }`}
              >
                {item.company}
              </span>

            </button>

          ))}

        </div>

        {/* ARROWS */}

        <div className="flex items-center gap-3">

          <button
            onClick={previous}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition hover:bg-slate-50"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A63] text-white transition hover:scale-105"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

    </div>

  );
}