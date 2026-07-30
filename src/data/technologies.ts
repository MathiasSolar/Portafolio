export type TechnologyDefinition = {
  icon: string;
  darkClass?: "dark:invert" | "dark:brightness-200";
};

const TECHNOLOGY_CATALOG = {
  javascript: {
    icon: "/icons/logos/javascript.svg"
  },
  typescript: {
    icon: "/icons/logos/typescript.svg"
  },
  react: {
    icon: "/icons/logos/react.svg"
  },
  astro: {
    icon: "/icons/logos/astro.svg"
  },
  nodejs: {
    icon: "/icons/logos/nodejs.svg"
  },
  python: {
    icon: "/icons/logos/python.svg"
  },
  django: {
    icon: "/icons/logos/django.svg",
    darkClass: "dark:brightness-200"
  },
  php: {
    icon: "/icons/logos/php.svg"
  },
  laravel: {
    icon: "/icons/logos/laravel.svg"
  },
  html: {
    icon: "/icons/logos/html5.svg"
  },
  css: {
    icon: "/icons/logos/css3.svg"
  },
  tailwindcss: {
    icon: "/icons/logos/tailwindcss.svg"
  },
  wordpress: {
    icon: "/icons/logos/wordpress.svg",
    darkClass: "dark:brightness-200"
  },
  "google-analytics": {
    icon: "/icons/logos/google-analytics.svg"
  },
  docker: {
    icon: "/icons/logos/docker.svg"
  },
  linux: {
    icon: "/icons/logos/linux.svg"
  },
  ubuntu: {
    icon: "/icons/logos/ubuntu.svg"
  },
  git: {
    icon: "/icons/logos/git.svg"
  },
  github: {
    icon: "/icons/logos/github.svg",
    darkClass: "dark:invert"
  },
  vercel: {
    icon: "/icons/logos/vercel.svg",
    darkClass: "dark:invert"
  },
  netlify: {
    icon: "/icons/logos/netlify.svg"
  },
  postgresql: {
    icon: "/icons/logos/postgresql.svg"
  },
  mysql: {
    icon: "/icons/logos/mysql.svg"
  },
  vscode: {
    icon: "/icons/logos/vscode.svg"
  },
  figma: {
    icon: "/icons/logos/figma.svg"
  },
  composer: {
    icon: "/icons/logos/composer.svg"
  },
  firebase: {
    icon: "/icons/logos/firebase.svg"
  },
  powerbi: {
    icon: "/icons/logos/powerbi.svg"
  }
} as const satisfies Record<string, TechnologyDefinition>;

export type TechnologyKey = keyof typeof TECHNOLOGY_CATALOG;

export const TECHNOLOGIES: Record<TechnologyKey, TechnologyDefinition> = TECHNOLOGY_CATALOG;
