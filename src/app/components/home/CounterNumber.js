'use client';

import { useState, useEffect } from 'react';

export default function CounterNumber({ targetNumber, isVisible, duration = 2000 }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startNumber = 0;
    const endNumber = targetNumber;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(startNumber + (endNumber - startNumber) * easeOutQuart);
      
      setCurrentNumber(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber, duration]);

  return <span>{currentNumber}</span>;
}
