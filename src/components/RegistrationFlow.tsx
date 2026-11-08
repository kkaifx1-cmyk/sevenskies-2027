"use client";

import { useState } from "react";
import { Download, FileEdit, Video, Award, CheckCircle2, ChevronRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

export default function RegistrationFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Pelajari Petunjuk Teknis",
      short: "Pahami juknis 5 cabang lomba",
      icon: Download,
      details: [
        "Pilih jenjang pendidikan Anda (SD/MI atau SMP/MTs) di section Kompetisi.",
        "Unduh dokumen Petunjuk Teknis (Juknis) resmi via Google Drive.",
        "Pelajari syarat spesifik lomba: LCCI, Kaligrafi, MHQ, Mewarnai, atau Adzan.",
      ],
      tip: "Tips: Pelajari rubrik penilaian juri di dalam juknis agar karya dan hafalan Anda memenuhi standar maksimal.",
    },
    {
      number: "02",
      title: "Isi Formulir Pendaftaran",
      short: "Registrasi online delegasi resmi",
      icon: FileEdit,
      details: [
        "Buka tautan Formulir Pendaftaran resmi Seven Skies 2027.",
        "Isi data diri peserta/tim, asal sekolah/madrasah, dan nomor kontak pembimbing.",
        "Unggah bukti kartu pelajar atau surat tugas dari madrasah/sekolah.",
      ],
      tip: "Tips: Pastikan nomor WhatsApp yang dimasukkan aktif untuk verifikasi dan undangan grup lomba.",
    },
    {
      number: "03",
      title: "Karya & Technical Meeting",
      short: "Pengerjaan karya & TM daring",
      icon: Video,
      details: [
        "Ikuti sesi Technical Meeting (TM) daring bersama dewan juri.",
        "Selesaikan karya kaligrafi/mewarnai atau persiapkan materi LCCI, MHQ, dan Adzan.",
        "Kirim berkas karya melalui formulir 'Pengumpulan Karya' sebelum batas waktu.",
      ],
      tip: "Tips: Pastikan resolusi foto/video karya jernih dan sesuai spesifikasi juknis.",
    },
    {
      number: "04",
      title: "Penjurian & Penganugerahan",
      short: "Pengumuman juara tingkat nasional",
      icon: Award,
      details: [
        "Dewan juri independen dan ahli menilai seluruh penampilan dan karya peserta.",
        "Peserta babak final LCCI dan MHQ tampil sesuai urutan yang ditentukan panitia.",
        "Piala kejuaraan, sertifikat ber-barcode nasional, dan uang pembinaan diserahkan pada puncak acara.",
      ],
      tip: "Tips: Seluruh delegasi berhak menerima e-sertifikat apresiasi tingkat nasional.",
    },
  ];

  return (
    <section id="alur" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-royalBlue-950/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Alur Partisipasi</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            4 Langkah Mudah Menuju Juara
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            Ikuti alur pendaftaran resmi Seven Skies 2027 untuk memastikan partisipasi Anda terdaftar dengan sempurna.
          </p>
        </div>

        {/* Step Selector Horizontal Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between group ${
                  isSelected
                    ? "bg-royalBlue-850 border-skyGlow-400 shadow-xl shadow-royalBlue-600/30"
                    : "bg-royalBlue-900/70 border-royalBlue-800 hover:border-royalBlue-600 hover:bg-royalBlue-850/60"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-royalBlue-600 text-white"
                        : "bg-royalBlue-800 text-royalBlue-200 group-hover:text-skyGlow-300 border border-royalBlue-700"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`font-heading font-black text-xl ${
                      isSelected ? "text-skyGlow-300" : "text-royalBlue-700"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-heading font-bold text-base mb-1 ${
                      isSelected ? "text-white" : "text-royalBlue-100 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-royalBlue-200 line-clamp-1">
                    {step.short}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Showcase Box */}
        <div className="card-surface p-6 sm:p-10 rounded-3xl border border-skyGlow-400/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-800 text-skyGlow-300 text-xs font-bold mb-4 border border-royalBlue-650">
                <span>Langkah {steps[activeStep].number} dari 04</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-4">
                {steps[activeStep].title}
              </h3>

              <div className="space-y-3 mb-6">
                {steps[activeStep].details.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-skyGlow-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-royalBlue-100 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-royalBlue-800/60 border border-royalBlue-700 text-xs text-skyGlow-200 font-medium">
                <strong className="text-white">Catatan Penting:</strong> {steps[activeStep].tip}
              </div>
            </div>

            {/* Quick Next Step Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-56 shrink-0">
              <GlowButton
                href="#lomba"
                variant="royal"
                className="py-3.5 px-6 text-xs sm:text-sm"
              >
                <span>Mulai Pendaftaran</span>
                <ChevronRight className="w-4 h-4" />
              </GlowButton>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="py-3 px-4 rounded-xl font-heading font-bold text-xs text-royalBlue-200 hover:text-white bg-royalBlue-850 hover:bg-royalBlue-800 border border-royalBlue-700 text-center transition-all hover:border-skyGlow-400 hover:shadow-lg hover:shadow-royalBlue-600/30"
              >
                Lihat Langkah Berikutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
