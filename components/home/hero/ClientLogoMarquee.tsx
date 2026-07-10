"use client";

import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  { name: "Fatima", image: "/logos/fatima-1.png" },
  { name: "FlexPoint", image: "/logos/flexpoint-1.png" },
  { name: "Integral", image: "/logos/integral-1.png" },
  { name: "Kamn", image: "/logos/kamn-1.png" },
  { name: "PayG", image: "/logos/payg-1.png" },
  { name: "PayWeekly", image: "/logos/payweeklyflooring-1.png" },
  { name: "Reliable", image: "/logos/reliable-1.png" },
  { name: "Silkoze", image: "/logos/silkoze-1.png" },
  { name: "SnugnPlay", image: "/logos/snugnplay-1.png" },
  { name: "Terteeb", image: "/logos/terteeb-1.png" },
  { name: "Upzone", image: "/logos/upzone-1.png" },
  { name: "Zeds", image: "/logos/zeds-1.png" },
  { name: "ZHouse", image: "/logos/zhouse-1.png" },
];

export default function ClientLogoMarquee() {
  return (
    <section className="relative mt-16 overflow-hidden">

      {/* Heading */}

      <div className="mb-10 flex items-center gap-6">

        <div className="h-px flex-1 bg-slate-200" />

        <p className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
          Trusted by ambitious businesses worldwide
        </p>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

      {/* Fade Left */}

      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#F8F9FC] to-transparent" />

      {/* Fade Right */}

      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#F8F9FC] to-transparent" />

      <Marquee
        pauseOnHover
        repeat={6}
        className="[--duration:45s]"
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex w-[260px] items-center justify-center px-4"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={400}
              height={400}
              className="
                h-28
                w-auto
                object-contain
                grayscale
                opacity-60
                transition-all
                duration-500
                ease-out
                hover:grayscale-0
                hover:opacity-100
                hover:scale-110
              "
            />
          </div>
        ))}
      </Marquee>

    </section>
  );
}