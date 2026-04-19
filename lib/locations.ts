export type Location = {
  slug: string;
  city: string;
  region: "Devon" | "Cornwall" | "Somerset" | "Dorset" | "Bristol & Bath" | "Wiltshire" | "Hampshire";
  kind: "servicing" | "maintenance" | "repair" | "installers";
  nearbyTowns: string[];
  intro: string;
  localContext: string;
  faqs: { q: string; a: string }[];
};

const devonContext =
  "Devon has one of the highest concentrations of rural biomass systems in the UK — a legacy of RHI uptake on off-grid farms, country estates, holiday lets and agricultural operations. Engineers travel from our Exmouth base across Dartmoor, Exmoor and the peninsula.";
const cornwallContext =
  "Cornwall is largely off the mains gas grid, and biomass is a natural fit for farms, agricultural estates, holiday parks and heritage properties. We travel across the Tamar weekly to support Cornish clients and maintain RHI compliance.";
const somersetContext =
  "Somerset is farming country — dairy estates, country schools, manor houses and rural villages. Biomass boilers on Somerset estates often run heavy loads into grain drying, equestrian and process heat.";
const dorsetContext =
  "Dorset's mix of country estates, rural villages and the Jurassic Coast tourism economy puts biomass at the heart of off-grid heating for farmhouses, hotels and holiday lets.";
const bristolContext =
  "Bristol and the surrounding commercial belt hosts the larger commercial biomass projects — district heating, industrial process heat, schools, public buildings and hotels. Our commercial engineering team covers the whole area.";
const wiltshireContext =
  "Wiltshire's rural estates, manor houses and agricultural operations are significant consumers of chip and pellet biomass. Our engineers cover Salisbury, Marlborough and the wider county.";
const hampshireContext =
  "Hampshire supports a mix of large commercial biomass on country estates and rural commercial sites, plus district heating schemes on mixed-use developments around Southampton and Portsmouth.";

