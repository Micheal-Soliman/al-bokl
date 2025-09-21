import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  loading = false, 
  disabled = false,
  onClick,
  href,
  type = 'button',
  className = '',
  ...props 
}) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    loading && styles.loading,
    disabled && styles.disabled,
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        {...props}
      >
        {loading ? (
          <span className={styles.loadingSpinner}></span>
        ) : (
          children
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.loadingSpinner}></span>
      ) : (
        children
      )}
    </button>
  );
}
