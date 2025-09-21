import styles from './Section.module.css';

export default function Section({ 
  children, 
  variant = 'default',
  padding = 'large',
  background = 'white',
  className = '',
  id,
  ...props 
}) {
  const sectionClasses = [
    styles.section,
    styles[variant],
    styles[`padding-${padding}`],
    styles[`bg-${background}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}
