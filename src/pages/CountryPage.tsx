import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // لو تستخدم روتنغ
import { countries, getCountryById, Program } from '../data/countries'; // عدل المسار حسب مشروعك
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface SliderProps {
  images: string[];
}

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="slider-container" style={{ position: 'relative', overflow: 'hidden', width: '100%', maxWidth: 600, margin: 'auto' }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          alt={`Slide ${imageIndex + 1}`}
          style={{ width: '100%', borderRadius: 10 }}
          draggable={false}
        />
      </AnimatePresence>
      <button
        onClick={() => paginate(-1)}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          padding: 8,
          cursor: 'pointer',
        }}
        aria-label="Previous Image"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.7)',
          border: 'none',
          borderRadius: '50%',
          padding: 8,
          cursor: 'pointer',
        }}
        aria-label="Next Image"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

const CountryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const country = getCountryById(id || '');

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: 'auto' }}>
      <h1>{country.name}</h1>
      <img
        src={country.flagUrl}
        alt={`${country.name} flag`}
        style={{ width: 80, height: 'auto', marginBottom: 20 }}
      />
      <p>{country.description}</p>

      {country.programs.map((program) => (
        <section key={program.id} style={{ marginTop: 40 }}>
          <h2>{program.title}</h2>
          <p>{program.description}</p>

          {/* عرض صور العمل إن وجدت */}
          {program.images.work && program.images.work.length > 0 && (
            <>
              <h3>Work Images</h3>
              <ImageSlider images={program.images.work} />
            </>
          )}

          {/* عرض صور السياحة إن وجدت */}
          {program.images.tourism && program.images.tourism.length > 0 && (
            <>
              <h3>Tourism Images</h3>
              <ImageSlider images={program.images.tourism} />
            </>
          )}
        </section>
      ))}
    </div>
  );
};

export default CountryPage;