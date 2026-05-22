# Image Audit & Checklist — Biomass Engineers Site

## 1. Critical issue with supplied photos

Almost every supplied photo in `/Users/andrewnorman/dev/websites/Biomass Engineers/web photos/` has yellow text annotations baked into the JPG (e.g. "Frolig T4 install", "Its heavy 7.5 ton", "It gets hot"). These must be removed before web use:

- Crop them out where text is near edges.
- Or clone-stamp / generative-fill them away.
- Or commission re-shoot for hero/brand-critical slots.

The screenshot `Screenshot_20260420_102750_Gallery.jpg` is unusable (screenshot of old site).

## 2. Target image dimensions

Site uses Next.js `<Image fill>` with `object-cover` inside aspect-locked containers. Provide source @ 2× DPR for sharp displays. Compress to WebP (preferred) or JPG ≤200 KB. AVIF optional.

| Slot | Aspect | Source size | Notes |
|------|--------|-------------|-------|
| Homepage hero (right column) | 3/4 portrait | 1200×1600 | Plant room hero shot |
| Homepage "Why biomass" panel | 4/5 portrait | 1280×1600 | Pellets / fuel |
| Homepage case-study cards (×3) | 4/3 landscape | 1600×1200 | Project shots |
| Homepage blog cards (×3) | 16/9 landscape | 1920×1080 | Article hero |
| About hero side image | 4/5 portrait | 1280×1600 | Team / engineer |
| About team grid (each) | 4/5 portrait | 960×1200 | Headshots |
| Contact map tile | 1/1 square | 1200×1200 | Static map |
| Contact van tile | 1/1 square | 1200×1200 | Branded van |
| Gallery tile | 1/1 square | 1200×1200 | Work shots |
| Case-study index card | 4/3 landscape | 1600×1200 | Cover |
| Case-study detail (×4 gallery) | 4/3 landscape | 1600×1200 | Project gallery |
| Brand page hero (×6 brands) | 4/3 landscape | 1600×1200 | Brand-specific boiler |
| Open Graph default | 1.91/1 | 1200×630 | Social share fallback |
| Favicon | 1/1 | 512×512 (PNG) | Already present |

## 3. Photo categorisation (supplied folder)

