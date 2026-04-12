"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, MapPin } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { siteConfig } from "@/lib/data";
import { MatrixRain } from "@/components/ui/MatrixRain";

export function Hero() {
  const { lang } = useLang();

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center"
    >
      <MatrixRain />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-accent mb-4 tracking-wider uppercase">
            {lang === "pt" ? "Olá, eu sou" : "Hi, I'm"}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            {siteConfig.name}
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-foreground-muted mb-6">
            {siteConfig.title[lang]}
          </h2>

          <p className="text-base text-foreground-muted mb-8 max-w-xl leading-relaxed">
            {siteConfig.tagline[lang]}
          </p>

          <div className="flex items-center gap-2 text-sm text-foreground-muted mb-10">
            <MapPin size={14} className="text-accent" />
            <span>{siteConfig.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
            >
              {lang === "pt" ? "Ver Projetos" : "View Projects"}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground-muted font-medium text-sm hover:border-accent hover:text-accent transition-colors"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
