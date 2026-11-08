"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "royal" | "white" | "sky" | "secondary";
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function GlowButton({
  children,
  href,
  onClick,
  className,
  variant = "royal",
  target,
  rel,
  type = "button",
}: GlowButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [proximity, setProximity] = useState(0); // 0 to 1
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const el = buttonRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.bottom < -30 || rect.top > window.innerHeight + 30) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      // Detection radius: 100px (Tight, natural, subtle proximity)
      const maxDistance = 100;

      if (distance < maxDistance) {
        const factor = Math.max(0, 1 - distance / maxDistance);
        setProximity(factor);
      } else {
        if (proximity !== 0) setProximity(0);
      }
    };

    window.addEventListener("mousemove", handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [proximity]);

  // Restrained, elegant intensity (0 to 1 max on hover)
  const activeIntensity = isHovered ? 1 : proximity;
  const isGlowing = activeIntensity > 0.05;

  // Refined, subtle, non-excessive palettes
  const themes = {
    royal: {
      defaultBg: "bg-gradient-to-r from-royalBlue-700 via-royalBlue-600 to-royalBlue-700",
      hoverBg: "bg-gradient-to-r from-royalBlue-600 via-royalBlue-500 to-royalBlue-600",
      glowColor: "rgba(37, 99, 235, 0.4)",
      glowColorSky: "rgba(56, 189, 248, 0.25)",
      borderColor: isHovered ? "rgba(255, 255, 255, 0.85)" : "rgba(147, 197, 253, 0.5)",
      textColor: "text-white",
      haloGradient: "from-royalBlue-500/30 to-skyGlow-400/30",
    },
    white: {
      defaultBg: "bg-pureWhite text-royalBlue-900",
      hoverBg: "bg-pureWhite text-royalBlue-950",
      glowColor: "rgba(255, 255, 255, 0.5)",
      glowColorSky: "rgba(56, 189, 248, 0.25)",
      borderColor: "rgba(255, 255, 255, 0.9)",
      textColor: "text-royalBlue-900 font-extrabold",
      haloGradient: "from-white/30 to-skyGlow-300/20",
    },
    sky: {
      defaultBg: "bg-gradient-to-r from-skyGlow-600 to-royalBlue-600",
      hoverBg: "bg-gradient-to-r from-skyGlow-500 to-royalBlue-500",
      glowColor: "rgba(56, 189, 248, 0.4)",
      glowColorSky: "rgba(37, 99, 235, 0.25)",
      borderColor: isHovered ? "rgba(255, 255, 255, 0.85)" : "rgba(186, 230, 253, 0.5)",
      textColor: "text-white",
      haloGradient: "from-skyGlow-400/30 to-royalBlue-500/30",
    },
    secondary: {
      defaultBg: "bg-royalBlue-850 text-white",
      hoverBg: "bg-royalBlue-800 text-white",
      glowColor: "rgba(37, 99, 235, 0.35)",
      glowColorSky: "rgba(56, 189, 248, 0.2)",
      borderColor: isHovered ? "rgba(255, 255, 255, 0.75)" : "rgba(96, 165, 250, 0.4)",
      textColor: "text-white",
      haloGradient: "from-royalBlue-600/25 to-skyGlow-500/25",
    },
  };

  const current = themes[variant] || themes.royal;

  // Clean, elegant elevation & soft restrained glow
  const dynamicStyles: React.CSSProperties = {
    boxShadow: isGlowing
      ? `0 6px 20px -3px ${current.glowColor}, 0 0 15px ${current.glowColorSky}`
      : "0 3px 10px rgba(6, 18, 38, 0.35)",
    borderColor: isGlowing ? current.borderColor : "rgba(56, 189, 248, 0.25)",
    transform: isHovered
      ? "translateY(-2px)"
      : proximity > 0.2
      ? `translateY(-${proximity * 1.5}px)`
      : "none",
    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const sharedClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-xl font-heading font-bold text-sm px-6 py-3.5 border select-none cursor-pointer z-20",
    isHovered ? current.hoverBg : current.defaultBg,
    current.textColor,
    className
  );

  const innerContent = (
    <>
      {/* Subtle, soft ambient halo (Tidak silau, pas & berkelas) */}
      <span
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-2xl filter blur-md transition-opacity duration-200 -z-10 bg-gradient-to-r",
          current.haloGradient
        )}
        style={{
          opacity: isGlowing ? activeIntensity * 0.45 : 0,
        }}
      />

      {/* Button Content */}
      <span className="relative z-30 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={dynamicStyles}
        className={sharedClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={dynamicStyles}
      className={sharedClasses}
    >
      {innerContent}
    </button>
  );
}
