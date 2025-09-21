import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import MainLayout from '../components/layout/MainLayout';
import AboutPage from '../components/pages/AboutPage';

export const metadata = generateSEOMetadata({
  title: 'عن العيادة - د. أسامة البكل',
  description: 'تعرف على عيادة د. أسامة البكل المتخصصة في أمراض الذكورة والصحة الجنسية. خبرة أكثر من 15 عاماً في علاج تأخر الإنجاب وضعف الانتصاب.',
  keywords: ['عن العيادة', 'د. أسامة البكل', 'أمراض الذكورة', 'الصحة الجنسية', 'تأخر الإنجاب', 'عيادة متخصصة'],
  canonical: '/about',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'عن العيادة', url: '/about' }
  ]
});

export default function About() {
  return (
    <MainLayout>
      <AboutPage />
    </MainLayout>
  );
}
