"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Handshake,
  LoaderCircle,
  Mail,
  MessageSquare,
  PhoneCall,
  Send,
  Sparkles,
  Upload,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import CTA from "@/components/home/cta/CTA";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvgegdd";

type Intent =
  | "services"
  | "solutions"
  | "case-study"
  | "career"
  | "collab"
  | "call";

type Step = {
  id: string;
  question: string;
  helper?: string;
  options?: string[];
  contact?: boolean;
  long?: boolean;
  placeholder?: string;
};

const intents: { id: Intent; label: string; icon: typeof Sparkles }[] = [
  { id: "services", label: "Raptivio's services", icon: Sparkles },
  { id: "solutions", label: "Raptivio's solutions", icon: BriefcaseBusiness },
  {
    id: "case-study",
    label: "Request a case study for my industry",
    icon: ClipboardList,
  },
  { id: "career", label: "Send resume / apply for a job", icon: Upload },
  { id: "collab", label: "Collaboration or partnership", icon: Handshake },
  { id: "call", label: "Just book a call", icon: PhoneCall },
];

const flows: Record<Intent, Step[]> = {
  services: [
    {
      id: "interest",
      question: "Which Raptivio service are you most interested in?",
      options: [
        "Lead generation, paid ads and sales growth",
        "Email campaigns and lifecycle marketing",
        "AI chatbots and automation",
        "Web apps and websites",
        "Content, brand and reputation",
        "A full growth ecosystem",
        "Other",
      ],
    },
    {
      id: "stage",
      question: "Where is your business right now?",
      options: [
        "Just starting",
        "Getting leads but need better quality or sales",
        "Growing and need systems",
        "Established and ready to scale",
      ],
    },
    {
      id: "priority",
      question: "What should we improve first?",
      options: [
        "More qualified leads and sales",
        "Conversion and website performance",
        "Speed and automation",
        "Brand trust and visibility",
        "Other",
      ],
    },
    {
      id: "contact",
      question: "Where should we send the next steps?",
      contact: true,
    },
  ],
  solutions: [
    {
      id: "solution",
      question: "Which Raptivio solution are you interested in?",
      options: [
        "Growth System for Mortgage Companies",
        "Accounting Operations System",
        "Human Resource Management System",
        "Salesforce Customer Intelligence Platform",
        "B2B Growth System",
        "A custom business solution",
        "Other",
      ],
    },
    {
      id: "team_size",
      question: "How large is the team that would use this solution?",
      options: ["1-10 people", "11-50 people", "51-200 people", "200+ people"],
    },
    {
      id: "timeline",
      question: "When would you like to start?",
      options: ["Immediately", "This month", "Next 1-3 months", "Just exploring"],
    },
    {
      id: "contact",
      question: "Who should we contact about this solution?",
      contact: true,
    },
  ],
  "case-study": [
    {
      id: "industry",
      question: "Which industry do you want a case study for?",
      options: [
        "Mortgage",
        "Home Improvement",
        "Hospitality or Restaurant",
        "Consultancy",
        "Healthcare",
        "Finance",
        "Education",
        "Professional Services",
        "Ecommerce",
        "Other",
      ],
    },
    {
      id: "contact",
      question: "Where should we send the best matching case study?",
      contact: true,
    },
  ],
  career: [
    {
      id: "role",
      question: "What kind of role are you interested in?",
      options: [
        "Performance marketing",
        "Web development",
        "AI automation",
        "Content and creative",
        "Sales or partnerships",
        "Other",
      ],
    },
    {
      id: "experience",
      question: "What is your experience level?",
      options: ["Student or entry level", "1-3 years", "3-5 years", "5+ years"],
    },
    {
      id: "availability",
      question: "What is your availability?",
      options: [
        "Immediately",
        "Within one month",
        "Within three months",
        "Open to future roles",
      ],
    },
  ],
  collab: [
    {
      id: "type",
      question: "What kind of collaboration do you have in mind?",
      options: [
        "Agency partnership",
        "Influencer / creator collaboration",
        "Technology partnership",
        "Referral partnership",
        "Event or community collaboration",
        "Other",
      ],
    },
    {
      id: "audience",
      question: "Who would this collaboration reach?",
      options: [
        "Local businesses",
        "B2B decision makers",
        "Consumers",
        "A specific industry community",
        "Other",
      ],
    },
    {
      id: "timing",
      question: "When do you want to explore it?",
      options: ["Immediately", "This month", "Next 1-3 months", "Just exploring"],
    },
    {
      id: "contact",
      question: "Who should we contact about the collaboration?",
      contact: true,
    },
  ],
  call: [
    {
      id: "topic",
      question: "What should we talk about on the call?",
      options: [
        "Growth marketing and sales",
        "AI automation",
        "Website or web app",
        "A Raptivio solution",
        "A custom requirement",
        "Not sure yet",
        "Other",
      ],
    },
    {
      id: "timeline",
      question: "When are you hoping to start?",
      options: ["Immediately", "This month", "Next 1-3 months", "Just exploring"],
    },
    {
      id: "contact",
      question: "Where should we send call details?",
      contact: true,
    },
  ],
};

