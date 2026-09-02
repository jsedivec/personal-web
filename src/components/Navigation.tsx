"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#o-mne", label: "O mně" },
  { href: "#pohyb", label: "Pohyb" },
  { href: "#weby", label: "Weby" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold text-zinc-900 hover:text-zinc-600 transition-colors"
          >
            Jiří Šedivec
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-zinc-100 pt-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
