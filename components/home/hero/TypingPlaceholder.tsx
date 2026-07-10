"use client";

import { useEffect, useState } from "react";

const questions = [
  "Can you build me a lead generation system?",
  "I want a high-performing Next.js website.",
  "Can you build an AI chatbot?",
  "Can you audit my marketing?",
  "Can you manage my Meta Ads?",
  "Can you manage my Google Ads?",
  "I want to automate my business operations.",
  "Why aren't my Google Ads giving me the desired results?",
  "How can I improve my lead quality?",
];

export default function TypingPlaceholder() {
  const [text, setText] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentQuestion = questions[questionIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentQuestion.length) {
        timeout = setTimeout(() => {
          setText(currentQuestion.slice(0, text.length + 1));
        }, 45 + Math.random() * 35);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentQuestion.slice(0, text.length - 1));
        }, 18);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setQuestionIndex((prev) => (prev + 1) % questions.length);
        }, 120);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, questionIndex]);

  return (
    <div className="flex min-h-14 items-center text-base text-slate-500 sm:min-h-8 md:text-xl">
      <span className="break-words">{text}</span>

      <span className="ml-1 h-6 w-[2px] animate-pulse bg-[#071A63]" />
    </div>
  );
}
