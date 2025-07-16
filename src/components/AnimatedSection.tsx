"use client";

import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  id?: string;
}

const animationVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  id
}: AnimatedSectionProps) {
  const { ref, isInView } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-10%"
  });
  
  const [forceVisible, setForceVisible] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleRetrigger = () => {
      setForceVisible(false);
      setTimeout(() => setForceVisible(true), 50);
    };
    
    element.addEventListener('animation-retrigger', handleRetrigger);
    
    return () => {
      element.removeEventListener('animation-retrigger', handleRetrigger);
    };
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView || forceVisible ? "visible" : "hidden"}
      variants={animationVariants[direction]}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut"
      }}
      data-animation-trigger
    >
      {children}
    </motion.div>
  );
}