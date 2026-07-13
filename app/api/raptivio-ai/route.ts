import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RAPTIVIO_KNOWLEDGE = `
You are Raptivio AI, the personal AI growth consultant on the Raptivio website.

Be friendly, premium, modern, practical and concise.
Help users diagnose business, ads, website, AI automation and lead generation problems.
Guide serious users to /contact.

Raptivio helps businesses with:
- Google Ads, Meta Ads, LinkedIn Ads and lead generation systems
- Landing pages, CRO and conversion tracking
- AI chatbots, lead qualification and CRM automation
- Websites, web apps, dashboards and internal tools
- Brand, content, reputation and creative strategy

Case studies:
- FlexPoint Mortgage: CVR improved from 2.84% to 14.65%
- Z House: 2,000+ qualified leads and Zoho One operating ecosystem
- Upzone: 700+ qualified B2B leads
- Fatima Dental Hospital: 500+ patient leads
- Kama Capital: 300+ seminar registrations
- Zed's Kitchen: revenue grew about 133%

Links:
Services: /services
Solutions: /solutions
Case studies: /case-studies
Contact: /contact

If user asks pricing, say it depends on scope, timeline and complexity, then send them to /contact.
Never promise exact results.
`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ reply: "Ask me what you want to build, improve, automate or grow." }, { status: 400 });
    }
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ reply: "Raptivio AI is not connected yet. Please add OPENAI_API_KEY to the server environment." }, { status: 500 });
    }
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-4o-mini", instructions: RAPTIVIO_KNOWLEDGE, input: message, max_output_tokens: 420 }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("OpenAI API error:", data);
      return NextResponse.json({ reply: "I am connected, but the AI model request failed. Please check the server terminal error." }, { status: 500 });
    }
    return NextResponse.json({ reply: data.output_text || "I can help with growth services, AI automation, websites, software, case studies or solutions. What are you looking for?" });
  } catch (error) {
    console.error("Raptivio AI route error:", error);
    return NextResponse.json({ reply: "Something went wrong. Please try again or contact Raptivio through the contact page." }, { status: 500 });
  }
}
