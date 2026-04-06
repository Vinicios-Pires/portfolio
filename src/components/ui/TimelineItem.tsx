import type { Experience } from "@/types";
import type { Lang } from "@/types";
import { SkillBadge } from "./SkillBadge";

interface TimelineItemProps {
  experience: Experience;
  lang: Lang;
  isLast: boolean;
}

export function TimelineItem({ experience, lang, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent mt-1.5 shrink-0 ring-4 ring-background" />
        {!isLast && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isLast ? "pb-0" : ""}`}>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="text-base font-semibold text-foreground">
            {experience.role[lang]}
          </h3>
          {experience.current && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
              {lang === "pt" ? "Atual" : "Current"}
            </span>
          )}
        </div>

        <p className="text-sm font-medium text-accent mb-1">
          {experience.company}
        </p>
        <p className="text-xs text-foreground-muted mb-4">
          {experience.period[lang]}
        </p>

        <ul className="space-y-1.5 mb-4">
          {experience.description[lang].map((item, i) => (
            <li key={i} className="text-sm text-foreground-muted flex gap-2">
              <span className="text-accent mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.tech.map((t) => (
            <SkillBadge key={t} skill={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
