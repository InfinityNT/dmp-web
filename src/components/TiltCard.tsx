"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * 3D hover-tilt card. Tracks the cursor and tilts the surface toward it
 * (the upper corner under the pointer lifts back), with a soft petrol glow
 * that grows on hover. Pure Framer Motion — no extra dependency.
 */
export function TiltCard({
  children,
  className,
  max = 9,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
  glow?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 220, damping: 22 });
  const sy = useSpring(py, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div style={{ perspective: 1100 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformStyle: "preserve-3d" }}
        whileHover={reduce ? undefined : { scale: 1.025 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="tilt-inner"
      >
        {children}
        {glow && <span aria-hidden className="tilt-glow" />}
      </motion.div>
    </div>
  );
}
