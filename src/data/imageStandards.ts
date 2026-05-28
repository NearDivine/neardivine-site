export type ProjectImageVariant =
  | "hero"
  | "card"
  | "gallery"
  | "technical"
  | "portrait";

export type ProjectImageQuality =
  | "portfolio"
  | "process"
  | "archive";

export type ProjectImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  variant: ProjectImageVariant;
  quality: ProjectImageQuality;
};

export const imageVariantStandards: Record<
  ProjectImageVariant,
  {
    label: string;
    aspectRatio: string;
    recommendedSize: string;
    useCase: string;
  }
> = {
  hero: {
    label: "Hero image",
    aspectRatio: "16:9",
    recommendedSize: "1600x900",
    useCase: "Top image on a project page.",
  },
  card: {
    label: "Project card thumbnail",
    aspectRatio: "4:3",
    recommendedSize: "800x600",
    useCase: "Thumbnail shown in project grids.",
  },
  gallery: {
    label: "Gallery image",
    aspectRatio: "4:3",
    recommendedSize: "1200x900",
    useCase: "General build gallery images.",
  },
  technical: {
    label: "Technical detail image",
    aspectRatio: "4:3",
    recommendedSize: "1200x900",
    useCase: "Wiring, bench, mechanism, and close-up documentation.",
  },
  portrait: {
    label: "Portrait image",
    aspectRatio: "3:4",
    recommendedSize: "900x1200",
    useCase: "Vertical phone photos that are still worth showing.",
  },
};

export const imageQualityStandards: Record<
  ProjectImageQuality,
  {
    label: string;
    publicUse: string;
  }
> = {
  portfolio: {
    label: "Portfolio quality",
    publicUse: "Clean enough for hero images, cards, and main galleries.",
  },
  process: {
    label: "Process documentation",
    publicUse: "Useful for showing work history, but should not dominate the page.",
  },
  archive: {
    label: "Archive evidence",
    publicUse: "Historically useful, but rough. Use only in lower-priority sections.",
  },
};