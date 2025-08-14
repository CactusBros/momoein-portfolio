"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const BackgroundShine = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1, y: -1 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const shineStyle = {
    background:
      mousePosition.x > 0
        ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 45, 45, 0.1), transparent 80%)`
        : 'transparent',
  };
  
  const darkShineStyle = {
    background:
      mousePosition.x > 0
        ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.04), transparent 80%)`
        : 'transparent',
  };

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition duration-300" 
      style={theme === 'dark' ? darkShineStyle : shineStyle}
    />
  );
};

export default BackgroundShine;
