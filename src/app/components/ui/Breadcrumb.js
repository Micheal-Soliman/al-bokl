import Link from 'next/link';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.url} className={styles.link}>
                  {item.name}
                </Link>
                <span className={styles.separator}>›</span>
              </>
            ) : (
              <span className={styles.current}>{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
