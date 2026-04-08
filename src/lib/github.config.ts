export const githubConfig = {
  username: "Vinicios-Pires",
  revalidateSeconds: 3600,

  categoryMap: {
    "web-app":  { pt: "Web App",    en: "Web App"  },
    "api":      { pt: "API",        en: "API"      },
    "mobile":   { pt: "Mobile",     en: "Mobile"   },
    "cli":      { pt: "CLI",        en: "CLI"      },
    "library":  { pt: "Biblioteca", en: "Library"  },
  } satisfies Record<string, { pt: string; en: string }>,
};
