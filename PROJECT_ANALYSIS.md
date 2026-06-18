# SKAL4R — Complete Project Analysis

## 1. PROJECT OVERVIEW

**SKAL4R** (Skull-Based Animal Classification Using Adaptive Reasoning — Model 4) is an interactive educational web application built with Next.js 15 + React 19 + TypeScript + Tailwind CSS 4. It allows users to explore the relationship between mammalian skull morphology and biological classification through interactive sliders, a molar morphology lab, and a full encyclopedia.

**Core Purpose:** Given 8 cranial trait scores (1-10 scale) set by the user, the app computes probabilistic matches against a database of 91 terrestrial mammals, showing which animal is most likely based on skull morphology alone.

---

## 2. FULL FILE TREE

```
SKAL4R_BACKUP/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (fonts, nav, LanguageProvider)
│   ├── page.tsx                  # Home/landing page
│   ├── globals.css               # Tailwind imports + custom theme + glassmorphism
│   ├── explore/
│   │   └── page.tsx              # Interactive slider explorer page
│   ├── encyclopedia/
│   │   └── page.tsx              # Full mammal encyclopedia page
│   └── skull-lab/
│       └── page.tsx              # Dental morphology lab page
│
├── src/
│   ├── types.ts                  # All TypeScript interfaces (Animal, TraitScores, etc.)
│   ├── index.css                 # Unused (legacy)
│   │
│   ├── data/                     # STATIC DATA LAYER (the "database")
│   │   ├── animalDatabase.ts     # 91 mammal records with 8 trait scores each
│   │   ├── animals.txt           # Plain list of all 91 animal names
│   │   ├── morphologyData.ts     # 91 mammals x 109 binary sub-trait indicators
│   │   ├── traitScoring.ts       # Weighted scoring algorithm (binary -> composite 1-10)
│   │   ├── molarGuide.ts         # 5 molar types with descriptions (trilingual)
│   │   └── skullImages.ts        # File path mapping for skull specimen images
│   │
│   ├── lib/                      # BUSINESS LOGIC LAYER
│   │   ├── animalMatcher.ts      # Probabilistic matching algorithm
│   │   └── traitConstraints.ts   # Biological constraint enforcement system
│   │
│   ├── components/               # UI COMPONENT LAYER
│   │   ├── SliderExplorer.tsx    # Main interactive explorer (state manager)
│   │   ├── TraitSlider.tsx       # Individual 1-10 slider control
│   │   ├── AnimalProbabilityPanel.tsx  # Top-10 match results panel
│   │   ├── AnimalDetailModal.tsx # Full animal detail overlay (traits, radar, QR, bio)
│   │   ├── AnimalCardImage.tsx   # Lazy-loaded Wikipedia thumbnail card
│   │   ├── Encyclopedia.tsx      # Full mammal browser with search/filter
│   │   ├── SkullLab.tsx          # Molar morphology educational lab
│   │   ├── ImageMagnifier.tsx    # Hover-zoom for skull images
│   │   ├── ConstraintNotification.tsx  # Toast notifications for constraint adjustments
│   │   ├── LanguageProvider.tsx  # EN/Sinhala/Tamil trilingual support
│   │   ├── Navigation.tsx        # Top navigation bar
│   │   ├── ParticleCanvas.tsx    # Canvas 2D particle network background
│   │   └── PixelBlast.tsx        # WebGL/Three.js pixel-effect background
│   │
│   └── assets/                   # Legacy images (hero.png, react.svg, vite.svg)
│
├── public/
│   ├── skull_images/
│   │   └── skull_images/         # ~91 skull specimen images (.jpg, .webp, .jfif, .png)
│   ├── favicon.svg
│   └── icons.svg                 # Social media icon sprites
│
├── package.json                  # Dependencies: next, react, three.js, postprocessing,
│                                 #   lucide-react, qrcode.react, tailwindcss, typescript
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── next-env.d.ts
└── .gitignore
```

---

## 3. DATABASES (Static Data Layer)

There is **no external database** — the entire data lives in TypeScript files compiled into the client bundle:

