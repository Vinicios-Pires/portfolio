"use client";

import { useLang } from "@/context/LangContext";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const { lang } = useLang();

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {lang === "pt" ? "Projetos" : "Projects"}
          <span className="block w-12 h-0.5 bg-accent mt-3" />
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} lang={lang} />
          ))}
        </div>

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
