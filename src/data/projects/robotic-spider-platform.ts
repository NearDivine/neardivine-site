import type { Project } from "../projectTypes";

export const roboticSpiderPlatform: Project = {
  slug: "robotic-spider-platform",
  title: "Robotic Spider Platform",
  category: "Robotics / Embedded Systems",
  status: "Active prototype",
  href: "/work/robotic-spider-platform",
  image: "/projects/robotic-spider-platform/v2/spider-v2-power-bench-overview.jpg",
  tags: [
    "Robotics",
    "Mechatronics",
    "Motor Control",
    "DepthAI",
    "CAD",
    "Power Systems",
    "Prototyping",
  ],
  summary:
    "A modular legged-robotics platform focused on actuator testing, mechanical packaging, embedded control, power distribution, and future perception/autonomy support.",
  description:
    "An ongoing robotics project using staged prototypes to test leg mechanics, actuator choices, control electronics, power architecture, and perception hardware before scaling into a full 8-legged platform.",
  stats: [
    "8-leg target platform",
    "4 DOF per leg target",
    "V2 actuator testbench",
    "DepthAI perception tested",
  ],
  hardware: [
    ["Target platform", "8-legged robot with 4 DOF per leg"],
    ["Current direction", "Single repeatable leg module before full-body scaling"],
    [
      "Mechanical V2 focus",
      "Printed actuator mounts, bearings, shafts, gears, and leg-joint packaging",
    ],
    [
      "Power testbench",
      "LiPo battery, XT connector, inline switch, bus bar, and distributed wiring",
    ],
    ["Motor-control testing", "Small DC gear motors and motor-driver test wiring"],
    ["Perception exploration", "OAK-D / DepthAI stereo vision experiments"],
    [
      "Thermal mitigation",
      "USB-powered cooling fans built for an overheating DepthAI / OAK-D camera",
    ],
  ],
  sections: {
    built:
      "I am building a modular robotic spider platform under the internal codename Arachno Autonomicon. The public-facing project name is Robotic Spider Platform because it is clearer for a portfolio. The project is not one finished robot yet. V2 is a staged prototype focused on actuator packaging, gear and bearing layouts, power-distribution testing, motor-control wiring, DepthAI perception testing, and thermal fixes for camera hardware.",

    why:
      "The goal is to build real legged-robotics capability instead of only assembling a kit. A spider-style robot forces several systems to work together: mechanical design, actuator sizing, power delivery, motor control, feedback sensing, gait logic, and eventually autonomy. The current objective is to prove a reliable leg module and supporting control architecture before scaling into the full 8-leg robot.",

    personalWork: [
      "Defined the platform direction around an 8-leg robot with 4 DOF per leg",
      "Separated the project into prototype branches instead of trying to build the full robot at once",
      "Built a V2 electrical testbench for battery power, switching, power distribution, and actuator wiring",
      "Used a bus-bar style distribution layout to organize power routing for multiple future actuator loads",
      "Printed and test-fit actuator mounts, gear components, bearing plates, shafts, and leg-joint pieces",
      "Explored compact gear and bearing layouts for a cleaner mechanical joint design",
      "Tested early small DC gear-motor concepts as an alternative to simple hobby-servo actuation",
      "Investigated how actuator placement affects leg bulk, torque path, and maintainability",
      "Started perception-side experimentation using DepthAI / OAK-D stereo camera output",
      "Built USB-powered cooling fans to manage DepthAI / OAK-D camera heat during perception testing",
      "Used the V2 prototype to identify which systems need to be solved before full-frame assembly",
    ],

    problems: [
      "The first major constraint is actuator packaging. A motor or servo can work on a bench but still fail as a robot part if it makes the leg too bulky, too weak, too heavy, or mechanically awkward.",
      "The second constraint is power delivery. A full 8-leg, 4-DOF-per-leg robot would create a large actuator count, so power distribution has to be designed early instead of added at the end.",
      "The third constraint is mechanical repeatability. One printed joint or bracket is not enough; the design has to become repeatable across many joints without turning into a wiring and maintenance mess.",
      "The fourth constraint is control architecture. A single central controller becomes less attractive as actuator count increases, which is why the project direction favors modular leg control and staged subsystem validation.",
      "The fifth constraint is thermal management. During DepthAI / OAK-D perception testing, the camera hardware started getting too hot, so I built USB-powered cooling fans as a practical bench-level mitigation.",
      "The sixth constraint is scope control. The long-term goal includes autonomy, but V2 is not an autonomous spider robot. The current bottleneck is still reliable actuation, power, packaging, thermal handling, and repeatable leg mechanics.",
    ],

    worked: [
      "V2 created a clearer separation between power, actuator, mechanical, perception, and thermal experiments",
      "The power bench gave the project a more realistic path for testing actuator loads",
      "Printed parts helped expose real packaging constraints instead of leaving the design as only a concept",
      "Gear and bearing experiments created a better basis for future joint design",
      "DepthAI testing proved that perception experiments could be developed separately from the leg hardware",
      "The USB fan setup solved a real camera heat issue during bench testing",
      "The project direction became more honest: prove one subsystem at a time, then scale",
    ],

    unfinished: [
      "Final single-leg mechanical module",
      "Confirmed actuator choice for the current leg design",
      "Validated torque and range of motion under load",
      "Final motor-driver and feedback-control layout",
      "Encoder feedback integration",
      "Repeatable wiring layout for one complete leg",
      "Clean modular leg-controller architecture",
      "Multi-leg synchronization",
      "Gait-control software",
      "Full 8-leg chassis integration",
      "Autonomy and perception integration",
      "Cleaner final build photos and diagrams",
    ],

    learned:
      "V2 made the project more grounded. The main lesson is that a large spider robot is not one problem; it is a stack of smaller problems that have to be isolated and proven. The strongest next step is not building the full frame. It is proving one repeatable leg module with usable actuation, clean power routing, reliable control, thermal awareness, and a mechanical layout that can actually scale.",
  },
  gallery: [
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-power-bench-overview.jpg",
      title: "V2 power and actuator testbench",
      caption:
        "Early V2 bench layout for battery power, switching, distribution, motor-driver wiring, and actuator testing before committing to a full leg assembly.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-power-bench-angle.jpg",
      title: "Power-distribution layout",
      caption:
        "Angled view of the LiPo battery, XT connector, inline switch, bus-bar distribution, and temporary wiring used to test the power architecture.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-printed-parts-layout.jpg",
      title: "Printed joint components",
      caption:
        "Printed parts, small gearmotor, bearing plate, shaft, and gear pieces laid out during the mechanical packaging stage.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-actuator-leg-assembly.jpg",
      title: "Actuator and joint assembly",
      caption:
        "Prototype actuator/joint assembly using a small DC gearmotor, printed mounts, shaft, gear components, and bearing support.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-gear-bearing-closeup.jpg",
      title: "Gear and bearing close-up",
      caption:
        "Close-up of the printed gear and bearing layout used to evaluate compact joint packaging and mechanical fit.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-bearing-gear-layout.jpg",
      title: "Bearing and gear layout",
      caption:
        "Flat layout showing the bearing plate, gear, motor, and printed leg/joint pieces before full assembly.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-depthai-test.jpg",
      title: "DepthAI perception test",
      caption:
        "DepthAI stereo/depth output test used to explore future perception capabilities separately from the leg hardware.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-depthai-usb-cooling-fans.jpg",
      title: "DepthAI camera cooling fix",
      caption:
        "USB-powered cooling fans built after the DepthAI / OAK-D camera started getting too hot during perception testing.",
    },
    {
      src: "/projects/robotic-spider-platform/v2/spider-v2-perception-bench.jpg",
      title: "Perception and compute bench",
      caption:
        "Bench setup combining camera/perception hardware and compute hardware while exploring the future autonomy stack.",
    },
  ],
};