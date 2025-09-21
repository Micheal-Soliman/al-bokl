import Link from 'next/link';
import styles from './Breadcrumb.module.css';
import { createBreadcrumbStructuredData } from './StructuredData';

export default function Breadcrumb({ items }) {
  if (!items || items.length === 0) return null;

  const breadcrumbStructuredData = createBreadcrumbStructuredData(items);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          {items.map((item, index) => (
            <li key={index} className={styles.breadcrumbItem}>
              {index < items.length - 1 ? (
                <>
                  <Link href={item.url} className={styles.breadcrumbLink}>
                    {item.name}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span className={styles.currentPage} aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
