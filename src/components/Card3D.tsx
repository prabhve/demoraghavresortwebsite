import React, { useRef, useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'gold' | 'emerald' | 'cyan' | 'ruby' | 'navy';
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  glowColor = 'gold',
  depth = 8
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -depth;
    const rotY = ((x - centerX) / centerX) * depth;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const getGlowBorder = () => {
    switch (glowColor) {
      case 'emerald':
        return isHovered 
          ? 'shadow-[0_12px_30px_rgba(5,150,105,0.2)] border-emerald-500/60 ring-1 ring-emerald-500/20' 
          : 'border-emerald-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.35)]';
      case 'cyan':
        return isHovered 
          ? 'shadow-[0_12px_30px_rgba(6,182,212,0.2)] border-cyan-400/60 ring-1 ring-cyan-400/20' 
          : 'border-cyan-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.35)]';
      case 'ruby':
        return isHovered 
          ? 'shadow-[0_12px_30px_rgba(244,63,94,0.2)] border-rose-400/60 ring-1 ring-rose-400/20' 
          : 'border-rose-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.35)]';
      case 'navy':
        return isHovered 
          ? 'shadow-[0_12px_30px_rgba(245,158,11,0.2)] border-amber-400/60 ring-1 ring-amber-400/20' 
          : 'border-amber-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.35)]';
      case 'gold':
      default:
        return isHovered 
          ? 'shadow-[0_12px_30px_rgba(245,158,11,0.22)] border-amber-400/60 ring-1 ring-amber-400/20' 
          : 'border-amber-500/25 shadow-[0_4px_16px_rgba(0,0,0,0.35)]';
    }
  };

  return (
    <div
      className="perspective-1000 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className={`relative transition-all duration-200 ease-out preserve-3d rounded-2xl border ${getGlowBorder()} ${className}`}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px) scale3d(1.01, 1.01, 1.01)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)',
          willChange: 'transform'
        }}
      >
        {/* Dynamic subtle reflection glare highlight */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-opacity duration-300 opacity-20 mix-blend-soft-light"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)`
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
};
