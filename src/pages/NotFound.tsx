import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Home } from 'lucide-react';

const NotFound = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-500">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-6 text-gray-800">
          {language === 'en' ? 'Page Not Found' : 'الصفحة غير موجودة'}
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          {language === 'en' 
            ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
            : 'الصفحة التي تبحث عنها ربما تمت إزالتها، أو تغير اسمها، أو غير متوفرة مؤقتًا.'}
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="mr-2 h-5 w-5" />
          {t('nav.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;