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
        onClick={() => onChangeLang('en')}
        className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
          currentLang === 'en'
            ? 'text-admin-secondary border-b-2 border-admin-secondary'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7410 3900" className="w-5 h-4">
          <rect width="7410" height="3900" fill="#b22234"/>
          <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
          <rect width="2964" height="2100" fill="#3c3b6e"/>
        </svg>
        English
      </button>
      <button
        type="button"
        onClick={() => onChangeLang('es')}
        className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${
          currentLang === 'es'
            ? 'text-admin-secondary border-b-2 border-admin-secondary'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="w-5 h-4">
          <rect width="750" height="500" fill="#c60b1e"/>
          <rect width="750" height="250" y="125" fill="#ffc400"/>
        </svg>
        Español
      </button>
     
    </div>
  );
}
