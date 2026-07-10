import {
  Bot,
  Brain,
  Workflow,
  Database,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const nodes = [
  {
    title: "AI Agents",
    icon: Bot,
    top: "6%",
    left: "50%",
  },
  {
    title: "Chatbots",
    icon: MessageSquare,
    top: "40%",
    left: "2%",
  },
  {
    title: "CRM",
    icon: Database,
    top: "40%",
    left: "76%",
  },
  {
    title: "Automation",
    icon: Workflow,
    top: "80%",
    left: "50%",
  },
];

export default function AICard() {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background */}

      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[#F4B400]/15 blur-[110px]" />

      <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#071A63]/10 blur-[90px]" />

      <div className="relative z-10">

        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-lg">

          <Bot size={26} />

        </div>

        {/* Heading */}

        <h3 className="mt-7 font-manrope text-3xl font-bold leading-tight text-[#071A63]">
          AI Intelligence
          <br />
          & Automation
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          AI systems that automate conversations, workflows, customer journeys
          and business operations across your organization.
        </p>

        {/* Diagram */}

        <div className="relative mt-10 h-[320px]">

          {/* Outer Ring */}

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#071A63]/10" />

          {/* Inner Ring */}

          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F4B400]/20" />

          {/* Center */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F4B400] to-[#071A63] shadow-xl">

            <Brain
              size={34}
              className="text-white"
            />

          </div>

          {/* Nodes */}

          {nodes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                className="absolute"
              >
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg transition duration-300 hover:scale-105">

                  <Icon
                    size={15}
                    className="text-[#071A63]"
                  />

                  <span className="whitespace-nowrap text-sm font-medium text-slate-700">
                    {item.title}
                  </span>

                </div>
              </div>
            );
          })}

          {/* Floating Dots */}

          <div className="absolute left-[24%] top-[18%] h-3 w-3 rounded-full bg-[#F4B400]" />

          <div className="absolute right-[18%] top-[22%] h-4 w-4 rounded-full bg-[#071A63]" />

          <div className="absolute left-[30%] bottom-[12%] h-3 w-3 rounded-full bg-[#F4B400]" />

          <div className="absolute right-[24%] bottom-[18%] h-4 w-4 rounded-full bg-[#071A63]" />

        </div>

        {/* Bottom Tags */}

        <div className="mt-4 flex flex-wrap gap-2">

          {[
            "GPT",
            "WhatsApp",
            "CRM",
            "Voice AI",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F4B400]/10 px-3 py-1 text-xs font-semibold text-[#071A63]"
            >
              {item}
            </span>
          ))}

        </div>

        <button className="mt-6 flex items-center gap-2 font-semibold text-[#071A63] transition hover:gap-4">

          Explore AI

          <ArrowUpRight size={18} />

        </button>

      </div>

    </div>
  );
}