| File | Best fit | Page slot |
|------|----------|-----------|
| 20180130_151150.jpg | Food-waste-to-energy unit | Commercial service / Gallery |
| 20180307_102942.jpg | Ariterm large boiler | Commercial service / Case study |
| 20180326_124422.jpg | Fröling T4 plant room | **Brand: Fröling** hero |
| 20180525_132609.jpg | Wood shredder + magnets | Gallery / Fuel page |
| 20180525_132617.jpg | Shredder (dup) | Gallery |
| 20180601_175330.jpg | Crop dryer units | Agricultural case study |
| 20180625_141023.jpg | Boiler lift (7.5t) | Installation page |
| 20180719_105007.jpg | Waste-wood boiler outdoors | Commercial / District heating |
| 20180727_132754.jpg | 20,000L buffer + pipework | Commercial / Coded welding |
| 20180816_155912.jpg | Industrial air heating | Commercial service |
| 20190806_085237.jpg | 4" boiler back-end | Coded welding / Commercial |
| 20191121_154223.jpg | Freestanding flue | Installation gallery |
| 20210726_115629.jpg | Absorption chiller (heat→cool) | District heating / Commercial |
| 20220613_134529.jpg | District plant pipework | District heating page hero |
| 20220616_120902.jpg | Underground pipe laying | District heating page |
| 20220616_125456.jpg | Pumps/manifold | Gallery / Servicing |
| 20220616_125505.jpg | Pumps/manifold (dup angle) | Gallery |
| 20220630_163114.jpg | Grundfos pump install | Servicing / Repair |
| 20220630_163118.jpg | Tank + pumps outdoor | District heating |
| 20220704_134939.jpg | Underground district boiler side | District heating |
| 20221013_130001.jpg | Plate heat exchanger close-up | Servicing / Parts |
| 20221015_102836.jpg | Heat exchanger rebuild | Repair / Parts |
| 20221214_131826.jpg | Combustion chamber on fire | **Homepage hero candidate** / Brand pages |
| 20230119_154028.jpg | 999kW Binda rebuilt | **Brand: Binder** hero / Commercial |
| 20230119_154118.jpg | Kalvis hydraulic floor fuel store | Fuel store / Commercial |
| 20230119_154133.jpg | Kalvis/Binda adaptation | Brand: Binder / Repair |
| 20230123_124134.jpg | Boiler controls touchscreen | Servicing / RHI |
| 20230123_142626.jpg | Boiler control cabinet | Servicing |
| 20230125_130648.jpg | PLC modules | Servicing / Repair |
| 20230420_144215.jpg | District heating local plant room | District heating hero alt |
| 20230426_100052.jpg | Heat distribution (chicken sheds) | Agricultural case study |
| 20230426_130723.jpg | Pasteurising tank | Commercial / Process heat |
| 20230524_140529.jpg | 350kW Fröling Turbomat | **Brand: Fröling** alt / Commercial |
| 20230524_140544.jpg | 350kW district heating + gas backup | District heating |
| 20230607_102014.jpg | Burner head component | Parts & spares |
| 20230607_112528.jpg | Disassembled boiler parts | Parts & spares / Repair |
| 20230607_112549.jpg | Engineer rebuilding Fröling P4 | **About / engineer-at-work** / Repair page |
| 20230609_100317.jpg | Anaerobic digestion heat matrix | Commercial / Case study |
| 20231018_142332.jpg | Cascade heat pumps | Heat pump / Installation |
| 20231228_152721.jpg | ETA pellet boiler service | Servicing / **Brand: ETA** if added |
| 20240125_154205.jpg | Kalvis flame viewing port | Homepage hero alt / atmospheric |
| 20240125_154212.jpg | Megawatt boiler running | Commercial / Brand |
| 20240319_102206.jpg | Tube clean (boiler internals) | Servicing page |
| 20251119_135757.jpg | School commercial boiler service | Case study (school) / Commercial |
| 20260420_135247.jpg | Tube clean 1MW drying floor | Commercial servicing |
| IMAG0532.jpg | Bespoke boiler build (black) | Specification & design page |
| IMAG0710.jpg | Tipped fuel delivery | **fuel-delivery.png** replacement / Fuel page |
| IMAG1159.jpg | Boiler service plant room | Servicing hero alt |
| IMG-20191104-WA0006.jpg | Siemens HMI / ECOHW concentration | Commercial / R&D |
| Screenshot_20260420_102750_Gallery.jpg | **DO NOT USE** | n/a |
| ZOE_0020.jpg | Fröling TX clean install | **Brand: Fröling** hero (preferred — clean shot) |

## 4. Per-page checklist

### Homepage (`app/page.tsx`)
- [ ] `hero-plant-room.jpg` — 1200×1600 (3/4). Candidate: ZOE_0020.jpg or 20180326_124422.jpg cleaned.
- [ ] `pellets-hand.jpg` — 1280×1600 (4/5). **Need new photo** of pellets in hand. Current placeholder OK; supplied folder has no pellet close-up.
- [ ] Case study card 1 (`engineer-at-work.jpg`) — 1600×1200 (4/3). Candidate: 20230607_112549.jpg cleaned.
- [ ] Case study card 2 (`service-van.jpg`) — 1600×1200 (4/3). **Need new** branded van photo.
- [ ] Case study card 3 — 1600×1200 (4/3). Candidate: 20230609_100317.jpg (anaerobic digestion).
- [ ] Blog cards ×3 — 1920×1080 (16/9). Currently placeholder; pick atmospheric shots: 20221214_131826.jpg (flame), 20230123_124134.jpg (controls), 20240319_102206.jpg (tubes).

