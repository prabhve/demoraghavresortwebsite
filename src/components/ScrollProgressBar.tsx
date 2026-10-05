import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3.5px] bg-amber-100/30 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 shadow-[0_0_12px_rgba(245,158,11,0.7)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
};
