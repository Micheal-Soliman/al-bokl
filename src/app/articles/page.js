import MainLayout from '../components/layout/MainLayout';
import ArticlesPage from '../components/pages/ArticlesPage';
import Breadcrumb from '../components/seo/Breadcrumb';
import { createArticleSchema } from '../../lib/seo/schemas';
import { staticMetadata } from '../../lib/seo/metadata';

export const metadata = staticMetadata.articles;

export default function Articles() {
  const breadcrumbItems = [
    { name: 'الرئيسية', url: '/' },
    { name: 'المقالات الطبية', url: '/articles' }
  ];

  const articlesStructuredData = createArticleSchema(
    'مقالات طبية متخصصة في أمراض الذكورة',
    'مجموعة شاملة من المقالات الطبية المتخصصة في أمراض الذكورة والصحة الجنسية وتأخر الإنجاب',
    'الدكتور أسامة محمد البكل',
    'https://www.albokl.com/articles'
  );

  return (
    <MainLayout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articlesStructuredData)
        }}
      />
      
      <div style={{ padding: '0 2rem' }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={breadcrumbItems} />
        
        <ArticlesPage />
      </div>
    </MainLayout>
  );
}
