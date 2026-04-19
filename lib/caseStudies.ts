export type CaseStudy = {
  slug: string;
  title: string;
  sector: "Commercial" | "Agricultural" | "Hospitality" | "Education" | "Public Sector" | "Domestic";
  boilerBrand: string;
  output: string;
  fuelType: "Wood Pellet" | "Wood Chip" | "Log";
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
    slug: "commercial-hotel-biomass-installation",
    title: "Commercial Hotel — 500 kW Fröling Wood Chip",
    sector: "Hospitality",
    boilerBrand: "Fröling",
    output: "500 kW",
    fuelType: "Wood Chip",
    year: 2023,
    location: "Mid Devon",
    summary:
      "A rural country hotel replacing an ageing oil system with a 500 kW Fröling wood chip boiler, district heating to main building and three holiday cottages.",
    challenge:
      "The hotel had been running three oil boilers across the main building and three holiday cottages, with rapidly rising fuel costs and ongoing reliability issues during peak season. The site needed a single scalable heat source, minimal disruption to guests during the switch, and full RHI compliance to protect ongoing payments.",
    solution:
      "We specified a 500 kW Fröling wood chip boiler with a purpose-built chip store in a converted barn, pre-insulated pipework running under existing tracks to the cottages, and hydraulic separation protecting the existing emitters. Heat meters were fitted at each dwelling for compliant non-domestic RHI reporting.",
    installation:
      "Installation ran over five weeks with the existing oil system left in place until commissioning was complete. The chip store was built alongside existing barn works; pipework was trenched between events to avoid disruption. The boiler was commissioned at peak load and handed over with full MCS and RHI documentation.",
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
    image: "/images/hero-plant-room.png",
  },
  {
    slug: "agricultural-estate-pellet-boiler",
    title: "Agricultural Estate — 200 kW Hargassner Pellet",
    sector: "Agricultural",
    boilerBrand: "Hargassner",
    output: "200 kW",
    fuelType: "Wood Pellet",
    year: 2022,
    location: "Dartmoor, Devon",
    summary:
      "A working Dartmoor estate switching farmhouse, workers' cottages and grain drying onto a 200 kW Hargassner pellet boiler with on-site pellet store.",
    challenge:
      "The estate's existing setup — mixed oil and LPG across three buildings plus dedicated grain drying diesel — was expensive, complex and inefficient. The owners wanted one heat source, reliable grain drying and RHI income where available.",
    solution:
      "200 kW Hargassner ECO-PK pellet boiler sited in a purpose-built plant room, with a 25-tonne bulk pellet store served by blown delivery from Land Energy. Pre-insulated district runs to the farmhouse and two cottages plus a heat exchanger feeding the grain drying rig during harvest.",
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
    image: "/images/fuel-delivery.png",
  },
  {
    slug: "school-biomass-heating-system",
    title: "Secondary School — 150 kW Herz Wood Chip",
    sector: "Education",
    boilerBrand: "Herz",
    output: "150 kW",
    fuelType: "Wood Chip",
    year: 2021,
    location: "Somerset",
    summary:
      "A rural secondary school replacing an ageing gas boiler installation with a 150 kW Herz wood chip boiler — council-funded, full commissioning documentation.",
    challenge:
      "The school's 1970s gas plant was end-of-life, expensive to run and failing too often. Local authority wanted a low-carbon replacement aligning with its own decarbonisation targets, with a careful project plan working around term times.",
    solution:
      "150 kW Herz firematic chip boiler, external chip store, new plant room works within the existing boiler house footprint, integrated with the BMS for central monitoring.",
    installation:
      "Installation delivered in two stages over the summer and Christmas breaks to avoid disruption. Full commissioning documentation, HETAS compliance pack, and training for site staff and FM contractor completed before handover.",
    outcome: {
      annualFuelSaving: "£11,000",
      rhiAnnualIncome: "£9,200",
      carbonReduction: "85% vs gas",
      systemUptime: "99.8%",
    },
    testimonial: {
      quote:
        "Delivered on time around our term calendar, with none of the usual contractor drama. The system has been dependable since day one.",
      name: "Business Manager",
      role: "Secondary School, Somerset",
    },
    image: "/images/herz-boiler.png",
  },
  {
    slug: "leisure-centre-district-heating",
    title: "Leisure Centre — 800 kW Heizomat District Heating",
    sector: "Public Sector",
    boilerBrand: "Heizomat",
    output: "800 kW",
    fuelType: "Wood Chip",
    year: 2020,
    location: "South West",
    summary:
      "A local authority leisure centre served by an 800 kW Heizomat wood chip boiler with district heating loop to pool, gym and café. Planned preventative maintenance contract.",
    challenge:
      "The pool's gas-fired plant was the largest single source of carbon on the authority's estate. A committed net-zero target and public spending scrutiny drove the project — but the scheme had to cope with 24/7 pool load, peak demand and strict reliability KPIs.",
    solution:
      "800 kW Heizomat wood chip boiler in a new plant room, underground chip store with walking-floor delivery, district heating loop to pool, gym and café. Full BMS integration with the authority's central monitoring.",
    installation:
      "Installation delivered over 16 weeks alongside pool maintenance scheduling. Coded welding in-house for all primary circuits. Commissioning ramped over two weeks to stabilise the pool controls.",
    outcome: {
      annualFuelSaving: "£62,000",
      rhiAnnualIncome: "£48,000",
      carbonReduction: "88% vs gas",
      systemUptime: "99.6%",
    },
    testimonial: {
      quote:
        "A high-stakes, high-visibility project delivered with total professionalism. Two winters in, the numbers have beaten projections.",
      name: "Facilities Director",
      role: "South West Leisure Centre",
    },
    image: "/images/commercial-installation.png",
  },
  {
    slug: "nursing-home-biomass-retrofit",
    title: "Nursing Home — 100 kW Windhager Pellet Retrofit",
    sector: "Commercial",
    boilerBrand: "Windhager",
    output: "100 kW",
    fuelType: "Wood Pellet",
    year: 2023,
    location: "Devon",
    summary:
      "A 60-bed nursing home retrofitting a 100 kW Windhager pellet boiler into its existing plant room, minimal disruption to residents during install.",
    challenge:
      "A continuously occupied care home with 60 residents couldn't tolerate a lengthy heating outage. The existing oil boiler was beyond economic repair, and the care group wanted to cut carbon ahead of compliance tightening.",
    solution:
      "100 kW Windhager BioWIN XL pellet boiler retrofitted into the existing plant room, with a prefabricated bulk pellet silo delivered and craned into position on a single weekend. Oil system kept live until pellet commissioning complete.",
    installation:
      "Install delivered over 10 days with the oil system running in parallel. Handover to the home's maintenance manager included full training. RHI registered on commissioning, first compliance service built into year-one plan.",
    outcome: {
      annualFuelSaving: "£7,400",
      rhiAnnualIncome: "£5,800",
      carbonReduction: "90% vs oil",
      systemUptime: "100%",
    },
    testimonial: {
      quote:
        "We had residents in the building throughout and not a single complaint. The boiler has run without interruption since the day it was commissioned.",
      name: "Home Manager",
      role: "Nursing Home, Devon",
    },
    image: "/images/maintenance-engineer.png",
  },
  {
    slug: "rural-property-log-boiler",
    title: "Rural Property — 30 kW Fröling Log Boiler",
    sector: "Domestic",
    boilerBrand: "Fröling",
    output: "30 kW",
    fuelType: "Log",
    year: 2023,
    location: "Exmoor, Devon",
    summary:
      "A working Exmoor farmhouse off the gas grid, replacing oil with a 30 kW Fröling log boiler and thermal store. Fuel store design, flue install, commissioning and Land Energy fuel supply arranged.",
    challenge:
      "The farmhouse had run on oil for 30 years but with managed woodland on the property, the owners wanted to move to a log boiler and use their own fuel. Off-grid, remote and no existing thermal store.",
    solution:
      "30 kW Fröling S4 Turbo log boiler, 3,000-litre thermal store in an adjacent barn, twin-wall flue routed through the gable. Fuel handling and load planning designed around the owners' own woodland routine.",
    installation:
      "Installation across four days. Commissioning included two weeks of load-testing and user training with the owners on firing cycles and burn-down management.",
    outcome: {
      annualFuelSaving: "£2,800",
      rhiAnnualIncome: "£3,400",
      carbonReduction: "95% vs oil",
      systemUptime: "100%",
    },
    testimonial: {
      quote:
        "It's transformed the house and the log pile is its own kind of satisfaction. The team taught us exactly how to run it properly.",
      name: "Property Owner",
      role: "Exmoor Farmhouse",
    },
    image: "/images/froling-boiler.png",
  },
];

export const caseStudyBySlug = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
