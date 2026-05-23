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
    "A modular legged-robotics platform using staged prototypes to test actuator packaging, power distribution, embedded control, and future perception support.",
  description:
    "The Robotic Spider Platform is an ongoing robotics project built through separate prototype branches instead of one overloaded build page. Each profile focuses on a specific stage or subsystem: early leg concepts, V2 actuator and power testing, perception experiments, thermal fixes, and future full-body integration.",
  stats: [
    "8-leg target platform",
    "4 DOF per leg target",
    "Prototype-based development",
    "V2 actuator testbench active",
  ],
  hardware: [
    ["Target platform", "8-legged robot with 4 DOF per leg"],
    ["Current direction", "Single repeatable leg module before full-body scaling"],
    ["Mechanical focus", "Printed actuator mounts, bearings, shafts, gears, and leg-joint packaging"],
    ["Power focus", "LiPo battery, XT connector, inline switch, bus bar, and distributed wiring"],
    ["Control focus", "Motor-control testing and future modular leg-controller architecture"],
    ["Perception focus", "OAK-D / DepthAI stereo vision experiments"],
  ],
  sections: {
    built:
      "I am building a modular robotic spider platform through staged prototypes. The project is not one finished robot yet. The current work is split into separate profiles for leg mechanics, actuator testing, power distribution, perception experiments, and future autonomy support.",
    why:
      "A spider-style robot forces several hard systems to work together: mechanical design, actuator sizing, power delivery, control electronics, feedback sensing, gait logic, and eventually perception. Splitting the project into profiles keeps the documentation readable and makes each subsystem easier to evaluate.",
    personalWork: [
      "Defined the target platform around an 8-leg robot with 4 DOF per leg",
      "Separated the project into staged prototype branches instead of treating everything as one build",
      "Built a V2 actuator and power testbench",
      "Explored gear, bearing, and joint packaging concepts",
      "Started DepthAI / OAK-D perception testing separately from the leg hardware",
      "Built a USB fan cooling fix for overheating perception hardware",
    ],
    problems: [
      "The project has too many subsystems to document cleanly on one page.",
      "Actuator packaging, power distribution, control architecture, perception, and thermal handling each need their own documentation path.",
      "The long-term goal includes autonomy, but the current bottlenecks are still mechanical repeatability, actuator selection, wiring, and subsystem validation.",
    ],
    worked: [
      "Splitting the project into prototypes makes the build easier to explain and evaluate.",
      "The V2 bench gave the project a more realistic path for testing power and actuator behavior.",
      "Perception work can be documented separately from mechanical leg development.",
    ],
    unfinished: [
      "Final single-leg mechanical module",
      "Confirmed actuator choice",
      "Validated torque and range of motion under load",
      "Encoder feedback integration",
      "Clean modular leg-controller architecture",
      "Multi-leg synchronization",
      "Full 8-leg chassis integration",
      "Autonomy and perception integration",
    ],
    learned:
      "The spider robot is not one problem. It is a stack of smaller problems that need to be isolated, tested, documented, and then integrated. The strongest next step is proving one repeatable leg module before scaling into a full frame.",
  },
  profiles: [
    {
      slug: "v1-servo-concept",
      title: "V1 Servo Concept",
      category: "Prototype Branch",
      status: "Archived / early concept",
      href: "/work/robotic-spider-platform/v1-servo-concept",
      image: "",
      tags: ["Servos", "Arduino", "Early Prototype", "Legged Robotics"],
      summary:
        "Early spider-robot direction focused on hobby servo control, basic leg movement, and understanding the scale of the mechanical/control problem.",
      description:
        "V1 represents the earliest prototype direction for the spider platform. It was less about a polished mechanical result and more about understanding actuator count, leg layout, control complexity, and why a staged development process would be necessary.",
      stats: [
        "Early servo-based direction",
        "Arduino/PCA9685 control exploration",
        "Used to define later constraints",
      ],
      hardware: [
        ["Controller direction", "Arduino-class controller and servo driver concepts"],
        ["Actuation direction", "Hobby servo-based leg movement"],
        ["Purpose", "Early learning stage for legged-robotics control and packaging constraints"],
      ],
      sections: {
        built:
          "The early V1 direction used hobby-servo thinking to explore how a multi-legged robot might be controlled and packaged. It was the first stage where the project shifted from an idea into an actual robotics platform direction.",
        why:
          "Starting with servos made sense as a low-barrier way to understand leg control, actuator count, wiring complexity, and the practical problems of scaling a spider robot.",
        personalWork: [
          "Started defining the robot around multiple articulated legs instead of a simple wheeled platform",
          "Explored servo-based control as an accessible first actuator path",
          "Identified that a full robot would need staged subsystem testing rather than one large uncontrolled build",
        ],
        problems: [
          "Hobby servos were easier to start with but raised concerns around size, torque, smoothness, and long-term scalability.",
          "The number of actuators required for an 8-leg robot made wiring and power distribution a major issue.",
          "The early concept did not yet have a mature mechanical layout or repeatable leg module.",
        ],
        worked: [
          "V1 helped define the real scope of the project.",
          "It clarified that actuator selection and mechanical packaging would be core constraints.",
          "It pushed the project toward a more modular development approach.",
        ],
        unfinished: [
          "Final servo-based leg module was not completed",
          "Torque and range-of-motion validation remained unresolved",
          "The project moved toward more deliberate actuator testing in V2",
        ],
        learned:
          "V1 showed that a spider robot cannot be treated as a simple servo assembly. Even early planning exposed power, wiring, packaging, and control issues that needed a better prototype structure.",
      },
      gallery: [],
    },
    {
      slug: "v2-actuator-testbench",
      title: "V2 Actuator and Power Testbench",
      category: "Prototype Branch",
      status: "Active prototype",
      href: "/work/robotic-spider-platform/v2-actuator-testbench",
      image: "/projects/robotic-spider-platform/v2/spider-v2-power-bench-overview.jpg",
      tags: [
        "Actuator Testing",
        "Power Distribution",
        "Motor Control",
        "3D Printed Parts",
        "Gear Layout",
        "Bench Testing",
      ],
      summary:
        "A staged V2 prototype focused on actuator packaging, gear and bearing layouts, power-distribution testing, and motor-control wiring before full-body assembly.",
      description:
        "V2 is the main mechanical and electrical test stage for the spider platform. It focuses on proving pieces of the leg and power system before scaling into a complete 8-legged robot.",
      stats: [
        "V2 actuator testbench",
        "Power distribution bench",
        "Printed joint components",
        "Gear and bearing layout tested",
      ],
      hardware: [
        ["Mechanical V2 focus", "Printed actuator mounts, bearings, shafts, gears, and leg-joint packaging"],
        ["Power testbench", "LiPo battery, XT connector, inline switch, bus bar, and distributed wiring"],
        ["Motor-control testing", "Small DC gear motors and motor-driver test wiring"],
        ["Current direction", "Single repeatable leg module before full-body scaling"],
      ],
      sections: {
        built:
          "V2 is a staged prototype focused on actuator packaging, gear and bearing layouts, power-distribution testing, motor-control wiring, and leg-joint mechanics before committing to a full robot body.",
        why:
          "The goal is to prove the hard physical systems before scaling. A full 8-leg robot would multiply every mistake across many joints, so V2 isolates the actuator, power, and mechanical packaging problems first.",
        personalWork: [
          "Built a V2 electrical testbench for battery power, switching, power distribution, and actuator wiring",
          "Used a bus-bar style distribution layout to organize power routing for multiple future actuator loads",
          "Printed and test-fit actuator mounts, gear components, bearing plates, shafts, and leg-joint pieces",
          "Explored compact gear and bearing layouts for a cleaner mechanical joint design",
          "Tested early small DC gear-motor concepts as an alternative to simple hobby-servo actuation",
          "Investigated how actuator placement affects leg bulk, torque path, and maintainability",
        ],
        problems: [
          "A motor or servo can work on a bench but still fail as a robot part if it makes the leg too bulky, too weak, too heavy, or mechanically awkward.",
          "A full 8-leg, 4-DOF-per-leg robot would create a large actuator count, so power distribution has to be designed early.",
          "One printed joint or bracket is not enough; the design has to become repeatable across many joints without turning into a wiring and maintenance mess.",
          "A single central controller becomes less attractive as actuator count increases, which is why the project direction favors modular leg control and staged subsystem validation.",
        ],
        worked: [
          "V2 created a clearer separation between power, actuator, mechanical, and control experiments",
          "The power bench gave the project a more realistic path for testing actuator loads",
          "Printed parts helped expose real packaging constraints instead of leaving the design as only a concept",
          "Gear and bearing experiments created a better basis for future joint design",
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
        ],
        learned:
          "V2 made the project more grounded. The strongest next step is not building the full frame. It is proving one repeatable leg module with usable actuation, clean power routing, reliable control, and a mechanical layout that can actually scale.",
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
      ],
    },
    {
      slug: "depthai-perception-cooling",
      title: "DepthAI Perception and Cooling Bench",
      category: "Subsystem Profile",
      status: "Bench-tested",
      href: "/work/robotic-spider-platform/depthai-perception-cooling",
      image: "/projects/robotic-spider-platform/v2/spider-v2-depthai-test.jpg",
      tags: [
        "DepthAI",
        "OAK-D",
        "Perception",
        "Thermal Fix",
        "USB Cooling",
        "Bench Testing",
      ],
      summary:
        "A perception-side bench profile covering DepthAI / OAK-D stereo output testing and the USB-powered cooling fix built after the camera began overheating.",
      description:
        "This profile separates perception and camera thermal work from the mechanical leg prototype. The goal was to test future perception support without mixing it into the actuator documentation.",
      stats: [
        "DepthAI stereo/depth tested",
        "OAK-D thermal issue found",
        "USB fan cooling fix built",
      ],
      hardware: [
        ["Perception hardware", "OAK-D / DepthAI stereo camera"],
        ["Thermal mitigation", "USB-powered cooling fans"],
        ["Purpose", "Future autonomy/perception exploration separate from leg hardware"],
      ],
      sections: {
        built:
          "I tested DepthAI / OAK-D stereo/depth output as a future perception path for the spider platform. During bench testing, the camera hardware started getting too hot, so I built a USB-powered fan setup as a practical cooling fix.",
        why:
          "Perception is part of the long-term autonomy direction, but it does not need to block the mechanical leg work. Separating this into its own profile keeps perception experiments documented without overstating the current robot as autonomous.",
        personalWork: [
          "Started perception-side experimentation using DepthAI / OAK-D stereo camera output",
          "Identified heat buildup during camera testing",
          "Built USB-powered cooling fans to manage camera temperature during bench work",
          "Kept perception testing separate from actuator and leg-mechanics validation",
        ],
        problems: [
          "The camera began getting too hot during perception testing.",
          "Perception experiments can make the project look more complete than it is if they are not clearly separated from the mechanical robot build.",
          "The autonomy stack is future-facing; current mechanical and control systems still need validation before full integration.",
        ],
        worked: [
          "DepthAI testing proved perception experiments could be developed separately from leg hardware.",
          "The USB fan setup handled a real camera heat issue during bench testing.",
          "The subsystem profile keeps perception documentation honest and separate from the actuator prototype.",
        ],
        unfinished: [
          "Proper camera mount on the final platform",
          "Thermal monitoring during longer test sessions",
          "Integration with robot state/control software",
          "Actual autonomy behavior using perception input",
        ],
        learned:
          "The perception work is useful, but it should remain a separate subsystem until the mechanical platform is ready to support it. The cooling issue also showed that even bench-level perception hardware needs thermal planning.",
      },
      gallery: [
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
    },
  ],
};