export type ProjectGalleryItem = {
  src: string;
  title?: string;
  caption?: string;
};

export type ProjectVideo = {
  src: string;
  title?: string;
  caption?: string;
  poster?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  href: string;
  image?: string;
  tags?: string[];
  summary: string;
  description?: string;
  stats?: string[];
  hardware?: [string, string][];
  gallery?: ProjectGalleryItem[];
  video?: ProjectVideo;
  sections?: {
    built?: string;
    why?: string;
    personalWork?: string[];
    problems?: string[];
    worked?: string[];
    unfinished?: string[];
    learned?: string;
  };
};


