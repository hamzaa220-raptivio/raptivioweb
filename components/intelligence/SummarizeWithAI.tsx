"use client";

import { Sparkles } from "lucide-react";
import { BsOpenai } from "react-icons/bs";
import { SiClaude, SiGooglegemini } from "react-icons/si";

interface SummarizeWithAIProps {
  articleTitle: string;
  articleUrl: string;
}

export default function SummarizeWithAI({
  articleTitle,
  articleUrl,
}: SummarizeWithAIProps) {
  const prompt = `Read and summarize this Raptivio article: ${articleTitle}. Give me 5 concise key takeaways, explain what they mean for a business, and finish with 3 practical actions. Article: ${articleUrl}`;
  const encodedPrompt = encodeURIComponent(prompt);
  const providers = [
    {
      name: "ChatGPT",
      href: `https://chatgpt.com/?q=${encodedPrompt}`,
      icon: BsOpenai,
      color: "hover:border-emerald-300 hover:bg-emerald-50",
    },
    {
      name: "Claude",
      href: `https://claude.ai/new?q=${encodedPrompt}`,
      icon: SiClaude,
      color: "hover:border-orange-300 hover:bg-orange-50",
    },
    {
      name: "Gemini",
      href: `https://gemini.google.com/app?q=${encodedPrompt}`,
      icon: SiGooglegemini,
      color: "hover:border-blue-300 hover:bg-blue-50",
    },
  ];

  function copyPrompt() {
    navigator.clipboard?.writeText(prompt).catch(() => undefined);
  }

  return (
    <aside className="rounded-[26px] border border-[#071A63]/10 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A63] text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="font-bold text-[#071A63]">Summarize with AI</p>
          <p className="text-xs text-slate-500">Choose your preferred assistant</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {providers.map(({ name, href, icon: Icon, color }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={copyPrompt}
            aria-label={`Summarize this article with ${name}`}
            title={`Summarize with ${name}`}
            className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-2 text-center text-xs font-semibold text-[#071A63] transition ${color}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
            {name}
          </a>
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-400">
        Opens a new chat with a ready-to-use prompt. The prompt is also copied
        in case your assistant does not prefill it.
      </p>
    </aside>
  );
}
