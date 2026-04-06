"use client";

import { useLang } from "@/context/LangContext";
import { experiences } from "@/lib/data";
import { TimelineItem } from "@/components/ui/TimelineItem";

export function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-20 bg-background-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {lang === "pt" ? "Experiência" : "Experience"}
          <span className="block w-12 h-0.5 bg-accent mt-3" />
        </h2>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              experience={exp}
              lang={lang}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
