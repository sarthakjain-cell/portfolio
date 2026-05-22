import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (hidden) setHidden(false);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.closest('.interactive-cursor') ||
        target.classList.contains('interactive-cursor');

      if (isInteractive) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrameId;
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hidden]);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] bg-cyan-400 rounded-full pointer-events-none z-50 transition-opacity duration-300 hidden md:block ${
          hidden ? 'opacity-0' : 'opacity-100'
        } ${clicked ? 'scale-75' : ''}`}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-cyan-400/40 pointer-events-none z-50 transition-all duration-300 hidden md:block ${
          hidden ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
        } ${clicked ? 'scale-90 border-cyan-300 bg-cyan-500/10' : ''} ${
          hovered ? 'scale-[1.8] border-purple-400 bg-purple-500/10' : ''
        }`}
        style={{
          boxShadow: hovered 
            ? '0 0 20px rgba(168, 85, 247, 0.25)' 
            : '0 0 10px rgba(6, 182, 212, 0.1)'
        }}
      />
    </>
  );
}
