import { generateSEOMetadata } from '../../lib/seo/articleSEO';
import MainLayout from '../components/layout/MainLayout';
import TreatmentsPage from '../components/pages/TreatmentsPage';

export const metadata = generateSEOMetadata({
  title: 'العلاجات الطبية - د. أسامة البكل',
  description: 'العلاجات الجراحية وغير الجراحية لأمراض الذكورة. دعامات العضو الذكري، علاج دوالي الخصيتين، الحقن الموضعية، والعلاج الدوائي.',
  keywords: ['العلاجات الجراحية', 'العلاجات غير الجراحية', 'دعامات العضو الذكري', 'علاج دوالي الخصيتين', 'الحقن الموضعية'],
  canonical: '/treatments',
  breadcrumb: [
    { name: 'الرئيسية', url: '/' },
    { name: 'العلاجات الطبية', url: '/treatments' }
  ]
});

export default function Treatments() {
  return (
    <MainLayout>
      <TreatmentsPage />
    </MainLayout>
  );
}
