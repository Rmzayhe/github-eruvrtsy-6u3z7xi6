import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-white shadow-md overflow-hidden">
                <img src="/Untitled-1 copy.svg" alt="SOKRAT YMC" className="w-full h-full object-cover" />
              </div>
            </Link>
            <p className="text-white/80 mb-6">
              {t('app.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('nav.home')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/#countries" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.countries')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('services.consultation')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('services.visa')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('services.documentation')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  {t('services.employment')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    <span className="block font-medium text-white">🇨🇦 Number Canada</span>
                    +1 438 462 2027
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    <span className="block font-medium text-white">🇦🇪 Number UAE</span>
                    +971 52 464 6007
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    <span className="block font-medium text-white">🇬🇪 Office Georgia</span>
                    +995 591 234 567
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">
                    <span className="block font-medium text-white">🇲🇹 Number Malta</span>
                    +356 777 40704
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:sokrat.immigration@gmail.com" className="text-white/80 hover:text-white">
                  sokrat.immigration@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SOKRAT YMC. {t('footer.rights')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/80 hover:text-white text-sm">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-white/80 hover:text-white text-sm">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;