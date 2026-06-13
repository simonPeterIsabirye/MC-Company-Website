'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function AboutWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement?.clientHeight || 600;

    const resize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    window.addEventListener('resize', resize);

    // Particles: dots
    const numParticles = 180;
    const particles = Array.from({ length: numParticles }).map(() => ({
      x: Math.random() * width,
      y: 0, // This will be dynamic
      speed: 0.5 + Math.random() * 0.5,
      amp: 20 + Math.random() * 40,
      freq: 0.005 + Math.random() * 0.005,
      offset: Math.random() * Math.PI * 2,
    }));

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speed;
        if (p.x > width) p.x = 0;
        
        // Sine wave pattern
        const y = (height / 2) + Math.sin(p.x * p.freq + p.offset) * p.amp;
        
        ctx.fillStyle = 'rgba(96, 165, 250, 0.5)'; // blue-400 with opacity
        ctx.beginPath();
        ctx.arc(p.x, y, 0.8, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
