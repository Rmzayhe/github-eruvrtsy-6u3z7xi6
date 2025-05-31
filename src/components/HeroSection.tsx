import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dynamic background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="container-custom h-full flex items-center relative z-10">
        <div className="pt-20 md:pt-0 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#countries"
                className="btn bg-white text-primary-600 hover:bg-accent-500 hover:text-white"
              >
                {t('home.hero.cta')}
              </a>
              <Link
                to="/contact"
                className="btn bg-secondary-500 text-white hover:bg-secondary-600"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;