"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageSquare, Search } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import GlowButton from "@/components/ui/GlowButton";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = siteConfig.faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-royalBlue-950/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pusat Bantuan & Tanya Jawab</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            Informasi seputar pendaftaran 6 cabang lomba, syarat berkas, dan ketentuan teknis Seven Skies 2027.
          </p>
        </div>

        {/* Search FAQ */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-royalBlue-300 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Ketik kata kunci pertanyaan Anda..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-royalBlue-850 border border-royalBlue-700 text-sm text-white placeholder-royalBlue-300 focus:outline-none focus:border-skyGlow-400 transition-colors shadow-lg"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-royalBlue-700 bg-royalBlue-850/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-white hover:text-skyGlow-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-skyGlow-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-royalBlue-100 leading-relaxed border-t border-royalBlue-750 pt-3 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-sm text-royalBlue-200">
              Pertanyaan tidak ditemukan. Silakan hubungi langsung panitia via WhatsApp.
            </div>
          )}
        </div>

        {/* Bottom Help Prompt */}
        <div className="p-6 rounded-2xl bg-royalBlue-850 border border-skyGlow-400/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-royalBlue-750 border border-royalBlue-600 flex items-center justify-center text-skyGlow-300 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Butuh bantuan lebih lanjut?
              </h4>
              <p className="text-xs text-royalBlue-200">
                Narahubung panitia siap menjawab kendala teknis dan administrasi Anda.
              </p>
            </div>
          </div>

          <GlowButton
            href={`https://api.whatsapp.com/send?phone=${siteConfig.contacts.whatsapp.number}&text=${encodeURIComponent(
              siteConfig.contacts.whatsapp.defaultMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="royal"
            className="py-2.5 px-5 text-xs shrink-0"
          >
            Chat WhatsApp Panitia
          </GlowButton>
        </div>
      </div>
    </section>
  );
}
