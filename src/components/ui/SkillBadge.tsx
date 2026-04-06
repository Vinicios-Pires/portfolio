interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-background-secondary border border-border text-foreground-muted hover:border-accent hover:text-accent transition-colors">
      {skill}
    </span>
  );
}
