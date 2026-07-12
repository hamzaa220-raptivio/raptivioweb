"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Growth Services", href: "/services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Solutions", href: "#solutions" },
  { label: "Intelligence", href: "#intelligence" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-[28px] bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl lg:rounded-full lg:px-8">
      <div className="flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-[#0B1E63] md:text-3xl">
          <span className="text-[#F5B800]">R</span>aptivio
        </a>

        <div className="hidden gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[#0B1E63] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#102d8f] sm:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-[#0B1E63] transition hover:bg-slate-200 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 border-t border-slate-100 pt-4 lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#0B1E63]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#0B1E63] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#102d8f] sm:hidden"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
