import { FaMicroscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaMarsStroke } from "react-icons/fa6";
import { MdSwapCalls } from "react-icons/md";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
// Site Configuration
export const SITE_CONFIG = {
  name: "الدكتور أسامة البكل",
  description:
    "مدرس واستشاري طب وجراحة أمراض الذكوره وتأخر الإنجاب والصحة الجنسية بطب القصر العيني",
  phone: {
    primary: "+201017912197",
    secondary: "+201018874287",
    callOnly: "+201034637761",
  },
  email: "Booking@albokl.com",
  address: "الشيخ زايد محور 26 يوليو - توين تاورز برج C - الدور الثاني عيادة D",
  workingHours: "السبت - الخميس، 12:00 ظ - 8:00 م",
  socialMedia: {
    snapchat: "https://www.snapchat.com/add/dr.osamaalbokl?share_id=T3kKuHjSvYw&locale=en-GB",
    x: "https://x.com/drosamaalbokl?s=09",
    tiktok: "https://www.tiktok.com/@drosamaalbokl",
    youtube: "https://www.youtube.com/@OsamaAlbokl",
    instagram: "https://www.instagram.com/osamaalbokl",
    facebook: "https://www.facebook.com/drosamaalbokl",
    linkedin: "https://www.linkedin.com/company/osama-albokl-clinics",
  },
};

// Navigation Menu Items - Updated Structure
export const NAVIGATION_ITEMS = [
  {
    name: "الرئيسية",
    href: "/",
  },
  {
    name: "عن الدكتور",
    href: "/about/doctor",
  },
  {
    name: "تأخر الإنجاب",
    href: "/fertility",
    submenu: [
      {
        name: "إنعدام الحيوانات المنوية",
        href: "/fertility/azoospermia",
        submenu: [
          {
            name: "مشاكل الهرمونات و تأخير الإنجاب عند الرجال",
            href: "/fertility/hormonal-problems",
          },
          {
            name: "ضعف حركة الحيوانات المنوية",
            href: "/fertility/sperm-motility",
          },
          {
            name: "تشوهات الحيوان المنوي",
            href: "/fertility/sperm-morphology",
          },
        ],
      },
      {
        name: "هل مشاكل الخصية تسبب العقم ؟",
        href: "/fertility/testicular-problems",
      },
      {
        name: "اي هو انسداد القنوات المنوية ؟",
        href: "/fertility/vas-deferens-obstruction",
      },
    ],
  },
  {
    name: "المشاكل الجنسية",
    href: "/sexual-problems",
    submenu: [
      { name: "ضعف الإنتصاب", href: "/sexual-problems/erectile-dysfunction" },
      { name: "سرعة القذف", href: "/sexual-problems/premature-ejaculation" },
      {
        name: "مشاكل الرغبة الجنسية",
        href: "/sexual-problems/libido-problems",
      },
    ],
  },
  {
    name: "العمليات الجراحية",
    href: "/surgeries",
    submenu: [
      {
        name: "دوالى الخصيه وتاثيرها على الانجاب",
        href: "/surgeries/varicocele",
      },
      {
        name: "عينات الخصية",
        href: "/surgeries/testicular-biopsy",
        submenu: [
          {
            name: "اي هو التفتيش الميكروسكوبي للخصية ؟",
            href: "/surgeries/testicular-biopsy/microscopic-tese",
          },
          {
            name: "عينة الخصية العادية",
            href: "/surgeries/testicular-biopsy/conventional-tese",
          },
          {
            name: "سحب العينة بالإبره",
            href: "/surgeries/testicular-biopsy/tesa",
          },
        ],
      },
      { name: "دعامات العضو الذكري", href: "/surgeries/penile-implants" },
      { name: "القيلة المائية عند الرجال", href: "/surgeries/hydrocele" },
      { name: "اصلاح اعوجاج القضيب", href: "/surgeries/penile-curvature" },
    ],
  },
  {
    name: "مشاكل البلوغ",
    href: "/puberty-problems",
    submenu: [
      {
        name: "البلوغ المبكر عند الشباب",
        href: "/puberty-problems/precocious-puberty",
      },
      { name: "تأخر البلوغ", href: "/puberty-problems/delayed-puberty" },
    ],
  },
  {
    name: "جراحات طوارئ الذكورة",
    href: "/emergency-surgeries",
    submenu: [
      {
        name: "إلتواء الخصية",
        href: "/emergency-surgeries/testicular-torsion",
      },
      { name: "تهتك الخصية", href: "/emergency-surgeries/testicular-rupture" },
      { name: "كسر القضيب", href: "/emergency-surgeries/penile-fracture" },
    ],
  },
  {
    name: "فيديوهات",
    href: "/videos",
  },
  {
    name: "المقالات",
    href: "/articles",
  },
  {
    name: "تواصل معنا",
    href: "/contact",
  },
];

