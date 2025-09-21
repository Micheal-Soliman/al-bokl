// Structured Data Schema Generators
import { 
  createDoctorSchema, 
  createMedicalProcedureSchema, 
  createFAQSchema,
  createBreadcrumbSchema,
  createArticleSchema,
  createOrganizationSchema,
  createWebsiteSchema,
  createMedicalBusinessSchema
} from './schemas.js';

export const generateMedicalProcedureSchema = ({
  name,
  description,
  procedureType = 'جراحي',
  bodyLocation = 'الجهاز التناسلي الذكري',
  preparation = 'فحص طبي شامل وتحاليل مخبرية',
  followup = 'متابعة دورية مع الطبيب المختص',
  benefits = []
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "procedureType": procedureType,
    "bodyLocation": bodyLocation,
    "preparation": preparation,
    "followup": followup,
    "howPerformed": "تحت التخدير العام باستخدام أحدث التقنيات الطبية",
    "performer": {
      "@type": "Person",
      "name": "الدكتور أسامة محمد البكل",
      "jobTitle": "مدرس وإستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية",
      "worksFor": {
        "@type": "Organization",
        "name": "كلية طب قصر العيني - جامعة القاهرة"
      }
    },
    "benefits": benefits,
    "medicalSpecialty": "Urology"
  };
};

export const generateDoctorSchema = () => {
  return createDoctorSchema();
};

export const generateFAQSchema = (faqs) => {
  return createFAQSchema(faqs);
};

export const generateBreadcrumbSchema = (items) => {
  return createBreadcrumbSchema(items);
};

export const generateArticleSchema = (title, description, author, url) => {
  return createArticleSchema(title, description, author, url);
};

export const generateOrganizationSchema = () => {
  return createOrganizationSchema();
};

export const generateWebsiteSchema = () => {
  return createWebsiteSchema();
};

export const generateMedicalBusinessSchema = () => {
  return createMedicalBusinessSchema();
};

// Specialized schema generators for specific medical procedures
export const generateVaricoceleSchema = () => {
  return generateMedicalProcedureSchema({
    name: 'عملية دوالي الخصية بالميكروسكوب',
    description: 'عملية جراحية دقيقة لعلاج دوالي الخصية باستخدام الميكروسكوب الجراحي لضمان أفضل النتائج وتجنب المضاعفات',
    procedureType: 'جراحة المسالك البولية',
    bodyLocation: 'الخصية',
    preparation: 'فحص شامل، تحاليل الدم، إيقاف أدوية السيولة',
    followup: 'متابعة لمدة 6 أشهر، تحليل السائل المنوي بعد 3 أشهر',
    benefits: [
      'تحسين جودة الحيوانات المنوية',
      'زيادة فرص الحمل الطبيعي',
      'تقليل الألم والثقل في الخصية',
      'منع تدهور وظائف الخصية'
    ]
  });
};

export const generateMicroscopicInspectionSchema = () => {
  return generateMedicalProcedureSchema({
    name: 'التفتيش الميكروسكوبي للخصية',
    description: 'إجراء جراحي دقيق لاستخراج الحيوانات المنوية مباشرة من أنسجة الخصية للرجال الذين يعانون من انعدام الحيوانات المنوية',
    procedureType: 'جراحة المسالك البولية',
    bodyLocation: 'الخصية',
    preparation: 'فحص شامل، تحاليل هرمونية، تجهيز المختبر',
    followup: 'متابعة الجرح، تحضير للحقن المجهري',
    benefits: [
      'استخراج الحيوانات المنوية بأعلى جودة',
      'إمكانية الإنجاب للحالات المستعصية',
      'تقنية آمنة ودقيقة',
      'نسب نجاح عالية'
    ]
  });
};

export const generatePenileImplantsSchema = () => {
  return generateMedicalProcedureSchema({
    name: 'دعامات العضو الذكري',
    description: 'عملية زراعة دعامات القضيب لعلاج ضعف الانتصاب والضعف الجنسي كحل نهائي وفعال',
    procedureType: 'جراحة المسالك البولية',
    bodyLocation: 'العضو الذكري',
    preparation: 'فحص شامل، ضبط مستوى السكر والضغط، إيقاف أدوية السيولة',
    followup: 'متابعة لمدة شهرين، العودة للعمل خلال أسبوع',
    benefits: [
      'حل نهائي لضعف الانتصاب',
      'عودة الثقة والحياة الطبيعية',
      'عملية آمنة وبسيطة',
      'نتائج مضمونة 100%'
    ]
  });
};
