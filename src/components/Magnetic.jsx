"use client";

import { useRef } from "react";

export default function Magnetic({ children, className = "" }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - (r.left + r.width / 2)) * 0.35}px, ${(e.clientY - (r.top + r.height / 2)) * 0.35}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={reset} className={`magnetic inline-block transition-transform duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
}