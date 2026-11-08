"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle smooth parallax offset (-20px to +20px)
      const x = ((e.clientX / window.innerWidth) - 0.5) * 25;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 25;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Floating Celestial Nebula Top-Left (Royal Blue) */}
      <div
        className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-royalBlue-600/25 blur-[130px] animate-float-nebula-1"
        style={{
          transform: `translate3d(${offset.x * 0.8}px, ${offset.y * 0.8}px, 0)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 2. Floating Celestial Nebula Center-Right (Sky Azure) */}
      <div
        className="absolute top-1/4 -right-44 w-[700px] h-[700px] rounded-full bg-skyGlow-500/18 blur-[140px] animate-float-nebula-2"
        style={{
          transform: `translate3d(${-offset.x * 0.6}px, ${-offset.y * 0.6}px, 0)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 3. Floating Celestial Nebula Bottom-Left (Deep Sapphire) */}
      <div
        className="absolute -bottom-48 left-1/6 w-[750px] h-[750px] rounded-full bg-royalBlue-700/22 blur-[150px] animate-float-nebula-3"
        style={{
          transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.5}px, 0)`,
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* 4. Smooth Drifting Starfield Pattern */}
      <div className="absolute inset-0 bg-celestial-drift opacity-75" />
    </div>
  );
}
