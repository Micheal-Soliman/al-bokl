"use client";

import { useState } from 'react';

const ProtectedEmail = ({ email, className = '', children }) => {
  const [revealed, setRevealed] = useState(false);
  
  // Encode email to prevent scraping
  const encodeEmail = (email) => {
    return email.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
  };

  const handleClick = (e) => {
    if (!revealed) {
      e.preventDefault();
      setRevealed(true);
      // After revealing, allow the default mailto action
      setTimeout(() => {
        window.location.href = `mailto:${email}`;
      }, 100);
    }
  };

  if (!revealed) {
    return (
      <a
        href="#"
        onClick={handleClick}
        className={className}
        aria-label="Click to reveal email"
      >
        {children || 'انقر لإظهار البريد الإلكتروني'}
      </a>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      dangerouslySetInnerHTML={{ __html: encodeEmail(email) }}
    />
  );
};

export default ProtectedEmail;
