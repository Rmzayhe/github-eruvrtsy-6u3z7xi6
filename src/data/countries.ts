import { FileText, Globe, Clock, Award } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  requirements: string[];
  requirementsAr: string[];
  benefits: string[];
  benefitsAr: string[];
  timeline: string;
  timelineAr: string;
  images: {
    work?: string[];
    tourism?: string[];
  };
}

export interface Country {
  id: string;
  name: string;
  nameAr: string;
  flagUrl: string;
  imageUrl: string;
  capitalImageUrl?: string;
  description: string;
  descriptionAr: string;
  programs: Program[];
}

export const countries: Country[] = [
  {
    id: 'malta',
    name: 'Malta Work Opportunities',
    nameAr: 'فرص العمل في مالطا',
    flagUrl: 'https://flagcdn.com/mt.svg',
    imageUrl: 'https://images.pexels.com/photos/4992831/pexels-photo-4992831.jpeg',
    capitalImageUrl: 'https://images.pexels.com/photos/442579/pexels-photo-442579.jpeg',
    description: 'Explore exciting job opportunities in Malta across various sectors.',
    descriptionAr: 'اكتشف فرص عمل مثيرة في مالطا في مختلف القطاعات',
    programs: [
      {
        id: 'malta-jobs',
        title: 'Malta Employment Program',
        titleAr: 'برنامج التوظيف في مالطا',
        description: 'Various job opportunities including positions in hospitality, driving, and service sectors.',
        descriptionAr: 'فرص عمل متنوعة تشمل وظائف في مجالات الضيافة والسياقة وقطاعات الخدمات',
        requirements: [
          'Valid passport',
          'Relevant work experience',
          'Basic English language skills',
          'Clean driving record (for driver positions)'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'خبرة عمل ذات صلة',
          'مهارات أساسية في اللغة الإنجليزية',
          'سجل قيادة نظيف (لوظائف السائقين)'
        ],
        benefits: [
          'Competitive salary',
          'Work permit assistance',
          'Accommodation support',
          'Healthcare coverage',
          'Professional development'
        ],
        benefitsAr: [
          'راتب تنافسي',
          'المساعدة في تصريح العمل',
          'دعم السكن',
          'تغطية الرعاية الصحية',
          'التطوير المهني'
        ],
        timeline: '2-3 months processing time',
        timelineAr: '2-3 أشهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg',
            'https://images.pexels.com/photos/4992831/pexels-photo-4992831.jpeg',
            'https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg',
            'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'romania',
    name: 'Romania Work Opportunities',
    nameAr: 'فرص العمل في رومانيا',
    flagUrl: 'https://flagcdn.com/ro.svg',
    imageUrl: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg',
    capitalImageUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
    description: 'Discover exciting job opportunities in Romania with trusted companies and reputable employers.',
    descriptionAr: 'اكتشف فرص عمل مميزة في رومانيا مع شركات موثوقة وأصحاب عمل ذوي سمعة طيبة',
    programs: [
      {
        id: 'romania-jobs',
        title: 'Romania Employment Program',
        titleAr: 'برنامج التوظيف في رومانيا',
        description: 'Various job opportunities across multiple sectors with trusted Romanian employers.',
        descriptionAr: 'فرص عمل متنوعة في قطاعات متعددة مع أصحاب عمل رومانيين موثوقين',
        requirements: [
          'Valid passport',
          'Clean criminal record',
          'Basic English or Romanian language skills',
          'Relevant work experience',
          'Good health condition'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'سجل جنائي نظيف',
          'مهارات أساسية في اللغة الإنجليزية أو الرومانية',
          'خبرة عمل ذات صلة',
          'حالة صحية جيدة'
        ],
        benefits: [
          'Competitive salary packages',
          'Work permit assistance',
          'Accommodation support',
          'Healthcare coverage',
          'Safe working environment',
          'Professional development opportunities'
        ],
        benefitsAr: [
          'حزم رواتب تنافسية',
          'المساعدة في تصريح العمل',
          'دعم السكن',
          'تغطية الرعاية الصحية',
          'بيئة عمل آمنة',
          'فرص التطوير المهني'
        ],
        timeline: '2-3 months processing time',
        timelineAr: '2-3 أشهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
            'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg',
            'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
            'https://images.pexels.com/photos/7706434/pexels-photo-7706434.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'georgia',
    name: 'Georgia Tourism Program',
    nameAr: 'برنامج جورجيا السياحي',
    flagUrl: 'https://flagcdn.com/ge.svg',
    imageUrl: 'https://images.pexels.com/photos/5273514/pexels-photo-5273514.jpeg',
    description: 'Experience an unforgettable journey with our comprehensive Georgia tourism program.',
    descriptionAr: 'استمتع برحلة لا تُنسى مع خدمات متكاملة ومميزة في جورجيا',
    programs: [
      {
        id: 'georgia-tourism',
        title: '5-Day Georgia Tourism Package',
        titleAr: '✈️ برنامج جورجيا السياحي – 5 أيام أو أكثر 🇬🇪',
        description: 'Comprehensive tourism package with all-inclusive services.',
        descriptionAr: `استمتع برحلة لا تُنسى مع خدمات متكاملة ومميزة:

✅ الاستقبال والتوديع من وإلى المطار
✅ حجوزات فنادق راقية مع وجبة إفطار يومية مفتوحة
✅ جولات سياحية يومية حسب البرنامج
✅ سيارة سياحية خاصة للتنقلات اليومية – خصوصية وراحة تامة لك ولعائلتك أو أصدقائك
✅ سائق محترف طوال فترة الرحلة
✅ خط اتصال مع باقة إنترنت لكل فرد
✅ تأمين سفر دولي شامل
✅ السعر شامل لجميع الضرائب
✈️ تذاكر الطيران حسب نوع العرض
🍽️ وجبات الغداء والعشاء حسب العرض – مع التوصيل إلى أحد المطاعم التركية أو العربية حسب اختياركم

📍 اختر برنامجك الآن وابدأ رحلتك إلى جورجيا بكل راحة وثقة!`,
        requirements: [
          'Valid passport',
          'Travel insurance',
          'Booking confirmation'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'تأمين سفر',
          'تأكيد الحجز'
        ],
        benefits: [
          'Airport transfers',
          'Daily breakfast',
          'Private transportation',
          'Professional driver',
          'Internet package',
          'Travel insurance',
          'All taxes included'
        ],
        benefitsAr: [
          'خدمة التوصيل من وإلى المطار',
          'إفطار يومي',
          'مواصلات خاصة',
          'سائق محترف',
          'باقة إنترنت',
          'تأمين سفر',
          'شامل جميع الضرائب'
        ],
        timeline: '5 days or more, flexible according to your preferences',
        timelineAr: '5 أيام أو أكثر، مرنة حسب تفضيلاتك',
        images: {
          tourism: [
            'https://images.pexels.com/photos/5273514/pexels-photo-5273514.jpeg',
            'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
            'https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg',
            'https://images.pexels.com/photos/4388293/pexels-photo-4388293.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'albania',
    name: 'Albania Immigration',
    nameAr: 'الهجرة إلى ألبانيا',
    flagUrl: 'https://flagcdn.com/al.svg',
    imageUrl: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg',
    description: 'Explore opportunities in Albania with our comprehensive visa and employment services.',
    descriptionAr: 'اكتشف الفرص في ألبانيا مع خدمات التأشيرات والتوظيف الشاملة لدينا',
    programs: [
      {
        id: 'albania-visa-jobs',
        title: 'Albania Visa & Employment Program',
        titleAr: 'برنامج تأشيرة وعمل ألبانيا',
        description: 'Comprehensive visa and employment services for Albania.',
        descriptionAr: 'هل تفكّر في السفر إلى ألبانيا؟ نحن هنا لمساعدتك في الحصول على تأشيرة ألبانيا بكل سهولة واحترافية، مع فرص عمل حقيقية وتنسيق شامل من البداية حتى الوصول!',
        requirements: [
          'Valid passport',
          'Clean criminal record',
          'Basic English language skills',
          'Professional qualifications'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'سجل جنائي نظيف',
          'مهارات أساسية في اللغة الإنجليزية',
          'مؤهلات مهنية'
        ],
        benefits: [
          'Visa application assistance',
          'Job search support',
          'Documentation preparation',
          'Local support upon arrival'
        ],
        benefitsAr: [
          'المساعدة في طلب التأشيرة',
          'دعم البحث عن عمل',
          'إعداد الوثائق',
          'دعم محلي عند الوصول'
        ],
        timeline: '2-4 weeks processing time',
        timelineAr: '2-4 أسابيع وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
            'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
            'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
            'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'eastern-europe',
    name: 'Eastern Europe',
    nameAr: 'أوروبا الشرقية',
    flagUrl: 'https://flagcdn.com/eu.svg',
    imageUrl: 'https://images.pexels.com/photos/2346216/pexels-photo-2346216.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Discover opportunities in Eastern European countries with growing economies.',
    descriptionAr: 'اكتشف الفرص في دول أوروبا الشرقية ذات الاقتصادات المتنامية',
    programs: [
      {
        id: 'work-residence',
        title: 'Work and Residence Program',
        titleAr: 'برنامج العمل والإقامة',
        description: 'Combined work and residence permits for Eastern European countries.',
        descriptionAr: 'تصاريح عمل وإقامة مجمعة لدول أوروبا الشرقية',
        requirements: [
          'Valid passport',
          'Professional qualifications',
          'Basic language skills',
          'Clean criminal record'
        ],
        requirementsAr: [
          'جواز سفر ساري المفعول',
          'المؤهلات المهنية',
          'مهارات لغوية أساسية',
          'سجل جنائي نظيف'
        ],
        benefits: [
          'Work permit',
          'Residence permit',
          'Healthcare access',
          'Education opportunities'
        ],
        benefitsAr: [
          'تصريح عمل',
          'تصريح إقامة',
          'الوصول إلى الرعاية الصحية',
          'فرص تعليمية'
        ],
        timeline: '2-4 months processing time',
        timelineAr: '2-4 أشهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/2933265/pexels-photo-2933265.jpeg',
            'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
            'https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg',
            'https://images.pexels.com/photos/5910956/pexels-photo-5910956.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'western-europe',
    name: 'Western Europe',
    nameAr: 'أوروبا الغربية',
    flagUrl: 'https://flagcdn.com/eu.svg',
    imageUrl: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Apply for real job opportunities in Western European countries.',
    descriptionAr: 'قدم على فرص عمل حقيقية في دول أوروبا الغربية',
    programs: [
      {
        id: 'western-europe-jobs',
        title: 'Western Europe Employment Program',
        titleAr: 'برنامج التوظيف في أوروبا الغربية',
        description: 'Direct job application service for Western European countries.',
        descriptionAr: 'خدمة التقديم المباشر على وظائف في دول أوروبا الغربية مثل ألمانيا وفرنسا وهولندا وبلجيكا',
        requirements: [
          'Professional qualifications',
          'Work experience',
          'Language proficiency',
          'Professional CV'
        ],
        requirementsAr: [
          'المؤهلات المهنية',
          'خبرة العمل',
          'إتقان اللغة',
          'سيرة ذاتية احترافية'
        ],
        benefits: [
          'Job search assistance',
          'Professional CV preparation',
          'Direct employer applications',
          'Application tracking',
          'Employer response follow-up'
        ],
        benefitsAr: [
          'المساعدة في البحث عن عمل',
          'إعداد سيرة ذاتية احترافية',
          'تقديم مباشر لأصحاب العمل',
          'تتبع الطلبات',
          'متابعة ردود أصحاب العمل'
        ],
        timeline: '3-6 months processing time',
        timelineAr: '3-6 أشهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
            'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
            'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
            'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada Immigration',
    nameAr: 'الهجرة إلى كندا',
    flagUrl: 'https://flagcdn.com/ca.svg',
    imageUrl: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Start your new life in Canada with our comprehensive job search and immigration programs.',
    descriptionAr: 'ابدأ حياتك الجديدة في كندا مع برامج البحث عن العمل والهجرة الشاملة لدينا',
    programs: [
      {
        id: 'express-entry',
        title: 'Canada Job Search & Immigration Program',
        titleAr: 'برنامج البحث عن عمل والهجرة إلى كندا',
        description: 'Comprehensive job search and immigration assistance for Canada.',
        descriptionAr: 'خدمة شاملة للبحث عن فرص عمل حقيقية في كندا، مع تجهيز كامل لملف الهجرة',
        requirements: [
          'Language proficiency (English/French)',
          'Education assessment',
          'Work experience',
          'Professional CV and documents'
        ],
        requirementsAr: [
          'إتقان اللغة (الإنجليزية/الفرنسية)',
          'تقييم التعليم',
          'خبرة العمل',
          'سيرة ذاتية ووثائق احترافية'
        ],
        benefits: [
          'Job search assistance',
          'CV and motivation letter preparation',
          'Application submission support',
          'Direct employer connections',
          'Immigration process guidance'
        ],
        benefitsAr: [
          'المساعدة في البحث عن عمل',
          'إعداد السيرة الذاتية وخطاب التحفيز',
          'دعم تقديم الطلبات',
          'روابط مباشرة مع أصحاب العمل',
          'توجيه عملية الهجرة'
        ],
        timeline: '6-12 months processing time',
        timelineAr: '6-12 شهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
            'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
            'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
            'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg'
          ]
        }
      }
    ]
  },
  {
    id: 'australia',
    name: 'Australia Jobs',
    nameAr: 'وظائف أستراليا',
    flagUrl: 'https://flagcdn.com/au.svg',
    imageUrl: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description: 'Find real job opportunities in Australia across various sectors.',
    descriptionAr: 'ابحث عن فرص عمل حقيقية في أستراليا في مختلف القطاعات',
    programs: [
      {
        id: 'australia-jobs',
        title: 'Australia Employment Program',
        titleAr: 'برنامج التوظيف في أستراليا',
        description: 'Direct job application service for various sectors in Australia.',
        descriptionAr: 'خدمة التقديم المباشر على وظائف في قطاعات متنوعة في أستراليا',
        requirements: [
          'Relevant qualifications',
          'Work experience',
          'English proficiency',
          'Professional CV'
        ],
        requirementsAr: [
          'المؤهلات ذات الصلة',
          'خبرة العمل',
          'إتقان اللغة الإنجليزية',
          'سيرة ذاتية احترافية'
        ],
        benefits: [
          'Job search in multiple sectors',
          'Complete application preparation',
          'Direct employer submissions',
          'Seasonal work opportunities',
          'Professional support'
        ],
        benefitsAr: [
          'البحث عن وظائف في قطاعات متعددة',
          'إعداد الطلب بالكامل',
          'تقديم مباشر لأصحاب العمل',
          'فرص العمل الموسمي',
          'دعم احترافي'
        ],
        timeline: '3-6 months processing time',
        timelineAr: '3-6 أشهر وقت المعالجة',
        images: {
          work: [
            'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg',
            'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
            'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
            'https://images.pexels.com/photos/3862133/pexels-photo-3862133.jpeg'
          ]
        }
      }
    ]
  }
];

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};