const successContent: Record<Exclude<Intent, "career">, { title: string; text: string }> = {
  services: {
    title: "Your growth request has been sent.",
    text: "Our team will review your goals and recommend the most useful next step.",
  },
  solutions: {
    title: "Your solution request has been sent.",
    text: "We will review the system you selected and contact you with the right next step.",
  },
  "case-study": {
    title: "Your case study request has been sent.",
    text: "We will match your request with the most relevant available case study.",
  },
  collab: {
    title: "Your collaboration request has been sent.",
    text: "Our team will review the opportunity and contact you if there is a strong fit.",
  },
  call: {
    title: "Your call request has been sent.",
    text: "We will use your answers to make the first conversation focused and useful.",
  },
};

function OtherDetailsStep(id: string, subject: string): Step {
  return {
    id,
    question: `Tell us more about ${subject}.`,
    helper: "A short description is enough. We will ask follow-up questions if needed.",
    long: true,
    placeholder: "Share a few helpful details...",
  };
}

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent | null>(null);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const steps = useMemo(() => {
    if (!intent) return [];

    const base = flows[intent];

    if (intent === "services") {
      if (answers.interest === "AI chatbots and automation") {
        return [
          base[0],
          {
            id: "ai_focus",
            question: "Where would AI help most?",
            options: [
              "Customer support",
              "Lead qualification",
              "Sales follow-up",
              "Internal operations",
              "Other",
            ],
          },
          {
            id: "ai_goal",
            question: "What outcome matters most?",
            options: ["Faster replies", "Less manual work", "Better lead quality", "More visibility"],
          },
          base[3],
        ];
      }

      if (answers.interest === "Web apps and websites") {
        return [
          base[0],
          {
            id: "web_need",
            question: "What do you need to build?",
            options: [
              "Marketing website",
              "Ecommerce store",
              "Customer portal",
              "Custom web app",
              "Other",
            ],
          },
          {
            id: "web_goal",
            question: "What should it improve first?",
            options: ["Lead generation", "Customer experience", "Operations", "Online sales"],
          },
          base[3],
        ];
      }

      if (answers.interest === "Email campaigns and lifecycle marketing") {
        return [
          base[0],
          {
            id: "email_focus",
            question: "What should your email campaigns improve?",
            options: [
              "Lead nurturing",
              "Sales follow-up",
              "Newsletters and audience engagement",
              "Customer retention and repeat business",
              "Automated email journeys",
              "Other",
            ],
          },
          {
            id: "email_setup",
            question: "What is your current email marketing setup?",
            options: [
              "We are starting from scratch",
              "We have a list but no clear strategy",
              "We use Brevo, Mailchimp or another platform",
              "We have campaigns that need improvement",
              "Not sure yet",
            ],
          },
          base[3],
        ];
      }

      if (answers.interest === "Content, brand and reputation") {
        return [
          base[0],
          {
            id: "brand_focus",
            question: "Which part of your brand, content or reputation needs attention?",
            options: [
              "Brand strategy and positioning",
              "Visual identity and creative design",
              "Content strategy and production",
              "Social media presence",
              "Authority and online reputation",
              "A complete brand and content system",
              "Other",
            ],
          },
          {
            id: "brand_goal",
            question: "What should this work achieve first?",
            options: [
              "Clarify our market position",
              "Build trust and authority",
              "Create a consistent brand experience",
              "Improve content quality and consistency",
              "Strengthen audience engagement",
              "Improve or protect our reputation",
            ],
          },
          base[3],
        ];
      }

      if (answers.interest === "Other") {
        return [base[0], OtherDetailsStep("service_other", "the service you need"), base[3]];
      }
    }

    if (intent === "solutions" && answers.solution === "Other") {
      return [
        base[0],
        OtherDetailsStep("solution_other", "the business solution you have in mind"),
        ...base.slice(1),
      ];
    }

    if (intent === "case-study" && answers.industry === "Other") {
      return [
        base[0],
        OtherDetailsStep("industry_other", "your industry"),
        base[1],
      ];
    }

    if (intent === "career" && answers.role === "Other") {
      return [base[0], OtherDetailsStep("role_other", "the role you are seeking"), ...base.slice(1)];
    }

    if (intent === "collab" && answers.type === "Other") {
      return [
        base[0],
        OtherDetailsStep("collaboration_other", "the collaboration"),
        ...base.slice(1),
      ];
    }

    if (intent === "call" && answers.topic === "Other") {
      return [base[0], OtherDetailsStep("topic_other", "what you want to discuss"), ...base.slice(1)];
    }

    return base;
  }, [intent, answers.interest, answers.solution, answers.industry, answers.role, answers.type, answers.topic]);

  const step = steps[index];
  const setAnswer = (key: string, value: string) => {
    setAnswers((current) => ({ ...current, [key]: value }));
    setSubmitError("");
  };
  const valid = step?.contact
    ? Boolean(answers.name?.trim() && answers.email?.trim())
    : Boolean(step && answers[step.id]?.trim());

  const chooseIntent = (value: Intent) => {
    setIntent(value);
    setIndex(0);
    setAnswers({});
    setSubmitted(false);
    setSubmitError("");
  };

  const resetForm = () => {
    setIntent(null);
    setIndex(0);
    setAnswers({});
    setSubmitted(false);
    setSubmitting(false);
    setSubmitError("");
  };

  const submitToFormspree = async () => {
    if (!intent || intent === "career") return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Raptivio website request: ${intents.find((item) => item.id === intent)?.label}`,
          _replyto: answers.email,
          request_type: intent,
          request_label: intents.find((item) => item.id === intent)?.label,
          ...answers,
          source: "Raptivio contact page",
          page_url: window.location.href,
          submitted_at: new Date().toISOString(),
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; errors?: Array<{ message?: string }> }
        | null;

      if (!response.ok) {
        const message =
          result?.errors?.map((item) => item.message).filter(Boolean).join(" ") ||
          result?.error ||
          "We could not send your request right now.";
        throw new Error(message);
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const continueForm = async () => {
    if (index < steps.length - 1) {
      setIndex((current) => current + 1);
      return;
    }

    if (intent === "career") {
      setSubmitted(true);
      return;
    }

    await submitToFormspree();
  };

  const goBack = () => {
    setSubmitError("");
    if (index === 0) {
      setIntent(null);
      return;
    }
    setIndex((current) => current - 1);
  };

  const completedContent = intent && intent !== "career" ? successContent[intent] : null;

  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-[#F8F9FC]">
        <section className="relative px-6 pb-16 pt-40 md:pb-24 md:pt-44">
          <div className="absolute left-1/2 top-20 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-[130px]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-white/80 px-5 py-2 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#071A63]">
                  Contact Raptivio
                </span>
              </div>
              <h1 className="mt-8 font-manrope text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-[#071A63] md:text-7xl">
                Tell us what you need. We will point you in the right direction.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Whether you need growth services, a custom solution, a case study,
                a collaboration or a quick call, this form helps us understand the
                context before we respond.
              </p>
              <div className="mt-10 grid gap-4">
                {[
                  [
                    "For growth",
                    "Lead generation, paid ads, sales, landing pages, tracking and follow-up systems.",
                  ],
                  [
                    "For operations",
                    "AI chat, automation, CRM workflows and internal systems.",
                  ],
                  [
                    "For digital products",
                    "Premium websites, dashboards, web apps and software experiences.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[24px] border border-slate-200 bg-white/80 p-5 shadow-sm"
                  >
                    <h3 className="font-bold text-[#071A63]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-200 bg-white p-5 shadow-2xl md:p-7">
              {!intent && (
                <div>
                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071A63] text-white">
                      <MessageSquare size={25} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
                        Start Here
                      </p>
                      <h2 className="text-2xl font-bold text-[#071A63]">
                        What are you looking for?
                      </h2>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    {intents.map(({ id, label, icon: Icon }) => (
                      <button
                        type="button"
                        key={id}
                        onClick={() => chooseIntent(id)}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-[#F8F9FC] p-4 text-left transition hover:-translate-y-1 hover:border-[#FFCA00]/60 hover:bg-white hover:shadow-lg"
                      >
                        <span className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#071A63] shadow-sm">
                            <Icon size={20} />
                          </span>
                          <span className="font-semibold text-[#071A63]">{label}</span>
                        </span>
                        <ArrowRight size={18} className="text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {intent && step && !submitted && (
                <div>
                  <div className="mb-7">
                    <div className="mb-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={goBack}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-[#071A63]"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                      <span className="text-sm font-bold text-slate-400">
                        {Math.round(((index + 1) / steps.length) * 100)}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full bg-[#071A63] transition-[width] duration-300"
                        style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#FFCA00]">
                    Question {index + 1} of {steps.length}
                  </p>
                  <h2 className="mt-4 text-3xl font-bold leading-tight text-[#071A63] md:text-4xl">
                    {step.question}
                  </h2>
                  {step.helper && (
                    <p className="mt-3 text-sm leading-6 text-slate-500">{step.helper}</p>
                  )}

                  <div className="mt-7">
                    {step.options && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {step.options.map((option) => (
                          <button
                            type="button"
                            key={option}
                            onClick={() => setAnswer(step.id, option)}
                            className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                              answers[step.id] === option
                                ? "border-[#071A63] bg-[#071A63] text-white"
                                : "border-slate-200 bg-[#F8F9FC] text-[#071A63] hover:border-[#071A63]/40"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {!step.options && !step.contact &&
                      (step.long ? (
                        <textarea
                          name={step.id}
                          rows={6}
                          value={answers[step.id] || ""}
                          onChange={(event) => setAnswer(step.id, event.target.value)}
                          placeholder={step.placeholder}
                          className="w-full resize-none rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                      ) : (
                        <input
                          name={step.id}
                          value={answers[step.id] || ""}
                          onChange={(event) => setAnswer(step.id, event.target.value)}
                          placeholder={step.placeholder}
                          className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                      ))}

                    {step.contact && (
                      <div className="grid gap-4">
                        <input
                          name="name"
                          autoComplete="name"
                          value={answers.name || ""}
                          onChange={(event) => setAnswer("name", event.target.value)}
                          placeholder="Your name"
                          className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                        <input
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={answers.email || ""}
                          onChange={(event) => setAnswer("email", event.target.value)}
                          placeholder="you@company.com"
                          className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                        <input
                          name="company"
                          autoComplete="organization"
                          value={answers.company || ""}
                          onChange={(event) => setAnswer("company", event.target.value)}
                          placeholder="Company name"
                          className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={answers.phone || ""}
                          onChange={(event) => setAnswer("phone", event.target.value)}
                          placeholder="Phone / WhatsApp"
                          className="w-full rounded-2xl border border-slate-200 bg-[#F8F9FC] px-5 py-4 outline-none transition focus:border-[#071A63]"
                        />
                      </div>
                    )}
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="button"
                    disabled={!valid || submitting}
                    onClick={continueForm}
                    className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#071A63] px-7 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    {submitting
                      ? "Sending..."
                      : index === steps.length - 1
                        ? intent === "career"
                          ? "View Application Details"
                          : "Send Request"
                        : "Continue"}
                    {submitting ? (
                      <LoaderCircle size={18} className="animate-spin" />
                    ) : index === steps.length - 1 ? (
                      intent === "career" ? <Mail size={18} /> : <Send size={18} />
                    ) : (
                      <ArrowRight size={18} />
                    )}
                  </button>
                </div>
              )}

              {submitted && intent === "career" && (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCA00] text-[#071A63]">
                    <Mail size={30} />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-[#071A63]">
                    Share your resume with our team.
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    Email your resume and a short introduction to{" "}
                    <strong className="text-[#071A63]">career@raptivio.com</strong>.
                    Please mention the role you are applying for in the subject line.
                  </p>
                  <a
                    href="mailto:career@raptivio.com?subject=Career%20Application%20-%20Raptivio"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#071A63] px-7 py-4 text-sm font-semibold text-white"
                  >
                    Email Your Resume <Mail size={18} />
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mx-auto mt-4 block text-sm font-semibold text-slate-500 hover:text-[#071A63]"
                  >
                    Start another request
                  </button>
                </div>
              )}

              {submitted && completedContent && (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCA00] text-[#071A63]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-[#071A63]">
                    {completedContent.title}
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">{completedContent.text}</p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071A63] px-7 py-4 text-sm font-semibold text-white"
                  >
                    Start Another Request <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl rounded-[36px] bg-[#071A63] p-8 text-white shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#FFCA00]">
                  What Happens Next
                </p>
                <h2 className="mt-5 font-manrope text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                  We turn your message into a clear next step.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ["Review", "We read your context and identify the real need."],
                  ["Recommend", "We suggest the right service, solution or call format."],
                  ["Move", "If there is a fit, we map next steps and timeline."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[26px] border border-white/10 bg-white/10 p-6"
                  >
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
    </>
  );
}
