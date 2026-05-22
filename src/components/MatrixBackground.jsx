import React, { useEffect, useRef } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 70;
    const connectionDistance = 120;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.3 + 0.15; // Slow downward flow
        this.alpha = Math.random() * 0.5 + 0.15;
        this.pulse = Math.random() * 0.015 + 0.005;
        this.pulseDir = 1;
        this.color = Math.random() > 0.55 ? 'rgba(6, 182, 212, ' : 'rgba(168, 85, 247, ';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        this.alpha += this.pulse * this.pulseDir;
        if (this.alpha > 0.65 || this.alpha < 0.1) {
          this.pulseDir *= -1;
        }

        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.alpha + ')';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            grad.addColorStop(0, particles[i].color.includes('6') ? `rgba(6, 182, 212, ${alpha})` : `rgba(168, 85, 247, ${alpha})`);
            grad.addColorStop(1, particles[j].color.includes('6') ? `rgba(6, 182, 212, ${alpha})` : `rgba(168, 85, 247, ${alpha})`);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw faint cybernetic background gradient
      const gradBg = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 100, 
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradBg.addColorStop(0, '#030303');
      gradBg.addColorStop(0.5, '#050508');
      gradBg.addColorStop(1, '#020202');
      ctx.fillStyle = gradBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden bg-[#030303]">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      {/* Absolute grid overlay */}
      <div className="absolute inset-0 bg-repeat cyber-grid opacity-[0.22] mask-fade-b" />
      {/* Top and side ambient lights */}
      <div className="absolute top-[-10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />
    </div>
  );
}
