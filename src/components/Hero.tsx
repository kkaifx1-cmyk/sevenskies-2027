"use client";

import { Sparkles, Trophy, BookOpen, Camera, ArrowDown, ChevronRight, CheckCircle2 } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { siteConfig } from "@/config/siteConfig";
import GlowButton from "@/components/ui/GlowButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient Royal Blue Depth Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-b from-royalBlue-600/30 via-skyGlow-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-royalBlue-500/20 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-skyGlow-500/15 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Official Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royalBlue-850/90 border border-skyGlow-400/40 text-skyGlow-300 text-xs font-bold mb-6 shadow-md backdrop-blur-md animate-float-subtle">
          <Sparkles className="w-4 h-4 text-skyGlow-400" />
          <span>6 Cabang Lomba Resmi — Tingkat Nasional</span>
          <span className="w-1.5 h-1.5 rounded-full bg-skyGlow-400 animate-ping" />
        </div>

        {/* Main Title: Bold Futuristic Character in Blue & White */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white mb-4 leading-none">
          SEVEN SKIES <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyGlow-300 via-royalBlue-300 to-pureWhite">2027</span>
        </h1>

        {/* Tagline & Subtitle */}
        <div className="mb-4 max-w-4xl">
          <p className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-pureWhite leading-snug tracking-tight">
            &ldquo;{siteConfig.tagline.subtitle}&rdquo;
          </p>
        </div>

        {/* Highlight 6 Lomba Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-4xl">
          {["LCCI", "Kaligrafi", "MHQ", "Mewarnai", "Adzan", "Dai Muda"].map((lomba) => (
            <span
              key={lomba}
              className="px-3.5 py-1.5 rounded-xl bg-royalBlue-800/80 border border-skyGlow-400/30 text-xs font-extrabold text-pureWhite shadow-sm hover:border-skyGlow-300 transition-colors"
            >
              ★ {lomba}
            </span>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="w-full mb-10">
          <CountdownTimer />
        </div>

        {/* CTA Buttons with Full-Body Royal Blue & White Glow */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <GlowButton
            href="#lomba"
            variant="royal"
            className="w-full sm:w-auto px-7 py-3.5 text-sm"
          >
            <Trophy className="w-4 h-4 text-skyGlow-200" />
            <span>Pilih Cabang Lomba</span>
            <ChevronRight className="w-4 h-4" />
          </GlowButton>

          <GlowButton
            href="#lomba"
            variant="secondary"
            className="w-full sm:w-auto px-6 py-3.5 text-sm"
          >
            <BookOpen className="w-4 h-4 text-skyGlow-300" />
            <span>Unduh Juknis Lengkap</span>
          </GlowButton>

          <GlowButton
            href="#twibbon"
            variant="sky"
            className="w-full sm:w-auto px-5 py-3.5 text-sm"
          >
            <Camera className="w-4 h-4" />
            <span>Pasang Twibbon</span>
          </GlowButton>
        </div>

        {/* Feature Quick Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl pt-6 border-t border-royalBlue-800">
          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-royalBlue-850/60 border border-royalBlue-750">
            <CheckCircle2 className="w-4 h-4 text-skyGlow-400" />
            <span className="text-xs font-semibold text-royalBlue-100">
              Jenjang <strong>SD/MI & SMP/MTs</strong>
            </span>
          </div>

          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-royalBlue-850/60 border border-royalBlue-750">
            <CheckCircle2 className="w-4 h-4 text-skyGlow-400" />
            <span className="text-xs font-semibold text-royalBlue-100">
              Sertifikat & Hadiah <strong>Tingkat Nasional</strong>
            </span>
          </div>

          <div className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-royalBlue-850/60 border border-royalBlue-750">
            <CheckCircle2 className="w-4 h-4 text-skyGlow-400" />
            <span className="text-xs font-semibold text-royalBlue-100">
              Penyelenggara: <strong>SMAIT Ihsanul Fikri</strong>
            </span>
          </div>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="mt-12 text-royalBlue-300 hover:text-white transition-colors animate-bounce p-2"
          aria-label="Scroll down to About Section"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
