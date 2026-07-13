import {
  Palette,
  PenTool,
  MonitorPlay,
  Image,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Brand Identity",
  },
  {
    icon: Image,
    title: "Creative Design",
  },
  {
    icon: MonitorPlay,
    title: "Video Production",
  },
  {
    icon: Sparkles,
    title: "Content Strategy",
  },
];

export default function MarketingCard() {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Background */}

      <div className="absolute -top-12 right-0 h-52 w-52 rounded-full bg-[#F4B400]/15 blur-[120px]" />

      <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-[#071A63]/10 blur-[100px]" />

      <div className="relative z-10">

        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#071A63] text-white shadow-lg">

          <Palette size={26} />

        </div>

        {/* Heading */}

        <h3 className="mt-7 font-manrope text-3xl font-bold leading-tight text-[#071A63]">
          Brand &
          <br />
          Creative
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Build memorable brands through strategy, storytelling and creative
          experiences that inspire trust and drive engagement.
        </p>

        {/* Services */}

        <div className="mt-8 grid grid-cols-2 gap-3">

          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-[#F4B400]/40 hover:bg-white hover:shadow-md"
              >

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">

                  <Icon
                    size={18}
                    className="text-[#071A63]"
                  />

                </div>

                <p className="text-sm font-semibold text-[#071A63]">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

        {/* Mini Stats */}

        <div className="mt-8 flex flex-wrap gap-2">

          {[
            "UI / UX",
            "Social Media",
            "Motion",
            "Creative Strategy",
          ].map((item) => (

            <span
              key={item}
              className="rounded-full bg-[#F4B400]/10 px-3 py-1 text-xs font-semibold text-[#071A63]"
            >
              {item}
            </span>

          ))}

        </div>

        {/* CTA */}

        <a href="/services" className="mt-7 flex items-center gap-2 font-semibold text-[#071A63] transition-all hover:gap-4">

          Explore Creative

          <ArrowUpRight size={18} />

        </a>

      </div>

    </div>
  );
}
