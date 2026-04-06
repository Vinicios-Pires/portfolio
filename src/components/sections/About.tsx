"use client";

import { useLang } from "@/context/LangContext";
import { aboutContent, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {lang === "pt" ? "Sobre mim" : "About me"}
          <span className="block w-12 h-0.5 bg-accent mt-3" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4">
            {aboutContent.paragraphs[lang].map((p, i) => (
              <p key={i} className="text-foreground-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              {lang === "pt" ? "Formação" : "Education"}
            </h3>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-background hover:border-accent/50 transition-colors"
                >
                  <p className="text-sm font-semibold text-foreground mb-0.5">
                    {edu.degree[lang]}
                  </p>
                  <p className="text-xs text-accent mb-1">{edu.institution}</p>
                  <p className="text-xs text-foreground-muted mb-2">
                    {edu.period}
                  </p>
                  <p className="text-xs text-foreground-muted leading-relaxed">
                    {edu.notes[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
