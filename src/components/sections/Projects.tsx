"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { githubConfig } from "@/lib/github.config";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectFilter } from "@/components/ui/ProjectFilter";
import type { Project, ProjectCategory } from "@/types";

interface ProjectsProps {
  initialProjects: Project[];
}

export function Projects({ initialProjects }: ProjectsProps) {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories: ProjectCategory[] = Object.entries(githubConfig.categoryMap)
    .filter(([slug]) => initialProjects.some((p) => p.category === slug))
    .map(([slug, label]) => ({ slug, label }));

  const filtered =
    activeCategory === null
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {lang === "pt" ? "Projetos" : "Projects"}
          <span className="block w-12 h-0.5 bg-accent mt-3" />
        </h2>

        {categories.length > 0 && (
          <ProjectFilter
            categories={categories}
            active={activeCategory}
            lang={lang}
            onChange={setActiveCategory}
          />
        )}

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard
                key={project.repoUrl ?? project.title}
                project={project}
                lang={lang}
              />
            ))}
          </div>
        ) : (
          <p className="text-foreground-muted text-sm">
            {lang === "pt"
              ? "Nenhum projeto encontrado nesta categoria."
              : "No projects found in this category."}
          </p>
        )}

        <p className="mt-10 text-sm text-foreground-muted text-center">
          {lang === "pt"
            ? "Mais projetos disponíveis no "
            : "More projects available on "}
          <a
            href="https://github.com/Vinicios-Pires"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
