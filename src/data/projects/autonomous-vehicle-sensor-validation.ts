import type { Project } from "../projectTypes";

export const autonomousVehicleSensorValidation: Project = {
  slug: "autonomous-vehicle-sensor-validation",
  title: "Autonomous-Vehicle Sensor Validation",
  category: "Autonomy Validation",
  status: "Professional Case Study",
  href: "/work/autonomous-vehicle-sensor-validation",

  tags: [
    "Systems Integration",
    "Sensor Validation",
    "Linux Compute",
    "Ethernet Networking",
    "DC Power",
    "Test Infrastructure",
  ],
  summary:
    "Recovered and operated a controlled environmental test capability used to evaluate autonomous-vehicle sensor behavior across fluid delivery, power, Linux compute, networking, and synchronized data collection.",
  description:
    "At Glydways, I helped turn an incomplete rain-simulation setup into an operational bridge test capability while dedicated engineering equipment was being developed. My work covered mechanical assembly, leak troubleshooting, power-path diagnosis, network integration, remote operation, sensor-data capture, documentation, and repeatable field execution. This public case study intentionally omits internal designs, procedures, datasets, and vehicle details.",
  stats: [
    "Controlled environmental testing",
    "Linux compute and hardwired Ethernet",
    "Camera and LiDAR data collection",
    "Repeatable multi-position trials",
    "System recovery and documentation",
  ],
  hardware: [
    [
      "Test environment",
      "Controlled water-delivery and rain-simulation infrastructure",
    ],
    [
      "Compute",
      "Linux-based test computer used for remote operation and data collection",
    ],
    [
      "Networking",
      "Hardwired Ethernet path with weather-resistant field connections",
    ],
    [
      "Sensors",
      "Camera and LiDAR systems evaluated under controlled conditions",
    ],
    [
      "Power",
      "Fused DC distribution supporting compute and test equipment",
    ],
    [
      "Physical infrastructure",
      "Test enclosure, airflow management, mounting, hoses, and field hardware",
    ],
  ],
  sections: {
    built:
      "I helped recover, assemble, and operate an initial environmental sensor-test capability from incomplete hardware. The resulting setup connected controlled fluid delivery, fused DC power, Linux compute, hardwired networking, remote operation, and coordinated sensor-data collection into a usable field-test system.",
    why:
      "The test team needed a repeatable way to observe autonomous-vehicle sensor behavior under controlled rain conditions. The recovered setup provided a bridge capability that allowed testing and troubleshooting to continue while dedicated engineering equipment was being developed.",
    personalWork: [
      "Inspected the incomplete setup, identified missing or incompatible fluid-path hardware, and helped assemble a usable water-delivery chain.",
      "Troubleshot leaks and connection problems until the system could provide stable, repeatable test conditions.",
      "Diagnosed a compute power-path problem and corrected the protection configuration required for reliable operation.",
      "Established a hardwired Ethernet connection through field-ready hardware for dependable remote access.",
      "Brought up the Linux test computer and remote interface used during field execution.",
      "Supported camera and LiDAR data collection while monitoring system behavior across repeated test positions.",
      "Repaired and maintained supporting test infrastructure, including the environmental enclosure and airflow path.",
      "Documented setup and operating knowledge so the recovered capability could be repeated and handed off.",
      "Later executed testing using the dedicated engineering cart as the formal capability became available.",
    ],
    problems: [
      "The inherited setup was incomplete and could not be operated as received.",
      "Missing fittings, incompatible connections, and leaks prevented repeatable fluid delivery.",
      "The test computer did not initially receive reliable power because the protection path was incorrectly configured.",
      "Field networking needed to remain dependable around water, moving equipment, and outdoor test infrastructure.",
      "The environmental enclosure and supporting airflow equipment required repair before repeatable testing could continue.",
    ],
    worked: [
      "The incomplete system was recovered into an operational bridge test capability.",
      "Fluid delivery became stable enough to support repeatable environmental trials.",
      "The compute, power, and hardwired network paths operated together during field testing.",
      "Camera and LiDAR data could be collected while the controlled test condition was applied.",
      "Documentation preserved setup and operating knowledge for continued team use.",
    ],
    unfinished: [
      "The recovered setup was intentionally a bridge capability rather than final production test equipment.",
      "Long-term testing transitioned toward dedicated engineering hardware with more formalized controls and instrumentation.",
      "Additional automation, calibration, and structured metadata could further reduce variation between test runs.",
    ],
    learned:
      "The most important lesson was that test capability depends on the entire system, not only the sensor under evaluation. A missing fitting, incorrect fuse path, unreliable network connection, damaged enclosure, or undocumented setup step can stop data collection completely. Recovering the capability required treating mechanical, electrical, compute, networking, and operating-process problems as one integrated system.",
  },
};