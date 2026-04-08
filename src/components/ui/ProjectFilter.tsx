"use client";

import type { ProjectCategory, Lang } from "@/types";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  active: string | null;
  lang: Lang;
  onChange: (slug: string | null) => void;
}

export function ProjectFilter({ categories, active, lang, onChange }: ProjectFilterProps) {
  const allLabel = lang === "pt" ? "Todos" : "All";

  const base =
    "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors";
  const activeClass = "border-accent text-accent bg-accent/10";
  const inactiveClass =
    "border-border text-foreground-muted hover:border-accent/50 hover:text-foreground";

  return (
    <div
      className="flex flex-wrap gap-2 mb-8"
      role="group"
      aria-label={lang === "pt" ? "Filtrar projetos por categoria" : "Filter projects by category"}
    >
      <button
        onClick={() => onChange(null)}
        className={`${base} ${active === null ? activeClass : inactiveClass}`}
      >
        {allLabel}
      </button>
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onChange(cat.slug)}
          className={`${base} ${active === cat.slug ? activeClass : inactiveClass}`}
        >
          {cat.label[lang]}
        </button>
      ))}
    </div>
  );
}
