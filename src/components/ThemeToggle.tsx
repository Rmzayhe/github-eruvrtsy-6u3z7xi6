import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-200 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-500" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggle;