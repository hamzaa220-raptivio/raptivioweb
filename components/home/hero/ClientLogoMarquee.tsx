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
    <section className="relative mt-14 overflow-hidden sm:mt-16">

      {/* Heading */}

      <div className="mb-10 flex items-center gap-3 sm:gap-6">

        <div className="h-px flex-1 bg-slate-200" />

        <p className="max-w-[230px] text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.22em] text-slate-500 sm:max-w-none sm:whitespace-nowrap sm:text-xs sm:tracking-[0.35em]">
          Trusted by ambitious businesses worldwide
        </p>

        <div className="h-px flex-1 bg-slate-200" />

      </div>

      <Marquee
        pauseOnHover
        repeat={4}
        className="[--duration:42s] [--gap:0.75rem] sm:[--gap:1.25rem]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex w-[145px] items-center justify-center px-1 sm:w-[185px] lg:w-[205px]"
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={400}
              height={400}
              className="
                h-24
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
                sm:h-28
              "
            />
          </div>
        ))}
      </Marquee>

    </section>
  );
}
