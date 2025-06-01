import React, { useState } from 'react';
import Slider from 'react-slick';
import { countries } from './countries'; // استورد بيانات الدول من ملف خارجي
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CountersPage: React.FC = () => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [zoomedImageIndex, setZoomedImageIndex] = useState<number | null>(null);

  const country = countries[selectedCountryIndex];

  // إعدادات السلايدر العادية لجميع الدول
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };

  // إعدادات السلايدر لدولة رومانيا فقط (نفس الإعدادات مع دعم السحب)
  // في الواقع react-slick يدعم السحب بشكل افتراضي، لذا لا حاجة لتعديل خاص للسحب

  // دالة لتفعيل التكبير عند الضغط على الصورة (رومانيا فقط)
  const handleImageClick = (index: number) => {
    if (country.code === 'ro') { // كود رومانيا هو 'ro'
      setZoomedImageIndex(index === zoomedImageIndex ? null : index);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '30px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30 }}>معرض صور الدول</h1>

      {/* قائمة الدول للتنقل */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
        {countries.map((c, i) => (
          <button
            key={c.code}
            onClick={() => {
              setSelectedCountryIndex(i);
              setZoomedImageIndex(null); // إلغاء التكبير عند تغيير الدولة
            }}
            style={{
              margin: '5px',
              padding: '10px 15px',
              cursor: 'pointer',
              borderRadius: 5,
              border: selectedCountryIndex === i ? '2px solid #007bff' : '1px solid #ccc',
              backgroundColor: selectedCountryIndex === i ? '#e7f1ff' : '#fff',
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* عرض اسم الدولة */}
      <h2 style={{ textAlign: 'center' }}>{country.name}</h2>

      {/* عرض صور الدولة مع السلايدر */}
      <Slider {...sliderSettings}>
        {country.images.map((imgUrl, idx) => {
          const isZoomed = zoomedImageIndex === idx;

          return (
            <div key={idx} style={{ position: 'relative' }}>
              <img
                src={imgUrl}
                alt={`${country.name} - صورة ${idx + 1}`}
                style={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 10,
                  cursor: country.code === 'ro' ? 'zoom-in' : 'default',
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                  zIndex: isZoomed ? 1000 : 'auto',
                  position: isZoomed ? 'relative' : 'static',
                }}
                onClick={() => handleImageClick(idx)}
              />
              {isZoomed && (
                <div
                  onClick={() => setZoomedImageIndex(null)}
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    cursor: 'zoom-out',
                    zIndex: 999,
                  }}
                />
              )}
            </div>
          );
        })}
      </Slider>

      <p style={{ marginTop: 20, textAlign: 'center', color: '#444' }}>
        {country.description}
      </p>
    </div>
  );
};

export default CountersPage;