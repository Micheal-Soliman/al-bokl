import MainLayout from '../components/layout/MainLayout';
import ContactPage from '../components/pages/ContactPage';
import { createMedicalBusinessSchema } from '../../lib/seo/schemas';
import { staticMetadata } from '../../lib/seo/metadata';

export const metadata = staticMetadata.contact;

export default function Contact() {
  const businessStructuredData = createMedicalBusinessSchema();

  return (
    <MainLayout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessStructuredData)
        }}
      />
      <ContactPage />
    </MainLayout>
  );
}
