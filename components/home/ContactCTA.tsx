import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-32 bg-[#071A63] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F4B400]">
            Start growing
          </span>
          <h2 className="mt-5 font-manrope text-4xl font-bold leading-tight md:text-6xl">
            Ready to build your growth ecosystem?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Tell us what you want to improve, and Raptivio can help shape the
            strategy, systems, and campaigns to move it forward.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4B400] px-7 py-4 text-sm font-bold text-[#071A63] transition hover:scale-105"
          >
            <MessageCircle size={18} />
            Book a Call
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            View Services
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
