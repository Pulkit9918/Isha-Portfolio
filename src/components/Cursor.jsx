"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = dot.current;
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y, raf = 0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const over = (e) => {
      if (e.target.closest("a, button, .magnetic")) el.classList.add("big");
      else el.classList.remove("big");
    };
    const loop = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("pointermove", move);
    addEventListener("pointerover", over);
    raf = requestAnimationFrame(loop);
    return () => { removeEventListener("pointermove", move); removeEventListener("pointerover", over); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={dot} className="cursor-dot" aria-hidden="true" />;
}