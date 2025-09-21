import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import MainLayout from '../components/layout/MainLayout';
import ServicesPage from '../components/pages/ServicesPage';

export const metadata = generateSEOMetadata({
  title: 'الخدمات الطبية - د. أسامة البكل',
  description: 'خدمات طبية متخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب. علاج ضعف الانتصاب، دوالي الخصيتين، والعقم عند الرجال.',
  keywords: ['خدمات طبية', 'أمراض الذكورة', 'الصحة الجنسية', 'تأخر الإنجاب', 'ضعف الانتصاب', 'دوالي الخصيتين'],
  canonical: '/services',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'الخدمات الطبية', url: '/services' }
  ]
});

export default function Services() {
  return (
    <MainLayout>
      <ServicesPage />
    </MainLayout>
  );
}
