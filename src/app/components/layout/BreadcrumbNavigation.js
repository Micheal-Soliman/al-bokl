import React from 'react';
import Link from 'next/link';
import styles from './BreadcrumbNavigation.module.css';

const BreadcrumbNavigation = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav className={styles.breadcrumb} aria-label="مسار التنقل">
      <div className={styles.container}>
        <ol className={styles.breadcrumbList}>
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className={styles.breadcrumbItem}>
              {index === breadcrumbs.length - 1 ? (
                <span className={styles.currentPage} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.url} className={styles.breadcrumbLink}>
                    {crumb.name}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNavigation;
