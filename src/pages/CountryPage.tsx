import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getCountryById } from '../data/countries';
import { useLanguage } from '../hooks/useLanguage';

// صور رومانيا فقط
const romaniaWorkImages = [
  'https://i.ibb.co/XrHxXB6S/Jobs-20250421-115827-0000.webp',
  'https://i.ibb.co/KxW1G5Ng/Jobs-20250421-115827-0002.webp',
  'https://i.ibb.co/jvPsvzYh/Jobs-20250421-115827-0004.webp',
  'https://i.ibb.co/mVGcr1CX/Jobs-20250421-115827-0005.webp',
];

// الوصف الثابت للصور (يُعرض تحت شريط الصور)
const romaniaWorkDescription = {
  en: `Romania offers diverse work environments ranging from modern offices to industrial settings.
Enjoy collaborative teams, training sessions, and a balanced work lifestyle.`,
  ar: `تقدم رومانيا بيئات عمل متنوعة من مكاتب حديثة إلى بيئات صناعية.
استمتع بالعمل الجماعي، جلسات التدريب، ونمط حياة متوازن.`,
};

const CountryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const country = getCountryById(id || '');

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      const dragDistance = contentWidth - containerWidth;
      setMaxDrag(dragDistance > 0 ? dragDistance : 0);
    }
  }, [id]);

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

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    if (id === 'romania') {
      setLightboxIndex((lightboxIndex + 1) % romaniaWorkImages.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    if (id === 'romania') {
      setLightboxIndex((lightboxIndex - 1 + romaniaWorkImages.length) % romaniaWorkImages.length);
    }
  };

  // *** شريط الصور مع السحب ***
  const renderRomaniaImages = () => (
    <div className="space-y-4">
      <motion.div
        ref={containerRef}
        className="flex space-x-4 overflow-hidden cursor-grab py-2 px-1"
        drag="x"
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.15}
      >
        {romaniaWorkImages.map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-48 rounded-lg overflow-hidden shadow-lg cursor-pointer border border-gray-200 hover:shadow-xl transition-shadow"
            onClick={() => setLightboxIndex(idx)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={src}
              alt={`Romania Work Image ${idx + 1}`}
              className="w-full h-28 object-cover"
              loading="lazy"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* وصف نصي ثابت تحت الصور */}
      <p className="text-gray-700 dark:text-gray-300 text-base max-w-3xl mx-auto px-2 text-center whitespace-pre-line">
        {language === 'en' ? romaniaWorkDescription.en : romaniaWorkDescription.ar}
      </p>

      {/* نافذة التكبير */}
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
              alt={`Romania Work Image ${lightboxIndex + 1}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="max-w-full max-h-full rounded-md shadow-2xl select-none"
              onClick={e => e.stopPropagation()}
              draggable={false}
            />
            <button
              onClick={e => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black bg-opacity-40 rounded-full hover:bg-opacity-70 transition"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={e => {
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
    </div>
  );

  const renderDefaultImages = () => {
    if (!country.images) return null;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {country.images.work && (
          <div>
            <h3 className="text-xl font-semibold text-primary-600 mb-4">
              {language === 'en' ? 'Work Opportunities' : 'فرص العمل'}
            </h3>
            <div className="grid gap-4">
              {country.images.work.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Work ${idx + 1}`}
                  className="rounded-lg w-full object-cover h-64"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}

        {country.images.tourism && (
          <div>
            <h3 className="text-xl font-semibold text-primary-600 mb-4">
              {language === 'en' ? 'Tourism & Lifestyle' : 'السياحة ونمط الحياة'}
            </h3>
            <div className="grid gap-4">
              {country.images.tourism.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Tourism ${idx + 1}`}
                  className="rounded-lg w-full object-cover h-64"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-primary-600 hover:underline"
      >
        ← {language === 'en' ? 'Back' : 'عودة'}
      </button>

      <h1 className="text-3xl font-bold mb-6">
        {language === 'en' ? country.name : country.nameAr}
      </h1>

      {id === 'romania' ? renderRomaniaImages() : renderDefaultImages()}
    </motion.div>
  );
};

export default CountryPage;