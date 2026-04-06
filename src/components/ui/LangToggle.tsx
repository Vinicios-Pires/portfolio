"use client";

import { useLang } from "@/context/LangContext";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
      className="w-9 h-9 flex items-center justify-center rounded-lg text-xs font-semibold text-foreground-muted hover:text-foreground hover:bg-border transition-colors tracking-wider"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  );
}
