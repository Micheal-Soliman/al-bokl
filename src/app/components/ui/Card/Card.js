import styles from './Card.module.css';

export default function Card({ 
  children, 
  variant = 'default', 
  hover = false,
  padding = 'medium',
  className = '',
  ...props 
}) {
  const cardClasses = [
    styles.card,
    styles[variant],
    hover && styles.hover,
    styles[`padding-${padding}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}
