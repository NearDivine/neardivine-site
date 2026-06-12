import type { Project } from "../projectTypes";

export const slimevrTrackers: Project = {
  slug: "slimevr-trackers",
  title: "DIY SlimeVR Full Body Tracking",
  category: "Wearable Hardware",
  status: "Completed V1",
  href: "/work/slimevr-trackers",
  image: "/projects/slimevr-trackers/gallery-finished-trackers.jpg",
  tags: ["ESP32", "IMU", "FreeCAD", "Wearables", "Soldering", "Firmware"],
  summary:
    "Built a functional 5-tracker SlimeVR full-body tracking system using XIAO ESP32S3 boards, IMUs, LiPo power, custom wiring, firmware configuration, FreeCAD-designed cases, and strap-mounted wearable packaging.",
  description:
    "A DIY wearable embedded-systems project that started as an 8-tracker SlimeVR build and reached a stable V1 state with 5 trackers fully assembled, flashed, strapped, connected, and verified through SlimeVR.",
  stats: [
    "8-tracker target",
    "5 trackers fully working",
    "~2–4 ms latency on stable units",
    "Closed-case wearable validation",
    "SlimeVR tracker assignment completed",
  ],
  hardware: [
    ["Controller", "Seeed Studio XIAO ESP32S3"],
    ["IMUs", "BMI270 / ICM-series breakout boards depending on tracker revision"],
    ["Power", "3.7 V LiPo battery with slide switch control"],
    ["Firmware", "SlimeVR Tracker ESP firmware with PlatformIO profiles"],
    ["Case", "Custom FreeCAD-designed printed enclosure"],
    ["Mounting", "Elastic body straps with buckles and strap routing"],
    ["Network", "2.4 GHz Wi-Fi connection to SlimeVR server"],
  ],
  sections: {
    built:
      "I built a set of custom SlimeVR-compatible wearable trackers using XIAO ESP32S3 controller boards, IMU breakout boards, LiPo batteries, slide switches, soldered wiring, custom firmware profiles, and FreeCAD-designed printed cases. The original target was 8 trackers. The final documented V1 state is 5 working trackers that were assembled into cases, strapped to the body, connected to SlimeVR, assigned to body positions, and validated through the SlimeVR software workflow.",
    why:
      "The goal was to build a real embedded wearable system instead of buying a finished tracker kit. Each tracker had to fit inside a compact case, power from a battery, connect over Wi-Fi, report IMU orientation, survive case closure, and remain usable while mounted to the body. That made the project a useful test of wiring, firmware configuration, mechanical packaging, RF behavior, and validation discipline.",
    personalWork: [
      "Selected the XIAO ESP32S3 controller and compatible IMU breakout approach",
      "Designed and iterated tracker cases around the board, IMU, battery, switch, USB access, antenna space, and strap mounting",
      "Soldered controller, IMU, battery, and switch wiring for each tracker",
      "Built and flashed firmware through PlatformIO using SlimeVR Tracker ESP firmware",
      "Configured standard tracker pinouts using SDA GPIO5, SCL GPIO6, and INT GPIO4",
      "Created a special right-ankle firmware profile using SDA GPIO5, SCL GPIO4, and INT GPIO43",
      "Validated serial boot behavior and IMU detection before closing trackers",
      "Connected trackers to 2.4 GHz Wi-Fi and paired them with the SlimeVR server",
      "Assigned tracker body positions for chest, thighs, and ankles",
      "Checked raw movement behavior and SlimeVR body calibration workflow",
      "Tested lid-open, lid-closed, USB-powered, battery-powered, and worn behavior",
      "Built strap mounting setups and verified the working tracker set while worn",
    ],
    problems: [
      "The original 8-tracker target did not fully reach production quality. The documented V1 result is 5 working trackers, with the remaining units treated as deferred or unstable instead of being counted as complete.",
      "One left-ankle tracker showed consistently poor latency around 84 ms. The fix was not a firmware change; it improved after swapping the antenna and carefully routing it before closing the lid. After that, it stabilized near the same ~4 ms range as the better units.",
      "The chest tracker and one other unit would not reliably connect to Wi-Fi during the final troubleshooting session, so they were removed from the final V1 validation set.",
      "The right-ankle tracker required a special firmware profile because its wiring did not match the standard tracker pinout.",
      "Case closure changed performance on some units. The project showed that internal antenna routing and wire placement were not just cosmetic; they affected real network behavior.",
      "Multi-tracker connection behavior required firmware/network troubleshooting around repeated UDP handshake timestamp refresh and server-timeout keepalive behavior.",
      "The build exposed how quickly small packaging choices matter in wearable electronics: antenna position, switch placement, wire routing, battery fit, and screw clearance all affected whether the tracker was actually usable.",
    ],
    worked: [
      "5 trackers assembled into final wearable form",
      "Stable units operating around ~2–4 ms latency",
      "SlimeVR pairing and body assignment completed",
      "Chest, thigh, and ankle tracker placement validated",
      "Custom case design reached a usable V1 form",
      "Antenna rerouting fixed one major latency issue",
      "Special firmware profile preserved a nonstandard but working tracker",
      "Failed and deferred units were documented instead of hidden",
    ],
    unfinished: [
      "Finish or rebuild the remaining 3 trackers from the original 8-tracker target",
      "Standardize all wiring so every tracker can use one firmware profile",
      "Add a cleaner internal antenna channel to the case design",
      "Create a repeatable pre-assembly test jig for IMU detection, power, Wi-Fi, and latency",
      "Improve internal strain relief so case closure does not disturb wiring or antenna routing",
      "Publish final STL files, firmware profile notes, and a cleaner rebuild checklist",
      "Capture a true in-game screenshot or video clip for final visual validation",
    ],
    learned:
      "This project became more than a simple tracker assembly. It showed how a wearable embedded system can fail across firmware, pinout, RF layout, power, mechanical packaging, and validation. The final result was 5 working trackers validated through SlimeVR, but the more important engineering result was learning how to isolate unstable units, separate firmware issues from antenna issues, and define a tracker as complete only after it worked while fully assembled and worn.",
  },
  gallery: [
    {
      src: "/projects/slimevr-trackers/gallery-finished-trackers.jpg",
      title: "Finished V1 tracker set",
      caption:
        "The final V1 working set: five assembled DIY SlimeVR trackers with custom printed cases and straps.",
      alt: "Five finished DIY SlimeVR trackers with black printed cases and elastic straps laid out on a table",
    },
    {
      src: "/projects/slimevr-trackers/gallery-tracker-open-case.jpg",
      title: "Open tracker electronics",
      caption:
        "Internal layout showing the LiPo battery, XIAO ESP32S3, IMU breakout, wiring, switch, and external antenna path.",
      alt: "Open DIY SlimeVR tracker showing battery, controller board, IMU board, wiring, and antenna",
    },
    {
      src: "/projects/slimevr-trackers/gallery-single-closed-tracker.jpg",
      title: "Closed tracker assembly",
      caption:
        "A finished tracker case mounted to its strap, including USB access and external switch placement.",
      alt: "Closed DIY SlimeVR tracker mounted on an elastic strap",
    },
    {
      src: "/projects/slimevr-trackers/portrait-five-tracker-worn-setup.jpg",
      title: "Five-tracker worn setup",
      caption:
        "The working tracker set worn on the chest, thighs, and ankles for full-body tracking validation.",
      alt: "Five DIY SlimeVR trackers worn on chest, thighs, and ankles",
    },
    {
      src: "/projects/slimevr-trackers/gallery-lower-body-fit-test.jpg",
      title: "Lower-body fit test",
      caption:
        "Lower-body tracker placement test showing thigh and ankle mounting before final software validation.",
      alt: "Four DIY SlimeVR trackers mounted on both thighs and ankles",
    },
    {
      src: "/projects/slimevr-trackers/technical-slimevr-server-connected.png",
      title: "SlimeVR tracker assignment",
      caption:
        "Five trackers connected and assigned in SlimeVR with live status and latency visible.",
      alt: "SlimeVR tracker assignment screen showing five connected trackers",
    },
    {
      src: "/projects/slimevr-trackers/technical-body-proportions-calibration.png",
      title: "Body proportions calibration",
      caption:
        "Software-side body model calibration used after tracker assignment and mounting validation.",
      alt: "SlimeVR body proportions calibration screen with a skeletal body model",
    },
  ],
};