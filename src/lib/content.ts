export const NAV_LINKS = [
  { href: "#specifications", label: "Specifications" },
  { href: "#platform", label: "Platform" },
  { href: "#systems", label: "Systems" },
  { href: "#advantages", label: "Advantages" },
  { href: "#configurations", label: "Configurations" },
] as const;

/** Tactical & technical specifications. */
export const SPECS = [
  { value: 310, unit: "km/h", label: "Max. speed" },
  { value: 30, unit: "km", label: "Flight range" },
  { value: 5, unit: "km", label: "Flight height" },
  { value: 20, unit: "min", label: "Flight time" },
  { value: 400, unit: "g", label: "Combat unit" },
] as const;

/** Airframe subsystems — the hardware manifest. */
export const PLATFORM = [
  { title: "Motors", value: "3115 900KV" },
  { title: "Propellers", value: "8x8 or 8x10" },
  { title: "Stack", value: "8S, heat-resistant" },
  { title: "Battery", value: "8S3P, 15 000 mAh" },
  { title: "Cooling", value: "Active fan + air intake" },
  {
    title: "Camera",
    value: "640x512 thermal",
    note: "Caddx Ratel Pro · Walksnail Ascent GT Pro · DJI O4 Air Unit",
  },
  { title: "Communication", value: "ELRS or SineLink" },
  { title: "Flight controller", value: "ArduPilot / Betaflight" },
] as const;

/** In-house subsystems that get their own feature panels. */
export const SYSTEMS = [
  {
    codename: "Smazhenyi Kabanchyk",
    role: "Initiation unit",
    body: "An in-house design developed in accordance with NGU requirements. It features a timer, visual and audible indicators, and mechanical and software safety locks.",
  },
  {
    codename: "DREMIAN",
    role: "Terminal guidance",
    body: "Last-mile targeting module",
  },
] as const;

export const ADVANTAGES = [
  {
    title: "High-quality construction",
    body: "Built to hold together at 310 km/h and survive repeated sorties.",
  },
  {
    title: "Built with the National Guard of Ukraine",
    body: "Developed in collaboration with the NGU — all operational needs and requirements have been taken into account.",
  },
  {
    title: "Resistance to electronic warfare",
    body: "Hardened against EW measures across the comms and navigation stack.",
  },
  {
    title: "Ready for takeoff in under 30 seconds",
    body: "From case to airborne in less than half a minute.",
  },
  {
    title: "Drone power switch",
    body: "Physical cut-off on the airframe for safe handling and transport.",
  },
  {
    title: "SkyMap planning + beacon guidance",
    body: "Flight path planning in SkyMap with flight guidance via beacons.",
  },
  {
    title: "Built by Ukrainian veterans",
    body: "Manufactured in the Netherlands by Ukrainian military veterans during their rehabilitation.",
  },
] as const;

/** Per-unit cost by optics configuration. */
export const CONFIGURATIONS = [
  {
    optic: "Thermal",
    detail: "640x512 thermal imager",
    price: 1100,
    range: "Night + obscured conditions",
  },
  {
    optic: "DJI O4",
    detail: "DJI O4 Air Unit",
    price: 850,
    range: "Daylight digital HD",
  },
  {
    optic: "Walksnail Ascent",
    detail: "Walksnail Ascent GT Pro",
    price: 800,
    range: "20 km link budget",
  },
] as const;
