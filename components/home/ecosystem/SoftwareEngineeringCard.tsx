import {
  Globe,
  Boxes,
  Smartphone,
  LayoutDashboard,
  Cpu,
 Database,
  ArrowUpRight,
} from "lucide-react";

const stack = [
  {
    icon: Globe,
    title: "High-Performance Websites",
    tech: "Next.js • React",
  },
  {
    icon: Boxes,
    title: "Custom Web Apps",
    tech: "Node.js • APIs",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    tech: "CRM • Analytics",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    tech: "iOS • Android",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    tech: "OpenAI • AI Agents",
  },
  {
    icon: Database,
    title: "Cloud Infrastructure",
    tech: "AWS • Vercel",
  },
];

export default function SoftwareEngineeringCard() {
  return (
    <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background */}

      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#F4B400]/15 blur-[120px]" />

      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#071A63]/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Heading */}

        <div className="flex items-start justify-between flex-wrap gap-6">

          <div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-lg">

              <Globe size={30} />

            </div>

            <h3 className="mt-7 font-manrope text-4xl font-bold text-[#071A63]">
              Intelligent Web & Software Solutions
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              From lightning-fast websites to enterprise software, SaaS
              platforms and AI-powered applications, we engineer digital
              products designed for performance, scalability and long-term
              business growth.
            </p>

          </div>

        </div>

        {/* Grid */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4B400]/40 hover:bg-white hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white">

                  <Icon size={22} />

                </div>

                <h4 className="mt-5 font-semibold text-[#071A63]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  {item.tech}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">

          <div className="flex flex-wrap gap-2">

            {[
              "Next.js",
              "React",
              "Node.js",
              "AI APIs",
              "Cloud",
              "SaaS",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#F4B400]/10 px-3 py-2 text-xs font-semibold text-[#071A63]"
              >
                {tech}
              </span>
            ))}

          </div>

          <button className="flex items-center gap-2 font-semibold text-[#071A63] transition hover:gap-4">

            Explore Development

            <ArrowUpRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}