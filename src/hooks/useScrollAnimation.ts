"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = "-10%"
  } = options;
  
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: rootMargin,
    amount: threshold
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    const checkHashAnimation = () => {
      if (window.location.hash && ref.current) {
        const targetId = window.location.hash.slice(1);
        const element = document.getElementById(targetId);
        
        if (element && ref.current.contains(element)) {
          setTimeout(() => {
            setHasAnimated(false);
            setTimeout(() => {
              setHasAnimated(true);
            }, 100);
          }, 100);
        }
      }
    };

    checkHashAnimation();
    
    window.addEventListener('hashchange', checkHashAnimation);
    return () => window.removeEventListener('hashchange', checkHashAnimation);
  }, []);

  return {
    ref,
    isInView: hasAnimated || isInView,
    hasAnimated
  };
}

export function forceAnimationTrigger() {
  const elements = document.querySelectorAll('[data-animation-trigger]');
  elements.forEach((element) => {
    const event = new CustomEvent('animation-retrigger');
    element.dispatchEvent(event);
  });
}