### 3.1 `animalDatabase.ts` — The Main Dataset
- **91 records** of terrestrial mammals
- Each record contains: common name, scientific name, taxonomic order, diet category, habitat, social structure, activity pattern, **8 trait scores** (each 1-10), fun facts, and Wikipedia URL
- Orders represented: Carnivora, Artiodactyla, Rodentia, Primates, Perissodactyla, Lagomorpha, Eulipotyphla, Diprotodontia, Pilosa, Cingulata, Pholidota, Proboscidea, Tubulidentata, Dasyuromorphia, Didelphimorphia
- Diet categories: Carnivore, Herbivore, Omnivore, Insectivore
- Habitats: Forest, Savanna, Grassland, Desert, Aquatic/Generalist, Generalist

### 3.2 `morphologyData.ts` — Sub-Trait Binary Vectors
- Each of the 91 animals has **109 binary (0/1) sub-trait indicators** across 8 categories:
  - **Dentition** (27 sub-traits): Incisor type (absent/reduced/normal/enlarged/continuously-growing), Canine type (absent/small/medium/large/extreme), Cheek tooth type (bunodont/selenodont/lophodont/secodont/mixed), Crown height (brachydont/mesodont/hypsodont), Diastema, Carnassials, overall normality
  - **Skull Proportions** (16 sub-traits): Snout length, skull width/shape, brain-to-face ratio, rostrum robustness
  - **Orbit & Vision** (13 sub-traits): Orbit position (lateral/semi-forward/forward), orbit size, postorbital bar/closure, interorbital width
  - **Mandible** (12 sub-traits): Jaw depth, coronoid process height, angular process, symphysis fusion
  - **Nasal Region** (12 sub-traits): Nasal length, nasal aperture width, turbinate complexity, proboscis development
  - **Muscle Attachments** (13 sub-traits): Sagittal crest, temporal fossa, zygomatic arch, auditory bullae
  - **Cranial Structure** (6 sub-traits): Occipital shape, foramen magnum position
  - **Special Adaptations** (10 sub-traits): Rodent, lagomorph, carnivore, elephant, anteater, burrowing, arboreal, aquatic, cursorial, fossorial

### 3.3 `molarGuide.ts` — Dental Morphology Reference
- 5 molar types: Carnassial, Lophodont, Selenodont, Bunodont, Hypsodont
- Each with trilingual descriptions, dietary interpretation, and SVG icon

### 3.4 `skullImages.ts` — Skull Image Index
- Maps each animal name to its skull specimen image filename (91 images in `/public/skull_images/skull_images/`)

---

## 4. THE MATHEMATICAL / COMPUTATIONAL MODELS

### 4.1 Primary: Probabilistic Trait Matching (`src/lib/animalMatcher.ts`)

This is the core inference engine. Given 8 user-selected slider values:

**Step 1 — Compute L1 Distance:**
```
totalDistance = Σ |userVal_trait_i - animalVal_trait_i|   for all 8 traits
```
Maximum possible distance = 8 traits × 9 = 72

**Step 2 — Convert Distance to Similarity (Exponential Decay):**
```
similarity = exp(-totalDistance × 0.25)
```
This means:
- distance = 0  → similarity = 1.000
- distance = 1  → similarity = 0.779
- distance = 5  → similarity = 0.287
- distance = 10 → similarity = 0.082

The 0.25 multiplier controls the decay rate — it was chosen so that small distances yield high similarity while large distances drop off quickly.

**Step 3 — Normalize to Probabilities (Softmax-like):**
```
probability = (similarity_animal / Σ similarity_all_animals) × 100%
```
This produces a proper probability distribution over all 91 animals that sums to 100%.

**Step 4 — Match Score (independent, for progress bars):**
```
matchScore = max(0, 1 - totalDistance / (maxPossibleDistance × 0.5))
```
This is an independent 0-100% "how close is this animal" metric for visualization, not a probability.

### 4.2 Secondary: Composite Score Computation (`src/data/traitScoring.ts`)

This converts the 109 binary sub-traits (from morphologyData.ts) into the 8 composite 1-10 scores stored in animalDatabase.ts.

**Step 1 — Weighted Linear Sum:**
```
raw = Σ (subTrait_binary[i] × weight[i])   for each sub-trait in a category
```
Weights are expert-defined integers (e.g., Canine_Extreme = +6, CheekTooth_Secodont = +4, CheckTooth_Selenodont = -1).

**Step 2 — Min-Max Normalization to 1-10 scale:**
```
normalized = 1 + 9 × clamp(raw - min) / (max - min)
```
Each category has a predefined [min, max] range (e.g., Dentition: [-10, 17], Mandible: [-6, 9]).

