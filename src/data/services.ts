import { FileCheck, Globe, GraduationCap, Briefcase as BriefcaseBusiness, Landmark, Building, Building2, HandshakeIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ElementType;
}

export const services: Service[] = [
  {
    id: 'consultation',
    title: 'Immigration Consultation',
    titleAr: 'استشارات الهجرة',
    description: 'Personalized assessment of eligibility and guidance on the best immigration pathways based on your profile and goals.',
    descriptionAr: 'تقييم شخصي للأهلية وتوجيه بشأن أفضل مسارات الهجرة بناءً على ملفك الشخصي وأهدافك.',
    icon: HandshakeIcon,
  },
  {
    id: 'visa',
    title: 'Visa Application Assistance',
    titleAr: 'المساعدة في طلب التأشيرة',
    description: 'End-to-end support for visa applications, ensuring accurate documentation and compliance with all requirements.',
    descriptionAr: 'دعم شامل لطلبات التأشيرة، وضمان الوثائق الدقيقة والامتثال لجميع المتطلبات.',
    icon: FileCheck,
  },
  {
    id: 'employment',
    title: 'Employment Migration',
    titleAr: 'هجرة العمل',
    description: 'Specialized assistance for skilled workers, professionals, and entrepreneurs seeking overseas employment opportunities.',
    descriptionAr: 'مساعدة متخصصة للعمال المهرة والمهنيين ورجال الأعمال الذين يبحثون عن فرص عمل في الخارج.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'education',
    title: 'Education Pathways',
    titleAr: 'مسارات التعليم',
    description: 'Guidance on study permits, student visas, and education-to-immigration pathways in top global destinations.',
    descriptionAr: 'توجيه بشأن تصاريح الدراسة وتأشيرات الطلاب ومسارات التعليم إلى الهجرة في أفضل الوجهات العالمية.',
    icon: GraduationCap,
  },
  {
    id: 'investment',
    title: 'Investment Immigration',
    titleAr: 'هجرة الاستثمار',
    description: 'Advisory services for investor visa programs, golden visas, and citizenship-by-investment opportunities.',
    descriptionAr: 'خدمات استشارية لبرامج تأشيرات المستثمرين والتأشيرات الذهبية وفرص الجنسية عن طريق الاستثمار.',
    icon: Landmark,
  },
  {
    id: 'residency',
    title: 'Permanent Residency',
    titleAr: 'الإقامة الدائمة',
    description: 'Strategic planning and application support for permanent residency pathways in various countries.',
    descriptionAr: 'التخطيط الاستراتيجي ودعم التطبيق لمسارات الإقامة الدائمة في مختلف البلدان.',
    icon: Building,
  },
  {
    id: 'citizenship',
    title: 'Citizenship Applications',
    titleAr: 'طلبات الجنسية',
    description: 'Comprehensive assistance with naturalization and citizenship applications, including test preparation.',
    descriptionAr: 'مساعدة شاملة في طلبات التجنس والجنسية، بما في ذلك التحضير للاختبار.',
    icon: Globe,
  },
  {
    id: 'business',
    title: 'Business Immigration',
    titleAr: 'هجرة الأعمال',
    description: 'Specialized services for business owners, entrepreneurs, and start-ups looking to expand globally.',
    descriptionAr: 'خدمات متخصصة لأصحاب الأعمال ورواد الأعمال والشركات الناشئة التي تتطلع إلى التوسع عالميًا.',
    icon: Building2,
  },
];