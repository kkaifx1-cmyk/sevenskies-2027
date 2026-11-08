"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, Download, ExternalLink, Copy, Check, RotateCcw, Upload, Move, Sparkles, Image as ImageIcon } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import GlowButton from "@/components/ui/GlowButton";

export default function TwibbonStudio() {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(-4.5); // Default matches polaroid tilt
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameImgRef = useRef<HTMLImageElement | null>(null);
  const userImgRef = useRef<HTMLImageElement | null>(null);

  // Preload official twibbon frame image
  useEffect(() => {
    const frame = new Image();
    frame.src = "/twibbon-frame.png";
    frame.onload = () => {
      frameImgRef.current = frame;
      setFrameLoaded(true);
    };
  }, []);

  // Handle uploaded user image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setUserImage(dataUrl);
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          userImgRef.current = img;
          setZoom(1);
          setPan({ x: 0, y: 0 });
          setRotation(-4.5);
          renderCanvas();
        };
      };
      reader.readAsDataURL(file);
    }
  };

  // Render to 1024x1024 HD Canvas
  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 1024;
    canvas.width = size;
    canvas.height = size;

    // Clear background
    ctx.clearRect(0, 0, size, size);

    // Center coordinates of the polaroid cutout
    const polaroidCenterX = 552;
    const polaroidCenterY = 504;

    // 1. LAYER 1: User Photo (or placeholder if empty)
    if (userImgRef.current && userImage) {
      const img = userImgRef.current;
      ctx.save();

      // Translate to polaroid center + user pan offset
      ctx.translate(polaroidCenterX + pan.x, polaroidCenterY + pan.y);

      // Rotate photo
      ctx.rotate((rotation * Math.PI) / 180);

      // Scale photo to fit the polaroid aperture (approx 440px)
      const baseScale = Math.max(480 / img.width, 480 / img.height);
      const totalScale = baseScale * zoom;

      const drawW = img.width * totalScale;
      const drawH = img.height * totalScale;

      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
    } else {
      // Elegant placeholder inside the polaroid area
      ctx.save();
      ctx.translate(polaroidCenterX, polaroidCenterY);
      ctx.rotate((-4.5 * Math.PI) / 180);
      ctx.fillStyle = "#EFE8CF";
      ctx.fillRect(-220, -220, 440, 440);

      ctx.fillStyle = "#6B7280";
      ctx.font = "bold 28px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("📷 Area Foto Anda", 0, -10);
      ctx.font = "20px 'Inter', sans-serif";
      ctx.fillStyle = "#9CA3AF";
      ctx.fillText("Klik 'Pilih Foto Anda' di samping", 0, 30);
      ctx.restore();
    }

    // 2. LAYER 2: Official Transparent Seven Skies 2027 Twibbon Frame
    if (frameImgRef.current && frameLoaded) {
      ctx.drawImage(frameImgRef.current, 0, 0, size, size);
    }
  }, [userImage, zoom, rotation, pan, frameLoaded]);

  useEffect(() => {
    renderCanvas();
  }, [renderCanvas]);

  // Drag / Pan handlers (Mouse)
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!userImage) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Drag / Pan handlers (Touch for Mobile)
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!userImage || e.touches.length === 0) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging || e.touches.length === 0) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Download Final 1024x1024 HD Composite
  const handleDownloadMerged = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "Twibbon-SevenSkies-2027.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  // Download Raw Transparent Frame for Twibbonize
  const handleDownloadFrame = () => {
    const link = document.createElement("a");
    link.download = "Frame-Twibbon-SevenSkies-2027-Transparan.png";
    link.href = "/twibbon-frame.png";
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
            <span>Studio Twibbon Interaktif 2027</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-pureWhite tracking-tight mb-4">
            Pasang Twibbon Resmi Seven Skies 2027
          </h2>
          <p className="text-sm sm:text-base text-royalBlue-100">
            Tunjukkan semangatmu dengan desain retro polaroid resmi! Pasang foto langsung di browser atau gunakan template transparan untuk Twibbonize.
          </p>
        </div>

        <div className="max-w-5xl mx-auto card-surface p-6 sm:p-10 rounded-3xl border border-skyGlow-400/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Canvas Preview */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div
                className={`relative rounded-3xl overflow-hidden shadow-2xl border-2 border-skyGlow-400/40 w-full max-w-[420px] aspect-square bg-royalBlue-950 select-none ${
                  userImage ? "cursor-grab active:cursor-grabbing" : ""
                }`}
              >
                <canvas
                  ref={canvasRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className="w-full h-full object-contain"
                />

                {userImage && (
                  <div className="absolute top-3 left-3 bg-royalBlue-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-skyGlow-400/30 text-[10px] text-skyGlow-200 flex items-center gap-1.5 pointer-events-none">
                    <Move className="w-3 h-3 text-skyGlow-300 animate-pulse" />
                    <span>Geser / Drag untuk atur posisi</span>
                  </div>
                )}
              </div>

              {/* Adjust Controls */}
              {userImage && (
                <div className="w-full max-w-[420px] mt-4 space-y-3 bg-royalBlue-900/60 p-4 rounded-2xl border border-royalBlue-700/60">
                  {/* Zoom Slider */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-royalBlue-200 font-bold w-14">Zoom:</span>
                    <input
                      type="range"
                      min="0.5"
                      max="3.0"
                      step="0.05"
                      value={zoom}
                      onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="flex-1 accent-skyGlow-400 cursor-pointer"
                    />
                    <span className="text-[11px] text-skyGlow-300 font-mono w-10 text-right">
                      {zoom.toFixed(1)}x
                    </span>
                  </div>

                  {/* Rotation Slider */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-royalBlue-200 font-bold w-14">Rotasi:</span>
                    <input
                      type="range"
                      min="-45"
                      max="45"
                      step="0.5"
                      value={rotation}
                      onChange={(e) => setRotation(parseFloat(e.target.value))}
                      className="flex-1 accent-skyGlow-400 cursor-pointer"
                    />
                    <span className="text-[11px] text-skyGlow-300 font-mono w-10 text-right">
                      {rotation.toFixed(0)}°
                    </span>
                  </div>

                  {/* Quick Align & Reset */}
                  <div className="flex items-center justify-between pt-1 border-t border-royalBlue-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setRotation(-4.5)}
                      className="text-skyGlow-300 hover:text-white flex items-center gap-1 font-semibold"
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>Pas polaroid (-4.5°)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setZoom(1);
                        setRotation(-4.5);
                        setPan({ x: 0, y: 0 });
                      }}
                      className="text-royalBlue-300 hover:text-white flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Posisi</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Controls & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
              <div>
                <span className="text-xs font-bold text-skyGlow-300 uppercase tracking-widest">
                  Official Retro Twibbon
                </span>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white mt-1 mb-2">
                  &ldquo;I&apos;m Ready For Seven Skies 2027!&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-royalBlue-100 leading-relaxed">
                  Pasang fotomu ke dalam frame polaroid resmi Seven Skies 2027 langsung dari browser tanpa perlu install aplikasi apapun.
                </p>
              </div>

              {/* Upload Local Image Button */}
              <label className="cursor-pointer py-3.5 px-5 rounded-xl font-heading font-extrabold text-xs sm:text-sm bg-gradient-to-r from-royalBlue-600 via-skyGlow-500 to-royalBlue-600 text-white flex items-center justify-center gap-2 transition-all duration-200 shadow-xl shadow-royalBlue-600/30 hover:shadow-royalBlue-500/50 hover:-translate-y-0.5 border border-skyGlow-300">
                <Upload className="w-4 h-4" />
                <span>{userImage ? "Ganti Foto Anda" : "Pilih Foto Anda (Pasang Sekarang)"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {/* Download Merged Composite */}
              {userImage && (
                <GlowButton
                  onClick={handleDownloadMerged}
                  variant="sky"
                  className="py-3 px-5 text-xs sm:text-sm w-full"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Hasil Foto (HD 1024×1024)</span>
                </GlowButton>
              )}

              {/* Download Transparent Frame Template */}
              <button
                type="button"
                onClick={handleDownloadFrame}
                className="py-2.5 px-4 rounded-xl font-heading font-bold text-xs bg-royalBlue-850 hover:bg-royalBlue-800 text-royalBlue-200 hover:text-white border border-royalBlue-700 hover:border-skyGlow-400 flex items-center justify-center gap-2 transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-skyGlow-300" />
                <span>Download Frame Transparan (.PNG)</span>
              </button>

              {/* Twibbonize Link & Quick Steps */}
              <div className="pt-4 border-t border-royalBlue-800 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-skyGlow-400" />
                    Kampanye Twibbonize Resmi
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="p-1.5 rounded-lg bg-royalBlue-800 hover:bg-royalBlue-700 text-royalBlue-200 hover:text-white transition-colors"
                    title="Salin Tautan Twibbonize"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <a
                  href={siteConfig.contacts.twibbonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl font-heading font-bold text-xs bg-gradient-to-r from-blue-700 to-royalBlue-600 hover:from-blue-600 hover:to-royalBlue-500 text-white border border-blue-400/40 flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Buka di Twibbonize.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="bg-royalBlue-950/70 p-3 rounded-xl border border-royalBlue-800 text-[11px] text-royalBlue-200 space-y-1">
                  <p className="font-bold text-white">💡 Info Panitia Twibbonize:</p>
                  <p>
                    Frame transparan sudah siap di tombol <strong>&ldquo;Download Frame Transparan (.PNG)&rdquo;</strong> di atas. Upload file tersebut saat membuat kampanye di <span className="text-skyGlow-300 font-mono">twibbonize.com</span>!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
