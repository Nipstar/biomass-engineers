export type Brand = {
  slug: string;
  name: string;
  country: string;
  summary: string;
  technology: string;
  popularModels: string[];
  commonFaults: string[];
  kwRange: string;
  description: string;
  image?: string;
};

export const brands: Brand[] = [
  {
    slug: "froling-biomass-boilers",
    name: "Fröling",
    country: "Austria",
    technology: "Log, wood chip and pellet",
    summary: "Austrian manufacturer known for precision engineering across log, wood chip and pellet boilers.",
    popularModels: ["T4e Turbo", "PE1", "PE1c Pellet", "TX300", "Lambdamat"],
    commonFaults: [
      "Lambda probe failure and calibration drift",
      "Draught fan bearing or sensor faults",
      "Touchscreen controller errors and firmware issues",
      "Ignition element wear on log boilers",
      "Ash removal auger binding",
      "Backburn protection valve leaks",
      "Heat exchanger turbulator chain wear",
    ],
    kwRange: "15 kW to 1,500 kW",
    description:
      "Fröling is one of the most widely installed premium biomass brands in the UK. Their T4e and PE1 series are common on RHI-registered domestic and light-commercial sites. Controls are proprietary and require specialist knowledge for correct combustion tuning and RHI-compliant servicing.",
    image: "/images/canva/square/frolig-boiler.webp",
  },
  {
    slug: "hargassner-biomass-boilers",
    name: "Hargassner",
    country: "Austria",
    technology: "Wood chip and pellet",
    summary: "Commercial and agricultural specialist, high proportion of wood chip installations.",
    popularModels: ["NANO-PK", "ECO-PK", "MEGA-PK", "WTH Wood Chip"],
    commonFaults: [
      "Fuel feed auger wear and motor failure",
      "Ash box sensor and level switch errors",
      "Vacuum conveying system blockages",
      "Rotary valve seal wear",
      "Lambda sensor readings drifting out of range",
      "PLC controller communication errors",
      "Chip quality fault codes",
    ],
    kwRange: "6 kW to 2,500 kW",
    description:
      "Hargassner dominates mid- and large-scale agricultural, equestrian, and estate installations across the UK. We service their wood chip and pellet ranges including the NANO-PK for domestic, the ECO-PK for light-commercial, and the MEGA-PK for large commercial and district heating applications.",
    image: "/images/canva/landscape/350kw-district-heating-system-with-gas-back-up-boiler.webp",
  },
  {
    slug: "herz-biomass-boilers",
    name: "Herz",
    country: "Austria",
    technology: "Chip, pellet and log",
    summary: "Broad kW range from domestic through heavy commercial and industrial.",
    popularModels: ["BioFire", "firematic", "pelletstar", "BioControl 3000"],
    commonFaults: [
      "Combustion chamber refractory wear and cracking",
      "Lambda sensor calibration drift",
      "Grate motor and clinker removal faults",
      "Ignition rod failure on pellet burners",
      "Pressure-side fan bearing wear",
      "Ash auger seizure on high-ash chip",
      "BioControl display and touchscreen failure",
    ],
    kwRange: "4 kW to 20,000 kW",
    description:
      "Herz manufactures a broad family of biomass boilers, from the 4 kW pelletstar for domestic retrofits up to multi-megawatt industrial firematic systems. We service BioFire chip, firematic chip and pellet, and pelletstar domestic units across the South West — Bristol to Bournemouth to Penzance.",
    image: "/images/canva/landscape/biomass-boiler-controls.webp",
  },
  {
    slug: "heizomat-biomass-boilers",
    name: "Heizomat",
    country: "Germany",
    technology: "Large wood chip",
    summary: "German wood chip specialist for commercial and district heating schemes.",
    popularModels: ["RHK-AK 200–990", "HSK-RA"],
    commonFaults: [
      "Stoker ram seal and hydraulic wear",
      "Heat exchanger fouling on high-moisture chip",
      "PLC control board errors and network faults",
      "Combustion grate overheating",
      "Fuel store agitator arm failure",
      "Ignition burner nozzle blockage",
      "Flue draught regulator sticking",
    ],
    kwRange: "50 kW to 990 kW",
    description:
      "Heizomat systems are a common sight on large agricultural estates, sawmills, and timber-drying operations where on-site chip is available. We service the RHK-AK range and hold parts contacts for stoker hydraulics and proprietary PLC hardware.",
    image: "/images/canva/landscape/waste-wood-shredder-with-overband-magnets.webp",
  },
  {
    slug: "binder-biomass-boilers",
    name: "Binder",
    country: "Germany",
    technology: "Industrial wood chip",
    summary: "Industrial-scale wood chip boilers with travelling-grate combustion.",
    popularModels: ["TRF", "RRK", "SRF Travelling Grate"],
    commonFaults: [
      "Travelling grate bar wear and segment replacement",
      "Combustion air fan bearing failure",
      "Fly ash handling system blockages",
      "Multi-cyclone dust collector wear",
      "Hydraulic ram seal replacement",
      "High-temperature refractory wear",
      "PLC safety interlock faults",
    ],
    kwRange: "150 kW to 10,000 kW",
    description:
      "Binder boilers are installed on the largest UK biomass sites — sawmills, district heating plants, and industrial process heat. Our coded welding team can support plant room and pressurised circuit work alongside routine servicing and travelling grate maintenance.",
    image: "/images/canva/square/binda-boiler-relocated.webp",
  },
  {
    slug: "windhager-biomass-boilers",
    name: "Windhager",
    country: "Austria",
    technology: "Pellet",
    summary: "Premium pellet boilers for domestic and light commercial.",
    popularModels: ["BioWIN 2", "BioWIN XL", "PuroWIN"],
    commonFaults: [
      "Burner pot clinker build-up and glazing",
      "Pellet level sensor errors",
      "Flue gas temperature sensor failure",
      "Suction turbine motor wear",
      "Ash removal auger binding",
      "InfoWIN touchscreen display faults",
      "Ignition element resistance drift",
    ],
    kwRange: "2.6 kW to 60 kW",
    description:
      "Windhager BioWIN pellet boilers are a popular choice for premium domestic retrofits and small commercial sites. The PuroWIN wood chip boiler extends the range into light commercial. RHI-registered BioWIN installations across Devon and the South West form a significant share of our ongoing service book.",
    image: "/images/canva/landscape/fuel-delivery-and-storage.webp",
  },
];

export const brandBySlug = (slug: string) => brands.find((b) => b.slug === slug);
