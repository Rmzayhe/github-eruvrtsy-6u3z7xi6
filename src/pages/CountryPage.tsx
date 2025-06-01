import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Flag, Clock, Award, X } from 'lucide-react';
import { getCountryById } from '../data/countries';

const romaniaWorkImages = [
  'https://i.ibb.co/XrHxXB6S/Jobs-20250421-115827-0000.webp',
  'https://i.ibb.co/KxW1G5Ng/Jobs-20250421-115827-0002.webp',
  'https://i.ibb.co/jvPsvzYh/Jobs-20250421-115827-0004.webp',
  'https://i.ibb.co/mVGcr1CX/Jobs-20250421-115827-0005.webp',
];

const CountryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const country = getCountryById(id || '');

  // State for lightbox (image zoom)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox
  const closeLightbox = () => setLightboxIndex(null);

  // Navigate images in lightbox
  const goNext = () => {
    if (lightboxIndex === null) return;
    if (id === 'romania') {
      setLightboxIndex((lightboxIndex + 1) % romaniaWorkImages.length);
    } else if (country?.programs?.length) {
      // fallback: do nothing
    }
  };
  const goPrev = () => {
    if (lightboxIndex === null) return;
    if (id === 'romania') {
      setLightboxIndex((lightboxIndex - 1 + romaniaWorkImages.length) % romaniaWorkImages.length);
    }
  };

  // Modified renderImages for Romania with horizontal scroll + zoom
  const renderImages = (images?: { work?: string[]; tourism?: string[] }) => {
    if (!images) return null;

    // If Romania, override work images with provided links & horizontal layout
    if (id === 'romania') {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-600 mb-4">
            {language === 'en' ? 'Work Opportunities' : 'فرص العمل'}
          </h3>
          <div className="relative">
            <motion.div
              className="flex space-x-4 overflow-x-auto py-2 px-1"
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              dragElastic={0.2}
              style={{ cursor: 'grab' }}
            >
              {romaniaWorkImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-40 h-24 rounded-lg overflow-hidden shadow-lg cursor-pointer border border-gray-200 hover:shadow-xl transition-shadow"
                  onClick={() => setLightboxIndex(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={img}
                    alt={`Work environment ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Lightbox */}
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                <motion.img
                  key={romaniaWorkImages[lightboxIndex]}
                  src={romaniaWorkImages[lightboxIndex]}
                  alt={`Zoomed work environment ${lightboxIndex + 1}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="max-w-full max-h-full rounded-md shadow-2xl select-none"
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
                  aria-label="Next image"
                >
                  ›
                </button>
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white text-3xl p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
                  aria-label="Close lightbox"
                >
                  <X />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* If tourism images exist, render them normally as before */}
          {images.tourism && (
            <div className="space-y-6 mt-12">
              <h3 className="text-xl font-semibold text-primary-600">
                {language === 'en' ? 'Tourism & Lifestyle' : 'السياحة ونمط الحياة'}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {images.tourism.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`Tourism highlight ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    // Default rendering for other countries
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.work && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-600">
              {language === 'en' ? 'Work Opportunities' : 'فرص العمل'}
            </h3>
            <div className="grid gap-4">
              {images.work.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Work environment ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {images.tourism && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-600">
              {language === 'en' ? 'Tourism & Lifestyle' : 'السياحة ونمط الحياة'}
            </h3>
            <div className="grid gap-4">
              {images.tourism.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Tourism highlight ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    if (!country) {
      navigate('/');
      return;
    }

    document.title = `${language === 'en' ? country.name : country.nameAr} | ${t('app.name')}`;
  }, [country, navigate, language, t]);

  if (!country) {
    return null;
  }

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
    <div className="pt-24">
      {/* Country Header */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${country.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70">
          <div className="container-custom h-full flex flex-col justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-white mb-4 hover:text-accent-500 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              {t('nav.home')}
            </button>
            <div className="flex items-center">
              <img
                src={country.flagUrl}
                alt={`${country.name} flag`}
                className="w-16 h-16 rounded-full border-2 border-white shadow-lg mr-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {language === 'en' ? country.name : country.nameAr}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Program Images */}
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          {country.programs.map((program) => (
            <div key={program.id} className="mb-12 last:mb-0">
              {renderImages(program.images)}
            </div>
          ))}
        </div>
      </div>

      {/* Country Description */}
      <div className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              {language === 'en' ? country.description : country.descriptionAr}
            </p>
          </div>
        </div>
      </div>

      {/* Immigration Programs */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="section-title mb-12">{t('country.programs')}</h2>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {country.programs.map((program) => (
              <motion.div
                key={program.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                variants={itemVariants}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-600">
                    {language === 'en' ? program.title : program.titleAr}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {language === 'en' ? program.description : program.descriptionAr}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Requirements */}
                    <div>
                      <h4 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
                        <CheckCircle className="h-5 w-5 mr-2 text-primary-500" />
                        {t('country.requirements')}
                      </h4>
                      <ul className="space-y-3">
                        {(language === 'en' ? program.requirements : program.requirementsAr).map(
                          (requirement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span className="text-gray-700">{requirement}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="flex items-center text-lg font-semibold mb-4 text-gray-800">
                        <Award className="h-5 w-5 mr-2 text-primary-500" />
                        {t('country.benefits')}
                      </h4>
                      <ul className="space-y-3">
                        {(language === 'en' ? program.benefits : program.benefitsAr).map(
                          (benefit, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary-500 mr-2">•</span>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h4 className="flex items-center text-lg font-semibold mb-2 text-gray-800">
                      <Clock className="h-5 w-5 mr-2 text-primary-500" />
                      {t('country.timeline')}
                    </h4>
                    <p className="text-gray-700">
                      {language === 'en' ? program.timeline : program.timelineAr}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <div className="mt-16 bg-primary-500 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">{t('country.contact')}</h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              {language === 'en'
                ? `Our immigration experts can guide you through the ${country.name} immigration process and help you choose the right program for your needs.`
                : `يمكن لخبراء الهجرة لدينا إرشادك خلال عملية الهجرة إلى ${country.nameAr} ومساعدتك في اختيار البرنامج المناسب لاحتياجاتك.`}
            </p>
            <a href="/contact" className="btn bg-white text-primary-600 hover:bg-accent-500 hover:text-white">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;