### About (`app/about/page.tsx`)
- [ ] `engineer-at-work.jpg` — 1280×1600 (4/5). Candidate: 20230607_112549.jpg cleaned.

### About / Our Team (`app/about/our-team/page.tsx`)
- [ ] Per-team-member portrait — 960×1200 (4/5). **Need new** headshots; none supplied.

### Contact (`app/contact/page.tsx`)
- [ ] `devon-map.png` — 1200×1200 (1/1). Generate from Mapbox/Google Static Maps centred on Exmouth.
- [ ] `service-van.jpg` — 1200×1200 (1/1). **Need new** van shot.

### Gallery (`app/gallery/page.tsx`)
- [ ] ≥12 tiles — 1200×1200 (1/1). Source from cleaned supplied photos: 20180130_151150, 20180525_132609, 20180719_105007, 20180816_155912, 20191121_154223, 20210726_115629, 20221013_130001, 20221214_131826, 20230426_100052, 20230607_102014, 20231018_142332, IMAG0710.

### Case studies index (`app/case-studies/page.tsx`)
- [ ] Per case study card — 1600×1200 (4/3). One per `caseStudies` entry in `lib/caseStudies.ts`.

### Case study detail (`components/CaseStudyPageTemplate.tsx`)
- [ ] 4 gallery images per case study — 1600×1200 (4/3) each. Use related supplied photos.

### Brand pages (`app/biomass-boilers/[brand]/page.tsx`)
- [ ] **Fröling** — 1600×1200 (4/3). Candidate: ZOE_0020.jpg (Fröling TX) or 20230524_140529.jpg.
- [ ] **Hargassner** — 1600×1200 (4/3). **Need new** Hargassner-specific shot.
- [ ] **Herz** — 1600×1200 (4/3). **Need new** Herz shot.
- [ ] **Heizomat** — 1600×1200 (4/3). **Need new** or repurpose 20180307_102942.jpg.
- [ ] **Binder** — 1600×1200 (4/3). Candidate: 20230119_154028.jpg (999kW Binda rebuild).
- [ ] **Windhager** — 1600×1200 (4/3). **Need new** Windhager-specific shot.

### Service pages (no images in template currently)
- [ ] Optionally add hero image to `ServicePageTemplate`. If yes:
  - Installation — 20180625_141023.jpg
  - Servicing & maintenance — 20240319_102206.jpg
  - Repair — 20221015_102836.jpg
  - Commercial — 20180307_102942.jpg
  - RHI — 20230123_124134.jpg
  - Parts & spares — 20230607_102014.jpg
  - Specification/design — IMAG0532.jpg
  - District heating — 20220613_134529.jpg or 20230420_144215.jpg
  - Existing boilers — IMAG1159.jpg
  - Commercial boiler service — 20251119_135757.jpg

### Location pages (no images in template)
- [ ] Optional: add static map per `locations.ts` entry — 800×600.

### Blog posts (`app/blog/[slug]/page.tsx`)
- [ ] Per-post hero — 1920×1080 (16/9). One per MDX file in `content/blog/`.

### Open Graph / social
- [ ] `og-default.jpg` — 1200×630. Composite of brand + plant room.

## 5. Gaps — photos NOT supplied that you must source

- Branded service van exterior (Contact + homepage).
- Hand holding ENplus A1 pellets (homepage benefits).
- Team headshots — all team members.
- Hargassner, Herz, Heizomat, Windhager brand-specific boilers.
- Exterior of company premises / office (About page optional).
- Customer site exteriors (case studies optional).

## 6. Output format recommendations

- Convert source JPG → WebP (q=80) and AVIF (q=55).
- Strip EXIF.
- Two filenames per slot: `name.webp` (preferred) + `name.jpg` (fallback).
- Replace overlong PNGs in `public/images/` (currently ~1 MB each) with optimised WebP.
