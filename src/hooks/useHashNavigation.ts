"use client";

import { useEffect } from 'react';

export function useHashNavigation() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(window.location.hash.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Force animation triggers for elements that might have been skipped
            const animatedElements = element.querySelectorAll('[data-animation-trigger]');
            animatedElements.forEach((el) => {
              const event = new CustomEvent('animation-retrigger');
              el.dispatchEvent(event);
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashChange();
    
    // Handle subsequent hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
}