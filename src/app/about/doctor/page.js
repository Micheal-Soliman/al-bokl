import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import MainLayout from '../../components/layout/MainLayout';
import AboutDoctorPage from '../../components/pages/AboutDoctorPage';

export const metadata = generateSEOMetadata({
  title: 'د. أسامة محمد البكل - استشاري أمراض الذكورة',
  description: 'د. أسامة البكل مدرس واستشاري طب وجراحة أمراض الذكورة وتأخر الإنجاب والصحة الجنسية بكلية الطب جامعة القاهرة. خبرة أكثر من 15 عاماً.',
  keywords: ['د. أسامة البكل', 'استشاري أمراض الذكورة', 'طب القصر العيني', 'جامعة القاهرة', 'تأخر الإنجاب', 'الصحة الجنسية'],
  canonical: '/about/doctor',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'عن العيادة', url: '/about' },
    { name: 'عن الدكتور', url: '/about/doctor' }
  ]
});

export default function AboutDoctor() {
  return (
    <MainLayout>
      <AboutDoctorPage />
    </MainLayout>
  );
}
