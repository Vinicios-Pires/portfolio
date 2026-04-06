"use client";

import { useLang } from "@/context/LangContext";
import { skillGroups } from "@/lib/data";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {lang === "pt" ? "Habilidades" : "Skills"}
          <span className="block w-12 h-0.5 bg-accent mt-3" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category.en}>
              <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                {group.category[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
