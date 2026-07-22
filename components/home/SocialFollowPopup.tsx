"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/raptivio/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/raptivio/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Raptivio",
    icon: FaFacebookF,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@raptivio",
    icon: FaTiktok,
  },
];

const SESSION_KEY = "raptivio-social-follow-popup-seen";

export default function SocialFollowPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const showTimer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsVisible(true);

      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5500);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center px-5">
          <motion.div
            role="dialog"
            aria-label="Follow Raptivio on social media"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { x: "120vw", opacity: 0 }
            }
            animate={{ x: 0, opacity: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { x: "-120vw", opacity: 0 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-[30px] border border-white/60 bg-white/95 p-7 text-center shadow-[0_30px_100px_rgba(7,26,99,0.25)] backdrop-blur-xl sm:p-9"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-200/45 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-14 h-52 w-52 rounded-full bg-[#FFCA00]/20 blur-3xl" />

            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close social media prompt"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 transition hover:bg-slate-100 hover:text-[#071A63]"
            >
              <X size={17} />
            </button>

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4B400]">
                Stay connected
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#071A63] sm:text-4xl">
                Follow Raptivio
              </h2>

              <p className="mx-auto mt-4 max-w-sm leading-7 text-slate-600">
                Follow us for practical insights on AI, marketing, software,
                automation and business growth.
              </p>

              <div className="mt-7 flex justify-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Raptivio on ${label}`}
                    title={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071A63] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#071A63]/30 hover:bg-[#071A63] hover:text-white hover:shadow-lg"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
