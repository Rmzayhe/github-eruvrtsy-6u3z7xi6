import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CountryCard from '../components/CountryCard';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { countries } from '../data/countries';
import { services } from '../data/services';

const Home = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = `${t('app.name')} | ${t('app.tagline')}`;
  }, [language, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <HeroSection />

      <section id="countries" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
              {t('home.countries.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.countries.subtitle')}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {countries.map((country) => (
              <motion.div key={country.id} variants={itemVariants}>
                <CountryCard
                  id={country.id}
                  name={language === 'en' ? country.name : country.nameAr}
                  flagUrl={country.flagUrl}
                  imageUrl={country.imageUrl}
                  description={language === 'en' ? country.description : country.descriptionAr}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard
                  title={language === 'en' ? service.title : service.titleAr}
                  description={language === 'en' ? service.description : service.descriptionAr}
                  icon={<service.icon className="h-12 w-12" />}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
              {t('home.contact.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;