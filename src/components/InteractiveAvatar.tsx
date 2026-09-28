import React, { useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';
// @ts-ignore
import avatarImg from '../assets/images/jeshfique_avatar_1784971428930.jpg';
import { ShieldCheck, RotateCw } from 'lucide-react';

export const InteractiveAvatar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Smooth motion springs for gentle, controlled 3D rotation and tilt
  const rotationY = useSpring(0, { stiffness: 50, damping: 22 });
  const rotationX = useSpring(0, { stiffness: 50, damping: 22 });

  const prevMouseXRef = useRef<number | null>(null);
  const currentAngleRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const relativeX = currentX / rect.width; // 0 (left) to 1 (right)
    const relativeY = (e.clientY - rect.top) / rect.height; // 0 (top) to 1 (bottom)

    if (prevMouseXRef.current !== null) {
      const deltaX = currentX - prevMouseXRef.current;
      // Smooth, controlled Y rotation on mouse move
      currentAngleRef.current += deltaX * 0.6;
      rotationY.set(currentAngleRef.current);
    } else {
      // Set initial angle based on entrance position
      currentAngleRef.current = (1 - relativeX) * 180;
      rotationY.set(currentAngleRef.current);
    }

    prevMouseXRef.current = currentX;

    // Gentle vertical tilt
    const tiltX = (relativeY - 0.5) * -10;
    rotationX.set(tiltX);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    prevMouseXRef.current = currentX;
    
    // Quick 360 turn impulse on enter
    currentAngleRef.current += 360;
    rotationY.set(currentAngleRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    prevMouseXRef.current = null;
    // Smooth snap back to nearest 360 multiple (upright facing front)
    const targetAngle = Math.round(currentAngleRef.current / 360) * 360;
    currentAngleRef.current = targetAngle;
    rotationY.set(targetAngle);
    rotationX.set(0);
  };

  const triggerManualSpin = () => {
    currentAngleRef.current += 360;
    rotationY.set(currentAngleRef.current);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer Glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-indigo-500/20 rounded-full blur-2xl transform scale-110 pointer-events-none animate-pulse" />

      {/* Interactive 3D Card Wrapper */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={triggerManualSpin}
        className="relative group cursor-pointer select-none py-2"
        style={{ perspective: '1200px' }}
      >
        {/* 360 Badge Indicator */}
        <motion.div
          animate={{
            y: isHovered ? -4 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-slate-950/90 border border-amber-500/40 shadow-lg backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-amber-300 font-semibold tracking-wider whitespace-nowrap"
        >
          <RotateCw className={`w-3 h-3 text-amber-400 ${isHovered ? 'animate-spin' : ''}`} />
          <span>{isHovered ? 'Spinning 360°' : 'Hover / Swipe 360°'}</span>
        </motion.div>

        {/* Rotatable 3D Container */}
        <motion.div
          style={{
            rotateY: rotationY,
            rotateX: rotationX,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 p-1 shadow-2xl shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow duration-300"
        >
          {/* Inner Frame */}
          <div className="relative w-full h-full rounded-[22px] bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800">
            {/* Avatar Image */}
            <img
              src={avatarImg}
              alt="Jeshfique Mahmud Avatar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[20px] transform group-hover:scale-105 transition-transform duration-300"
            />

            {/* Specular Light Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Bottom Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Profile Label below avatar */}
        <div className="mt-4 text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold text-white shadow-md">
            <span>Jeshfique Mahmud</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          </div>
          <p className="text-[11px] font-mono text-amber-400/90">
            Blockchain & C++ | AI & Full-Stack
          </p>
        </div>
      </div>
    </div>
  );
};
