import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { countries } from '../data/countries';

const phoneCountryCodes = [
  { code: '+1', flag: '🇨🇦', label: 'Canada', name: 'Canada (+1)' },
  { code: '+356', flag: '🇲🇹', label: 'Malta', name: 'Malta (+356)' },
  { code: '+212', flag: '🇲🇦', label: 'Morocco', name: 'Morocco (+212)' },
  { code: '+995', flag: '🇬🇪', label: 'Georgia', name: 'Georgia (+995)' },
  { code: '+971', flag: '🇦🇪', label: 'UAE', name: 'UAE (+971)' },
  { code: '+370', flag: '🇱🇹', label: 'Lithuania', name: 'Lithuania (+370)' },
  { code: '+355', flag: '🇦🇱', label: 'Albania', name: 'Albania (+355)' },
  { code: '+420', flag: '🇨🇿', label: 'Czech Republic', name: 'Czech Republic (+420)' },
  { code: '+48', flag: '🇵🇱', label: 'Poland', name: 'Poland (+48)' },
  { code: '+421', flag: '🇸🇰', label: 'Slovakia', name: 'Slovakia (+421)' },
  { code: '+40', flag: '🇷🇴', label: 'Romania', name: 'Romania (+40)' },
  { code: '+385', flag: '🇭🇷', label: 'Croatia', name: 'Croatia (+385)' },
  { code: '+36', flag: '🇭🇺', label: 'Hungary', name: 'Hungary (+36)' },
  { code: '+47', flag: '🇳🇴', label: 'Norway', name: 'Norway (+47)' },
  { code: '+61', flag: '🇦🇺', label: 'Australia', name: 'Australia (+61)' },
];

const ContactForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: phoneCountryCodes[0].code,
    phoneNumber: '',
    destination: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        to_email: 'sokrat.immigration@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: `${formData.phoneCode}${formData.phoneNumber}`,
        destination: formData.destination,
        message: formData.message,
      };

      await emailjs.send(
        'service_mh3cwko',
        'template_ipy4llm',
        templateParams,
        'PTWx-kFu_7HVl_Kja'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phoneCode: phoneCountryCodes[0].code,
        phoneNumber: '',
        destination: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
          {language === 'en' 
            ? 'Thank you for your message. We will contact you soon!'
            : 'شكراً لرسالتك. سنتواصل معك قريباً!'}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
          {language === 'en'
            ? 'Sorry, there was an error sending your message. Please try again or contact us directly.'
            : 'عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('contact.form.phone')}
        </label>
        <div className="flex gap-2">
          <select
            name="phoneCode"
            value={formData.phoneCode}
            onChange={handleChange}
            className="w-52 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white appearance-none bg-no-repeat bg-right pr-8"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "1.5em 1.5em"
            }}
          >
            {phoneCountryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder={language === 'en' ? 'Phone number' : 'رقم الهاتف'}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="destination" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('contact.form.destination')}
        </label>
        <select
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="">
            {language === 'en' ? 'Select a destination' : 'اختر وجهة'}
          </option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {language === 'en' ? country.name : country.nameAr}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full flex items-center justify-center ${
          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        <Send className="h-5 w-5 mr-2" />
        {isSubmitting 
          ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
          : t('contact.form.submit')}
      </button>
    </form>
  );
};

export default ContactForm;