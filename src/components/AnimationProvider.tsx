"use client";

import { ReactNode, useEffect } from 'react';
import { useHashNavigation } from '@/hooks/useHashNavigation';

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  useHashNavigation();
  
  useEffect(() => {
    // Global event listener for animation retriggers
    const handleRetrigger = () => {
      const event = new Event('scroll');
      window.dispatchEvent(event);
    };
    
    document.addEventListener('animation-retrigger', handleRetrigger);
    
    return () => {
      document.removeEventListener('animation-retrigger', handleRetrigger);
    };
  }, []);
  
  return <>{children}</>;
}