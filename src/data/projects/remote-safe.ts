import type { Project } from "../projectTypes";

export const remoteSafe: Project = {
  slug: "remote-safe",
  title: "Remote Safe Retrofit",
  category: "Embedded Systems",
  status: "Functional Prototype",
  href: "/work/remote-safe",
  image: "",
  tags: [
    "ESP32",
    "Solenoid Control",
    "MOSFET Switching",
    "Flyback Protection",
    "OTA Updates",
    "Embedded Retrofit",
  ],
  summary:
    "A small electronic safe retrofit where I replaced the original control behavior with an ESP32-based remote control system, solenoid actuation, MOSFET switching, and OTA firmware updates.",
  description:
    "This project converted a basic electronic safe into a custom embedded control project. The focus was not on making a hardened commercial security product, but on learning how to safely control a physical latch mechanism with a microcontroller, power switching circuit, and updateable firmware.",
  stats: [
    "ESP32-based control",
    "Solenoid-driven latch",
    "MOSFET load switching",
    "Flyback diode protection",
    "HTTP control interface",
    "ArduinoOTA update support",
  ],
  hardware: [
    ["Controller", "ESP32-based microcontroller"],
    ["Actuator", "Low-voltage solenoid latch mechanism"],
    ["Switching", "Logic-controlled MOSFET circuit"],
    ["Protection", "Flyback diode across the solenoid load"],
    ["Gate behavior", "Gate resistor and pull-down resistor for predictable switching"],
    ["Firmware", "HTTP command handling and ArduinoOTA updates"],
  ],
  sections: {
    built:
      "I rebuilt the safe's control side around an ESP32-based microcontroller. The system controls a solenoid latch through a MOSFET switching circuit, includes flyback protection for the inductive load, and supports remote firmware updates through ArduinoOTA.",
    why:
      "The project was a practical embedded-systems retrofit. Instead of treating the safe as a black-box consumer device, I used it as a small mechatronics platform for learning actuator control, protection circuits, firmware updates, and physical-device reliability.",
    personalWork: [
      "Removed or bypassed the original control behavior and treated the safe as a mechanical latch system to be controlled directly.",
      "Designed the control path between the ESP32, MOSFET, and solenoid so the microcontroller could switch the load without directly powering it.",
      "Added flyback protection across the solenoid to reduce voltage spikes when the coil de-energizes.",
      "Used gate-control components to keep the MOSFET behavior predictable instead of letting the gate float.",
      "Built firmware for remote control behavior and OTA updates so the device could be modified without repeated physical reprogramming.",
      "Debugged the circuit after shorting and component issues, including replacing damaged parts and validating the switching path again.",
    ],
    problems: [
      "The main risk was treating the solenoid like a simple low-voltage load. Because it is inductive, switching it without protection can create voltage spikes that can damage control electronics.",
      "The MOSFET gate needed predictable behavior. Without a pull-down path, the gate can float and cause unreliable or unsafe switching.",
      "The project had tight physical constraints because the circuit had to fit around the safe's existing mechanical latch area.",
      "A short or wiring mistake damaged part of the control path, which forced a more careful review of the MOSFET, diode orientation, and power wiring.",
    ],
    worked: [
      "The safe became remotely controllable through a custom embedded control path.",
      "The solenoid could be actuated through the MOSFET instead of directly from the microcontroller.",
      "OTA support made firmware changes easier after the circuit was installed.",
      "The project gave direct practice with real actuator-control failure modes instead of only breadboard logic.",
    ],
    unfinished: [
      "Add a cleaner enclosure or internal mounting plate for the control electronics.",
      "Add a local physical override or service mode so the safe does not depend only on remote control.",
      "Add better power-state feedback, logging, or status indication.",
      "Document the final wiring with a proper schematic instead of relying only on build notes.",
    ],
    learned:
      "This project reinforced the difference between controlling logic signals and controlling physical loads. A solenoid needs proper switching, protection, and predictable default states. The useful part of the build was not just making the safe open remotely, but understanding the circuit behavior well enough to debug failures and make the control path safer.",
  },
};