import { Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageToggle = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe className="h-5 w-5 text-primary-500" />
      <span className="text-sm font-medium">{t('nav.language')}</span>
    </button>
  );
};

export default LanguageToggle;