import { Link } from 'react-router-dom';
import { 
  Bars3Icon, 
  SunIcon, 
  MoonIcon, 
  LanguageIcon 
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = ({ onMenuClick }) => {
  const { isDark, setIsDark } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
      <div className="h-full px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-gray-900 dark:text-white">
          Studio Name
        </Link>
        
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="flex items-center">
              <LanguageIcon className="h-5 w-5 text-gray-900 dark:text-white" />
              <span className="ml-1 text-sm font-medium text-gray-900 dark:text-white">
                {language.toUpperCase()}
              </span>
            </div>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <SunIcon className="h-5 w-5 text-gray-900 dark:text-white" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-900 dark:text-white" />
            )}
          </button>

          {/* Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 