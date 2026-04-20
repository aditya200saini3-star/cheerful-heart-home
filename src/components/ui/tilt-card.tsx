import * as React from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
  glareOpacity?: number;
}

const TiltCard = React.forwardRef<HTMLDivElement, TiltCardProps>(
  ({ className, children, intensity = 12, glareOpacity = 0.18, style, ...props }, ref) => {
    const innerRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement);

    const rafRef = React.useRef<number | null>(null);
    const targetRef = React.useRef({ rx: 0, ry: 0, gx: 50, gy: 50, scale: 1 });
    const currentRef = React.useRef({ rx: 0, ry: 0, gx: 50, gy: 50, scale: 1 });

    const tick = React.useCallback(() => {
      const el = innerRef.current;
      if (!el) return;
      const t = targetRef.current;
      const c = currentRef.current;
      const ease = 0.12;
      c.rx += (t.rx - c.rx) * ease;
      c.ry += (t.ry - c.ry) * ease;
      c.gx += (t.gx - c.gx) * ease;
      c.gy += (t.gy - c.gy) * ease;
      c.scale += (t.scale - c.scale) * ease;

      el.style.transform = `perspective(1000px) rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg) scale(${c.scale.toFixed(3)})`;
      el.style.setProperty("--glare-x", `${c.gx.toFixed(2)}%`);
      el.style.setProperty("--glare-y", `${c.gy.toFixed(2)}%`);

      const stillMoving =
        Math.abs(t.rx - c.rx) > 0.01 ||
        Math.abs(t.ry - c.ry) > 0.01 ||
        Math.abs(t.scale - c.scale) > 0.001;
      if (stillMoving) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    }, []);

    const startLoop = React.useCallback(() => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
    }, [tick]);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = innerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      targetRef.current.ry = (px - 0.5) * intensity * 2;
      targetRef.current.rx = -(py - 0.5) * intensity * 2;
      targetRef.current.gx = px * 100;
      targetRef.current.gy = py * 100;
      targetRef.current.scale = 1.02;
      startLoop();
    };

    const handleLeave = () => {
      targetRef.current.rx = 0;
      targetRef.current.ry = 0;
      targetRef.current.scale = 1;
      targetRef.current.gx = 50;
      targetRef.current.gy = 50;
      startLoop();
    };

    React.useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);

    return (
      <div
        ref={innerRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={cn("tilt-card", className)}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
          transition: "box-shadow 0.4s ease",
          ...style,
        }}
        {...props}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 tilt-card-glare"
          style={{
            background: `radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), hsl(0 0% 100% / ${glareOpacity}), transparent 55%)`,
            mixBlendMode: "screen",
          }}
        />
        <div style={{ transform: "translateZ(40px)" }} className="relative h-full w-full">
          {children}
        </div>
      </div>
    );
  }
);
TiltCard.displayName = "TiltCard";

export { TiltCard };
