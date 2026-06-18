import { ANIMALS_DATABASE } from '../data/animalDatabase';
import type { TraitKey, ConstraintNotification, Language } from '../types';

// Tolerance for matching animals to slider values
const TOLERANCE = 2;

// Define strong biological correlations
// If the user changes the 'source' trait, we check the 'target' traits for constraints
export const CORRELATIONS: Record<TraitKey, TraitKey[]> = {
  specialAdaptations: ['dentition', 'orbitVision', 'muscleAttachments'],
  dentition: ['specialAdaptations', 'orbitVision', 'muscleAttachments'],
  orbitVision: ['specialAdaptations', 'dentition'],
  muscleAttachments: ['specialAdaptations', 'dentition'],
  skullProportions: ['mandible'],
  mandible: ['skullProportions'],
  nasalRegion: [],
  cranialStructure: []
};

// Trait labels for notifications
export const TRAIT_LABELS: Record<TraitKey, Record<Language, string>> = {
  dentition: { en: 'Dentition', si: 'දන්ත ව්‍යුහය', ta: 'பல் அமைப்பு' },
  skullProportions: { en: 'Skull Proportions', si: 'හිස්කබලේ සමානුපාතික', ta: 'மண்டை ஓடு விகிதாச்ச்சிகள்' },
  orbitVision: { en: 'Orbit & Vision', si: 'අක්ෂි කුහරය සහ දර්ශනය', ta: 'கண் குழி மற்றும் பார்வை' },
  mandible: { en: 'Mandible', si: 'යටි හනුව', ta: 'கீழ்த்தாடை' },
  nasalRegion: { en: 'Nasal Region', si: 'නාසික කලාපය', ta: 'மூக்குப் பகுதி' },
  muscleAttachments: { en: 'Muscle Attachments', si: 'මාංශ පේශි සම්බන්ධක', ta: 'தசை இணைப்புகள்' },
  cranialStructure: { en: 'Cranial Structure', si: 'කපාල ව්‍යුහය', ta: 'மண்டையோட்டு அமைப்பு' },
  specialAdaptations: { en: 'Special Adaptations', si: 'විශේෂ අනුවර්තන', ta: 'சிறப்புத் தகவமைப்புகள்' }
};

export interface ConstraintResult {
  newValues: Record<TraitKey, number>;
  notifications: ConstraintNotification[];
}

export function enforceConstraints(
  changedTrait: TraitKey,
  newValue: number,
  currentValues: Record<TraitKey, number>,
  language: Language
): ConstraintResult {
  const newValues = { ...currentValues, [changedTrait]: newValue };
  const notifications: ConstraintNotification[] = [];
  const correlatedTraits = CORRELATIONS[changedTrait];

  if (!correlatedTraits || correlatedTraits.length === 0) {
    return { newValues, notifications };
  }

  // Find all animals that match the changed trait within tolerance
  const matchingAnimals = ANIMALS_DATABASE.filter(
    (animal) => Math.abs(animal.traits[changedTrait] - newValue) <= TOLERANCE
  );

  // If no animals match this single trait (unlikely), don't enforce constraints
  if (matchingAnimals.length === 0) return { newValues, notifications };

  // For each correlated trait, find the valid range among matching animals
  for (const targetTrait of correlatedTraits) {
    const targetValue = newValues[targetTrait];
    
    // Get min/max valid values for this target trait given the changed trait
    let minValid = 10;
    let maxValid = 1;
    
    for (const animal of matchingAnimals) {
      const val = animal.traits[targetTrait];
      if (val < minValid) minValid = val;
      if (val > maxValid) maxValid = val;
    }

    // Widen range slightly by tolerance, but clamp to 1-10
    minValid = Math.max(1, minValid - TOLERANCE);
    maxValid = Math.min(10, maxValid + TOLERANCE);

    if (targetValue < minValid || targetValue > maxValid) {
      // Current value is outside valid range, snap it
      const snappedValue = targetValue < minValid ? minValid : maxValid;
      const oldValue = targetValue;
      newValues[targetTrait] = snappedValue;

      // Create notification
      const sourceLabel = TRAIT_LABELS[changedTrait][language];
      const targetLabel = TRAIT_LABELS[targetTrait][language];
      
      let messageEn = `No animal in our database has ${sourceLabel} (${newValue}) combined with ${targetLabel} (${oldValue}). Adjusted ${targetLabel} to ${snappedValue}.`;
      let messageSi = `අපගේ දත්ත ගබඩාවේ කිසිදු සතෙකුට ${sourceLabel} (${newValue}) සමඟ ${targetLabel} (${oldValue}) නොමැත. ${targetLabel} අගය ${snappedValue} දක්වා වෙනස් කරන ලදි.`;
      let messageTa = `எங்கள் தரவுத்தளத்தில் உள்ள எந்த விலங்குக்கும் ${sourceLabel} (${newValue}) மற்றும் ${targetLabel} (${oldValue}) இல்லை. ${targetLabel} மதிப்பு ${snappedValue} ஆக மாற்றப்பட்டது.`;

      notifications.push({
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        message: { en: messageEn, si: messageSi, ta: messageTa },
        traitAdjusted: targetTrait,
        oldValue,
        newValue: snappedValue,
        timestamp: Date.now()
      });
    }
  }

  return { newValues, notifications };
}
