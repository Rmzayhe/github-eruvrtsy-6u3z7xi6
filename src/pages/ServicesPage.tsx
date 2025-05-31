import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const ServicesPage = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = `${t('nav.services')} | ${t('app.name')}`;
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
    <div className="pt-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-16 text-center text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('home.services.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="py-16">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
                variants={itemVariants}
              >
                <div className="p-8">
                  <div className="bg-primary-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary-600 text-center">
                    {language === 'en' ? service.title : service.titleAr}
                  </h3>
                  <p className="text-gray-700 text-center">
                    {language === 'en' ? service.description : service.descriptionAr}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Process Steps */}
          <div className="mt-20">
            <h2 className="section-title mb-12">
              {language === 'en' ? 'Our Immigration Process' : 'عملية الهجرة لدينا'}
            </h2>
            
            <div className="relative">
              {/* Process line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
              
              <div className="space-y-12 md:space-y-0 relative">
                {/* Step 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                          1
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-600">
                        {language === 'en' ? 'Initial Consultation' : 'الاستشارة الأولية'}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' 
                          ? 'We evaluate your profile, discuss your goals, and identify the most suitable immigration pathways.' 
                          : 'نقوم بتقييم ملفك الشخصي ومناقشة أهدافك وتحديد مسارات الهجرة الأكثر ملاءمة.'}
                      </p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector */}
                  <div className="hidden md:block absolute left-1/2 top-1/4 w-5 h-5 bg-primary-500 rounded-full transform -translate-x-1/2"></div>
                </div>
                
                {/* Step 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                          2
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-600">
                        {language === 'en' ? 'Documentation Preparation' : 'إعداد الوثائق'}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' 
                          ? 'We guide you through collecting and preparing all necessary documents to support your application.' 
                          : 'نرشدك خلال جمع وإعداد جميع المستندات اللازمة لدعم طلبك.'}
                      </p>
                    </motion.div>
                  </div>
                  {/* Circle connector */}
                  <div className="hidden md:block absolute left-1/2 top-1/4 w-5 h-5 bg-primary-500 rounded-full transform -translate-x-1/2"></div>
                </div>
                
                {/* Step 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                          3
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-600">
                        {language === 'en' ? 'Application Submission' : 'تقديم الطلب'}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' 
                          ? 'We prepare and submit your application, ensuring all requirements are met and documentation is complete.' 
                          : 'نقوم بإعداد وتقديم طلبك، مع ضمان استيفاء جميع المتطلبات واكتمال الوثائق.'}
                      </p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector */}
                  <div className="hidden md:block absolute left-1/2 top-1/4 w-5 h-5 bg-primary-500 rounded-full transform -translate-x-1/2"></div>
                </div>
                
                {/* Step 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                          4
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-600">
                        {language === 'en' ? 'Application Monitoring' : 'متابعة الطلب'}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' 
                          ? 'We monitor your application progress and address any additional requirements or requests from immigration authorities.' 
                          : 'نقوم بمراقبة تقدم طلبك ومعالجة أي متطلبات أو طلبات إضافية من سلطات الهجرة.'}
                      </p>
                    </motion.div>
                  </div>
                  {/* Circle connector */}
                  <div className="hidden md:block absolute left-1/2 top-1/4 w-5 h-5 bg-primary-500 rounded-full transform -translate-x-1/2"></div>
                </div>
                
                {/* Step 5 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative">
                  <div className="md:text-right md:pr-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500 text-white text-lg font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                          5
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-primary-600">
                        {language === 'en' ? 'Approval & Settlement Support' : 'الموافقة ودعم الاستقرار'}
                      </h3>
                      <p className="text-gray-700">
                        {language === 'en' 
                          ? 'Upon approval, we provide guidance for relocation and settlement in your new country.' 
                          : 'عند الموافقة، نقدم التوجيه للانتقال والاستقرار في بلدك الجديد.'}
                      </p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Circle connector */}
                  <div className="hidden md:block absolute left-1/2 top-1/4 w-5 h-5 bg-primary-500 rounded-full transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-primary-500 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Ready to Start Your Immigration Journey?' : 'هل أنت مستعد لبدء رحلة الهجرة الخاصة بك؟'}
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              {language === 'en' 
                ? 'Contact our expert team today for a personalized consultation and take the first step towards your new life abroad.'
                : 'اتصل بفريق الخبراء لدينا اليوم للحصول على استشارة مخصصة واتخذ الخطوة الأولى نحو حياتك الجديدة في الخارج.'}
            </p>
            <a 
              href="/contact" 
              className="btn bg-white text-primary-600 hover:bg-accent-500 hover:text-white"
            >
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;