// Clinics Data
export const CLINICS = [
  {
    name: "عيادة الشيخ زايد",
    location:
      "توين تاورز الشيخ زايد محور ٢٦ يوليو - برج C الدور الثاني عيادة D",
    hours: ["الإثنين من ٨ مساءً حتى ١١ مساء", "الأربعاء من ٧ مساءً حتى 10 مساءً"],
    mapLink: "https://maps.app.goo.gl/o19rgM12eVzAFX3y8",
  },
  {
    name: "عيادة الجيزة",
    location:
      "30 ش مراد - بالقرب من ميدان الجيزة و حديقة الحيوان - الدور الرابع - عيادة 312",
    hours: [
      "الأحد – من 3 حتى 8 مساءً",
      "الثلاثاء – من 3 حتى 8 مساءً",
      "الأربعاء – من 2 حتى 5 مساءً",
    ],
    mapLink: "https://maps.app.goo.gl/dKdzFCAewVMvjE1o6",
  },
  {
    name: "عيادة شبين الكوم - المنوفية",
    location: "برج الديوان - ميدان شرف - الدور الخامس",
    hours: ["السبت من كل أسبوع – من 1 حتى 5 مساءً"],
    mapLink: "https://maps.app.goo.gl/BUsVzBLoHiypUSa66",
  },
  {
    name: "عيادة أشمون - المنوفية",
    location:
      "ش عبد المنعم رياض - خلف مكتب البريد - مستشفى الدكتور محمد البكل",
    hours: ["الإثنين من كل أسبوع – من 1 حتى 5 مساءً"],
    mapLink: "https://maps.app.goo.gl/tUThtGhDPPPiwV766",
  },
];

// Services Data
export const SERVICES = [
  {
    title: "دعامات العضو الذكري",
    subtitle: "الحل الأمثل لعلاج ضعف الانتصاب المستعصي",
    description: "تُعيد الدعامة القدرة على الانتصاب بشكل دائم وفعّال في الحالات التي لا تستجيب للأدوية أو الحقن، مع إمكانية الجماع في أي وقت دون الحاجة لأي منشطات. توفر ثباتًا كاملًا أثناء العلاقة وتمنح المريض حياة جنسية مستقرة وآمنة.",
    icon: <FaMarsStroke />,
    color: "gold",
    link: "/surgeries/penile-implants",
  },
  {
    title: "عملية دوالي الخصيتين",
    subtitle: "بالجراحة الميكروسكوبية",
    description:
      "لتحسين ألم الدوالي والوقاية من تدهور وظيفة الخصية، والمساعدة في تحسين فرص الإنجاب في حالات تأخر الحمل المرتبطة بدوالي الخصية، خاصة من الدرجة الثالثة، وبعض حالات انعدام الحيوانات المنوية بعد التقييم الطبي الدقيق.",
    icon: <FaUserDoctor />,

    color: "gold",
    link: "/surgeries/varicocele",
  },
  {
    title: "التفتيش الميكروسكوبي",
    subtitle: "لعلاج تأخر الإنجاب",
    description:
      "أدق تقنية لاستخراج الحيوانات المنوية من الخصية في حالات انعدام الحيوانات المنوية غير الانسدادي، مع أعلى نسب نجاح وأقل ضرر على أنسجة الخصية. ",
    icon: <FaMicroscope />,
    color: "gold",
    link: "/surgeries/microscopic-inspection",
  },
  
  {
    title: "إصلاح إعوجاج القضيب",
    subtitle: "لممارسة علاقة زوجية صح",
    description:`لتحسين الوظيفة الجنسية واستعادة علاقة زوجية سليمة
إعوجاج القضيب قد يسبب ألم أثناء الجماع أو صعوبة في ممارسة العلاقة الزوجية، لكن علاجه متاح وبنتائج ممتازة.
سواء كان العلاج دوائيًا في الحالات البسيطة، أو جراحيًا للحالات المتوسطة والشديدة، فاختلاف الخيارات موجود… والأهم هو اختيار الأسلوب المناسب لكل مريض بعد فحص دقيق.`,
    icon: <MdSwapCalls />,
    color: "gold",
    link: "/surgeries/penile-curvature",
  },
  {
    title: "عملية القيلة المائية",
    subtitle: "لعلاج تورم وإنتفاخ الخصية",
    description: `
القيلة المائية مش مرض خطير ومش بتضرّ الخصية، لكن تركها بدون علاج ممكن يسبب زيادة التورّم وعدم الارتياح.
الجراحة هي الحل الأمثل للتخلص من التجمّع المائي واستعادة الشكل الطبيعي للخصية.`,
    icon: <WiMoonAltThirdQuarter />, // Updated icon
    color: "gold",
    link: "/surgeries/hydrocele",
  },
];

// Statistics Data - Exact from WordPress
export const STATISTICS = [
  { number: "117", label: "عملية دوالي", color: "blue" },
  { number: "193", label: "تركيب دعامة هيدروليكية", color: "green" },
  { number: "472", label: "تركيب دعامة مرنة", color: "red" },
  { number: "136", label: "عملية تفتيش ميكروسكوبي ناجحه", color: "purple" },
  { number: "85", label: "عملية قيلة مائية", color: "cyan" },
];

