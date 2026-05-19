export const allProjects = [
  {
    slug: "fpv-quadcopter",
    title: "Custom FPV Quadcopter",
    category: "UAV / Embedded",
    status: "Bench-tested",
    href: "/work/fpv-quadcopter",
    image: "",
    tags: ["FPV", "Betaflight", "ELRS", "Soldering", "ESC", "Hardware bring-up"],
    summary:
      "Built a custom FPV drone from individual parts instead of using a ready-to-fly kit. I wired the power path, flight controller, ESC, motors, and ELRS receiver, then brought the system up in Betaflight with staged bench testing.",
    description:
      "A custom FPV drone build focused on wiring, power validation, receiver setup, Betaflight configuration, motor testing, and hardware troubleshooting.",
    stats: [
      "Built from individual components",
      "ELRS + Betaflight configured",
      "Bench motor testing completed",
    ],
    hardware: [
      ["Flight controller", "Holybro Kakute H7 v1.3"],
      ["ESC", "Holybro Tekko32 F4 4-in-1 ESC"],
      ["Receiver", "HGLRC Hermes 2.4 GHz ELRS"],
      ["Transmitter", "RadioMaster Boxer ELRS"],
      ["Power", "4S LiPo, XT60 pigtail, capacitor"],
      ["Safety", "ViFly Short Saver 2"],
      ["Video", "DJI Goggles 2, DJI O4 Air Unit, analog fallback hardware"],
    ],
    sections: {
      built:
        "I built this FPV quadcopter from individual components because I wanted to understand how the system works underneath the plug-and-play layer. The build covered the full bring-up path: wiring, power checks, flight-controller setup, receiver binding, Betaflight configuration, motor testing, and troubleshooting.",
      why:
        "The useful part of this project was not just assembling the frame. It was learning how the power system, receiver, firmware configuration, ESC behavior, and video hardware all interact.",
      personalWork: [
        "Selected and assembled the main hardware stack",
        "Wired the ESC, flight controller, receiver, XT60 pigtail, capacitor, and motor path",
        "Checked continuity before applying battery power",
        "Used a short-saver during first power-on",
        "Configured Betaflight ports and receiver settings",
        "Bound the ELRS receiver and validated receiver input",
        "Tested motor output from the Betaflight Motors tab",
        "Debugged UART, receiver, arming, and ESC behavior",
        "Identified the DJI O4 compatibility issue with the selected stack",
      ],
      problems: [
        "The receiver did not immediately behave as expected in Betaflight. The issue was not only power or binding; the UART and serial receiver configuration also had to line up.",
        "The build also exposed arming blockers and ESC telemetry limitations. Motors eventually spun during bench testing, but the ESC telemetry / BLHeli32 path was not cleanly resolved.",
        "The DJI O4 Air Unit was a useful failure point. I owned the part, but the selected flight-controller/video stack was not a clean match, so I separated owned hardware from integrated hardware.",
      ],
      worked: [
        "Safe first power-on process",
        "ESC-to-flight-controller wiring validation",
        "ELRS receiver bind",
        "Receiver data visible in Betaflight",
        "Betaflight configuration and motor testing",
        "Motors spinning during bench tests",
        "Basic staged hardware bring-up workflow",
      ],
      unfinished: [
        "Final flight test status",
        "Current arming status",
        "Final video path",
        "Exact frame, motor, prop, capacitor, and battery specs",
        "Betaflight config export",
        "Current wiring photos",
        "Clear final build photos",
      ],
      learned:
        "This project made me better at staged hardware bring-up. I learned to test power first, then receiver input, then motor output, instead of trying to make the whole drone work at once. It also showed why exact documentation matters: months later, the missing details are not the broad story, but the models, settings, wiring photos, screenshots, and logs.",
    },
  },
  {
    slug: "slimevr-trackers",
    title: "DIY SlimeVR Full Body Tracking",
    category: "Embedded",
    status: "Prototype",
    href: "/work/slimevr-trackers",
    image: "",
    tags: ["ESP32", "IMU", "FreeCAD", "Wearables", "Soldering"],
    summary:
      "Custom wearable trackers using XIAO ESP32S3 boards, IMUs, LiPo power, soldered wiring, firmware configuration, and FreeCAD-designed cases.",
    description:
      "A wearable embedded-systems project combining small electronics, IMU tracking, battery packaging, and custom printed cases.",
    stats: ["8 tracker target", "Custom case design", "ESP32 + IMU hardware"],
  },
  {
    slug: "smart-home-automation-lab",
    title: "Smart Home Automation Lab",
    category: "Automation",
    status: "Active",
    href: "/work/smart-home-automation-lab",
    image: "",
    tags: ["Home Assistant", "Frigate", "Cameras", "Automation", "Networking"],
    summary:
      "A Home Assistant and Frigate-based automation environment with cameras, face recognition, smart locks, lighting, and local infrastructure.",
    description:
      "A home automation lab focused on practical smart-home infrastructure, camera-based events, local services, and custom automations.",
    stats: ["Local automation stack", "Camera event logic", "Smart lock and lighting"],
  },
  {
    slug: "robotic-spider-platform",
    title: "Robotic Spider Platform",
    category: "Robotics",
    status: "Active",
    href: "/work/robotic-spider-platform",
    image: "",
    tags: ["Robotics", "Mechatronics", "Motor Control", "CAD", "Embedded"],
    summary:
      "A long-term mechatronics platform exploring multi-legged locomotion, embedded control, power systems, and modular mechanical design.",
    description:
      "A robotics development platform for learning legged locomotion, mechanical design, embedded control, and future autonomy systems.",
    stats: ["8-leg target", "4 DOF per leg", "Modular leg design"],
  },
  {
    slug: "keystone-home-systems",
    title: "Keystone Home Systems",
    category: "Web / Ops",
    status: "Platform",
    href: "/work/keystone-home-systems",
    image: "",
    tags: ["Next.js", "n8n", "Automation", "CRM", "Operations"],
    summary:
      "A smart-home service platform combining intake forms, automation workflows, dashboards, and operational documentation.",
    description:
      "A software and operations system for managing smart-home service workflows, customer intake, automation logic, and documentation.",
    stats: ["Business platform", "Workflow automation", "Service operations"],
  },
];

export const focusProjects = allProjects.filter((project) =>
  ["robotic-spider-platform", "slimevr-trackers", "smart-home-automation-lab"].includes(project.slug)
);

export const recentLogs = allProjects.filter((project) =>
  ["fpv-quadcopter", "slimevr-trackers", "smart-home-automation-lab", "keystone-home-systems"].includes(project.slug)
);