This produces the final 1-10 scores used by the matching engine.

### 4.3 Tertiary: Biological Constraint Enforcement (`src/lib/traitConstraints.ts`)

When a user adjusts a trait, this system ensures combinations remain biologically realistic.

**Step 1 — Correlation Map:** Defines which traits constrain which:
```
specialAdaptations ↔ dentition, orbitVision, muscleAttachments
skullProportions ↔ mandible
nasalRegion → ∅ (no constraints)
cranialStructure → ∅ (no constraints)
```

**Step 2 — Range Validation:**
- Find all animals whose `changedTrait` value is within ±2 of the new value
- For each correlated trait, compute [minValid, maxValid] from those animals (expanded by tolerance ±2)
- If the current slider value for a correlated trait falls outside this range, **snap it** to the nearest valid boundary

**Step 3 — Notification:**
- A toast notification explains which trait was auto-adjusted and why
- Example: "No animal has Dentition (10) combined with Orbit (1). Adjusted Orbit to 5."

### 4.4 Diet Biochemistry Radar Chart (in AnimalDetailModal)

A 6-axis radar chart visualizes the animal's digestive biochemistry:
- **Protein** (protease activity, gastric acidity for meat digestion)
- **Fat** (lipase requirements)
- **Fibre** (cellulase via gut microbiota)
- **Starch** (amylase capacity)
- **Chitin** (chitinase for insectivores)
- **Mineral** (for bone/crustacean consumption)

The values are heuristically assigned based on diet category and then modulated by the `specialAdaptations` trait score.

---

## 5. ZOOLOGICAL DOMAIN LOGIC

### 5.1 Trait Scoring Philosophy

Each of the 8 traits maps to a known axis of mammalian skull evolution:

| Trait | 1 (Low) | 10 (High) | Biological Meaning |
|-------|---------|-----------|-------------------|
| **Dentition** | Herbivore grinding | Carnassial shearing | Tooth specialization for diet |
| **Skull Proportions** | Gracile/narrow | Broad/robust | Overall skull strength & shape |
| **Orbit & Vision** | Fully lateral (prey) | Forward-facing (predator) | Binocular vision & hunting |
| **Mandible** | Shallow/weak | Deep/powerful | Bite force potential |
| **Nasal Region** | Short/flat | Long snout/proboscis | Olfaction & feeding strategy |
| **Muscle Attachments** | Weak/smooth | Extreme crests/fossae | Jaw muscle development |
| **Cranial Structure** | Flat/primitive | Expanded/derived | Brain size & complexity |
| **Special Adaptations** | Generalist | Highly specialized | Niche adaptation level |

### 5.2 What the App Teaches

1. **Form-Function Relationship:** Skull shape directly reflects diet, habitat, and lifestyle
2. **Convergent Evolution:** Unrelated animals in similar niches develop similar skull traits
3. **Constraint Biology:** Traits don't vary independently — a carnassial dentition requires forward-facing eyes and strong jaw muscles
4. **Diversity of Mammalian Orders:** 15+ taxonomic orders represented with distinct cranial signatures

### 5.3 Patterns Observable

- **Carnivores** (Cat, Lion, Wolf): High dentition (7-9), high orbitVision (7-9), high mandible (6-10), high muscleAttachments (4-9)
- **Herbivores** (Cow, Deer, Zebra): Low dentition (2-3), low orbitVision (2-4), low mandible (3-4)
- **Rodents** (Beaver, Capybara, Rat): Continuously-growing incisors, unique cheek tooth patterns
- **Primates** (Chimpanzee, Gorilla, Monkey): High orbitVision (7-10), high cranialStructure (4-10)
- **Insectivores** (Aardvark, Anteater): Reduced or absent dentition, specialized skull shapes

---

## 6. COMPUTER SCIENCE ARCHITECTURE

### 6.1 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 4 |
| **3D Graphics** | Three.js 0.184 (via PixelBlast component) |
| **Post-processing** | postprocessing 6.39 (WebGL effects) |
| **Icons** | lucide-react |
| **QR Codes** | qrcode.react |

### 6.2 Architecture Pattern

