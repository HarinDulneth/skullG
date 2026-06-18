// Raw morphological sub-trait data from SKAL4R_morphology.csv
// 91 terrestrial mammals with 109 binary sub-trait indicators across 8 categories

export type TraitCategory = 'Dentition' | 'Skull_Proportions' | 'Orbit_Vision' | 'Mandible' | 'Nasal_Region' | 'Muscle_Attachments' | 'Cranial_Structure' | 'Special_Adaptations';

export const SUB_TRAIT_NAMES: Record<TraitCategory, string[]> = {
  Dentition: [
    "Incisor_Absent",
    "Incisor_Reduced",
    "Incisor_Normal",
    "Incisor_Enlarged",
    "Incisor_ContinuouslyGrowing",
    "Canine_Absent",
    "Canine_Small",
    "Canine_Medium",
    "Canine_Large",
    "Canine_Extreme",
    "CheekTooth_Bunodont",
    "CheekTooth_Selenodont",
    "CheekTooth_Lophodont",
    "CheekTooth_Secodont",
    "CheekTooth_Mixed",
    "Crown_Brachydont",
    "Crown_Mesodont",
    "Crown_Hypsodont",
    "Diastema_Absent",
    "Diastema_Small",
    "Diastema_Large",
    "Carnassials_Absent",
    "Carnassials_Weak",
    "Carnassials_Strong",
    "Dentition_Normal",
    "Dentition_Reduced",
    "Dentition_Toothless"
  ],
  Skull_Proportions: [
    "Snout_VeryShort",
    "Snout_Short",
    "Snout_Medium",
    "Snout_Long",
    "Snout_VeryLong",
    "Skull_Broad",
    "Skull_Intermediate",
    "Skull_Narrow",
    "Skull_Wedge",
    "Skull_Elongate",
    "Brain_FaceDominant",
    "Brain_Balanced",
    "Brain_BraincaseDominant",
    "Rostrum_Gracile",
    "Rostrum_Moderate",
    "Rostrum_Robust"
  ],
  Orbit_Vision: [
    "Orbit_Lateral",
    "Orbit_SemiForward",
    "Orbit_Forward",
    "OrbitSize_Small",
    "OrbitSize_Medium",
    "OrbitSize_Large",
    "Postorb_None",
    "Postorb_Partial",
    "Postorb_CompleteBar",
    "Postorb_FullClosure",
    "Interorb_Narrow",
    "Interorb_Medium",
    "Interorb_Broad"
  ],
  Mandible: [
    "Jaw_Shallow",
    "Jaw_Moderate",
    "Jaw_Deep",
    "Coronoid_Low",
    "Coronoid_Medium",
    "Coronoid_High",
    "Angular_Reduced",
    "Angular_Moderate",
    "Angular_Expanded",
    "Symphysis_Flexible",
    "Symphysis_SemiFused",
    "Symphysis_Fused"
  ],
  Nasal_Region: [
    "Nasal_Short",
    "Nasal_Medium",
    "Nasal_Long",
    "NasalAp_Narrow",
    "NasalAp_Moderate",
    "NasalAp_Wide",
    "Turbinate_Low",
    "Turbinate_Medium",
    "Turbinate_High",
    "Proboscis_None",
    "Proboscis_Moderate",
    "Proboscis_Strong"
  ],
  Muscle_Attachments: [
    "SagCrest_None",
    "SagCrest_Small",
    "SagCrest_Moderate",
    "SagCrest_Large",
    "TempFossa_Small",
    "TempFossa_Medium",
    "TempFossa_Large",
    "Zyg_Thin",
    "Zyg_Moderate",
    "Zyg_Robust",
    "Bullae_Small",
    "Bullae_Medium",
    "Bullae_Enlarged"
  ],
  Cranial_Structure: [
    "Occip_Flat",
    "Occip_Rounded",
    "Occip_Expanded",
    "FM_Posterior",
    "FM_Intermediate",
    "FM_Inferior"
  ],
  Special_Adaptations: [
    "Rodent_Adaptation",
    "Lagomorph_Adaptation",
    "Carnivore_Adaptation",
    "Elephant_Adaptation",
    "Anteater_Adaptation",
    "Burrowing_Adaptation",
    "Arboreal_Adaptation",
    "Aquatic_Adaptation",
    "Cursorial_Adaptation",
    "Fossorial_Adaptation"
  ],
};

