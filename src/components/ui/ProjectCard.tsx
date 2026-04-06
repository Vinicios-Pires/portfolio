import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import type { Project, Lang } from "@/types";
import { SkillBadge } from "./SkillBadge";

interface ProjectCardProps {
  project: Project;
  lang: Lang;
}

export function ProjectCard({ project, lang }: ProjectCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-xl border border-border bg-background-secondary hover:border-accent/50 transition-colors group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live project"
              className="text-foreground-muted hover:text-foreground transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-foreground-muted mb-5 flex-1">
        {project.description[lang]}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <SkillBadge key={t} skill={t} />
        ))}
      </div>
    </div>
  );
}
