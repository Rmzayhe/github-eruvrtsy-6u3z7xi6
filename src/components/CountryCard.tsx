import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface CountryCardProps {
  id: string;
  name: string;
  flagUrl: string;
  imageUrl: string;
  capitalImageUrl?: string;
  description: string;
}

const CountryCard = ({ id, name, flagUrl, imageUrl, capitalImageUrl, description }: CountryCardProps) => {
  const { t, dir } = useLanguage();
  
  const ArrowIcon = () => (
    dir === 'ltr' ? <ArrowRight className="h-5 w-5" /> : <ArrowRight className="h-5 w-5 transform rotate-180" />
  );

  return (
    <Link to={`/country/${id}`}>
      <motion.div
        className="country-card cursor-pointer h-full"
        whileHover={{ y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="relative overflow-hidden aspect-[16/9]">
          {capitalImageUrl ? (
            <div className="grid grid-cols-2 gap-1 h-full">
              <img 
                src={capitalImageUrl} 
                alt={`${name} capital`} 
                className="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="169"
                decoding="async"
              />
              <img 
                src={imageUrl} 
                alt={name} 
                className="w-full h-full object-cover"
                loading="lazy"
                width="300"
                height="169"
                decoding="async"
              />
            </div>
          ) : (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
              width="600"
              height="338"
              decoding="async"
            />
          )}
          <img 
            src={flagUrl} 
            alt={`${name} flag`} 
            className="country-card-flag"
            loading="lazy"
            width="40"
            height="40"
            decoding="async"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm">{description}</p>
          <div className="flex justify-between items-center">
            <span className="inline-flex items-center text-primary-500 font-medium text-sm">
              <span className="mr-2">{t('country.programs')}</span>
              <ArrowIcon />
            </span>
            <a
              href={`https://wa.me/${getCountryWhatsApp(id)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-500 hover:text-green-600 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Phone className="h-4 w-4 mr-1" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const getCountryWhatsApp = (id: string): string => {
  switch (id) {
    case 'malta':
      return '35677740704';
    case 'canada':
      return '14384622027';
    case 'georgia':
      return '995591234567';
    case 'morocco':
      return '212529337239';
    case 'romania':
      return '40755123456';
    case 'albania':
      return '355691234567';
    case 'western-europe':
    case 'eastern-europe':
    case 'australia':
    default:
      return '14384622027';
  }
};

export default CountryCard;