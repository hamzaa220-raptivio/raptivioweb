import {
  BarChart3,
  ArrowUpRight,
  Search,
  MousePointerClick,
  TrendingUp,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Google Ads",
  },
  {
    icon: MousePointerClick,
    title: "Meta Ads",
  },
  {
    icon: TrendingUp,
    title: "Performance Scaling",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
  },
];

const nodes = [
  {
    title: "Google Ads",
    top: "8%",
    left: "58%",
    color: "#F4B400",
  },
  {
    title: "Meta Ads",
    top: "26%",
    left: "72%",
    color: "#071A63",
  },
  {
    title: "LinkedIn Ads",
    top: "70%",
    left: "58%",
    color: "#F4B400",
  },
  {
    title: "YouTube Ads",
    top: "86%",
    left: "42%",
    color: "#071A63",
  },
];

export default function LargeCard() {
  return (
    <div className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F4B400]/20 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#071A63]/10 blur-[120px]" />

      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT */}

        <div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-xl">

            <BarChart3 size={30} />

          </div>

          <h3 className="mt-8 font-manrope text-5xl font-bold leading-tight text-[#071A63]">
            Digital Advertising Ecosystem
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            Build a predictable revenue engine through intelligent advertising
            systems that combine strategy, media buying, analytics, creative
            production and AI-driven optimisation.
          </p>

          {/* Services */}

          <div className="mt-10 space-y-4">

            {services.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition hover:border-[#F4B400]/40 hover:bg-white hover:shadow-md"
                >
                  <div className="rounded-xl bg-white p-3 shadow">

                    <Icon
                      size={18}
                      className="text-[#071A63]"
                    />

                  </div>

                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>

                </div>
              );
            })}

          </div>

          {/* Stats */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Google Ads",
              "Meta Ads",
              "LinkedIn Ads",
              "YouTube Ads",
            ].map((item) => (

              <div
                key={item}
                className="rounded-full border border-[#F4B400]/30 bg-[#F4B400]/10 px-4 py-2 text-sm font-medium text-[#071A63]"
              >
                {item}
              </div>

            ))}

          </div>

          <button className="mt-8 flex items-center gap-2 font-semibold text-[#071A63] transition hover:gap-4">

            Explore Advertising

            <ArrowUpRight size={18} />

          </button>

        </div>

        {/* RIGHT */}

        <div className="relative hidden min-h-[560px] lg:block">

          {/* Rings */}

          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#071A63]/10" />

          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F4B400]/20" />

          {/* Center */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F4B400] to-[#071A63] shadow-[0_30px_80px_rgba(7,26,99,.35)]">

            <BarChart3
              size={46}
              className="text-white"
            />

          </div>

          {/* Floating Pills */}

          {nodes.map((item) => (

            <div
              key={item.title}
              style={{
                top: item.top,
                left: item.left,
              }}
              className="absolute"
            >

              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-lg transition duration-300 hover:scale-105">

                <div
                  className="h-3 w-3 flex-shrink-0 rounded-full"
                  style={{ background: item.color }}
                />

                <span className="text-sm font-medium text-slate-700 whitespace-nowrap">
                  {item.title}
                </span>

              </div>

            </div>

          ))}

          {/* Floating Dots */}

          <div className="absolute left-[60%] top-[18%] h-4 w-4 rounded-full bg-[#F4B400] shadow-[0_0_35px_#F4B400]" />

          <div className="absolute left-[69%] top-[60%] h-4 w-4 rounded-full bg-[#071A63] shadow-[0_0_35px_#071A63]" />

          <div className="absolute left-[43%] top-[80%] h-3 w-3 rounded-full bg-[#F4B400]" />

        </div>

      </div>

    </div>
  );
}