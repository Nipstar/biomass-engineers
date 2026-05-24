export type CaseStudy = {
  slug: string;
  title: string;
  sector: "Commercial" | "Agricultural" | "Hospitality" | "Education" | "Public Sector" | "Domestic" | "Industrial";
  boilerBrand: string;
  output: string;
  fuelType: "Wood Pellet" | "Wood Chip" | "Log" | "Waste Wood" | "Biogas" | "Food Waste";
  year: number;
  location: string;
  summary: string;
  challenge: string;
  solution: string;
  installation: string;
  outcome: {
    annualFuelSaving: string;
    rhiAnnualIncome: string;
    carbonReduction: string;
    systemUptime: string;
  };
  testimonial: { quote: string; name: string; role: string };
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "country-hotel-froling-district-heating",
    title: "Country Hotel — 500 kW Fröling Wood Chip with District Loop",
    sector: "Hospitality",
    boilerBrand: "Fröling",
    output: "500 kW",
    fuelType: "Wood Chip",
    year: 2023,
    location: "Mid Devon",
    summary:
      "Rural country hotel replacing oil with a 500 kW Fröling wood chip boiler, multi-boiler plant room with gas back-up, and district heating to the main building and three holiday cottages.",
    challenge:
      "The hotel ran three oil boilers across the main building and three holiday cottages, with rapidly rising fuel costs and reliability issues during peak season. The site needed a single scalable heat source, minimal guest disruption during switchover, and full RHI compliance to protect ongoing payments.",
    solution:
      "We specified a 500 kW Fröling wood chip boiler with a purpose-built chip store in a converted barn, pre-insulated district pipework running under existing tracks to the cottages, and a gas back-up boiler held in reserve for peak demand and resilience. Hydraulic separation protects the existing emitters and heat meters were fitted at each dwelling for compliant non-domestic RHI reporting.",
    installation:
      "Installation ran over five weeks with the existing oil system left in place until commissioning was complete. The chip store was built alongside existing barn works and pipework was trenched between events to avoid disruption. The boiler was commissioned at peak load and handed over with full MCS and RHI documentation.",
    outcome: {
      annualFuelSaving: "£28,000",
      rhiAnnualIncome: "£22,000",
      carbonReduction: "95% vs oil",
      systemUptime: "99.7%",
    },
    testimonial: {
      quote:
        "From survey through to handover the team were professional, informed and respectful of guests. The system has run faultlessly for two winters.",
      name: "General Manager",
      role: "Country Hotel, Mid Devon",
    },
    image: "/images/canva/landscape/froling-boiler-country-hotel.webp",
  },
  {
    slug: "agricultural-estate-pellet-bulk-store",
    title: "Agricultural Estate — 200 kW Hargassner Pellet with Bulk Fuel Store",
    sector: "Agricultural",
    boilerBrand: "Hargassner",
    output: "200 kW",
    fuelType: "Wood Pellet",
    year: 2022,
    location: "Dartmoor, Devon",
    summary:
      "Working Dartmoor estate switching farmhouse, workers' cottages and grain drying onto a 200 kW Hargassner pellet boiler with bulk on-site pellet store and external flue.",
    challenge:
      "The estate's mixed oil and LPG setup across three buildings plus dedicated diesel grain drying was expensive, complex and inefficient. The owners wanted a single heat source, reliable grain drying capacity, and RHI income where available.",
    solution:
      "200 kW Hargassner ECO-PK pellet boiler sited in a purpose-built plant room, with a 25-tonne bulk pellet store served by blown delivery from Land Energy. Pre-insulated district runs to the farmhouse and two cottages plus a heat exchanger feeding the grain drying rig during harvest. External insulated flue routed clear of the eaves.",
    installation:
      "Installed over three weeks with the pellet store and plant room built in parallel by the estate's own builders under our direction. Commissioning included full-load testing into the grain drying circuit during an August harvest.",
    outcome: {
      annualFuelSaving: "£18,000",
      rhiAnnualIncome: "£14,000",
      carbonReduction: "92% vs oil/LPG",
      systemUptime: "99.9%",
    },
    testimonial: {
      quote:
        "Harvest is the deciding test — and it's worked perfectly two years running. Highly recommended.",
      name: "Estate Manager",
      role: "Dartmoor Agricultural Estate",
    },
    image: "/images/canva/landscape/fuel-delivery-and-storage.webp",
  },
  {
    slug: "anaerobic-digestion-heat-recovery",
    title: "Anaerobic Digestion — Heat Matrix Recovery on AD Dome",
    sector: "Agricultural",
    boilerBrand: "Bespoke",
    output: "350 kW recovered",
    fuelType: "Biogas",
    year: 2023,
    location: "Somerset",
    summary:
      "Custom heat-matrix retrofit on an on-farm anaerobic digestion plant — capturing waste heat from the CHP engine and biogas circuit to feed the digester pre-warming loop and adjacent dryer floor.",
    challenge:
      "An on-farm AD plant was venting significant residual heat from the CHP engine jacket and biogas-cleaning circuit. The operator wanted that heat captured and routed back into the process — improving digestion stability through the winter months and providing low-grade heat to a neighbouring crop-drying floor.",
    solution:
      "We designed and fabricated a custom heat-matrix coil to fit the AD dome side wall, plumbed to the existing CHP engine jacket via a hydraulic separator. Two control loops keep digester temperature stable at 38 °C while sending excess heat to a downstream plate exchanger feeding the crop-drying circuit.",
    installation:
      "Coded welding throughout, with on-site fabrication completed in five days. Commissioning included staged ramp-up of the digester loop and instrumentation calibration on the dryer outlet.",
    outcome: {
      annualFuelSaving: "£21,000",
      rhiAnnualIncome: "n/a",
      carbonReduction: "Improved CHP recovery 18%",
      systemUptime: "99.8%",
    },
    testimonial: {
      quote:
        "Heat we used to vent now keeps the dryer running through harvest. Payback inside eighteen months.",
      name: "Site Engineer",
      role: "Somerset AD Operator",
    },
    image: "/images/canva/landscape/heat-matrix-anearobic-boiler.webp",
  },
  {
    slug: "sawmill-waste-wood-boiler",
    title: "Sawmill — 1 MW Waste-Wood Boiler & Chip Preparation Line",
    sector: "Industrial",
    boilerBrand: "Binder",
    output: "1,000 kW",
    fuelType: "Waste Wood",
    year: 2022,
    location: "South West",
    summary:
      "On-site waste-wood boiler with cyclone chimney and dedicated chip-prep line — shredder with overband magnets — converting yard offcuts into low-cost process heat for a working sawmill.",
    challenge:
      "A regional sawmill was paying twice over — disposing of offcut waste at gate fee and buying-in LPG for timber kilns. The yard already had clean dimensioned offcut in quantity but no way to combust it safely or capture the heat.",
    solution:
      "1 MW Binder travelling-grate boiler with cyclone-style stainless chimney, in-yard waste-wood shredder with overband magnetic separation, and conveyor feed to a covered chip store. Heat routed to two timber drying kilns and a workshop space heater. Multi-cyclone dust collection on the flue gas line.",
    installation:
      "12-week install with concrete pad, plant room steelwork and chimney lift completed in parallel with yard works. Commissioning included six staged burns to tune the grate and overfire-air ratio for the variable feedstock.",
    outcome: {
      annualFuelSaving: "£86,000",
      rhiAnnualIncome: "£0 (RHI ineligible — waste wood)",
      carbonReduction: "Diverts 600 t/year offcut from landfill",
      systemUptime: "98.4%",
    },
    testimonial: {
      quote:
        "We turned a disposal cost into a heat source. The boiler ran through its first winter with no unplanned downtime.",
      name: "Mill Owner",
      role: "South West Sawmill",
    },
    image: "/images/canva/landscape/waste-wood-boiler.webp",
  },
  {
    slug: "food-waste-to-energy-installation",
    title: "Food-Waste-to-Energy Unit — On-Site Service & Heat Recovery",
    sector: "Hospitality",
    boilerBrand: "Bespoke",
    output: "150 kW thermal",
    fuelType: "Food Waste",
    year: 2023,
    location: "Devon",
    summary:
      "Service and ongoing maintenance contract for an on-site food-waste-to-energy unit at a destination hotel — converting kitchen waste into combustible feedstock and recovering heat back to the kitchen DHW circuit.",
    challenge:
      "The hotel had installed a food-waste-to-energy unit but the original commissioning engineer had ceased trading. Combustion was unstable, the heat-recovery loop tripping on high temperature, and the kitchen team had lost confidence in the system.",
    solution:
      "We took the unit on under our existing-boiler programme: full strip-down service, refractory inspection, lambda probe recalibration, and re-tuning of the auger feed rate to suit the actual waste profile. Heat-recovery loop re-balanced with new differential controls.",
    installation:
      "Three site visits across four weeks. Now on annual PPM with quarterly check-in calls, parts sourced through our distributor network for what is an orphaned unit.",
    outcome: {
      annualFuelSaving: "£9,200",
      rhiAnnualIncome: "n/a",
      carbonReduction: "Diverts 18 t/year kitchen waste",
      systemUptime: "99.1%",
    },
    testimonial: {
      quote:
        "The team picked up an orphaned unit and made it work. Quarterly call-ins keep us ahead of any issues.",
      name: "Head Chef",
      role: "Destination Hotel, Devon",
    },
    image: "/images/canva/landscape/food-waste-to-energy-unit.webp",
  },
  {
    slug: "ariterm-bioenergy-commercial-service",
    title: "Commercial Ariterm Bioenergy Boiler — Service & RHI Compliance",
    sector: "Commercial",
    boilerBrand: "Ariterm",
    output: "300 kW",
    fuelType: "Wood Chip",
    year: 2023,
    location: "South West",
    summary:
      "Ongoing annual service and RHI-compliance documentation for a commercial Ariterm Bioenergy chip boiler installed by another contractor — taken on as an existing-boiler client.",
    challenge:
      "The site's original installer had stepped back from servicing Ariterm boilers in the UK, leaving the operator without compliant cover for the RHI accreditation period. Spare parts and proprietary fault codes were both issues.",
    solution:
      "We took the unit onto our existing-boiler programme, cleaned and inspected the full combustion chamber and heat exchanger circuit, recalibrated the lambda sensor and combustion fan, and issued RHI-compliant service documentation. Spare-parts pathway established for the Ariterm range.",
    installation:
      "Two-day initial service across a planned shutdown. Now on annual PPM with documented RHI compliance pack delivered each year.",
    outcome: {
      annualFuelSaving: "n/a",
      rhiAnnualIncome: "£17,000 (protected)",
      carbonReduction: "85% vs oil baseline",
      systemUptime: "99.5%",
    },
    testimonial: {
      quote:
        "We needed RHI cover from someone who understood Ariterm. The Biomass Engineers team had it sorted from the first visit.",
      name: "Operations Director",
      role: "Commercial Site, South West",
    },
    image: "/images/canva/landscape/ariterm-boiler-service.webp",
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
