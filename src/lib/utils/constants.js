// الثوابت العامة للمشروع
export const SITE_CONFIG = {
  name: 'الدكتور أسامة البكل',
  url: 'https://www.albokl.com',
  description: 'مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني',
  locale: 'ar_EG',
  direction: 'rtl'
};

export const DOCTOR_INFO = {
  name: 'الدكتور أسامة محمد البكل',
  title: 'مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية',
  university: 'كلية طب قصر العيني - جامعة القاهرة',
  experience: 'أكثر من 10 سنوات',
  specialties: [
    'طب وجراحة أمراض الذكورة',
    'تأخر الإنجاب عند الرجال',
    'الصحة الجنسية',
    'جراحة المسالك البولية'
  ]
};

export const CONTACT_INFO = {
  phones: ['+201017912197', '+201018874287'],
  email: 'Booking@albokl.com',
  address: {
    street: 'الشيخ زايد، محور 26 يوليو، توين تاورز برج C، الدور الثاني، عيادة D',
    city: 'الجيزة',
    region: 'الجيزة',
    country: 'مصر',
    postalCode: '12588'
  },
  workingHours: {
    days: 'السبت إلى الأربعاء',
    hours: '12:00 ظهراً - 8:00 مساءً'
  },
  coordinates: {
    latitude: '30.0444',
    longitude: '31.2357'
  }
};

export const SOCIAL_MEDIA = {
  facebook: 'https://www.facebook.com/drosama.albokl',
  instagram: 'https://www.instagram.com/dr.osama.albokl',
  youtube: 'https://www.youtube.com/@drosama.albokl',
  whatsapp: 'https://wa.me/201017912197'
};

export const SEO_DEFAULTS = {
  titleSuffix: ' - الدكتور أسامة البكل',
  defaultDescription: 'الدكتور أسامة البكل, مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بطب قصر العيني. خبرة أكثر من 10 سنوات في علاج مشاكل الذكورة والإنجاب.',
  defaultKeywords: 'دكتور ذكورة, تأخر الإنجاب, الصحة الجنسية, دوالي الخصية, ضعف الانتصاب, العقم عند الرجال, طب الذكورة, قصر العيني',
  defaultImage: '/images/doctor-osama.webp',
  ogType: 'website',
  twitterCard: 'summary_large_image'
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  ARTICLES: '/articles',
  VIDEOS: '/videos',
  SURGERIES: {
    BASE: '/surgeries',
    VARICOCELE: '/surgeries/varicocele',
    MICROSCOPIC_INSPECTION: '/surgeries/microscopic-inspection',
    PENILE_IMPLANTS: '/surgeries/penile-implants',
    PENILE_CURVATURE: '/surgeries/penile-curvature'
  },
  CONDITIONS: {
    BASE: '/conditions',
    ERECTILE_DYSFUNCTION: '/conditions/erectile-dysfunction',
    MALE_INFERTILITY: '/conditions/male-infertility',
    PREMATURE_EJACULATION: '/conditions/premature-ejaculation',
    LOW_TESTOSTERONE: '/conditions/low-testosterone'
  },
  TREATMENTS: {
    BASE: '/treatments',
    HORMONE_THERAPY: '/treatments/hormone-therapy',
    SEXUAL_HEALTH: '/treatments/sexual-health',
    FERTILITY_TREATMENT: '/treatments/fertility-treatment'
  }
};

export const MEDICAL_SPECIALTIES = [
  'Urology',
  'Andrology',
  'Male Infertility',
  'Sexual Medicine',
  'Reproductive Medicine'
];

export const COMMON_CONDITIONS = [
  'دوالي الخصية',
  'ضعف الانتصاب',
  'سرعة القذف',
  'تأخر الإنجاب',
  'نقص هرمون الذكورة',
  'التهاب البروستاتا',
  'انحناء القضيب',
  'القيلة المائية'
];

export const SURGICAL_PROCEDURES = [
  'عملية دوالي الخصية بالميكروسكوب',
  'التفتيش الميكروسكوبي للخصية',
  'زراعة دعامات القضيب',
  'عملية انحناء القضيب',
  'استئصال القيلة المائية',
  'جراحة الإحليل السفلي'
];
