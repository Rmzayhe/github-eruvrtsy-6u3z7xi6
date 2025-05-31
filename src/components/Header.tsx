import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Globe } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Add scroll listener for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-14 h-14 rounded-full border-2 border-primary-500 shadow-md overflow-hidden">
              <img src="/Untitled-1 copy copy.svg" alt="SOKRAT YMC" className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/about' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/services' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/#countries"
              className="font-medium text-gray-700 transition-colors hover:text-primary-500"
            >
              {t('nav.countries')}
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary-500 ${
                location.pathname === '/contact' ? 'text-primary-500' : 'text-gray-700'
              }`}
            >
              {t('nav.contact')}
            </Link>
            <LanguageToggle />
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center md:hidden space-x-4">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium py-2 text-gray-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/about"
                className="font-medium py-2 text-gray-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/services"
                className="font-medium py-2 text-gray-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link
                to="/#countries"
                className="font-medium py-2 text-gray-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.countries')}
              </Link>
              <Link
                to="/contact"
                className="font-medium py-2 text-gray-700 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;