export const MORPHOLOGY_DATA: Record<string, Record<TraitCategory, number[]>> = {
  "Aardwolf": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  },
  "Agouti": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Alpaca": {
    Dentition: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Anteater": {
    Dentition: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  },
  "Antelope": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Armadillo": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Baboon": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 0, 1, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Badger": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1]
  },
  "Bear": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  },
  "Beaver": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  },
  "Bison": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 0, 1, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Boar": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 1, 0]
  },
  "Bonobo": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 0, 0, 1],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Buffalo": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Camel": {
    Dentition: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Capybara": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  },
  "Cat": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 1, 0, 1, 0]
  },
  "Cheetah": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Chimpanzee": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 0, 0, 1],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Chinchilla": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Chipmunk": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0]
  },
  "Civet": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
  },
  "Coati": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
  },
  "Cow": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Coyote": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Deer": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Dog": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Donkey": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Elephant": {
    Dentition: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
  },
  "Ferret": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1]
  },
  "Fox": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Giraffe": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Goat": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Gopher": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Gorilla": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 0, 0, 1],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Groundhog": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Guinea Pig": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  "Hare": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Hedgehog": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  },
  "Hippo": {
    Dentition: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  },
  "Horse": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Hyena": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Jackal": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Jaguar": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Kangaroo": {
    Dentition: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Koala": {
    Dentition: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Lemur": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Leopard": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 1, 0, 1, 0]
  },
  "Lion": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Llama": {
    Dentition: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Lynx": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Marmot": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Meerkat": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
  },
  "Mink": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
  },
  "Mole": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Nasal_Region: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Mongoose": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Monkey": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 0, 0, 1],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Moose": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Mouse": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  },
  "Numbat": {
    Dentition: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
  },
  "Okapi": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Opossum": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Orangutan": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 0, 0, 1],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Otter": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
  },
  "Panda": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Pangolin": {
    Dentition: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  },
  "Pig": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  },
  "Pika": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  "Porcupine": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Prairie Dog": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Rabbit": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 1, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Raccoon": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 1, 0, 0]
  },
  "Rat": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0]
  },
  "Rhino": {
    Dentition: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Sheep": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Shrew": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  },
  "Skunk": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0]
  },
  "Sloth": {
    Dentition: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Sloth Bear": {
    Dentition: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 1, 1, 0, 0, 0, 0]
  },
  "Squirrel": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  },
  "Tapir": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Tasmanian Devil": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
  },
  "Tiger": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    Orbit_Vision: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Wallaby": {
    Dentition: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Warthog": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 1, 0, 0, 1, 0]
  },
  "Weasel": {
    Dentition: [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 0, 1]
  },
  "Wolf": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Orbit_Vision: [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
    Mandible: [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
  },
  "Wolverine": {
    Dentition: [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    Mandible: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 1, 0, 0, 0, 0, 0, 1, 1]
  },
  "Wombat": {
    Dentition: [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
    Cranial_Structure: [1, 0, 0, 1, 0, 0],
    Special_Adaptations: [1, 0, 0, 0, 0, 1, 0, 0, 0, 1]
  },
  "Yak": {
    Dentition: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    Orbit_Vision: [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    Cranial_Structure: [0, 0, 1, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  },
  "Zebra": {
    Dentition: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0],
    Skull_Proportions: [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    Orbit_Vision: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    Mandible: [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    Nasal_Region: [0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    Muscle_Attachments: [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    Cranial_Structure: [0, 1, 0, 1, 0, 0],
    Special_Adaptations: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
  }
};
