export type Lang = "pt" | "en";

export type Translated<T> = Record<Lang, T>;

export interface SiteConfig {
  name: string;
  title: Translated<string>;
  tagline: Translated<string>;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface NavLink {
  label: Translated<string>;
  href: string;
}

export interface SkillGroup {
  category: Translated<string>;
  skills: string[];
}

export interface Experience {
  role: Translated<string>;
  company: string;
  period: Translated<string>;
  current: boolean;
  description: Translated<string[]>;
  tech: string[];
}

export interface Project {
  title: string;
  description: Translated<string>;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Education {
  degree: Translated<string>;
  institution: string;
  period: string;
  notes: Translated<string>;
}
