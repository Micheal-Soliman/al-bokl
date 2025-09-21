import MainLayout from './components/layout/MainLayout';
import HomePage from './components/pages/HomePage';
import { createDoctorSchema, createMedicalBusinessSchema, createOrganizationSchema, createWebsiteSchema } from '../lib/seo/schemas';
import { staticMetadata } from '../lib/seo/metadata';

export const metadata = staticMetadata.home;

export default function Home() {
  const doctorStructuredData = createDoctorSchema();
  const businessStructuredData = createMedicalBusinessSchema();
  const organizationStructuredData = createOrganizationSchema();
  const websiteStructuredData = createWebsiteSchema();

  return (
    <MainLayout>
      {/* Enhanced Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            doctorStructuredData,
            businessStructuredData,
            organizationStructuredData,
            websiteStructuredData
          ])
        }}
      />
      <HomePage />
    </MainLayout>
  );
}
