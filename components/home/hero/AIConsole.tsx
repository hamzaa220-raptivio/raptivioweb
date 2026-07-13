"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import TypingPlaceholder from "./TypingPlaceholder";

type Message = { role: "user" | "assistant"; content: string };

export default function AIConsole() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const askRaptivio = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || loading) return;
    setInput(""); setLoading(true);
    setMessages((current) => [...current, { role: "user", content: question }]);
    try {
      const response = await fetch("/api/raptivio-ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: question }) });
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", content: data.reply || "I can help you choose the right Raptivio service, solution or case study." }]);
    } catch { setMessages((current) => [...current, { role: "assistant", content: "I am having trouble connecting right now. Please contact Raptivio through the contact page." }]); }
    finally { setLoading(false); }
  };
  return <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} whileHover={{ y: -4 }} id="intelligence" className="mx-auto mt-8 w-full max-w-4xl scroll-mt-32"><div className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl"><BorderBeam size={220} duration={8} colorFrom="#2563eb" colorTo="#7c3aed" /><div className="flex items-center justify-between border-b border-slate-100 px-6 py-5"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071A63]/10"><Sparkles className="h-5 w-5 text-[#071A63]" /></div><div><h3 className="text-base font-semibold text-[#071A63]">Meet Raptivio AI</h3><p className="text-sm text-slate-500">Your AI Growth Consultant</p></div></div><div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1"><span className="h-2 w-2 animate-pulse rounded-full bg-green-500" /><span className="text-xs font-medium text-green-700">Online</span></div></div>{messages.length > 0 && <div className="max-h-[280px] space-y-4 overflow-y-auto border-b border-slate-100 px-6 py-5">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-[#071A63] text-white" : "bg-slate-100 text-slate-700"}`}>{message.content}</div></div>)}{loading && <div className="inline-flex rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-500">Raptivio AI is thinking...</div>}</div>}<form onSubmit={askRaptivio} className="flex items-center gap-4 px-6 py-5"><div className="flex-1"><p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Ask Raptivio AI</p><div className="relative min-h-10">{!input && messages.length === 0 && <div className="pointer-events-none absolute inset-0"><TypingPlaceholder /></div>}<input value={input} onChange={(event) => setInput(event.target.value)} placeholder={messages.length > 0 ? "Ask about services, solutions, case studies..." : ""} aria-label="Ask Raptivio AI" className="relative z-10 h-10 w-full bg-transparent text-xl text-slate-700 caret-[#071A63] outline-none placeholder:text-slate-400" /></div></div><button type="submit" disabled={loading || !input.trim()} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A63] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#0B2A8F] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:hover:scale-100"><ArrowUp size={20} /></button></form></div></motion.div>;
}
