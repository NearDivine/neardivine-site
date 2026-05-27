import type { Project } from "./projectTypes";

import { fpvQuadcopter } from "./projects/fpv-quadcopter";
import { roboticSpiderPlatform } from "./projects/robotic-spider-platform";
import { slimevrTrackers } from "./projects/slimevr-trackers";
import { smartHomeAutomationLab } from "./projects/smart-home-automation-lab";
import { keystoneHomeSystems } from "./projects/keystone-home-systems";
import { remoteSafe } from "./projects/remote-safe";
import { printerRestoration } from "./projects/printer-restoration";

type HomeSection = "focus" | "recent" | "none";

type ProjectDisplayMeta = {
  category: string;
  homeSection: HomeSection;
  order: number;
};

const projectDisplayMeta: Record<string, ProjectDisplayMeta> = {
  "robotic-spider-platform": {
    category: "Robotics",
    homeSection: "focus",
    order: 10,
  },
  "fpv-quadcopter": {
    category: "Drones",
    homeSection: "focus",
    order: 20,
  },
  "3d-printer-restoration": {
    category: "3D Printing",
    homeSection: "focus",
    order: 30,
  },
  "remote-safe": {
    category: "Embedded Hardware",
    homeSection: "recent",
    order: 40,
  },
  "slimevr-trackers": {
    category: "Wearable Hardware",
    homeSection: "recent",
    order: 50,
  },
  "smart-home-automation-lab": {
    category: "Smart Home",
    homeSection: "recent",
    order: 60,
  },
  "keystone-home-systems": {
    category: "Web / Ops",
    homeSection: "recent",
    order: 70,
  },
};

const baseProjects: Project[] = [
  roboticSpiderPlatform,
  fpvQuadcopter,
  printerRestoration,
  remoteSafe,
  slimevrTrackers,
  smartHomeAutomationLab,
  keystoneHomeSystems,
];

const applyDisplayMeta = (project: Project): Project => {
  const meta = projectDisplayMeta[project.slug];

  if (!meta) {
    return project;
  }

  return {
    ...project,
    category: meta.category,
  };
};

const sortByDisplayOrder = (a: Project, b: Project) => {
  const aOrder = projectDisplayMeta[a.slug]?.order ?? 999;
  const bOrder = projectDisplayMeta[b.slug]?.order ?? 999;

  return aOrder - bOrder;
};

export const allProjects: Project[] = baseProjects
  .map(applyDisplayMeta)
  .sort(sortByDisplayOrder);

export const focusProjects = allProjects.filter(
  (project) => projectDisplayMeta[project.slug]?.homeSection === "focus"
);

export const recentLogs = allProjects.filter(
  (project) => projectDisplayMeta[project.slug]?.homeSection === "recent"
);

export const workFocusAreas = [
  "Robotics",
  "Drones",
  "3D Printing",
  "Smart Home",
  "Embedded Hardware",
  "Software Tools",
];

export type { Project };


