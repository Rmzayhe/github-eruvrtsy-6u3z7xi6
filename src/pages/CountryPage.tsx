import { useEffect, useState, useRef } from 'react';
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

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Lightbox close
  const closeLightbox = () => setLightboxIndex(null);

  // Navigate lightbox images
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

  // Ref and state for drag constraints (romania images)
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      setMaxDrag(contentWidth - containerWidth > 0 ? contentWidth - containerWidth : 0);
    }
  }, [romaniaWorkImages.length]);

  // Render images with horizontal scroll and zoom for Romania
  const renderImages = (images?: { work?: string[]; tourism?: string[] }) => {
    if (!images) return null;

    if (id === 'romania') {
      return (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-primary-600 mb-4">
            {language === 'en' ? 'Work Opportunities' : 'فرص العمل'}
          </h3>
          <div className="relative">
            <motion.div
              ref={containerRef}
              className="flex space-x-4 overflow-x-hidden py-2 px-1 cursor-grab"
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.2}
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

          {/* Tourism images (if any) */}
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
    visible