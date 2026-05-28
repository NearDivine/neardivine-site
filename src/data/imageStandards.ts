export type ProjectImageVariant =
  | "hero"
  | "card"
  | "gallery"
  | "technical"
  | "portrait"
  | "archive";

export type ProjectImageQuality =
  | "portfolio"
  | "process"
  | "archive";

export type ProjectImageEvidenceType =
  | "showcase"
  | "build"
  | "test"
  | "configuration"
  | "failure"
  | "repair"
  | "archive";

export type ProjectImagePhase =
  | "concept"
  | "v1"
  | "v2"
  | "rebuild"
  | "current";

export type ProjectImage = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  variant: ProjectImageVariant;
  quality: ProjectImageQuality;
  evidenceType?: ProjectImageEvidenceType;
  phase?: ProjectImagePhase;
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
    useCase: "Top image on a project page. Should be portfolio-quality.",
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
  archive: {
    label: "Archive image",
    aspectRatio: "Flexible",
    recommendedSize: "600px+ wide preferred",
    useCase: "Older rough documentation photos kept for project history and evidence.",
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
    publicUse: "Historically useful, but rough. Use in evidence/archive sections, not hero/card slots.",
  },
};

export const imageEvidenceTypeStandards: Record<
  ProjectImageEvidenceType,
  {
    label: string;
    useCase: string;
  }
> = {
  showcase: {
    label: "Showcase",
    useCase: "Clean current-state presentation images.",
  },
  build: {
    label: "Build evidence",
    useCase: "Assembly, wiring, mechanical layout, or integration proof.",
  },
  test: {
    label: "Test evidence",
    useCase: "Power-on, validation, bench testing, or field testing.",
  },
  configuration: {
    label: "Configuration evidence",
    useCase: "Software, firmware, tuning, setup, and system configuration.",
  },
  failure: {
    label: "Failure evidence",
    useCase: "Problems, constraints, mistakes, blockers, and failure modes.",
  },
  repair: {
    label: "Repair evidence",
    useCase: "Fixes, rework, temporary repairs, and corrective actions.",
  },
  archive: {
    label: "Archive reference",
    useCase: "Older rough photos kept for historical context.",
  },
};