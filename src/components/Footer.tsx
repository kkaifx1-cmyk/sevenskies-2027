"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.contacts.whatsapp.displayNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <footer id="kontak" className="pt-20 pb-12 border-t border-royalBlue-800 bg-royalBlue-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand & Organization */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 rounded-2xl bg-pureWhite p-1 border border-skyGlow-400/50 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.jpg"
                  alt="Seven Skies 2027 Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-wider text-pureWhite">
                  SEVEN SKIES 2027
                </span>
                <span className="text-xs text-skyGlow-300 font-medium">
                  Rohis Fatahillah • {siteConfig.meta.organizer}
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed max-w-md mb-6">
              Ajang kompetisi 6 cabang lomba nasional: <strong>LCCI, Kaligrafi, MHQ, Mewarnai, Adzan, dan Dai Muda</strong>. Mewadahi prestasi dan integritas pelajar muslim se-Indonesia.
            </p>

            <div className="p-3.5 rounded-2xl bg-royalBlue-850 border border-royalBlue-700 inline-flex items-center gap-3 shadow-lg">
              <Phone className="w-4 h-4 text-skyGlow-400" />
              <span className="text-xs font-bold text-white">
                {siteConfig.contacts.whatsapp.displayNumber}
              </span>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-royalBlue-750 hover:bg-royalBlue-700 text-royalBlue-100 hover:text-white transition-colors"
                title="Salin nomor WhatsApp"
              >
                {copiedPhone ? (
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <Check className="w-3 h-3" /> Tersalin!
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-semibold">
                    <Copy className="w-3 h-3" /> Salin
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-sm text-pureWhite uppercase tracking-wider mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-royalBlue-200">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tentang Seven Skies
                </a>
              </li>
              <li>
                <a href="#lomba" className="hover:text-white transition-colors">
                  Cabang Lomba
                </a>
              </li>
              <li>
                <a href="#twibbon" className="hover:text-white transition-colors">
                  Studio Twibbon 2027
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Channels */}
          <div>
            <h4 className="font-heading font-bold text-sm text-pureWhite uppercase tracking-wider mb-4">
              Kanal Resmi Panitia
            </h4>
            <div className="space-y-3">
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.contacts.whatsapp.number}&text=${encodeURIComponent(
                  siteConfig.contacts.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-royalBlue-850 border border-royalBlue-700 hover:border-emerald-400 text-xs sm:text-sm text-royalBlue-100 hover:text-white transition-all group shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">WhatsApp Panitia</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-royalBlue-300 group-hover:text-white" />
              </a>

              <a
                href={`https://instagram.com/${siteConfig.contacts.instagram.official}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-royalBlue-850 border border-royalBlue-700 hover:border-skyGlow-400 text-xs sm:text-sm text-royalBlue-100 hover:text-white transition-all group shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-royalBlue-750 text-skyGlow-300 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">@{siteConfig.contacts.instagram.official}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-royalBlue-300 group-hover:text-white" />
              </a>

              <a
                href={`https://instagram.com/${siteConfig.contacts.instagram.rohis}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-royalBlue-850 border border-royalBlue-700 hover:border-skyGlow-400 text-xs sm:text-sm text-royalBlue-100 hover:text-white transition-all group shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-royalBlue-750 text-skyGlow-300 flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">@{siteConfig.contacts.instagram.rohis}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-royalBlue-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-royalBlue-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-royalBlue-200 text-center sm:text-left">
          <p>
            © 2027 <strong>Seven Skies</strong> — SMAIT Ihsanul Fikri Mungkid. Seluruh Hak Cipta Dilindungi.
          </p>
          <p className="font-medium text-skyGlow-300">
            Tema Resmi Biru & Putih
          </p>
        </div>
      </div>
    </footer>
  );
}
