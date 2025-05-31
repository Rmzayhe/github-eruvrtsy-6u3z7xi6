import { createContext, useState, useCallback, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  dir: 'ltr',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');
  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Basic translations
const translations = {
  en: {
    // General
    'app.name': 'SOKRAT YMC',
    'app.tagline': 'Your Gateway to Global Opportunities',
    
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.countries': 'Destinations',
    'nav.contact': 'Contact',
    'nav.language': 'العربية',
    
    // Home
    'home.hero.title': 'Your Journey to a New Life Starts Here',
    'home.hero.subtitle': 'Professional Immigration Services for Your Future',
    'home.hero.cta': 'Explore Opportunities',
    'home.countries.title': 'Popular Destinations',
    'home.countries.subtitle': 'Discover Immigration Opportunities Worldwide',
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Comprehensive Immigration Solutions',
    'home.contact.title': 'Contact Us',
    'home.contact.subtitle': 'Get in Touch with Our Expert Team',

    // About
    'about.title': 'About Sokrat YMC Immigration and Consultancy',
    'about.subtitle': 'Your Trusted Partner for Migration, Employment, and Visa Services',
    'about.description': 'Sokrat YMC Immigration and Consultancy is your trusted partner for migration, employment, and visa appointment services.',
    'about.specialization': 'We specialize in Canadian migration, profile preparation, and work permits in European countries. We also assist with tourist visa applications.',
    'about.expertise': 'Migration and recruitment to Europe and Canada is our expertise. Your success is our mission—you\'re in the right hands to achieve your goals.',
    'about.registration': 'Business Registration',
    'about.reg.number': 'Reg. No. 0033513150000072',
    'about.employment': 'Overseas Employment Services',
    'about.employment.number': 'DTI Reg. No. 6925603',
    'about.recruitment': 'Our services include recruitment and manpower supply for Lithuania, Albania, Czech Republic, Poland, Slovakia, Romania, Croatia, Hungary, Norway, and other Schengen countries. We have successfully placed temporary foreign workers across Europe and connected candidates with employers in Canada.',
    
    // Countries
    'country.programs': 'Immigration Programs',
    'country.requirements': 'Requirements',
    'country.benefits': 'Benefits',
    'country.timeline': 'Process Timeline',
    'country.contact': 'Contact for More Information',
    
    // Services
    'services.consultation': 'Consultation',
    'services.visa': 'Visa Application',
    'services.documentation': 'Documentation',
    'services.legal': 'Legal Support',
    'services.settlement': 'Settlement Services',
    'services.employment': 'Employment Assistance',
    'services.education': 'Education Guidance',
    'services.citizenship': 'Citizenship Applications',
    
    // Contact
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.offices': 'Our Offices',
    'contact.canada': 'Canada Office',
    'contact.uae': 'UAE Office',
    'contact.morocco': 'Morocco Office',
    'contact.georgia': 'Georgia Office',
    'contact.form.destination': 'Preferred Destination',
    'contact.form.destination.placeholder': 'Select a destination',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
  ar: {
    // General
    'app.name': 'سقراط واي إم سي',
    'app.tagline': 'بوابتك للفرص العالمية',
    
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.countries': 'الوجهات',
    'nav.contact': 'اتصل بنا',
    'nav.language': 'English',
    
    // Home
    'home.hero.title': 'رحلتك نحو حياة جديدة تبدأ من هنا',
    'home.hero.subtitle': 'خدمات هجرة احترافية لمستقبلك',
    'home.hero.cta': 'اكتشف الفرص',
    'home.countries.title': 'الوجهات الشائعة',
    'home.countries.subtitle': 'اكتشف فرص الهجرة حول العالم',
    'home.services.title': 'خدماتنا',
    'home.services.subtitle': 'حلول هجرة شاملة',
    'home.contact.title': 'اتصل بنا',
    'home.contact.subtitle': 'تواصل مع فريقنا المتخصص',

    // About
    'about.title': 'عن سقراط واي إم سي للهجرة والاستشارات',
    'about.subtitle': 'شريكك الموثوق للهجرة والتوظيف وخدمات التأشيرات',
    'about.description': 'سقراط واي إم سي للهجرة والاستشارات هي شريكك الموثوق لخدمات الهجرة والتوظيف ومواعيد التأشيرات.',
    'about.specialization': 'نحن متخصصون في الهجرة الكندية، وإعداد الملفات، وتصاريح العمل في الدول الأوروبية. كما نساعد في طلبات تأشيرات السياحة.',
    'about.expertise': 'الهجرة والتوظيف إلى أوروبا وكندا هو تخصصنا. نجاحك هو مهمتنا - أنت في الأيدي الصحيحة لتحقيق أهدافك.',
    'about.registration': 'السجل التجاري',
    'about.reg.number': 'رقم التسجيل 0033513150000072',
    'about.employment': 'خدمات التوظيف الخارجي',
    'about.employment.number': 'رقم التسجيل DTI 6925603',
    'about.recruitment': 'تشمل خدماتنا التوظيف وتوريد القوى العاملة لليتوانيا وألبانيا وجمهورية التشيك وبولندا وسلوفاكيا ورومانيا وكرواتيا والمجر والنرويج ودول شنغن الأخرى. لقد نجحنا في توظيف عمال أجانب مؤقتين في جميع أنحاء أوروبا وربط المرشحين بأصحاب العمل في كندا.',
    
    // Countries
    'country.programs': 'برامج الهجرة',
    'country.requirements': 'المتطلبات',
    'country.benefits': 'المزايا',
    'country.timeline': 'الجدول الزمني للعملية',
    'country.contact': 'اتصل للحصول على مزيد من المعلومات',
    
    // Services
    'services.consultation': 'استشارات',
    'services.visa': 'تقديم طلبات التأشيرة',
    'services.documentation': 'التوثيق',
    'services.legal': 'الدعم القانوني',
    'services.settlement': 'خدمات الاستقرار',
    'services.employment': 'المساعدة في التوظيف',
    'services.education': 'التوجيه التعليمي',
    'services.citizenship': 'طلبات الجنسية',
    
    // Contact
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.offices': 'مكاتبنا',
    'contact.canada': 'مكتب كندا',
    'contact.uae': 'مكتب الإمارات',
    'contact.morocco': 'مكتب المغرب',
    'contact.georgia': 'مكتب جورجيا',
    'contact.form.destination': 'الوجهة المفضلة',
    'contact.form.destination.placeholder': 'اختر وجهة',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
  },
};