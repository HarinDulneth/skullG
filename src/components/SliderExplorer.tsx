'use client';

import React, { useState, useEffect, useMemo } from 'react';
import type { TraitKey, TraitMeta, ConstraintNotification as NotificationType, Animal } from '@/types';
import { enforceConstraints } from '@/lib/traitConstraints';
import { calculateProbabilities, type MatchResult } from '@/lib/animalMatcher';
import { ANIMALS_DATABASE } from '@/data/animalDatabase';
import { useLanguage } from './LanguageProvider';

import TraitSlider from './TraitSlider';
import AnimalProbabilityPanel from './AnimalProbabilityPanel';
import ConstraintNotification from './ConstraintNotification';
import AnimalDetailModal from './AnimalDetailModal';
import { Settings2 } from 'lucide-react';

const TRAIT_METADATA: TraitMeta[] = [
  {
    key: 'dentition',
    label: { en: 'Dentition', si: 'දන්ත ව්‍යුහය', ta: 'பல் அமைப்பு' },
    description: { 
      en: 'From herbivore grinding teeth to carnassial shearing', 
      si: 'ශාක භක්ෂක දත්වල සිට මාංශ භක්ෂක දත් දක්වා', 
      ta: 'தாவர உண்ணி பற்கள் முதல் ஊனுண்ணி பற்கள் வரை' 
    },
    lowLabel: { en: 'Grinding / Herbivore', si: 'ඇඹරීම', ta: 'அரைக்கும்' },
    highLabel: { en: 'Shearing / Carnivore', si: 'කැපීම', ta: 'வெட்டும்' },
    icon: 'skull',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'specialAdaptations',
    label: { en: 'Diet Specialization', si: 'ආහාර විශේෂීකරණය', ta: 'உணவு சிறப்பாக்கம்' },
    description: { 
      en: 'From herbivore to highly specialized carnivore', 
      si: 'ශාකභක්ෂක සිට අතිශය විශේෂිත මාංශ භක්ෂක දක්වා', 
      ta: 'தாவர உண்ணி முதல் மிகவும் சிறப்பு வாய்ந்த ஊனுண்ணி வரை' 
    },
    lowLabel: { en: 'Herbivore', si: 'ශාකභක්ෂක', ta: 'தாவர உண்ணி' },
    highLabel: { en: 'Highly Specialized', si: 'විශේෂිත', ta: 'மிகவும் சிறப்பான' },
    icon: 'beef',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'orbitVision',
    label: { en: 'Orbit & Vision', si: 'අක්ෂි කුහරය සහ දර්ශනය', ta: 'கண் குழி மற்றும் பார்வை' },
    description: { 
      en: 'From fully lateral (prey) to forward-facing (predator)', 
      si: 'පැතිවල සිට ඉදිරිය බලා ඇති ඇස් දක්වා', 
      ta: 'பக்கவாட்டிலிருந்து முன்னோக்கிய கண்கள் வரை' 
    },
    lowLabel: { en: 'Side-mounted', si: 'පැතිවල', ta: 'பக்கவாட்டு' },
    highLabel: { en: 'Forward-facing', si: 'ඉදිරියට', ta: 'முன்னோக்கிய' },
    icon: 'eye',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'muscleAttachments',
    label: { en: 'Muscle Attachments', si: 'මාංශ පේශි සම්බන්ධක', ta: 'தசை இணைப்புகள்' },
    description: { 
      en: 'From weak muscle marks to extreme crests and fossae', 
      si: 'දුර්වල මාංශ පේශි සලකුණු සිට ශක්තිමත් ලාංඡන දක්වා', 
      ta: 'பலவீனமான தசை அடையாளங்கள் முதல் வலுவான முகடுகள் வரை' 
    },
    lowLabel: { en: 'Weak / Smooth', si: 'දුර්වල', ta: 'பலவீனமான' },
    highLabel: { en: 'Extreme Crests', si: 'ශක්තිමත්', ta: 'வலுவான முகடுகள்' },
    icon: 'paw-print',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'skullProportions',
    label: { en: 'Skull Size & Shape', si: 'හිස්කබලේ ප්‍රමාණය සහ හැඩය', ta: 'மண்டை ஓடு அளவு மற்றும் வடிவம்' },
    description: { 
      en: 'From gracile/narrow to broad/robust skulls', 
      si: 'සිහින්/පටු සිට පළල්/ශක්තිමත් දක්වා', 
      ta: 'மென்மையான/குறுகிய முதல் அகலமான/வலுவான வரை' 
    },
    lowLabel: { en: 'Gracile / Narrow', si: 'සිහින්', ta: 'மென்மையான' },
    highLabel: { en: 'Broad / Robust', si: 'පළල්', ta: 'அகலமான' },
    icon: 'scale',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'mandible',
    label: { en: 'Mandible Strength', si: 'යටි හනුවේ ශක්තිය', ta: 'கீழ்த்தாடை வலிமை' },
    description: { 
      en: 'From shallow/weak jaws to deep/powerful mandibles', 
      si: 'නොගැඹුරු/දුර්වල සිට ගැඹුරු/ශක්තිමත් හනු දක්වා', 
      ta: 'ஆழமில்லா/பலவீனமான முதல் ஆழமான/வலிமையான தாடை வரை' 
    },
    lowLabel: { en: 'Shallow / Weak', si: 'නොගැඹුරු', ta: 'ஆழமில்லா' },
    highLabel: { en: 'Deep / Powerful', si: 'ශක්තිමත්', ta: 'வலிமையான' },
    icon: 'bone',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'nasalRegion',
    label: { en: 'Nasal Region', si: 'නාසික කලාපය', ta: 'மூக்குப் பகுதி' },
    description: { 
      en: 'Relative snout length and nasal cavity development', 
      si: 'හොම්බේ සාපේක්ෂ දිග', 
      ta: 'முகவாய் ஒப்பீட்டு நீளம்' 
    },
    lowLabel: { en: 'Flat / Short', si: 'කෙටි', ta: 'குட்டையான' },
    highLabel: { en: 'Long / Proboscis', si: 'දිගු', ta: 'மிக நீளமான' },
    icon: 'ruler',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  },
  {
    key: 'cranialStructure',
    label: { en: 'Cranial Structure', si: 'කපාල ව්‍යුහය', ta: 'மண்டையோட்டு அமைப்பு' },
    description: { 
      en: 'From flat/primitive to expanded/derived cranial shape', 
      si: 'පැතලි/මූලික සිට පුළුල්/ව්‍යුත්පන්න දක්වා', 
      ta: 'தட்டையான/ஆதி முதல் விரிவடைந்த/வழிவந்த வரை' 
    },
    lowLabel: { en: 'Flat / Primitive', si: 'පැතලි', ta: 'தட்டையான' },
    highLabel: { en: 'Expanded / Derived', si: 'පුළුල්', ta: 'விரிவடைந்த' },
    icon: 'git-commit',
    gradientFrom: '#11001F',
    gradientTo: '#11001F'
  }
];

