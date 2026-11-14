"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    setMounted(true);
    const target = new Date(siteConfig.meta.eventDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="animate-pulse flex gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-royalBlue-850 rounded-xl border border-royalBlue-700" />
          ))}
        </div>
      </div>
    );
  }

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "Menit", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "Detik", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2.5 text-xs uppercase tracking-widest text-skyGlow-300 font-bold">
        <Clock className="w-3.5 h-3.5 text-skyGlow-400 animate-pulse" />
        <span>Menuju Pelaksanaan • 5 Januari 2027</span>
      </div>

      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md w-full">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-royalBlue-850/90 border border-royalBlue-700 shadow-xl shadow-royalBlue-950/60 transition-transform duration-200 hover:border-skyGlow-400/80 hover:shadow-royalBlue-600/30"
          >
            <span className="font-heading font-black text-2xl sm:text-3xl text-pureWhite tracking-tight">
              {block.value}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-royalBlue-200 uppercase tracking-wider mt-0.5">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
