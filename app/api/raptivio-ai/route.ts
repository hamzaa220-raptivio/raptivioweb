import { NextResponse } from "next/server";
import { RAPTIVIO_AI_KNOWLEDGE } from "@/lib/raptivio-ai-knowledge";

export const runtime = "nodejs";

type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

type ResponseOutput = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
};

function getResponseText(data: { output?: ResponseOutput[] }) {
  return data.output
    ?.flatMap((item) => item.content ?? [])
    .filter((content) => content.type === "output_text")
    .map((content) => content.text)
    .filter((text): text is string => Boolean(text))
    .join("\n")
    .trim();
}

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Ask me what you want to build, improve, automate or grow." }, { status: 400 });
    }
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: "Raptivio AI is not connected yet. Please add OPENAI_API_KEY to the server environment." }, { status: 500 });
    }

    const safeHistory: ConversationMessage[] = Array.isArray(history)
      ? history
          .filter(
            (item): item is ConversationMessage =>
              item &&
              (item.role === "user" || item.role === "assistant") &&
              typeof item.content === "string",
          )
          .slice(-8)
          .map((item) => ({
            role: item.role,
            content: item.content.slice(0, 1800),
          }))
      : [];

    const conversationInput = [
      ...safeHistory.map(
        (item) =>
          `${item.role === "user" ? "Visitor" : "Raptivio AI"}: ${item.content}`,
      ),
      `Visitor: ${message.slice(0, 2500)}`,
    ].join("\n\n");

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        instructions: RAPTIVIO_AI_KNOWLEDGE,
        input: conversationInput,
        max_output_tokens: 650,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI API error:", data);
      return NextResponse.json({ reply: "I am connected, but the AI model request failed. Please check the server terminal error." }, { status: 500 });
    }
    return NextResponse.json({ reply: getResponseText(data) || "I can help with growth services, AI automation, websites, software, case studies or solutions. What are you looking for?" });
  } catch (error) {
    console.error("Raptivio AI route error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again or contact Raptivio through the contact page." }, { status: 500 });
  }
}
