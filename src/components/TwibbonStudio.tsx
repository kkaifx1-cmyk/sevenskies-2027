"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ExternalLink, Download, Copy, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TwibbonStudio() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.contacts.twibbonUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="twibbon" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3 shadow-lg shadow-royalBlue-950/40">
            <Camera className="w-3.5 h-3.5" />
            <span>Official Event Twibbon</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            Twibbon Resmi Seven Skies 2027
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            Meriahkan perhelatan akbar Seven Skies 2027! Pasang twibbon resmi sebagai delegasi dan bagikan ke media sosialmu.
          </p>
        </div>

        {/* Showcase Card */}
        <div className="max-w-4xl mx-auto card-surface p-6 sm:p-10 rounded-3xl border border-skyGlow-400/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Twibbon Visual Preview */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden border-2 border-skyGlow-400/40 shadow-2xl shadow-royalBlue-950/80 bg-royalBlue-950 transition-all duration-300 hover:border-skyGlow-300 hover:shadow-skyGlow-500/20">
                <Image
                  src="/twibbon-original.png"
                  alt="Desain Twibbon Resmi Seven Skies 2027"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>

            {/* Twibbon Details & Action Buttons */}
            <div className="flex flex-col justify-center space-y-5">
              <div>
                <span className="text-[11px] font-bold text-skyGlow-300 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-skyGlow-400" />
                  <span>Desain Twibbon Resmi 2027</span>
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-pureWhite mt-1 mb-2">
                  &ldquo;I&apos;m Ready For Seven Skies 2027!&rdquo;
                </h3>
                <blockquote className="text-xs sm:text-sm text-skyGlow-200 italic border-l-2 border-skyGlow-400 pl-3 my-3">
                  &ldquo;Berani beraksi, Siap beradaptasi dan Teguh Integritas&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed">
                  Tunjukkan partisipasi Anda sebagai delegasi resmi Seven Skies 2027 SMAIT Ihsanul Fikri Mungkid. Pasang twibbon sekarang dan gunakan di WhatsApp Story, Instagram Feed, dan grup delegasi.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {/* Main Link to Twibbon (External) */}
                <a
                  href={siteConfig.contacts.twibbonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl font-heading font-extrabold text-xs sm:text-sm bg-gradient-to-r from-royalBlue-600 via-skyGlow-500 to-royalBlue-600 hover:from-royalBlue-500 hover:to-skyGlow-400 text-white flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-royalBlue-600/30 hover:shadow-royalBlue-500/50 hover:-translate-y-0.5 border border-skyGlow-300"
                >
                  <span>Pasang Twibbon Sekarang</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {/* Download Image Button */}
                <a
                  href="/twibbon-original.png"
                  download="Twibbon-SevenSkies-2027.png"
                  className="py-3 px-4 rounded-xl font-heading font-bold text-xs sm:text-sm bg-royalBlue-850 hover:bg-royalBlue-800 text-royalBlue-200 hover:text-white border border-royalBlue-700 hover:border-skyGlow-400 flex items-center justify-center gap-2 transition-colors"
                  title="Unduh Desain Gambar Twibbon"
                >
                  <Download className="w-4 h-4 text-skyGlow-300" />
                  <span>Unduh Gambar</span>
                </a>
              </div>

              {/* Share / Copy Link */}
              <div className="pt-3 border-t border-royalBlue-800 flex items-center justify-between text-xs text-royalBlue-200">
                <span className="truncate pr-2">
                  Tautan Twibbon: <strong className="text-white font-mono">{siteConfig.contacts.twibbonUrl}</strong>
                </span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="p-2 rounded-lg bg-royalBlue-850 hover:bg-royalBlue-800 border border-royalBlue-700 text-royalBlue-200 hover:text-white transition-colors flex items-center gap-1.5 flex-shrink-0"
                  title="Salin Tautan"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold text-[11px]">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
