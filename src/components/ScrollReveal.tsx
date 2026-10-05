import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | '3d-flip' | 'zoom' | 'stagger-container';
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.65,
  className = '',
  viewportMargin = '-60px',
  ...rest
}) => {
  const getVariants = () => {
    switch (animation) {
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -35 },
          visible: { opacity: 1, y: 0 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case '3d-flip':
        return {
          hidden: { opacity: 0, rotateX: 18, y: 45, scale: 0.94 },
          visible: { opacity: 1, rotateX: 0, y: 0, scale: 1 }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.88, y: 20 },
          visible: { opacity: 1, scale: 1, y: 0 }
        };
      case 'stagger-container':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
              delayChildren: delay
            }
          }
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier easing
      }}
      className={`perspective-1000 ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
};
