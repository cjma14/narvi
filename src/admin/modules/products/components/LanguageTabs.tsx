/**
 * LanguageTabs Component
 * Tabs para cambiar entre español e inglés
 */

interface LanguageTabsProps {
  currentLang: 'es' | 'en';
  onChangeLang: (lang: 'es' | 'en') => void;
}

export default function LanguageTabs({ currentLang, onChangeLang }: LanguageTabsProps) {
  return (
    <div className="flex gap-2 mb-6 border-b">
      <button
        type="button"
        onClick={() => onChangeLang('es')}
        className={`px-4 py-2 font-medium transition-colors ${
          currentLang === 'es'
            ? 'text-admin-secondary border-b-2 border-admin-secondary'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        🇪🇸 Español
      </button>
      <button
        type="button"
        onClick={() => onChangeLang('en')}
        className={`px-4 py-2 font-medium transition-colors ${
          currentLang === 'en'
            ? 'text-admin-secondary border-b-2 border-admin-secondary'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        🇺🇸 English
      </button>
    </div>
  );
}
