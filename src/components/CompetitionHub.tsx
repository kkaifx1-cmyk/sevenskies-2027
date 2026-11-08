"use client";

import { useState } from "react";
import { siteConfig, JenjangData, CompetitionCategory } from "@/config/siteConfig";
import GlowButton from "@/components/ui/GlowButton";
import {
  FileText,
  UserPlus,
  UploadCloud,
  ExternalLink,
  Copy,
  Check,
  Search,
  Users,
  User,
  GraduationCap,
  Info,
  X,
  Award,
} from "lucide-react";

export default function CompetitionHub() {
  const [activeJenjang, setActiveJenjang] = useState<"sd" | "smp">("sd");
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [activeModalCompetition, setActiveModalCompetition] = useState<CompetitionCategory | null>(null);

  const currentData: JenjangData = siteConfig.jenjang[activeJenjang];

  const categories = ["Semua", "Keagamaan", "Cerdas Cermat", "Seni Islami"];

  const filteredCompetitions = currentData.competitions.filter((comp) => {
    const matchesCategory = selectedCategory === "Semua" || comp.category === selectedCategory;
    const matchesSearch =
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="lomba" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Pusat Pendaftaran & Petunjuk Teknis</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            5 Cabang Lomba Resmi 2027
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            LCCI, Kaligrafi, MHQ, Mewarnai, dan Adzan. Pilih jenjang pendidikan Anda untuk mengunduh Juknis dan mengisi formulir registrasi.
          </p>
        </div>

        {/* Segmented Jenjang Switcher Tabs - Blue & White */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-royalBlue-850 border border-royalBlue-700 shadow-xl max-w-md w-full">
            <button
              type="button"
              onClick={() => {
                setActiveJenjang("sd");
                setSelectedCategory("Semua");
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-heading font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                activeJenjang === "sd"
                  ? "bg-gradient-to-r from-royalBlue-600 to-skyGlow-500 text-white shadow-lg shadow-royalBlue-600/40"
                  : "text-royalBlue-200 hover:text-white"
              }`}
            >
              <span>SD / MI Sederajat</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveJenjang("smp");
                setSelectedCategory("Semua");
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-heading font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                activeJenjang === "smp"
                  ? "bg-gradient-to-r from-royalBlue-600 to-skyGlow-500 text-white shadow-lg shadow-royalBlue-600/40"
                  : "text-royalBlue-200 hover:text-white"
              }`}
            >
              <span>SMP / MTs Sederajat</span>
            </button>
          </div>
        </div>

        {/* 3 Core Action Cards (Juknis, Pendaftaran, Pengumpulan) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* 1. JUKNIS CARD */}
          <div className="card-surface p-6 sm:p-7 rounded-3xl border border-royalBlue-700 flex flex-col justify-between hover:border-skyGlow-400/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-royalBlue-800 border border-skyGlow-400/40 flex items-center justify-center text-skyGlow-300 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-royalBlue-900 text-skyGlow-300 border border-royalBlue-700">
                  Google Drive
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Petunjuk Teknis (Juknis)
              </h3>
              <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed mb-6">
                Unduh regulasi resmi, tata tertib, dan rubrik penilaian dewan juri untuk seluruh 5 cabang lomba jenjang {currentData.title}.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GlowButton
                href={currentData.links.juknis}
                target="_blank"
                rel="noopener noreferrer"
                variant="royal"
                className="flex-1 py-3 px-4 text-xs sm:text-sm"
              >
                <span>Unduh Juknis</span>
                <ExternalLink className="w-4 h-4" />
              </GlowButton>
              <button
                type="button"
                onClick={() => handleCopy(currentData.links.juknis, "juknis")}
                className="p-3 rounded-xl bg-royalBlue-900 hover:bg-royalBlue-800 border border-royalBlue-700 text-royalBlue-200 hover:text-white transition-all hover:border-skyGlow-400 hover:shadow-lg hover:shadow-royalBlue-600/30"
                title="Salin tautan Juknis"
              >
                {copiedLink === "juknis" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* 2. PENDAFTARAN CARD */}
          <div className="card-surface p-6 sm:p-7 rounded-3xl border border-skyGlow-400/40 flex flex-col justify-between hover:border-skyGlow-300 transition-all duration-200 group relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-skyGlow-400/10 blur-2xl pointer-events-none rounded-full" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-royalBlue-700 border border-skyGlow-300/50 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <UserPlus className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Formulir Terbuka
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Pendaftaran Lomba
              </h3>
              <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed mb-6">
                Registrasi online peserta LCCI, Kaligrafi, MHQ, Mewarnai, dan Adzan jenjang {currentData.title}.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GlowButton
                href={currentData.links.pendaftaran}
                target="_blank"
                rel="noopener noreferrer"
                variant="royal"
                className="flex-1 py-3 px-4 text-xs sm:text-sm"
              >
                <span>Daftar Sekarang</span>
                <ExternalLink className="w-4 h-4" />
              </GlowButton>
              <button
                type="button"
                onClick={() => handleCopy(currentData.links.pendaftaran, "daftar")}
                className="p-3 rounded-xl bg-royalBlue-900 hover:bg-royalBlue-800 border border-royalBlue-700 text-royalBlue-200 hover:text-white transition-all hover:border-skyGlow-400 hover:shadow-lg hover:shadow-royalBlue-600/30"
                title="Salin tautan formulir pendaftaran"
              >
                {copiedLink === "daftar" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* 3. PENGUMPULAN KARYA CARD */}
          <div className="card-surface p-6 sm:p-7 rounded-3xl border border-royalBlue-700 flex flex-col justify-between hover:border-skyGlow-400/80 transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-royalBlue-800 border border-skyGlow-400/40 flex items-center justify-center text-skyGlow-300 group-hover:scale-105 transition-transform">
                  <UploadCloud className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-royalBlue-900 text-skyGlow-300 border border-royalBlue-700">
                  Submit Karya
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Pengumpulan Karya
              </h3>
              <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed mb-6">
                Unggah berkas karya kaligrafi, hasil mewarnai, rekaman adzan, atau persyaratan lomba {currentData.title}.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <GlowButton
                href={currentData.links.pengumpulan}
                target="_blank"
                rel="noopener noreferrer"
                variant="sky"
                className="flex-1 py-3 px-4 text-xs sm:text-sm"
              >
                <span>Upload Karya</span>
                <ExternalLink className="w-4 h-4" />
              </GlowButton>
              <button
                type="button"
                onClick={() => handleCopy(currentData.links.pengumpulan, "karya")}
                className="p-3 rounded-xl bg-royalBlue-900 hover:bg-royalBlue-800 border border-royalBlue-700 text-royalBlue-200 hover:text-white transition-all hover:border-skyGlow-400 hover:shadow-lg hover:shadow-skyGlow-500/30"
                title="Salin tautan pengumpulan karya"
              >
                {copiedLink === "karya" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 5 Cabang Lomba Directory */}
        <div className="pt-6 border-t border-royalBlue-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-heading font-black text-2xl text-white flex items-center gap-2">
                <span>Daftar 5 Cabang Lomba</span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-royalBlue-700 text-pureWhite border border-skyGlow-400/40">
                  {filteredCompetitions.length} Lomba
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-royalBlue-100">
                Pilih cabang lomba untuk membaca panduan dan kriteria penilaian.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-royalBlue-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama lomba..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-royalBlue-850 border border-royalBlue-700 text-xs sm:text-sm text-white placeholder-royalBlue-300 focus:outline-none focus:border-skyGlow-400 transition-colors shadow-inner"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 ${
                  selectedCategory === cat
                    ? "bg-royalBlue-600 text-white shadow-md shadow-royalBlue-600/40 border border-skyGlow-400"
                    : "bg-royalBlue-850 text-royalBlue-200 hover:text-white border border-royalBlue-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Competitions Grid - 5 Lomba */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="p-6 rounded-3xl bg-royalBlue-850/80 border border-royalBlue-700 hover:border-skyGlow-400 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-royalBlue-800 text-skyGlow-300 border border-royalBlue-650">
                      {comp.category}
                    </span>
                    <span className="text-[11px] text-royalBlue-200 flex items-center gap-1 font-semibold">
                      {comp.type === "Individu" ? (
                        <User className="w-3.5 h-3.5 text-skyGlow-400" />
                      ) : (
                        <Users className="w-3.5 h-3.5 text-royalBlue-300" />
                      )}
                      <span>{comp.type}</span>
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-xl text-white mb-2 group-hover:text-skyGlow-300 transition-colors">
                    {comp.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed mb-5">
                    {comp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-royalBlue-750 flex items-center justify-between">
                  <span className="text-[11px] text-royalBlue-200 font-medium">
                    Biaya: <strong className="text-emerald-400 font-bold">{comp.biaya}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalCompetition(comp)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-skyGlow-400 hover:text-skyGlow-300 group-hover:underline"
                  >
                    <span>Detail Lomba</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCompetitions.length === 0 && (
            <div className="text-center py-12 bg-royalBlue-850/40 rounded-2xl border border-royalBlue-750">
              <p className="text-sm text-royalBlue-200">
                Tidak ada cabang lomba yang cocok dengan kata kunci &ldquo;{searchQuery}&rdquo;.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal Detail Cabang Lomba */}
      {activeModalCompetition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-royalBlue-950/85 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-royalBlue-900 border border-skyGlow-400/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalCompetition(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-royalBlue-200 hover:text-white bg-royalBlue-800 hover:bg-royalBlue-700"
              aria-label="Tutup Detail"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-800 text-skyGlow-300 border border-royalBlue-600 text-xs font-bold mb-4">
              <span>{activeModalCompetition.category}</span>
              <span>•</span>
              <span>Kategori {activeModalCompetition.type}</span>
            </div>

            <h3 className="font-heading font-black text-2xl text-white mb-3">
              {activeModalCompetition.name}
            </h3>

            <p className="text-sm text-royalBlue-100 leading-relaxed mb-6">
              {activeModalCompetition.description}
            </p>

            <div className="p-4 rounded-2xl bg-royalBlue-850 border border-royalBlue-700 mb-6 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-royalBlue-200">Jenjang:</span>
                <span className="font-bold text-white">{currentData.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-royalBlue-200">Bentuk Keikutsertaan:</span>
                <span className="font-bold text-white">{activeModalCompetition.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-royalBlue-200">Biaya Pendaftaran:</span>
                <span className="font-bold text-emerald-400">{activeModalCompetition.biaya}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <GlowButton
                href={currentData.links.pendaftaran}
                target="_blank"
                rel="noopener noreferrer"
                variant="royal"
                className="flex-1 py-3 px-4 text-sm"
              >
                <span>Daftar Sekarang</span>
              </GlowButton>
              <GlowButton
                href={currentData.links.juknis}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="py-3 px-4 text-sm"
              >
                <span>Buka Juknis</span>
              </GlowButton>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
