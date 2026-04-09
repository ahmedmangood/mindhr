import { create } from 'zustand';

export type Language = 'ar' | 'en';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: () => boolean;
}

export const useLanguage = create<LanguageStore>((set, get) => ({
  language: 'ar',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'ar' ? 'en' : 'ar',
    })),
  isRTL: () => get().language === 'ar',
}));
