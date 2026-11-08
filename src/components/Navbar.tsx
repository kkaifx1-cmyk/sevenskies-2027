"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import GlowButton from "@/components/ui/GlowButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Lomba", href: "#lomba" },
    { name: "Twibbon", href: "#twibbon" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-royalBlue-950/90 backdrop-blur-md border-b border-royalBlue-800 py-3 shadow-lg shadow-royalBlue-950/70"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Blue & White Official Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-2xl bg-pureWhite p-1 shadow-md border border-skyGlow-400/50 overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Logo Seven Skies 2027 - Rohis Fatahillah"
                width={44}
                height={44}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base tracking-wider text-pureWhite flex items-center gap-1.5">
                SEVEN SKIES <span className="text-royalBlue-200 text-xs px-1.5 py-0.5 rounded bg-royalBlue-800 border border-royalBlue-600 font-bold">2027</span>
              </span>
              <span className="text-[10px] text-skyGlow-300 tracking-tight -mt-0.5 font-semibold">
                Rohis Fatahillah • SMAIT Ihsanul Fikri
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-royalBlue-850/80 px-4 py-1.5 rounded-full border border-royalBlue-700/60 backdrop-blur-md shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-royalBlue-100 hover:text-white hover:bg-royalBlue-700/60 rounded-full transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button - Glowing Royal Blue */}
          <div className="hidden md:flex items-center gap-3">
            <GlowButton
              href="#lomba"
              variant="royal"
              className="text-xs px-4 py-2"
            >
              <span>Daftar Sekarang</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </GlowButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-royalBlue-850 border border-royalBlue-750 text-pureWhite hover:text-skyGlow-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-royalBlue-950/98 border-b border-royalBlue-800 px-4 pt-3 pb-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-royalBlue-100 hover:bg-royalBlue-800 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-royalBlue-800 flex flex-col gap-2">
              <a
                href="#lomba"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl text-sm font-bold bg-royalBlue-600 hover:bg-royalBlue-500 text-white transition-colors shadow-lg shadow-royalBlue-600/30"
              >
                Daftar Lomba 2027
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