const INITIAL_VALUES: Record<TraitKey, number> = {
  dentition: 5,
  orbitVision: 5,
  skullProportions: 5,
  mandible: 5,
  nasalRegion: 5,
  muscleAttachments: 5,
  cranialStructure: 5,
  specialAdaptations: 5
};

export default function SliderExplorer() {
  const { language, t } = useLanguage();
  
  // State
  const [sliderValues, setSliderValues] = useState<Record<TraitKey, number>>(INITIAL_VALUES);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [recentlyAdjusted, setRecentlyAdjusted] = useState<Set<TraitKey>>(new Set());
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  // Derived state: calculate probabilities whenever sliders change
  const matches = useMemo(() => {
    return calculateProbabilities(sliderValues, ANIMALS_DATABASE);
  }, [sliderValues]);

  // Handlers
  const handleSliderChange = (trait: TraitKey, newValue: number) => {
    // 1. Enforce constraints
    const { newValues, notifications: newNotifs } = enforceConstraints(trait, newValue, sliderValues, language);
    
    // 2. Update slider values
    setSliderValues(newValues);
    
    // 3. Handle notifications
    if (newNotifs.length > 0) {
      setNotifications(prev => [...prev, ...newNotifs]);
      
      // Track recently adjusted traits for visual highlight
      const adjustedTraits = new Set(newNotifs.map(n => n.traitAdjusted));
      setRecentlyAdjusted(adjustedTraits);
      
      // Clear highlight after 2 seconds
      setTimeout(() => {
        setRecentlyAdjusted(new Set());
      }, 2000);
    }
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex flex-col lg:flex-row gap-6 p-4">
      
      {/* Toast Layer */}
      <ConstraintNotification 
        notifications={notifications} 
        onDismiss={handleDismissNotification} 
      />

      {/* Main Sliders Area */}
      <div className="flex-1 glass-panel rounded-2xl p-6 overflow-y-auto custom-scrollbar flex flex-col min-h-[500px] lg:min-h-0">
        
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[var(--color-primary)]/10">
          <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
            <Settings2 className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[var(--color-primary)]">
              {t('Trait Explorer', 'ලක්ෂණ ගවේෂකය', 'பண்பு ஆராய்ச்சியாளர்')}
            </h1>
            <p className="text-sm text-[var(--color-primary)]/70">
              {t('Adjust sliders to find matching mammals in real-time.', 'සජීවීව ක්ෂීරපායින් සොයා ගැනීමට ස්ලයිඩර සකසන්න.', 'நேரலையில் பாலூட்டிகளைக் கண்டறிய ஸ்லைடர்களைச் சரிசெய்யவும்.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {TRAIT_METADATA.map((meta) => (
            <TraitSlider
              key={meta.key}
              meta={meta}
              value={sliderValues[meta.key]}
              language={language}
              onChange={(val) => handleSliderChange(meta.key, val)}
              recentlyAutoAdjusted={recentlyAdjusted.has(meta.key)}
            />
          ))}
        </div>

        <div className="mt-6 p-4 bg-[var(--color-secondary)]/50 border border-[var(--color-primary)]/10 rounded-xl">
          <p className="text-sm text-[var(--color-primary)]/80 text-center">
            <strong>{t('Pro Tip: ', 'ඉඟිය: ', 'குறிப்பு: ')}</strong>
            {t(
              'Biological constraints are enforced automatically. If you set Teeth Sharpness to maximum, Diet will auto-adjust to Carnivore!',
              'ජීව විද්‍යාත්මක සීමාවන් ස්වයංක්‍රීයව ක්‍රියාත්මක වේ. ඔබ දත්වල තියුණු බව උපරිමයට සැකසුවහොත්, ආහාරය ස්වයංක්‍රීයව මාංශ භක්ෂක ලෙස වෙනස් වේ!',
              'உயிரியல் கட்டுப்பாடுகள் தானாகவே செயல்படுத்தப்படுகின்றன. பற்களின் கூர்மையை அதிகபட்சமாக அமைத்தால், உணவு தானாகவே ஊனுண்ணியாக மாறும்!'
            )}
          </p>
        </div>

      </div>

      {/* Right Sidebar - Live Matches */}
      <div className="w-full lg:w-96 flex-shrink-0 animate-slide-in-right">
        <AnimalProbabilityPanel 
          matches={matches} 
          onSelectAnimal={setSelectedAnimal} 
        />
      </div>

      {/* Detail Modal Overlay */}
      {selectedAnimal && (
        <AnimalDetailModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

    </div>
  );
}
