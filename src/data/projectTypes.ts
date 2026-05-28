import type {
  ProjectImageQuality,
  ProjectImageVariant,
} from "./imageStandards";

export type ProjectGalleryImage = {
  src: string;

  /**
   * Display title used in gallery cards.
   * Existing project pages currently use this.
   */
  title: string;

  /**
   * Caption shown under the image.
   */
  caption: string;

  /**
   * Real image alt text.
   * Optional for now so old project data does not break immediately.
   * Later, this should become required.
   */
  alt?: string;

  /**
   * Visual display standard.
   * Optional for now so old project data does not break immediately.
   */
  variant?: ProjectImageVariant;

  /**
   * Curation quality standard.
   * Optional for now so old project data does not break immediately.
   */
  quality?: ProjectImageQuality;
};

export type ProjectVideo = {
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
};

export type ProjectSections = {
  built?: string;
  why?: string;
  learned?: string;
  personalWork?: string[];
  problems?: string[];
  worked?: string[];
  unfinished?: string[];
};

export type ProjectProfile = {
  slug: string;
  href: string;
  title: string;
  category: string;
  status: string;
  image?: string;
  summary: string;
  description?: string;
  tags?: string[];
  stats?: string[];
  hardware?: [string, string][];
  gallery?: ProjectGalleryImage[];
  sections?: ProjectSections;
};

export type Project = {
  slug: string;
  href: string;
  title: string;
  category: string;
  status: string;
  image?: string;
  summary: string;
  description?: string;
  tags?: string[];
  stats?: string[];
  hardware?: [string, string][];
  gallery?: ProjectGalleryImage[];
  video?: ProjectVideo;
  profiles?: ProjectProfile[];
  sections?: ProjectSections;
};