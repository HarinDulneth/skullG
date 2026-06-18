import { MORPHOLOGY_DATA, TraitCategory } from './morphologyData';

// Weight definitions for each sub-trait (index = position in sub-trait array)
// Positive = increases composite score, Negative = decreases composite score
const WEIGHTS: Record<TraitCategory, number[]> = {
  Dentition: [
    -2,  // Incisor_Absent
    -1,  // Incisor_Reduced
    0,   // Incisor_Normal
    1,   // Incisor_Enlarged
    0,   // Incisor_ContinuouslyGrowing
    -2,  // Canine_Absent
    0,   // Canine_Small
    2,   // Canine_Medium
    4,   // Canine_Large
    6,   // Canine_Extreme
    1,   // CheekTooth_Bunodont
    -1,  // CheekTooth_Selenodont
    -1,  // CheekTooth_Lophodont
    4,   // CheekTooth_Secodont
    0,   // CheekTooth_Mixed
    1,   // Crown_Brachydont
    0,   // Crown_Mesodont
    -1,  // Crown_Hypsodont
    0,   // Diastema_Absent
    0,   // Diastema_Small
    0,   // Diastema_Large
    -1,  // Carnassials_Absent
    2,   // Carnassials_Weak
    5,   // Carnassials_Strong
    0,   // Dentition_Normal
    -1,  // Dentition_Reduced
    -3,  // Dentition_Toothless
  ],
  Skull_Proportions: [
    -2,  // Snout_VeryShort
    -1,  // Snout_Short
    0,   // Snout_Medium
    1,   // Snout_Long
    2,   // Snout_VeryLong
    2,   // Skull_Broad
    0,   // Skull_Intermediate
    -1,  // Skull_Narrow
    -1,  // Skull_Wedge
    1,   // Skull_Elongate
    1,   // Brain_FaceDominant
    0,   // Brain_Balanced
    -1,  // Brain_BraincaseDominant
    -1,  // Rostrum_Gracile
    0,   // Rostrum_Moderate
    2,   // Rostrum_Robust
  ],
  Orbit_Vision: [
    -2,  // Orbit_Lateral
    1,   // Orbit_SemiForward
    3,   // Orbit_Forward
    -1,  // OrbitSize_Small
    0,   // OrbitSize_Medium
    1,   // OrbitSize_Large
    -1,  // Postorb_None
    1,   // Postorb_Partial
    2,   // Postorb_CompleteBar
    3,   // Postorb_FullClosure
    1,   // Interorb_Narrow
    0,   // Interorb_Medium
    -1,  // Interorb_Broad
  ],
  Mandible: [
    -2,  // Jaw_Shallow
    0,   // Jaw_Moderate
    3,   // Jaw_Deep
    -1,  // Coronoid_Low
    0,   // Coronoid_Medium
    2,   // Coronoid_High
    -2,  // Angular_Reduced
    0,   // Angular_Moderate
    2,   // Angular_Expanded
    -1,  // Symphysis_Flexible
    0,   // Symphysis_SemiFused
    2,   // Symphysis_Fused
  ],
  Nasal_Region: [
    -1,  // Nasal_Short
    0,   // Nasal_Medium
    2,   // Nasal_Long
    -1,  // NasalAp_Narrow
    0,   // NasalAp_Moderate
    1,   // NasalAp_Wide
    -1,  // Turbinate_Low
    0,   // Turbinate_Medium
    2,   // Turbinate_High
    0,   // Proboscis_None
    1,   // Proboscis_Moderate
    3,   // Proboscis_Strong
  ],
  Muscle_Attachments: [
    -1,  // SagCrest_None
    1,   // SagCrest_Small
    2,   // SagCrest_Moderate
    4,   // SagCrest_Large
    -1,  // TempFossa_Small
    1,   // TempFossa_Medium
    3,   // TempFossa_Large
    -2,  // Zyg_Thin
    0,   // Zyg_Moderate
    3,   // Zyg_Robust
    0,   // Bullae_Small
    0,   // Bullae_Medium
    1,   // Bullae_Enlarged
  ],
  Cranial_Structure: [
    -1,  // Occip_Flat
    0,   // Occip_Rounded
    2,   // Occip_Expanded
    -1,  // FM_Posterior
    0,   // FM_Intermediate
    2,   // FM_Inferior
  ],
  Special_Adaptations: [
    1,  // Rodent_Adaptation
    1,  // Lagomorph_Adaptation
    5,  // Carnivore_Adaptation
    1,  // Elephant_Adaptation
    0,  // Anteater_Adaptation
    1,  // Burrowing_Adaptation
    1,  // Arboreal_Adaptation
    1,  // Aquatic_Adaptation
    1,  // Cursorial_Adaptation
    1,  // Fossorial_Adaptation
  ],
};

// Normalization ranges [min, max] for each category
const RANGES: Record<TraitCategory, [number, number]> = {
  Dentition: [-10, 17],
  Skull_Proportions: [-5, 7],
  Orbit_Vision: [-5, 8],
  Mandible: [-6, 9],
  Nasal_Region: [-3, 8],
  Muscle_Attachments: [-4, 11],
  Cranial_Structure: [-2, 4],
  Special_Adaptations: [0, 10],
};

function normalizeToScale(raw: number, min: number, max: number): number {
  const clamped = Math.max(min, Math.min(max, raw));
  const normalized = (clamped - min) / (max - min);
  return Math.round(1 + 9 * normalized);
}

export function computeCompositeScore(animalName: string, category: TraitCategory): number {
  const animalData = MORPHOLOGY_DATA[animalName];
  if (!animalData) return 5;

  const traitVals = animalData[category];
  const weights = WEIGHTS[category];
  const [rMin, rMax] = RANGES[category];

  let raw = 0;
  for (let i = 0; i < traitVals.length; i++) {
    raw += traitVals[i] * weights[i];
  }

  return normalizeToScale(raw, rMin, rMax);
}

export function computeAllScores(animalName: string): Record<TraitCategory, number> {
  const categories: TraitCategory[] = [
    'Dentition', 'Skull_Proportions', 'Orbit_Vision', 'Mandible',
    'Nasal_Region', 'Muscle_Attachments', 'Cranial_Structure', 'Special_Adaptations'
  ];
  const scores: Partial<Record<TraitCategory, number>> = {};
  for (const cat of categories) {
    scores[cat] = computeCompositeScore(animalName, cat);
  }
  return scores as Record<TraitCategory, number>;
}
