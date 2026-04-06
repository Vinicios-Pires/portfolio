"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LangToggle } from "@/components/ui/LangToggle";

export function Navbar() {
  const { lang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-sm font-bold text-foreground hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm text-foreground-muted hover:text-foreground rounded-lg hover:bg-border transition-colors"
              >
                {link.label[lang]}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-foreground-muted hover:text-foreground hover:bg-border transition-colors ml-1"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-3 py-2.5 text-sm text-foreground-muted hover:text-foreground rounded-lg hover:bg-border transition-colors"
                >
                  {link.label[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