export const locations: Location[] = [
  // Devon primary
  {
    slug: "biomass-boiler-servicing-devon",
    city: "Devon",
    region: "Devon",
    kind: "servicing",
    nearbyTowns: ["Exeter", "Plymouth", "Torquay", "Barnstaple", "Tiverton", "Newton Abbot", "Bideford", "Okehampton", "Exmouth"],
    intro:
      "Biomass boiler servicing across the whole of Devon, from our Exmouth base. Domestic, agricultural, commercial and RHI-compliant servicing for every major brand.",
    localContext: devonContext,
    faqs: [
      { q: "Do you cover all of Devon?", a: "Yes — Exeter, Plymouth, Torbay, North Devon and the South Hams. Regular weekly travel across the county." },
      { q: "Are you experienced with rural and off-grid sites?", a: "Yes, most of our Devon service book is rural — Dartmoor farms, estates, holiday lets and country properties." },
      { q: "Can you handle RHI compliance in Devon?", a: "Yes. Annual RHI-compliant servicing and audit-ready documentation is standard on every Devon visit." },
    ],
  },
  {
    slug: "biomass-boiler-maintenance-devon",
    city: "Devon",
    region: "Devon",
    kind: "maintenance",
    nearbyTowns: ["Exeter", "Plymouth", "Torquay", "Barnstaple", "Tiverton", "Newton Abbot", "Bideford", "Okehampton", "Exmouth"],
    intro:
      "Ongoing biomass boiler maintenance across Devon. Annual service plans, PPM contracts for commercial clients, RHI compliance reporting and emergency breakdown cover.",
    localContext: devonContext,
    faqs: [
      { q: "Do you offer annual maintenance plans in Devon?", a: "Yes — domestic, agricultural and commercial PPM plans with scheduled annual visits." },
      { q: "Can one plan cover multiple Devon sites?", a: "Yes. Estate and multi-site portfolios are billed under a single plan for simplicity." },
      { q: "What if my boiler breaks down between services?", a: "Plan customers get priority breakdown response ahead of standalone call-outs." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-exeter",
    city: "Exeter",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Topsham", "Exmouth", "Ottery St Mary", "Crediton", "Cullompton", "Silverton", "Broadclyst"],
    intro:
      "Operating from our Exmouth base, we provide rapid response for biomass boiler servicing and repairs within Exeter and the Exe Valley. Most priority call-outs are attended within 24 hours.",
    localContext:
      "Exeter’s biomass profile ranges from heritage townhouses near the cathedral to expansive rural commercial sites in the surrounding valley. We understand the specific logistics of city-centre pellet deliveries and the high-demand requirements of Exeter's commercial estate boilers.",
    faqs: [
      { q: "How quickly can you reach Exeter?", a: "With our office just down the road in Exmouth, we are the local choice for Exeter. Emergency repairs are often same-day; routine servicing is usually within the week." },
      { q: "Do you service city-centre biomass systems?", a: "Yes — we handle the specific access challenges of Exeter city centre for many of our commercial and domestic clients." },
      { q: "Are you familiar with Exeter's larger district heating?", a: "Yes, our engineers provide technical support for several multi-boiler sites and district loops in the Exeter area." },
    ],
  },
  {
    slug: "biomass-boiler-installers-exeter",
    city: "Exeter",
    region: "Devon",
    kind: "installers",
    nearbyTowns: ["Topsham", "Exmouth", "Ottery St Mary", "Crediton", "Cullompton", "Silverton", "Broadclyst"],
    intro:
      "Specialist biomass boiler installation in Exeter. We design and install high-efficiency wood pellet and chip systems for homes, estates, and schools across the city and surrounding villages.",
    localContext:
      "In Exeter, where mains gas can be unavailable in outlying villages, we specialise in oil-to-biomass conversions. We manage the entire process from the first heat-load survey to the final HETAS sign-off and MCS commissioning.",
    faqs: [
      { q: "Can you install biomass in a conservation area?", a: "Yes, we have extensive experience installing biomass systems in Exeter's historic districts, including chimney and flue solutions that satisfy local planning." },
      { q: "Do you handle commercial installs in Exeter?", a: "Yes — we install systems from 50kW to 1MW+ for schools, care homes, and commercial units across Exeter." },
      { q: "What brands do you recommend for Exeter installations?", a: "Herz and Fröling are our primary recommendations for reliability and local parts availability." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-plymouth",
    city: "Plymouth",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Ivybridge", "Yealmpton", "Tavistock", "Saltash", "Torpoint", "Kingsbridge"],
    intro:
      "Expert biomass boiler technical support in Plymouth, the South Hams, and across the Tamar. We provide RHI-compliant servicing and emergency repairs for marine and coastal environments.",
    localContext:
      "Plymouth and the surrounding South Hams coast present unique challenges for biomass—marine environment corrosion and salt-air affect flue longevity. Our maintenance schedules are specifically tailored to these coastal conditions.",
    faqs: [
      { q: "Do you cover East Cornwall from Plymouth?", a: "Yes — we regularly cross the Tamar to support clients in Saltash, Liskeard, and Torpoint." },
      { q: "Do you offer priority service for Plymouth hospitality sites?", a: "Yes, hotels and holiday parks in the South Hams and Plymouth are a priority on our service book." },
      { q: "Can you handle large-scale chip boilers in Plymouth?", a: "Yes, we maintain several high-capacity commercial chip systems in the Plymouth industrial and agricultural belt." },
    ],
  },
  {
    slug: "biomass-boiler-installers-plymouth",
    city: "Plymouth",
    region: "Devon",
    kind: "installers",
    nearbyTowns: ["Ivybridge", "Yealmpton", "Tavistock", "Saltash", "Torpoint", "Kingsbridge"],
    intro:
      "Biomass boiler installers in Plymouth and the South Hams. New domestic and commercial biomass installations, full MCS and HETAS compliance.",
    localContext:
      "Plymouth sits at the western edge of Devon with the South Hams to the east and East Cornwall across the Tamar. Rural commercial and agricultural installations are our bread and butter in this corridor.",
    faqs: [
      { q: "Do you install commercial biomass in Plymouth?", a: "Yes — we install commercial biomass from 50 kW upward across Plymouth and the surrounding area." },
      { q: "Do you cover fuel store design?", a: "Yes. Fuel storage and delivery access are planned at survey stage." },
      { q: "What commissioning paperwork do you provide?", a: "Full MCS/HETAS pack plus manufacturer commissioning reports." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-torquay",
    city: "Torquay",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Paignton", "Brixham", "Newton Abbot", "Teignmouth", "Dawlish"],
    intro:
      "Biomass boiler servicing and repair across Torquay, Paignton and the Torbay area. Hotel, holiday park and domestic biomass covered.",
    localContext:
      "Torbay's tourism economy drives biomass uptake in hotels, holiday parks and larger guesthouses, alongside domestic installations in the surrounding rural villages.",
    faqs: [
      { q: "Do you service hotel biomass in Torquay?", a: "Yes — regular servicing for Torbay hotels and holiday accommodation." },
      { q: "How quickly can you respond to a Torbay breakdown?", a: "Priority response for hospitality and care sites — often same day." },
      { q: "Do you cover Paignton and Brixham?", a: "Yes, the whole of Torbay and surrounding countryside." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-barnstaple",
    city: "Barnstaple",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Bideford", "Ilfracombe", "South Molton", "Braunton", "Torrington", "Chulmleigh"],
    intro:
      "Biomass boiler servicing and repair in North Devon — Barnstaple, Bideford, Ilfracombe and the surrounding villages and farmland.",
    localContext:
      "North Devon's large rural estates, hill farms and holiday cottages have a high density of wood chip and pellet biomass. We travel across Exmoor for RHI-compliant annual servicing and fault call-outs.",
    faqs: [
      { q: "Do you cover Exmoor farms?", a: "Yes — Exmoor and North Devon are a core part of our service book." },
      { q: "Can you reach Ilfracombe?", a: "Yes. Regular monthly travel up the Atlantic coast." },
      { q: "Do you service large estate boilers here?", a: "Yes — estates running multi-hundred kW chip boilers are common in North Devon." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-tiverton",
    city: "Tiverton",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Cullompton", "Bampton", "Crediton", "Dulverton", "Wiveliscombe"],
    intro:
      "Biomass boiler servicing and repair in Tiverton and the Exe Valley. Farms, country houses and rural commercial sites served from Exmouth.",
    localContext:
      "Mid Devon is deep rural biomass territory — off-grid farms, country estates, schools and the Exe Valley agricultural belt. Tiverton and surrounding villages are a regular route for our engineers.",
    faqs: [
      { q: "Are you familiar with farm biomass systems around Tiverton?", a: "Yes — chip, pellet and log systems on working farms are our daily work." },
      { q: "Do you service RHI-registered boilers here?", a: "Yes, with full OFGEM compliance reporting." },
      { q: "How often should a farm boiler be serviced?", a: "Annually at minimum. Heavy-use farms often need two visits per year." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-newton-abbot",
    city: "Newton Abbot",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Bovey Tracey", "Ashburton", "Chudleigh", "Teignmouth", "Kingsteignton"],
    intro:
      "Biomass boiler servicing and repair across Newton Abbot and the Teign Valley. Residential, rural commercial and tourism sector boilers.",
    localContext:
      "Newton Abbot sits at the gateway to Dartmoor — a mix of rural villages, market town commercial and edge-of-moor agricultural. Biomass density is high and our engineers know the back lanes.",
    faqs: [
      { q: "Do you cover Dartmoor properties from Newton Abbot?", a: "Yes — across the eastern and southern edges of the moor." },
      { q: "Can you reach Ashburton?", a: "Yes, regular servicing in Ashburton, Buckfastleigh and surrounding villages." },
      { q: "What's the typical call-out time?", a: "Same day for priority, within a week for planned servicing." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-bideford",
    city: "Bideford",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Barnstaple", "Hartland", "Torrington", "Bude", "Holsworthy"],
    intro:
      "Biomass boiler servicing and repair in Bideford and the Torridge area, including the Hartland peninsula and routes down to North Cornwall.",
    localContext:
      "The Torridge and Hartland area has a high density of holiday lets, small farms and country properties running on biomass — often as replacement for ageing oil systems. Our engineers cover this corner weekly.",
    faqs: [
      { q: "Do you cover the Hartland peninsula?", a: "Yes — right out to the coast." },
      { q: "Can you service small domestic pellet boilers here?", a: "Yes — all sizes from domestic BioWIN through to large estate systems." },
      { q: "Do you cross into North Cornwall?", a: "Yes, Bude and Holsworthy customers are often booked on the same route." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-okehampton",
    city: "Okehampton",
    region: "Devon",
    kind: "repair",
    nearbyTowns: ["Hatherleigh", "North Tawton", "Tavistock", "Lifton", "Bridestowe"],
    intro:
      "Biomass boiler servicing and repair across Okehampton and the northern edge of Dartmoor. Farm, estate and rural commercial systems.",
    localContext:
      "Okehampton and the A30 corridor run through classic off-grid rural Devon — hill farms, country estates and small commercial sites all running biomass as their primary heat source.",
    faqs: [
      { q: "Do you service boilers on the northern edge of Dartmoor?", a: "Yes — Okehampton is a regular route for our engineers." },
      { q: "Are you experienced with older boilers around Okehampton?", a: "Yes, we take on orphaned and long-neglected systems routinely." },
      { q: "Can you source parts for older brands?", a: "Yes, via our UK distributor network and manufacturer archives." },
    ],
  },

  // Cornwall
  {
    slug: "biomass-boiler-servicing-cornwall",
    city: "Cornwall",
    region: "Cornwall",
    kind: "servicing",
    nearbyTowns: ["Truro", "Bodmin", "Penzance", "Newquay", "St Austell", "Launceston", "Camelford"],
    intro:
      "Biomass boiler servicing across the whole of Cornwall — from the Tamar to Penzance. Off-grid farms, estates, holiday parks and heritage properties all covered.",
    localContext: cornwallContext,
    faqs: [
      { q: "Are you based in Cornwall?", a: "We're based in Exmouth, Devon, and travel across Cornwall on weekly routes." },
      { q: "Do you charge extra for travel into Cornwall?", a: "Routine servicing and planned visits are quoted inclusive. Emergency long-distance call-outs are travel-costed." },
      { q: "Can you handle RHI compliance in Cornwall?", a: "Yes — full OFGEM-compliant service records on every visit." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-truro",
    city: "Truro",
    region: "Cornwall",
    kind: "repair",
    nearbyTowns: ["Falmouth", "Redruth", "St Agnes", "Perranporth", "Mevagissey", "St Mawes"],
    intro:
      "Specialist biomass boiler technicians providing expert servicing and repairs in Truro and across central Cornwall. We support historic heritage sites, rural estates, and the hospitality sector.",
    localContext:
      "Truro’s unique architectural heritage—with its high density of granite-walled listed properties and off-grid rural estates—requires a specialist approach to biomass. We are experienced in managing the specific humidity and flue draught challenges common in Cornwall's central corridor.",
    faqs: [
      { q: "Do you cover Falmouth from Truro?", a: "Yes — Falmouth, the Roseland, and Helford area are all core parts of our weekly Cornish service route." },
      { q: "Are you experienced with heritage installations?", a: "Yes, we regularly service biomass boilers in listed Cornish properties, understanding the need for non-standard flue and control solutions." },
      { q: "How quickly can you reach Truro?", a: "We travel through central Cornwall weekly. Priority breakdowns are often reached within 48 hours." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-bodmin",
    city: "Bodmin",
    region: "Cornwall",
    kind: "repair",
    nearbyTowns: ["Launceston", "Lostwithiel", "Wadebridge", "Camelford", "Liskeard"],
    intro:
      "Providing professional biomass boiler maintenance and repair across Bodmin Moor and the agricultural belt of North Cornwall. Specialists in large-scale wood chip systems.",
    localContext:
      "The Bodmin Moor area has a deep legacy of wood-chip heating—particularly on large-scale pastoral farms and timber estates. Our engineers are equipped to handle the industrial nature of these sites, including heavy-duty auger systems and industrial burners.",
    faqs: [
      { q: "Do you cover Bodmin Moor and outlying farms?", a: "Yes — we support the entire rural agricultural corridor between Bodmin and Launceston." },
      { q: "Do you service large chip boilers?", a: "Yes, 500kW+ industrial chip boilers on North Cornwall estates are routine for our team." },
      { q: "Can you source parts for Cornish sites?", a: "Yes, we maintain a stock of common parts to ensure most Cornish repairs can be completed in a single visit." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-penzance",
    city: "Penzance",
    region: "Cornwall",
    kind: "repair",
    nearbyTowns: ["St Ives", "Helston", "Hayle", "Mousehole", "Mullion", "Porthleven"],
    intro:
      "Supporting the far west of Cornwall with specialist biomass boiler servicing. From Penzance to the Lizard, we maintain the systems that power Cornwall's off-grid hospitality and rural economy.",
    localContext:
      "West Cornwall is almost entirely off the mains gas grid, making biomass a critical infrastructure for hotels, farmhouses, and heritage tourist sites. We manage the specific challenges of salt-air corrosion in Penzance and the rugged terrain of the Lizard peninsula.",
    faqs: [
      { q: "How often do you travel to West Cornwall?", a: "Our engineers are in West Cornwall weekly. We batch visits to ensure travel costs for Penzance and Helston remain competitive." },
      { q: "Do you cover the Lizard?", a: "Yes — we provide full support for all Lizard peninsula postcodes including Mullion and Helston." },
      { q: "Can you service holiday park systems?", a: "Yes, we support many of West Cornwall's holiday parks during the shoulder seasons to ensure peak-time reliability." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-newquay",
    city: "Newquay",
    region: "Cornwall",
    kind: "repair",
    nearbyTowns: ["Perranporth", "St Agnes", "Padstow", "Wadebridge", "Mawgan Porth"],
    intro:
      "Biomass boiler servicing and repair across Newquay and the north Cornwall coast. Holiday parks, guest houses and domestic systems served weekly.",
    localContext:
      "Newquay and the north coast combine a heavy tourism economy with rural domestic biomass — holiday parks, guest houses and farmhouses all running pellet or chip systems.",
    faqs: [
      { q: "Do you cover tourism sites in Newquay?", a: "Yes — hotels, guest houses and holiday parks are regular clients." },
      { q: "How do you handle in-season breakdowns?", a: "Priority response for tourism sites during peak season wherever possible." },
      { q: "Do you service commercial kitchens heated by biomass?", a: "Yes, where biomass serves commercial hot water or integrated building loads." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-st-austell",
    city: "St Austell",
    region: "Cornwall",
    kind: "repair",
    nearbyTowns: ["Mevagissey", "Fowey", "Lostwithiel", "Par", "Pentewan"],
    intro:
      "Biomass boiler servicing and repair in St Austell and the clay country. Estates, farms and tourism properties served across mid-Cornwall.",
    localContext:
      "Mid-Cornwall's mix of clay country, coastal tourism and agricultural estates makes biomass a regular choice — especially where mains gas is absent.",
    faqs: [
      { q: "Do you cover the Roseland from St Austell?", a: "Yes — the Roseland and surrounding estates are on our route." },
      { q: "Are you experienced with commercial hotels here?", a: "Yes, several mid-Cornwall tourism clients are on our annual service cycle." },
      { q: "Can you diagnose remotely before attending?", a: "Where boilers have connectivity or exportable logs, yes — otherwise detailed phone triage before we travel." },
    ],
  },

  // Somerset & Dorset
  {
    slug: "biomass-boiler-servicing-somerset",
    city: "Somerset",
    region: "Somerset",
    kind: "servicing",
    nearbyTowns: ["Taunton", "Yeovil", "Bridgwater", "Wellington", "Minehead", "Wells", "Frome"],
    intro:
      "Biomass boiler servicing across Somerset — farms, country estates, rural schools and commercial sites.",
    localContext: somersetContext,
    faqs: [
      { q: "Do you cover the whole of Somerset?", a: "Yes — from Exmoor across to the Mendips and down through Taunton and Yeovil." },
      { q: "Are you experienced with equestrian and farm systems?", a: "Yes — high-load agricultural boilers are a big part of our Somerset work." },
      { q: "Can you handle commercial PPM?", a: "Yes, planned maintenance contracts across the county." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-taunton",
    city: "Taunton",
    region: "Somerset",
    kind: "repair",
    nearbyTowns: ["Wellington", "Bridgwater", "Wiveliscombe", "Milverton", "North Curry"],
    intro:
      "Biomass boiler servicing and repair in Taunton and the Vale of Taunton Deane. Farm, estate and commercial biomass covered.",
    localContext:
      "Taunton sits at the heart of Somerset agriculture — the Vale, the Blackdowns and the Quantocks combine farms, country estates and rural commercial sites with a strong biomass history.",
    faqs: [
      { q: "Do you cover Wellington and the Blackdowns?", a: "Yes — Wellington, the Blackdowns and the Quantocks are all regular routes." },
      { q: "What's your typical response time for Taunton?", a: "Priority response within 48 hours from Exmouth." },
      { q: "Do you service large estate boilers here?", a: "Yes, multi-hundred kW estate chip boilers are routine." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-yeovil",
    city: "Yeovil",
    region: "Somerset",
    kind: "repair",
    nearbyTowns: ["Sherborne", "Crewkerne", "Martock", "Ilchester", "Wincanton"],
    intro:
      "Biomass boiler servicing and repair in Yeovil and South Somerset. Rural estates, farms and commercial sites covered.",
    localContext:
      "South Somerset around Yeovil, Sherborne and Crewkerne is classic estate and farming country — biomass density is high, with chip boilers common on larger estates.",
    faqs: [
      { q: "Do you cover Sherborne from Yeovil?", a: "Yes — the Yeovil/Sherborne corridor is a regular route." },
      { q: "What's your turnaround on an estate repair?", a: "Depends on the fault and parts lead time; priority call-out is usually within 48 hours." },
      { q: "Are you experienced with Hargassner chip?", a: "Very — Hargassner is dominant in this corridor." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-bridgwater",
    city: "Bridgwater",
    region: "Somerset",
    kind: "repair",
    nearbyTowns: ["North Petherton", "Burnham-on-Sea", "Highbridge", "Street", "Glastonbury"],
    intro:
      "Biomass boiler servicing and repair in Bridgwater and the Somerset Levels. Farm, commercial and domestic biomass served.",
    localContext:
      "Bridgwater, the Levels and the Mendips mix agricultural, commercial and community biomass — with schools and rural business parks adopting chip and pellet systems over the last decade.",
    faqs: [
      { q: "Do you cover the Levels?", a: "Yes — from Bridgwater across to Glastonbury and Street." },
      { q: "Can you service school biomass in this area?", a: "Yes, school and public sector biomass is a regular part of our work." },
      { q: "Do you handle commercial PPM contracts here?", a: "Yes, multi-visit PPM for commercial and public sector sites." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-dorset",
    city: "Dorset",
    region: "Dorset",
    kind: "servicing",
    nearbyTowns: ["Dorchester", "Weymouth", "Sherborne", "Blandford", "Bridport", "Shaftesbury", "Bournemouth"],
    intro:
      "Biomass boiler servicing across Dorset — country estates, rural villages, holiday lets and commercial properties.",
    localContext: dorsetContext,
    faqs: [
      { q: "Do you cover the Jurassic Coast?", a: "Yes — Lyme Regis, Bridport and along the coast through Weymouth." },
      { q: "Can you service large estate boilers in Dorset?", a: "Yes, Dorset estate biomass is a significant share of our work." },
      { q: "Do you cover Bournemouth and the east of the county?", a: "Yes — the whole of Dorset." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-dorchester",
    city: "Dorchester",
    region: "Dorset",
    kind: "repair",
    nearbyTowns: ["Weymouth", "Bridport", "Beaminster", "Blandford Forum", "Puddletown"],
    intro:
      "Biomass boiler servicing and repair in Dorchester and central Dorset. Estate, farm and rural commercial systems.",
    localContext:
      "Dorchester sits at the heart of rural Dorset — estate country, dairy farms and heritage properties all running biomass for primary heat.",
    faqs: [
      { q: "Do you cover Blandford from Dorchester?", a: "Yes — central and north Dorset is all on our service area." },
      { q: "Can you source parts quickly here?", a: "Common parts in days; full parts via our distributor network." },
      { q: "Are you experienced with Fröling systems in Dorset?", a: "Yes — Fröling T4e and PE1 boilers are common in Dorset estates." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-weymouth",
    city: "Weymouth",
    region: "Dorset",
    kind: "repair",
    nearbyTowns: ["Portland", "Wyke Regis", "Chickerell", "Osmington", "Abbotsbury"],
    intro:
      "Biomass boiler servicing and repair in Weymouth, Portland and the south Dorset coast.",
    localContext:
      "The Weymouth and Portland area mixes domestic biomass on rural properties with tourism and commercial sites along the Jurassic Coast.",
    faqs: [
      { q: "Do you cover Portland?", a: "Yes — Portland and the surrounding villages are on our route." },
      { q: "Can you handle tourism-season breakdowns?", a: "Priority response during peak season wherever possible." },
      { q: "Are you experienced with pellet boilers in coastal properties?", a: "Yes — salt-air corrosion considerations factored into every coastal service." },
    ],
  },

  // Bristol / Bath / Wilts / Hants
  {
    slug: "biomass-boiler-servicing-and-repair-bristol",
    city: "Bristol",
    region: "Bristol & Bath",
    kind: "repair",
    nearbyTowns: ["Portishead", "Clevedon", "Thornbury", "Chipping Sodbury", "Keynsham"],
    intro:
      "Biomass boiler servicing and repair across Bristol and the commercial belt. District heating, industrial process heat and commercial biomass covered.",
    localContext: bristolContext,
    faqs: [
      { q: "Do you cover Bristol's commercial biomass?", a: "Yes — commercial and district heating is our core Bristol work." },
      { q: "Can you service large industrial boilers?", a: "Yes, up to 3,500 kW+ in partnership with specialist plant teams." },
      { q: "Do you offer PPM contracts in Bristol?", a: "Yes, multi-visit PPM and RHI reporting for commercial clients." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-bath",
    city: "Bath",
    region: "Bristol & Bath",
    kind: "repair",
    nearbyTowns: ["Keynsham", "Midsomer Norton", "Radstock", "Bradford-on-Avon", "Corsham"],
    intro:
      "Biomass boiler servicing and repair in Bath and the surrounding villages — listed heritage properties, rural estates and commercial biomass.",
    localContext:
      "Bath's heritage property base plus the commercial and education sector around the city creates a distinctive biomass mix — heritage-sensitive installs alongside larger commercial sites.",
    faqs: [
      { q: "Are you experienced with heritage properties?", a: "Yes — listed and heritage properties are a meaningful share of our Bath work." },
      { q: "Do you service education sector biomass here?", a: "Yes — schools and colleges with biomass systems are a regular part of our work." },
      { q: "Can you cover Bradford-on-Avon?", a: "Yes, the north Wiltshire border is on our route from Bath." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-salisbury",
    city: "Salisbury",
    region: "Wiltshire",
    kind: "repair",
    nearbyTowns: ["Wilton", "Amesbury", "Downton", "Tisbury", "Mere"],
    intro:
      "Biomass boiler servicing and repair in Salisbury and the surrounding Wiltshire villages. Rural estates, heritage properties and commercial biomass.",
    localContext: wiltshireContext,
    faqs: [
      { q: "Do you cover the Chalke Valley and Cranborne Chase?", a: "Yes — we travel across south Wiltshire and north Dorset in one route." },
      { q: "Can you service estate chip boilers here?", a: "Yes, Hargassner, Fröling and Herz chip systems are common on Wiltshire estates." },
      { q: "What's your typical call-out time for Salisbury?", a: "Priority within 48 hours." },
    ],
  },
  {
    slug: "biomass-boiler-servicing-and-repair-southampton",
    city: "Southampton",
    region: "Hampshire",
    kind: "repair",
    nearbyTowns: ["Eastleigh", "Romsey", "Winchester", "Fareham", "New Forest"],
    intro:
      "Biomass boiler servicing and repair in Southampton, the New Forest and wider Hampshire. Commercial, estate and district heating biomass covered.",
    localContext: hampshireContext,
    faqs: [
      { q: "Do you cover the New Forest?", a: "Yes — New Forest estates and rural properties are a regular part of our route." },
      { q: "Can you service district heating in Southampton?", a: "Yes — design, commissioning and ongoing maintenance." },
      { q: "Are you familiar with Hampshire estate systems?", a: "Yes — Hargassner and Herz chip boilers on Hampshire estates are common work." },
    ],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug);
