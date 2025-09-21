import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import MainLayout from '../../components/layout/MainLayout';
import InfertilityPage from '../../components/pages/InfertilityPage';

export const metadata = generateSEOMetadata({
  title: 'علاج تأخر الإنجاب عند الرجال - د. أسامة البكل',
  description: 'علاج تأخر الإنجاب والعقم عند الرجال. تحليل السائل المنوي، الحقن المجهري، استخراج الحيوانات المنوية. استشارة متخصصة مع د. أسامة البكل.',
  keywords: ['تأخر الإنجاب', 'العقم عند الرجال', 'تحليل السائل المنوي', 'الحقن المجهري', 'استخراج الحيوانات المنوية', 'ضعف الخصوبة'],
  canonical: '/services/male-infertility',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'الخدمات الطبية', url: '/services' },
    { name: 'تأخر الإنجاب عند الرجال', url: '/services/male-infertility' }
  ]
});

export default function MaleInfertility() {
  return (
    <MainLayout>
      <InfertilityPage />
    </MainLayout>
  );
}
