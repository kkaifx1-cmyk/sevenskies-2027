"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Download, ExternalLink, Copy, Check, RefreshCw, Upload } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import GlowButton from "@/components/ui/GlowButton";

export default function TwibbonStudio() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 600;
    canvas.width = size;
    canvas.height = size;

    if (userImage) {
      const img = new Image();
      img.src = userImage;
      img.onload = () => {
        ctx.clearRect(0, 0, size, size);

        // Center crop & scale with zoom
        const scale = Math.max(size / img.width, size / img.height) * zoom;
        const x = (size - img.width * scale) / 2;
        const y = (size - img.height * scale) / 2;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        drawTwibbonFrame(ctx, size);
      };
    } else {
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "#0F2B5C";
      ctx.fillRect(0, 0, size, size);

      ctx.fillStyle = "#93C5FD";
      ctx.font = "bold 18px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Klik 'Pilih Foto Anda' untuk memasang", size / 2, size / 2);

      drawTwibbonFrame(ctx, size);
    }
  }, [userImage, zoom]);

  const drawTwibbonFrame = (ctx: CanvasRenderingContext2D, size: number) => {
    // Elegant Outer Royal Blue & White Border
    ctx.strokeStyle = "rgba(56, 189, 248, 0.7)";
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, size - 14, size - 14);

    // Inner White Border Line
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(20, 20, size - 40, size - 40);

    // Top Header Badge - Royal Blue & White
    const headerGrad = ctx.createLinearGradient(0, 0, size, 0);
    headerGrad.addColorStop(0, "#1D4ED8");
    headerGrad.addColorStop(0.5, "#2563EB");
    headerGrad.addColorStop(1, "#1D4ED8");

    ctx.fillStyle = headerGrad;
    ctx.beginPath();
    ctx.roundRect(40, 30, size - 80, 52, 16);
    ctx.fill();

    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 16px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("★ SEVEN SKIES 2027 OFFICIAL DELEGATE ★", size / 2, 62);

    // Bottom Banner Overlay - Deep Ocean Blue
    const bottomGrad = ctx.createLinearGradient(0, size - 150, 0, size);
    bottomGrad.addColorStop(0, "rgba(8, 24, 47, 0)");
    bottomGrad.addColorStop(0.3, "rgba(8, 24, 47, 0.85)");
    bottomGrad.addColorStop(1, "rgba(8, 24, 47, 0.98)");

    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, size - 150, size, 150);

    // Bottom Content
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 24px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SAYA SIAP JUARA!", size / 2, size - 68);

    ctx.fillStyle = "#93C5FD";
    ctx.font = "600 13px 'Inter', sans-serif";
    ctx.fillText("Seven Skies 2027 • SMAIT Ihsanul Fikri Mungkid", size / 2, size - 44);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "Twibbon-SevenSkies-2027.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(siteConfig.contacts.twibbonUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="twibbon" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalBlue-850 border border-skyGlow-400/30 text-skyGlow-300 text-xs font-bold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Studio Twibbon Interaktif</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            Meriahkan Seven Skies 2027
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            Tunjukkan semangat Anda sebagai delegasi resmi! Pasang foto langsung di browser dengan tema Biru & Putih resmi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto card-surface p-6 sm:p-10 rounded-3xl border border-skyGlow-400/30 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive Canvas Preview */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-skyGlow-400/40 max-w-[320px] w-full aspect-square bg-royalBlue-950">
                <canvas ref={canvasRef} className="w-full h-full object-cover" />
              </div>

              {userImage && (
                <div className="w-full max-w-[320px] mt-4 flex items-center gap-3">
                  <span className="text-xs text-royalBlue-200 font-bold">Zoom:</span>
                  <input
                    type="range"
                    min="0.8"
                    max="2.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-full accent-skyGlow-400 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setUserImage(null);
                      setZoom(1);
                    }}
                    className="p-1 text-royalBlue-300 hover:text-white"
                    title="Reset Foto"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Controls & Actions */}
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white mb-2">
                  Pasang Frame Resmi Delegasi
                </h3>
                <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed">
                  Unggah foto profil Anda untuk membuat kartu twibbon siap posting ke WhatsApp Story, Instagram feed, atau grup sekolah.
                </p>
              </div>

              {/* Upload Local Image Button */}
              <label className="cursor-pointer py-3.5 px-5 rounded-xl font-heading font-extrabold text-xs sm:text-sm bg-gradient-to-r from-royalBlue-600 via-skyGlow-500 to-royalBlue-600 text-white flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-royalBlue-600/30 hover:shadow-royalBlue-500/50 hover:-translate-y-0.5 border border-skyGlow-300">
                <Upload className="w-4 h-4" />
                <span>{userImage ? "Ganti Foto Anda" : "Pilih Foto Anda"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Download Merged Image */}
              {userImage && (
                <GlowButton
                  onClick={handleDownload}
                  variant="sky"
                  className="py-3 px-5 text-xs sm:text-sm w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Hasil Twibbon</span>
                </GlowButton>
              )}

              {/* External Twibbon Link */}
              <div className="pt-4 border-t border-royalBlue-800 flex flex-col gap-2">
                <span className="text-xs text-royalBlue-200">Atau buka tautan form template resmi:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.contacts.twibbonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl font-heading font-bold text-xs bg-royalBlue-850 hover:bg-royalBlue-800 text-white border border-royalBlue-700 hover:border-skyGlow-400 flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Buka Tautan Twibbonize / Form</span>
                    <ExternalLink className="w-3.5 h-3.5 text-skyGlow-300" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-2.5 rounded-xl bg-royalBlue-850 hover:bg-royalBlue-800 border border-royalBlue-700 text-royalBlue-200 hover:text-white transition-colors"
                    title="Salin Tautan Twibbon"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
