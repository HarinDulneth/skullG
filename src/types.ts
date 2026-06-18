export type Language = 'en' | 'si' | 'ta';

export interface Animal {
  name: string;
  scientificName: string;
  order: string;
  dietCategory: 'Carnivore' | 'Herbivore' | 'Omnivore' | 'Insectivore';
  habitat: string;
  socialStructure: string;
  activityPattern: string;
  traits: TraitScores;
  funFacts: string[];
  wikiUrl: string;
}

export interface TraitScores {
  dentition: number;           // 1=herbivore grinding, 10=carnassial shearing
  skullProportions: number;    // 1=gracile/narrow, 10=broad/robust
  orbitVision: number;         // 1=fully lateral, 10=fully forward (binocular)
  mandible: number;            // 1=weak/shallow jaw, 10=deep/powerful jaw
  nasalRegion: number;         // 1=short/flat nose, 10=long snout/proboscis
  muscleAttachments: number;   // 1=weak muscle marks, 10=extreme crests/fossae
  cranialStructure: number;    // 1=flat/primitive, 10=expanded/derived
  specialAdaptations: number;  // 1=generalist, 10=highly specialized
}

export type TraitKey = keyof TraitScores;

export interface TraitMeta {
  key: TraitKey;
  label: Record<Language, string>;
  description: Record<Language, string>;
  lowLabel: Record<Language, string>;
  highLabel: Record<Language, string>;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ConstraintNotification {
  id: string;
  message: Record<Language, string>;
  traitAdjusted: TraitKey;
  oldValue: number;
  newValue: number;
  timestamp: number;
}
