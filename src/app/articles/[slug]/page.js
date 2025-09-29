import { notFound } from "next/navigation";
import MainLayout from "../../components/layout/MainLayout";
import ArticleDetailPage from "../../components/pages/ArticleDetailPage";
import Breadcrumb from "../../components/seo/Breadcrumb";
import { medicalArticles } from "../../../data/articles/articlesData";
import {
  generateArticleMetadata,
  generateArticleStructuredData,
  generateFAQStructuredData,
  generateBreadcrumbStructuredData,
} from "../../../lib/seo/articleSEO";
import ArticleLayout from "@/app/components/articles/ArticleLayout";

// Generate metadata for each article
export async function generateMetadata({ params }) {
  const article = medicalArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "المقال غير موجود | د. أسامة البكل",
      description: "المقال المطلوب غير متوفر",
    };
  }

  return generateArticleMetadata(article);
}

// Generate static params for all articles
export async function generateStaticParams() {
  return medicalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }) {
  const article = medicalArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Generate structured data
  const articleStructuredData = generateArticleStructuredData(article);
  const faqStructuredData =
    article && article.faqs ? generateFAQStructuredData(article.faqs) : null;

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "الرئيسية", url: "https://www.albokl.com/" },
    { name: "المقالات", url: "https://www.albokl.com/articles" },
    {
      name: article.title || "مقال طبي",
      url: `https://www.albokl.com/articles/${article.slug || params.slug}`,
    },
  ];

  const breadcrumbStructuredData =
    generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <MainLayout>
      {/* Article Structured Data */}
      {articleStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleStructuredData),
          }}
        />
      )}

      {/* FAQ Structured Data */}
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      )}

      {/* Breadcrumb Structured Data */}
      {breadcrumbStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbStructuredData),
          }}
        />
      )}

      <div style={{ padding: "0 2rem" }}>
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={breadcrumbItems.map((item) => ({
            name: item.name,
            url: (item.url || "").replace("https://www.albokl.com", ""),
          }))}
        />

        <ArticleLayout article={article} />
        {/* <ArticleDetailPage article={article} /> */}
      </div>
    </MainLayout>
  );
}
