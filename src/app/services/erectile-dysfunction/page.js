import { generateSEOMetadata } from '../../../lib/seo/articleSEO';
import MainLayout from '../../components/layout/MainLayout';
import ErectileDysfunctionPage from '../../components/pages/ErectileDysfunctionPage';

export const metadata = generateSEOMetadata({
  title: 'علاج ضعف الانتصاب - د. أسامة البكل',
  description: 'علاج ضعف الانتصاب بأحدث الطرق الطبية. تشخيص دقيق وعلاج فعال للضعف الجنسي عند الرجال. استشارة متخصصة مع د. أسامة البكل.',
  keywords: ['ضعف الانتصاب', 'الضعف الجنسي', 'علاج ضعف الانتصاب', 'دعامات العضو الذكري', 'حقن موضعية', 'فياجرا'],
  canonical: '/services/erectile-dysfunction',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'الخدمات الطبية', url: '/services' },
    { name: 'علاج ضعف الانتصاب', url: '/services/erectile-dysfunction' }
  ]
});

export default function ErectileDysfunction() {
  return (
    <MainLayout>
      <ErectileDysfunctionPage />
    </MainLayout>
  );
}