**Pure Static Client-Side Application:**
- All data is compiled into the JS bundle at build time
- No server-side database, API, or authentication
- All computation happens in the browser
- Wikipedia API is called client-side for animal images (lazy-loaded)

### 6.3 Data Flow

```
User adjusts slider
    ↓
SliderExplorer.handleSliderChange()
    ├── traitConstraints.enforceConstraints()  →  auto-adjust correlated traits
    │       └── ConstraintNotification         →  toast UI
    └── State update (sliderValues)
            ↓
    useMemo → calculateProbabilities(sliderValues, ANIMALS_DATABASE)
            ↓
    AnimalProbabilityPanel renders top-10 matches
            ↓
    User clicks animal → AnimalDetailModal
            ├── Wikipedia API fetch (animal image)
            ├── Skull image from local files
            ├── Diet biochemistry radar chart
            └── QR code to Wikipedia page
```

### 6.4 Trilingual Architecture

The app supports English, Sinhala (si), and Tamil (ta) via a React Context provider (`LanguageProvider`). Every user-facing text string is stored as a `Record<Language, string>` tuple. The language preference is persisted in `localStorage`.

### 6.5 State Management

- **No external state library** (no Redux, Zustand, etc.)
- Component-local state via `useState` + `useMemo`
- `SliderExplorer.tsx` is the main state orchestrator
- Language state via React Context

### 6.6 Performance Considerations

- `useMemo` on `calculateProbabilities()` prevents re-computation on unrelated re-renders
- `IntersectionObserver` for lazy-loading Wikipedia images (AnimalCardImage)
- Windowed display of top-10 matches (not all 91)
- PixelBlast uses `requestAnimationFrame` + ResizeObserver for WebGL canvas
- `localStorage` for language persistence (no cookies)

### 6.7 Visualization Components

1. **PixelBlast** — Custom WebGL shader-based animated background (Three.js + postprocessing)
   - Supports multiple pixel shapes (square, circle, triangle, diamond)
   - Interactive ripples on click/touch
   - FBM (Fractal Brownian Motion) noise for organic patterns
   - Optional liquid distortion effect

2. **ParticleCanvas** — Canvas 2D particle network (spring-like connections)

3. **AnimalProbabilityPanel** — Live-updating ranked list with probability bars

4. **AnimalDetailModal** — Full detail overlay with:
   - 6-axis radar chart (custom SVG, no chart library)
   - Hover-zoomable skull images (ImageMagnifier)
   - Biological trait bars
   - Digestive biochemistry analysis text
   - QR code linking to Wikipedia

---

## 7. PAGES / ROUTES

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home page | Landing with stats (91 animals, 8 traits), CTA to explore |
| `/explore` | SliderExplorer | Interactive trait-matching engine (main feature) |
| `/encyclopedia` | Encyclopedia | Searchable/filterable mammal browser |
| `/skull-lab` | SkullLab | Molar type educational viewer |

---

## 8. KEY OBSERVATIONS & CONCLUSIONS

### What the App Does Well
1. **Educational by design** — simultaneously teaches mammalian anatomy, evolutionary biology, and probabilistic reasoning
2. **Biologically grounded** — the scoring system is rooted in actual morphological taxonomy
3. **Real-time feedback** — slider adjustments instantly re-rank all 91 animals
4. **Constraint enforcement** — prevents biologically impossible trait combinations, educating users about correlated evolution
5. **Trilingual** — accessible to Sinhala and Tamil speakers (Sri Lankan context)
6. **Visually rich** — WebGL backgrounds, radar charts, magnifiers, QR codes

### Mathematical Model Summary
```
userTraits → L1 Distance → Exponential Decay Similarity → Softmax Normalization → Probabilities
```
This is mathematically equivalent to a simplified **soft nearest-neighbor classifier** using exponential kernel density estimation.

### Database Summary
- 91 mammal species × 117 attributes each (name + scientific name + order + diet + habitat + social + activity + 8 traits + 4 facts + URL + image + 109 sub-traits)
- 5 dental morphology types with full descriptions
- ~91 skull specimen images

### What Makes It "Model 4"
The name "SKAL4R" and "Model 4" suggest this is the 4th iteration of a classification model. The progression likely was:
- Model 1: Manual key-based identification
- Model 2: Simple lookup table
- Model 3: Basic scoring system
- Model 4 (current): Probabilistic matching with constraint enforcement + interactive UI
