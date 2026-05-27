import type { Project } from "../projectTypes";

export const printerRestoration: Project = {
  slug: "3d-printer-restoration",
  title: "3D Printer Restoration",
  category: "3D Printing",
  status: "Operational Tooling",
  href: "/work/3d-printer-restoration",
  image: "",
  tags: [
    "3D Printing",
    "Hardware Restoration",
    "Raspberry Pi",
    "Printer Upgrades",
    "Prototyping",
    "Mechanical Tuning",
  ],
  summary:
    "A 3D Printer Restoration project where I repaired and upgraded a cheap printer, then reused a spare Raspberry Pi to improve the control/interface workflow for prototyping.",
  description:
    "This project turned a low-cost used 3D printer into a more useful prototyping tool. The focus was repair, tuning, hardware upgrades, and improving the interface/workflow so the printer could support robotics parts, enclosures, and mechanical experiments.",
  stats: [
    "Used printer restored",
    "Raspberry Pi interface upgrade",
    "Hardware upgrades installed",
    "Printer tuning and reliability work",
    "Used for robotics prototyping",
  ],
  hardware: [
    ["Printer", "Cheap used 3D printer restored and upgraded"],
    ["Control interface", "Spare Raspberry Pi reused for printer control/interface workflow"],
    ["Mechanical system", "Motion system inspected, adjusted, and tuned"],
    ["Print workflow", "Improved control process for longer and more reliable prototype prints"],
    ["Use case", "Robotics parts, prototype shells, mounts, brackets, and test fixtures"],
  ],
  sections: {
    built:
      "I restored a cheap used 3D printer and upgraded it into a more useful prototyping tool. The build included hardware cleanup, replacement or upgrade work, tuning, and a Raspberry Pi-based interface/control workflow.",
    why:
      "I needed a practical way to produce robotics parts, enclosures, brackets, and prototypes without depending on buying every mechanical piece. Restoring a used printer was cheaper than buying a polished new setup and forced me to understand the machine more deeply.",
    personalWork: [
      "Bought a low-cost used printer and brought it back into usable condition instead of replacing it outright.",
      "Inspected the machine as a system: frame, motion path, wiring, print surface, hotend/extrusion behavior, and control workflow.",
      "Installed upgrades and made changes to improve reliability, usability, or print quality.",
      "Reused a spare Raspberry Pi to create a better printer interface/control workflow.",
      "Tuned the printer and slicer behavior so it could support real prototype parts instead of only test prints.",
      "Used the restored printer as part of the larger robotics workflow for shells, mounts, brackets, and experimental mechanical parts.",
    ],
    problems: [
      "Used printers can hide multiple small issues at once. A print problem might come from the slicer, bed leveling, extrusion, belts, frame alignment, material, or firmware/control workflow.",
      "Improving the printer required separating actual mechanical problems from settings problems instead of randomly changing everything at once.",
      "The interface/control side mattered more than expected because poor workflow makes iteration slower even when the printer hardware is functional.",
      "Cheap restoration only works if the upgrades are targeted. Otherwise, it is easy to spend enough money that buying a better printer would have been more rational.",
    ],
    worked: [
      "The printer became useful as an actual prototyping tool rather than just a broken or unreliable used machine.",
      "The Raspberry Pi interface/control workflow made the printer easier to manage.",
      "The restored printer supported robotics-related prints and hardware experiments.",
      "The project gave practical experience with repair, tuning, and tool-building instead of only using off-the-shelf equipment.",
    ],
    unfinished: [
      "Add final photos of the printer before and after restoration.",
      "Document every upgraded part and separate required fixes from optional upgrades.",
      "Add example prints that show how the printer supported later robotics work.",
      "Add a short reliability summary after more long-duration prints.",
    ],
    learned:
      "This project showed that restoring a used tool can be more valuable than buying a finished one if the goal is learning and prototyping. The main lesson was that printer reliability is a system problem: mechanical condition, slicer settings, firmware/control workflow, and material behavior all affect the final result.",
  },
};

