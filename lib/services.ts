export type ServicePage = {
  slug: string;
  h1: string;
  navLabel: string;
  intro: string;
  checklist: string[];
  features: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "biomass-boiler-installation",
    navLabel: "Installation",
    h1: "Biomass Boiler Installation — Domestic & Commercial",
    intro:
      "Biomass Engineers Limited designs and installs wood pellet, wood chip and log boilers for homes, estates and commercial sites across the UK. From initial survey to commissioning and first annual service, every installation is delivered to MCS and HETAS standards, with full documentation for RHI and the Boiler Upgrade Scheme where applicable. Fuel storage is planned around your site and access constraints, with Land Energy partnership for premium pellet delivery.",
    checklist: [
      "In-depth site survey and heat demand calculation",
      "Fuel type guidance — pellet, chip or log",
      "Fuel storage design including Land Energy delivery access",
      "Plant room layout and flue routing",
      "System commissioning to manufacturer spec",
      "Full MCS paperwork",
      "RHI registration support for eligible schemes",
      "First annual service booked in before departure",
    ],
    features: [
      { title: "Survey-led design", body: "Every installation starts with a site visit. We measure heat demand, assess fuel access and size the system against real-world load — never a guess." },
      { title: "All fuel types", body: "Pellet, chip and log installations. We advise honestly on which fuel suits your site, storage and budget." },
      { title: "HETAS registered", body: "Commissioning paperwork meets HETAS, Building Regulations and MCS standards so your system is signed off cleanly." },
    ],
    faqs: [
      { q: "How long does installation take?", a: "A typical domestic install is three to five days on site. Larger commercial projects and district heating schemes run to several weeks depending on pipework and plant room works." },
      { q: "Do you handle the planning side?", a: "Planning permission is rarely required for a domestic biomass boiler but we advise on Building Regulations, chimney height, and where planning or listed building consent is needed." },
      { q: "Can you install a biomass boiler alongside an existing heating system?", a: "Yes. Hybrid installations running biomass alongside oil, gas or a heat pump are common. We design the buffer, controls and priority logic so the systems co-operate." },
      { q: "Do you register the boiler for MCS and RHI?", a: "Where schemes are open and eligible, yes. The Domestic RHI is closed to new applicants; the Boiler Upgrade Scheme replaced it for heat pump systems and we can advise on current routes." },
      { q: "What happens after installation?", a: "We book the first annual service before we leave site and hand you a full O&M pack. Most clients stay on an annual service plan with us." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-maintenance",
    navLabel: "Servicing & Maintenance",
    h1: "Biomass Boiler Servicing & Maintenance",
    intro:
      "An annual service keeps your biomass system safe, efficient and — critically — RHI compliant. Our engineers service every major brand, work to manufacturer schedules, and issue written service records suitable for OFGEM compliance checks. Domestic, agricultural and commercial visits across Devon, the South West and UK-wide.",
    checklist: [
      "Combustion chamber and grate clean",
      "Flue and heat exchanger inspection and clean",
      "Feed auger and hopper check",
      "Controls calibration and firmware update",
      "Fuel quality assessment",
      "RHI compliance report where required",
      "Combustion efficiency test",
      "Lambda probe check and replacement if needed",
      "All safety checks — pressure relief, backburn protection, temperature limiters",
      "Written service record issued on completion",
    ],
    features: [
      { title: "All brands, all fuels", body: "Pellet, chip or log; Fröling, Hargassner, Herz, Heizomat, Binder, Windhager and others — our engineers carry brand-specific tooling and diagnostics." },
      { title: "RHI compliant reports", body: "Every service produces documentation that satisfies OFGEM's ongoing obligations for metered and deemed RHI systems." },
      { title: "No lock-in", body: "You don't need a contract to book a service with us. Many clients choose annual reminders, but it's your call." },
    ],
    faqs: [
      { q: "How often should a biomass boiler be serviced?", a: "Annually at minimum, and more frequently for commercial or high-hours systems. RHI-registered systems must be serviced annually to remain compliant." },
      { q: "What happens if I miss a service?", a: "RHI payments can be suspended at the next compliance check. More immediately, unserviced boilers run less efficiently, burn more fuel and fail more often." },
      { q: "Can you service a boiler that hasn't been touched for years?", a: "Yes — we take on orphaned systems regularly. The first visit often runs long as we catch up on deferred work but it's routine for us." },
      { q: "Do you offer maintenance contracts?", a: "We offer annual service agreements and commercial PPM contracts. Both are optional — you can book standalone visits whenever you need." },
      { q: "Will you work on systems installed by other companies?", a: "Yes. Most of our service work is on systems we didn't install originally." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair",
    navLabel: "Servicing & Repair",
    h1: "Biomass Boiler Servicing & Repair",
    intro:
      "When a biomass boiler stops working reliably, the clock starts — especially in winter. Our engineers diagnose faults across every major brand, source parts quickly, and get systems back on line. We cover domestic breakdowns, commercial repairs and emergency call-outs across the South West and UK-wide.",
    checklist: [
      "Ignition rod failure and replacement",
      "Auger blockages and pellet bridging",
      "Error code diagnosis across all brands",
      "Heat exchanger fouling clean",
      "Pressure fault diagnosis",
      "Flue draught problems",
      "Combustion chamber refractory wear",
      "Lambda probe replacement",
      "Controls and firmware faults",
      "Safety interlock diagnosis",
    ],
    features: [
      { title: "Emergency response", body: "Priority call-outs for loss-of-heat situations, commercial clients and vulnerable domestic sites. Call the technical line for fastest routing." },
      { title: "Parts sourcing", body: "We hold common parts stock and have direct lines to UK distributors for Fröling, Hargassner, Herz, Heizomat, Binder and Windhager." },
      { title: "No contract required", body: "Book a single visit — no service plan, no minimum commitment." },
    ],
    faqs: [
      { q: "How quickly can you respond to a breakdown?", a: "Priority breakdowns are normally attended within 24–48 hours. Commercial PPM clients and vulnerable domestic sites get fastest response." },
      { q: "Can you repair any brand of biomass boiler?", a: "Yes. Our engineers are trained across the major manufacturers and can source parts for brands no longer supported by the original installer." },
      { q: "Do I need a service contract to book a repair?", a: "No. Single repair visits are available to anyone — we just need a description of the fault and your postcode." },
      { q: "What's the typical cost of a biomass repair?", a: "Call-out and first hour is quoted up front; parts and additional labour depend on the fault. We give you a full quote before proceeding." },
      { q: "Can you diagnose remotely before attending?", a: "For many brands, yes — if your boiler has web connectivity or can export fault logs. For most rural sites we rely on detailed phone triage before we travel." },
    ],
  },
  {
    slug: "commercial-biomass-boiler-service",
    navLabel: "Commercial Service",
    h1: "Commercial Biomass Boiler Service",
    intro:
      "Commercial biomass systems run harder, cost more when they stop, and carry more paperwork than domestic sites. We service commercial boilers from 50 kW to 3,500 kW+ across agricultural estates, timber operations, leisure centres, schools, care homes, hotels and district heating schemes. Planned Preventative Maintenance contracts available.",
    checklist: [
      "PPM visits to manufacturer schedule",
      "Full combustion and efficiency testing",
      "BMS integration checks",
      "RHI compliance reporting",
      "Safety and pressure systems check",
      "Fuel supply and storage inspection",
      "Ash handling system service",
      "Flue and chimney inspection",
      "Refractory wear reporting",
      "Written PPM reports issued",
    ],
    features: [
      { title: "Scale experience", body: "From 50 kW rural estate boilers to multi-MW commercial schemes with district heating loops — we've worked across the full commercial range." },
      { title: "PPM contracts", body: "Planned Preventative Maintenance schedules tailored to your boiler, hours and fuel type. Quarterly, half-yearly or annual visits." },
      { title: "RHI reporting", body: "Non-domestic RHI reporting built into the PPM cycle so your audit trail is always current." },
    ],
    faqs: [
      { q: "What size commercial boiler can you service?", a: "50 kW to around 3,500 kW as standard. We've worked on larger industrial sites in partnership with specialist plant engineers." },
      { q: "Do you offer PPM contracts?", a: "Yes. We write PPM contracts around your boiler, operating hours and fuel; they usually run annually with 2–4 visits per year." },
      { q: "Can you handle BMS integration and reporting?", a: "We work alongside your BMS and FM team to keep biomass integrated into the building management system, alarms routed correctly and data exported for RHI reporting." },
      { q: "What happens during an OFGEM audit?", a: "We provide the service records, metering data and compliance reports OFGEM require. Most of our commercial clients have never failed an audit." },
      { q: "Can you cover multiple sites?", a: "Yes. Multi-site estate, hotel and care-group portfolios are common for us." },
    ],
  },
  {
    slug: "biomass-engineer-services",
    navLabel: "Engineer Services",
    h1: "Biomass Engineer Services — Standalone Technical Support",
    intro:
      "Sometimes you need a biomass engineer for a specific job — not a service contract. Standalone visits for pre-purchase inspections, performance benchmarking, fuel quality testing, RHI compliance audits, control system diagnosis, brand changeover consultation and site staff training.",
    checklist: [
      "Pre-purchase inspection",
      "Performance benchmarking",
      "Fuel quality testing",
      "RHI compliance audit",
      "Control system diagnosis",
      "Brand changeover consultation",
      "Site staff training",
      "Witness reports for insurance",
      "Second-opinion surveys",
    ],
    features: [
      { title: "Independent", body: "We don't sell boilers. Engineer-only visits give you unbiased technical assessment, whether you're buying, selling or auditing a site." },
      { title: "Commissioning checks", body: "Second-eye commissioning reviews for large projects where the buyer wants an independent sign-off." },
      { title: "Training and handover", body: "On-site training for FM teams, estate staff and homeowners — safe operation, routine checks and when to call." },
    ],
    faqs: [
      { q: "Can you do a pre-purchase survey on a property with a biomass system?", a: "Yes. We inspect the boiler, fuel store, RHI paperwork and flue, and give a written report before you exchange." },
      { q: "Will you give evidence in disputes?", a: "Yes — we write independent technical reports for insurance claims, commercial disputes and installer failures." },
      { q: "Can we train our own site staff to handle day-to-day?", a: "Absolutely. We run site training sessions covering safe operation, fault recognition and escalation procedures." },
      { q: "What fuel testing do you offer?", a: "Moisture, ash and fines testing for wood chip; DIN Plus verification checks for pellet. Useful for disputes with fuel suppliers." },
      { q: "Do you cover the whole UK for standalone visits?", a: "Yes, travel-costed from Exmouth for any UK postcode." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-cost",
    navLabel: "Servicing Cost",
    h1: "How Much Does Biomass Boiler Servicing Cost?",
    intro:
      "Biomass servicing costs vary by boiler size, fuel type and site access. We publish our indicative pricing openly so you know roughly what to expect before you pick up the phone. All prices below exclude VAT. A firm quote is issued after the initial assessment.",
    checklist: [
      "Domestic annual service — £300 to £450 + VAT",
      "Commercial service — from £500 + VAT (capacity-dependent)",
      "Standalone engineer visit — from £150 + VAT",
      "Emergency call-out — quoted on assessment",
      "Parts and consumables — quoted separately",
      "RHI compliance reporting included in annual service",
      "Travel within South West — included",
      "Travel outside South West — quoted",
      "PPM discounts available",
    ],
    features: [
      { title: "Transparent pricing", body: "We tell you the range up front so there are no surprises after the van arrives." },
      { title: "Quote before work", body: "A firm quote is issued before any non-routine work proceeds. You sign off in writing." },
      { title: "PPM saves money", body: "Planned Preventative Maintenance contracts are typically 10–15% cheaper per visit than standalone visits." },
    ],
    faqs: [
      { q: "Why is there a price range on servicing?", a: "Access, fuel type, last service date and boiler age all affect the time required. A clean, well-kept pellet boiler sits at the lower end; a neglected chip boiler sits at the top." },
      { q: "Is RHI paperwork extra?", a: "No. RHI-compliant service reporting is included in the annual service fee." },
      { q: "How do you bill for emergencies?", a: "Emergency call-outs are quoted at the time — a fixed call-out fee plus hourly, plus parts if needed." },
      { q: "Do you charge for travel?", a: "Travel within Devon, Cornwall, Somerset and Dorset is included. Longer distances are travel-costed." },
      { q: "Can I spread service costs monthly?", a: "Commercial PPM contracts can be invoiced monthly. Domestic customers typically pay per visit." },
    ],
  },
  {
    slug: "biomass-boiler-parts-and-spares",
    navLabel: "Parts & Spares",
    h1: "Biomass Boiler Parts & Spare Parts",
    intro:
      "We source genuine and compatible spares for every major biomass brand. Ignition rods, lambda probes, auger motors, grates, gaskets, burner pots, heat exchanger tubes, control boards, draught fans, sensors — tell us the brand, model and fault, and we'll identify the part and quote supply-only or supply-and-fit.",
    checklist: [
      "Ignition rods and lighters",
      "Lambda probes and sensors",
      "Auger motors and drives",
      "Grate assemblies and refractory",
      "Burner pots and combustion components",
      "Gaskets and seals",
      "Control boards and touchscreens",
      "Draught fans and motors",
      "Fuel store agitators and drives",
      "Supply-only or supply-and-fit",
    ],
    features: [
      { title: "All brands", body: "Fröling, Hargassner, Herz, Heizomat, Binder, Windhager and others — direct UK distributor lines for fastest lead times." },
      { title: "Orphaned systems welcome", body: "Original installer gone? We still source parts for older models and discontinued units where possible." },
      { title: "Fitting service", body: "We can fit the part we supply, including commissioning and combustion checks afterwards." },
    ],
    faqs: [
      { q: "Do you supply parts without fitting them?", a: "Yes — supply-only is fine. Tell us brand, model and part number, or describe the fault and we'll work it out." },
      { q: "How fast are lead times?", a: "Common consumables within 2–5 working days. Controls, boards and larger parts can run 1–3 weeks depending on supplier stock." },
      { q: "Can you source parts for an older boiler no longer made?", a: "In most cases, yes. We use UK distributor networks and manufacturer archives, and can cross-reference compatible components where an exact match is no longer available." },
      { q: "Do you warranty the parts?", a: "Genuine manufacturer parts carry their standard warranty. Fitted by us, labour is also warranted to our terms." },
      { q: "Can I pick up parts from your base?", a: "Normally we ship, but for local trade customers collection from Exmouth can be arranged." },
    ],
  },
  {
    slug: "biomass-boiler-specification-system-design",
    navLabel: "Specification & Design",
    h1: "Biomass Boiler Specification & System Design",
    intro:
      "Specification and system design services for architects, M&E consultants, building developers, housing associations, estate managers and local authorities. We deliver heat demand calculations, fuel store designs, boiler specifications, plant room layouts and full system schematics — suitable for tender documents and planning submissions.",
    checklist: [
      "Heat demand calculation",
      "Fuel store sizing and layout",
      "Boiler specification to brand and model",
      "Plant room layout drawings",
      "System schematic",
      "Hydraulic separation and buffer sizing",
      "Flue and chimney design",
      "Control and BMS integration brief",
      "Tender-ready documentation",
      "Planning and Building Regulations support",
    ],
    features: [
      { title: "New build & retrofit", body: "We work on both — including listed buildings, barn conversions and sensitive heritage sites." },
      { title: "Tender-ready output", body: "Documents that go straight into tender packs with no rework from the M&E consultant." },
      { title: "Independent", body: "We don't represent a single manufacturer. Specification is driven by best fit for your building, fuel and budget." },
    ],
    faqs: [
      { q: "Do you work for architects and consultants?", a: "Yes. Much of our specification work is white-labelled into M&E consultancy tender documents." },
      { q: "Can you specify district heating?", a: "Yes — multi-building schemes from small developments to community networks." },
      { q: "What deliverables do we get?", a: "Heat demand calc, fuel store design, boiler spec, plant room layout, schematic and narrative. Output can be DWG, PDF or annotated sketches depending on stage." },
      { q: "Do you cover EPC-driven upgrades?", a: "Yes — especially for rural commercial buildings where oil replacement with biomass transforms EPC ratings." },
      { q: "Do you charge for specification work?", a: "Yes. Specification and design is quoted separately from install. If you later install through us, the fee is credited against the installation." },
    ],
  },
  {
    slug: "district-heating-biomass",
    navLabel: "District Heating",
    h1: "Biomass District Heating Systems",
    intro:
      "District heating takes a single biomass heat source and pipes heat to multiple buildings. The right fit for campuses, developments, country estates and mixed-use sites where distributed boilers would be expensive and hard to maintain. We design, specify, install, commission and service district heating schemes across the UK.",
    checklist: [
      "District heating system design",
      "Biomass heat source specification",
      "Pre-insulated pipework (REHAU and equivalent)",
      "Coded welding for pressurised circuits",
      "Substations and heat interface units",
      "Commissioning to full load",
      "Ongoing maintenance",
      "Metering and billing integration",
      "BMS integration",
    ],
    features: [
      { title: "Full-service", body: "Design, install, commission and maintain — one engineering partner for the whole life of the scheme." },
      { title: "Coded welding", body: "In-house coded welding for pressurised circuits, plant rooms and substations — no subcontract delay." },
      { title: "Long-term support", body: "Most schemes operate for 20+ years. We're set up for long-term maintenance with PPM contracts." },
    ],
    faqs: [
      { q: "Can you design a district heating system from scratch?", a: "Yes. We take schemes from feasibility through design, specification, install and commissioning." },
      { q: "What pipework do you use?", a: "Pre-insulated steel or PEX (PE-Xa) depending on scheme size and temperatures. REHAU and equivalent product lines." },
      { q: "Do you integrate with building management systems?", a: "Yes — substation monitoring, plant room telemetry and central reporting via BMS." },
      { q: "Are district heating schemes RHI eligible?", a: "Non-domestic RHI for eligible existing schemes continues. New schemes are outside RHI but often attract other funding — we advise on current routes." },
      { q: "How long does a district heating scheme take to deliver?", a: "Typically 6–18 months from design start depending on scheme size, groundworks and buildings served." },
    ],
  },
  {
    slug: "services/coded-welding",
    navLabel: "Coded Welding",
    h1: "Coded Welding for Biomass & Heating Systems",
    intro:
      "Coded welding is formal, certified welding to recognised procedure and welder qualifications — required for pressurised heating systems, plant rooms and district heating pipework. Our in-house coded welders work on pressurised boiler circuits, district heating runs, substations and commercial plant rooms across the UK.",
    checklist: [
      "Certified welder qualifications",
      "Welded pressurised pipework",
      "Plant room primary circuits",
      "District heating runs",
      "Biomass primary and secondary circuits",
      "Substation pipework",
      "Inspection-ready joints",
      "Support for M&E main contractors",
      "Witnessed welds for QA",
    ],
    features: [
      { title: "In-house capability", body: "Coded welding is kept in-house — no third-party delay when scheduling install, alteration or repair." },
      { title: "Documented", body: "Every job issues the weld procedure, welder qualification reference and inspection record for your QA file." },
      { title: "Trade & direct", body: "We work both direct for end users and subcontract for M&E main contractors running larger schemes." },
    ],
    faqs: [
      { q: "What coding do your welders hold?", a: "Qualifications relevant to pressurised steel and stainless pipework for heating systems. Specific WPS/WPQ evidence supplied per job." },
      { q: "Can you support a main contractor on a larger project?", a: "Yes. We subcontract coded welding under M&E and main contractor QA regimes, with RAMS and welder quals supplied in advance." },
      { q: "Do you handle the testing side?", a: "Pressure testing and witnessed weld inspection can be arranged in-house or under client-side inspection depending on the scheme's QA plan." },
      { q: "Are you available for one-off repair welds?", a: "Yes — single-weld call-outs are possible where access permits and the site is safe to work on." },
      { q: "Do you travel outside the South West?", a: "Yes. UK-wide coded welding call-outs — travel costed from Exmouth." },
    ],
  },
];

export const serviceBySlug = (slug: string) => servicePages.find((s) => s.slug === slug);
