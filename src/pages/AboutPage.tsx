import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Globe, MapPin } from 'lucide-react';

const AboutPage = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = `${t('nav.about')} | ${t('app.name')}`;
  }, [language, t]);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-16 text-center text-white">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6">
              <img 
                src="/Untitled-1 copy.svg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('about.specialization')}
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Established Company</h3>
              <p className="text-gray-600">Licensed and registered immigration consultancy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced immigration professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Strong partnerships worldwide</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">Services across multiple countries</p>
            </motion.div>
          </div>

          {/* Company Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-primary-500">Company Registration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('about.registration')}</h3>
                <p className="text-gray-700 mb-2">SOKRAT YMC IMMIGRATION AND CONSULTANCY</p>
                <p className="text-gray-700">{t('about.reg.number')}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('about.employment')}</h3>
                <p className="text-gray-700 mb-2">SOKRAT YMC Overseas Employment Services</p>
                <p className="text-gray-700">{t('about.employment.number')}</p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary-500">Our Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Morocco Office</h3>
                  <p className="text-gray-700">
                    Bayti Sakan 1 Azzouzia Marakech Morocco
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/BrrSfA9oCUDD8A1w5?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 mt-2 inline-block"
                  >
                    View on Map
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Georgia Office</h3>
                  <p className="text-gray-700">
                    Georgia, Tbilisi, Shandor Pettef Street, N 42, Floor 3, Block N3
                  </p>
                </div>
              </div>

              {/* Estonia Office - Coming Soon */}
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Estonia Office</h3>
                  <p className="text-gray-500 italic">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