// Articles Data
export const FEATURED_ARTICLES = [
  {
    title: "ما هي الحقن الموضعية المستخدمة في علاج ضعف الانتصاب ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "تعرف على أنواع الحقن الموضعية المستخدمة في علاج ضعف الانتصاب وكيفية عملها وفعاليتها في العلاج.",
    image: "💉",
    link: "/articles/local-injections-erectile-dysfunction",
    publishDate: "30 أغسطس، 2025",
    category: "المشاكل الجنسية",
  },
  {
    title: "هل تشوه الحيوانات المنوية سبب الاجهاض المتكرر ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "دراسة شاملة حول العلاقة بين تشوهات الحيوانات المنوية والإجهاض المتكرر وطرق العلاج المتاحة.",
    image: "🔬",
    link: "/articles/sperm-abnormality-miscarriage",
    publishDate: "30 أغسطس، 2025",
    category: "مقالات عامة",
  },
  {
    title: "متى تكون دوالي الخصية خطيرة ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "معلومات مهمة حول دوالي الخصية ومتى تصبح خطيرة وتحتاج لتدخل جراحي عاجل.",
    image: "⚠️",
    link: "/articles/when-varicocele-dangerous",
    publishDate: "28 أغسطس، 2025",
    category: "عملية دوالي الخصيتين",
  },
  {
    title: "ما هو سبب ارتخاء القضيب فجأة أثناء العلاقة الزوجية ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "تعرف على الأسباب المختلفة لارتخاء القضيب المفاجئ أثناء العلاقة الزوجية وطرق العلاج والوقاية المتاحة.",
    image: "🔄",
    link: "/articles/sudden-penis-relaxation",
    publishDate: "27 أغسطس، 2025",
    category: "مقالات عامة",
  },
  {
    title: "هل دعامة الانتصاب تنفع لأصحاب الأمراض المزمنة ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "تعرف على إمكانية استخدام دعامات الانتصاب للمرضى المصابين بالأمراض المزمنة والاحتياطات اللازمة.",
    image: "🔧",
    link: "/articles/penile-implants-chronic-diseases",
    publishDate: "26 أغسطس، 2025",
    category: "دعامات الانتصاب",
  },
  {
    title: "ما هي شروط إجراء تحليل السائل المنوي للرجال ؟",
    author: "د. أسامة البكل",
    comments: "0 comment",
    excerpt:
      "تعرف على الشروط الضرورية لإجراء تحليل السائل المنوي والنسب الطبيعية للحصول على نتائج دقيقة وموثوقة.",
    image: "🔬",
    link: "/articles/semen-analysis-conditions",
    publishDate: "25 أغسطس، 2025",
    category: "مقالات عامة",
  },
];

// Treatment Options - Updated SEO URLs
export const TREATMENTS = [
  { name: "علاج سرعة القذف", link: "/conditions/premature-ejaculation" },
  { name: "علاج ضعف الإنتصاب", link: "/conditions/erectile-dysfunction" },
  { name: "مشاكل تأخر البلوغ", link: "/services/puberty-disorders" },
  { name: "الإطمئنان قبل الزواج", link: "/services/sexual-health" },
  { name: "العادات الصحية وتأثرها", link: "/resources/guides" },
];

// SEO-Optimized Breadcrumb Structure
export const BREADCRUMB_TEMPLATES = {
  home: [{ name: "الرئيسية", url: "/" }],
  about: [
    { name: "الرئيسية", url: "/" },
    { name: "عن العيادة", url: "/about" },
  ],
  services: [
    { name: "الرئيسية", url: "/" },
    { name: "الخدمات الطبية", url: "/services" },
  ],
  conditions: [
    { name: "الرئيسية", url: "/" },
    { name: "الحالات المرضية", url: "/conditions" },
  ],
  treatments: [
    { name: "الرئيسية", url: "/" },
    { name: "العلاجات", url: "/treatments" },
  ],
  resources: [
    { name: "الرئيسية", url: "/" },
    { name: "المصادر", url: "/resources" },
  ],
  contact: [
    { name: "الرئيسية", url: "/" },
    { name: "التواصل", url: "/contact" },
  ],
};

// URL Redirects for Old Structure
export const URL_REDIRECTS = {
  "/about-doctor": "/about/doctor",
  "/sexual-health/premature-ejaculation": "/conditions/premature-ejaculation",
  "/sexual-health/erectile-dysfunction": "/conditions/erectile-dysfunction",
  "/puberty": "/services/puberty-disorders",
  "/consultation/pre-marriage": "/services/sexual-health",
  "/health-habits": "/resources/guides",
  "/surgeries/varicocele": "/treatments/surgical/varicocele",
  "/surgeries/microscopic-inspection":
    "/treatments/surgical/microscopic-extraction",
  "/surgeries/penile-implants": "/treatments/surgical/penile-implants",
  "/surgeries/penile-curvature": "/treatments/surgical/penile-curvature",
  "/surgeries/hydrocele": "/treatments/surgical/hydrocele",
};
