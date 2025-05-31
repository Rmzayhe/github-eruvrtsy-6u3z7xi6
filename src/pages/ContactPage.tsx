import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import { MapPin, Clock, Mail } from 'lucide-react';

const ContactPage = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = `${t('nav.contact')} | ${t('app.name')}`;
  }, [language, t]);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-16 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('home.contact.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('home.contact.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-primary-500">
                {language === 'en' ? 'Send Us a Message' : 'أرسل لنا رسالة'}
              </h2>
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-primary-500">
                {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
              </h2>
              <ContactInfo />
              
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-primary-500">
                  {language === 'en' ? 'Office Hours' : 'ساعات العمل'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{language === 'en' ? 'Monday - Friday' : 'الاثنين - الجمعة'}</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{language === 'en' ? 'Saturday' : 'السبت'}</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">{language === 'en' ? 'Sunday' : 'الأحد'}</p>
                      <p className="text-gray-600">{language === 'en' ? 'Closed' : 'مغلق'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="section-title mb-12">
              {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {language === 'en' ? 'What services do you offer?' : 'ما هي الخدمات التي تقدمونها؟'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'We offer comprehensive immigration services including consultation, visa application assistance, documentation support, and guidance throughout the entire immigration process.'
                    : 'نقدم خدمات هجرة شاملة تشمل الاستشارات، والمساعدة في طلبات التأشيرة، ودعم الوثائق، والتوجيه طوال عملية الهجرة بأكملها.'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {language === 'en' ? 'How long does the immigration process take?' : 'كم من الوقت تستغرق عملية الهجرة؟'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'The timeline varies depending on the country and program. Some processes may take a few months, while others can take a year or more. We provide estimated timelines for each program during consultation.'
                    : 'تختلف المدة الزمنية حسب البلد والبرنامج. قد تستغرق بعض العمليات بضعة أشهر، بينما قد تستغرق عمليات أخرى عامًا أو أكثر. نقدم جداول زمنية تقديرية لكل برنامج خلال الاستشارة.'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {language === 'en' ? 'Do you guarantee visa approval?' : 'هل تضمنون الموافقة على التأشيرة؟'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'No immigration consultant can guarantee visa approval as the final decision rests with immigration authorities. However, we maximize your chances by ensuring proper documentation and compliance with all requirements.'
                    : 'لا يمكن لأي مستشار هجرة ضمان الموافقة على التأشيرة حيث يعود القرار النهائي إلى سلطات الهجرة. ومع ذلك، نقوم بزيادة فرصك من خلال ضمان التوثيق المناسب والامتثال لجميع المتطلبات.'}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">
                  {language === 'en' ? 'What documents are typically required?' : 'ما هي المستندات المطلوبة عادة؟'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en' 
                    ? 'Common documents include passports, education credentials, work experience certificates, language test results, and proof of funds. Specific requirements vary by program and country.'
                    : 'تشمل المستندات الشائعة جوازات السفر، والشهادات التعليمية، وشهادات خبرة العمل، ونتائج اختبار اللغة، وإثبات الأموال. تختلف المتطلبات المحددة حسب البرنامج والبلد.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;