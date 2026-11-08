"use client";

import { Compass, BookCheck, Lightbulb, Landmark } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function AboutSection() {
  const pillars = [
    {
      icon: BookCheck,
      title: "Kekuatan Iman & Al-Qur'an",
      desc: "Menghidupkan kecintaan terhadap Al-Qur'an dan syiar adzan sebagai pondasi moral spiritual pelajar muslim nusantara.",
      accent: "text-skyGlow-300 bg-royalBlue-950/80 border-skyGlow-400/40",
    },
    {
      icon: Lightbulb,
      title: "Ketangkasan LCCI & Ilmu",
      desc: "Mengasah kecepatan nalar, wawasan peradaban Islam, dan ketajaman berpikir melalui ajang Cerdas Cermat Islami.",
      accent: "text-royalBlue-200 bg-royalBlue-950/80 border-royalBlue-500/40",
    },
    {
      icon: Compass,
      title: "Estetika Seni Kaligrafi & Warna",
      desc: "Mengekspresikan keindahan mushaf ayat suci dan eksplorasi karya visual mewarnai yang bernilai dakwah luhur.",
      accent: "text-skyGlow-400 bg-royalBlue-950/80 border-skyGlow-400/40",
    },
  ];

  const highlights = [
    { number: "5", label: "Cabang Lomba Prestisius" },
    { number: "2", label: "Kategori Jenjang (SD & SMP)" },
    { number: "34", label: "Cakupan Provinsi se-Indonesia" },
    { number: "100%", label: "Penjurian Objektif & Transparan" },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3">
            <Landmark className="w-3.5 h-3.5" />
            <span>Mengenal Seven Skies 2027</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            Panggung Prestasi Pelajar Islam <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyGlow-300 via-royalBlue-200 to-pureWhite">
              Tingkat Nasional
            </span>
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100 leading-relaxed">
            Seven Skies 2027 adalah ajang tahunan bergengsi persembahan{" "}
            <strong className="text-white font-bold">{siteConfig.meta.organizer}</strong>. 
            Menghadirkan 5 cabang kompetisi: <strong>LCCI, Kaligrafi, MHQ, Mewarnai, dan Adzan</strong> untuk melahirkan generasi berkarakter mulia.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="card-surface p-7 rounded-3xl border border-royalBlue-700 hover:border-skyGlow-400 transition-all duration-300 group hover:-translate-y-1.5 shadow-xl shadow-royalBlue-950/60"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 transition-transform duration-300 group-hover:scale-110 ${pillar.accent}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-royalBlue-100 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Numbers Strip */}
        <div className="p-8 rounded-3xl bg-royalBlue-850/90 border border-skyGlow-400/30 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-pureWhite via-skyGlow-200 to-royalBlue-300 tracking-tight">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-royalBlue-200 mt-1 max-w-[150px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
