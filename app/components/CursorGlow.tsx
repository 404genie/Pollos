"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef({ x: -100, y: -100 });
  const rAFRef = useRef<number | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${positionRef.current.x}px`;
        cursorRef.current.style.top = `${positionRef.current.y}px`;
      }
      rAFRef.current = null;
    };

    const move = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (rAFRef.current === null) {
        rAFRef.current = window.requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (rAFRef.current !== null) {
        window.cancelAnimationFrame(rAFRef.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="pollos-cursor hidden md:block" />;
}