"use client";

import HeroBackground from "./HeroBackground";
import HeroHeading from "./HeroHeading";
import HeroChat from "./HeroChat";
import ClientLogoMarquee from "./ClientLogoMarquee";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8F9FC] pt-36 pb-4">

      {/* Background */}
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <HeroHeading />

        {/* AI Chat */}
        <HeroChat />

        {/* Trusted By */}
        <ClientLogoMarquee />

      </div>

    </section>
  );
}
