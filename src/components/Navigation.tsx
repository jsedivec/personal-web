"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "#o-mne", label: "O mně" },
  { href: "#sluzby", label: "Služby" },
  { href: "#weby", label: "Weby" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        isMobileMenuOpen ? "bg-sand" : "bg-paper/95 backdrop-blur-sm"
      }`}
    >
      <nav className="relative mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="Jirka Šedivec — domů">
            <Logo markClassName="h-9 w-9" />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground lg:hidden"
            aria-label={isMobileMenuOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <ul className="mt-6 flex flex-col gap-1 border-t border-foreground/10 pt-6 pb-4 lg:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 font-display text-2xl text-foreground"
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
