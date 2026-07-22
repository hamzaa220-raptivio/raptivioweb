"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company }),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "We could not add your email right now.");
      }

      setEmail("");
      setState("success");
      setMessage(data.message || "You are now part of Raptivio Intelligence.");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not add your email right now."
      );
    }
  }

  return (
    <div className="max-w-md">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
        Join Raptivio Intelligence
      </p>
      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
        Practical ideas on AI, growth, automation and software, sent
        occasionally.
      </p>

      <form onSubmit={handleSubmit} className="mt-5" noValidate>
        <div className="flex overflow-hidden rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-sm transition focus-within:border-[#071A63]/40 focus-within:bg-white focus-within:shadow-md">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (state !== "idle" && state !== "loading") {
                setState("idle");
                setMessage("");
              }
            }}
            placeholder="Your email address"
            disabled={state === "loading"}
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-[#071A63] outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
          />

          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="newsletter-company">Company</label>
            <input
              id="newsletter-company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={state === "loading" || !email.trim()}
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#071A63] px-5 text-sm font-bold text-white transition hover:bg-[#102d8f] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : state === "success" ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            )}
            <span>{state === "loading" ? "Joining" : "Join"}</span>
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {message ? (
            <p
              className={`mt-2 text-xs leading-5 ${
                state === "success" ? "text-emerald-700" : "text-red-600"
              }`}
            >
              {message}
            </p>
          ) : (
            <p className="mt-2 text-xs leading-5 text-slate-400">
              No noise. Unsubscribe anytime.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
