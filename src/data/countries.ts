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
        description