"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DURATION = 9000;

export default function Player({ frames }) {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [autoOff, setAutoOff] = useState(false);
  const [indexOpen, setIndexOpen] = useState(false);

  const raf = useRef(0);
  const elapsed = useRef(0);
  const last = useRef(0);
  const hold = useRef(0);
  const start = useRef({ x: 0, y: 0 });
  const stageRef = useRef(null);

  const go = useCallback((n) => {
    const next = ((n % frames.length) + frames.length) % frames.length;
    setIdx((cur) => {
      if (next === cur) return cur;
      elapsed.current = 0;
      setProgress(0);
      return next;
    });
  }, [frames.length]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutoOff(mq.matches);
    const onChange = (e) => setAutoOff(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const h = window.location.hash.replace("#", "");
      if (!h) return;
      const byNum = parseInt(h, 10);
      const found = frames.findIndex((f) => f.id === h);
      if (found >= 0) go(found);
      else if (!Number.isNaN(byNum)) go(byNum - 1);
    });
    return () => cancelAnimationFrame(id);
  }, [frames, go]);

  useEffect(() => {
    const f = frames[idx];
    if (f) window.history.replaceState(null, "", `#${f.id}`);
  }, [idx, frames]);

  useEffect(() => {
    if (paused || autoOff || indexOpen) return;
    last.current = performance.now();
    const tick = (now) => {
      const dt = now - last.current;
      last.current = now;
      elapsed.current += dt;
      const p = Math.min(elapsed.current / DURATION, 1);
      setProgress(p);
      if (p >= 1) {
        elapsed.current = 0;
        setProgress(0);
        setIdx((c) => (c + 1) % frames.length);
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [paused, autoOff, indexOpen, frames.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setIndexOpen(false); return; }
      if (e.key.toLowerCase() === "c") { setIndexOpen((o) => !o); return; }
      if (indexOpen) return;
      if (e.key === "ArrowRight") go(idx + 1);
      else if (e.key === "ArrowLeft") go(idx - 1);
      else if (e.key === " ") setPaused((p) => !p);
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, go, indexOpen]);

  const onPointerMove = (e) => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
    el.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
  };

  const down = (e) => {
    start.current = { x: e.clientX, y: e.clientY };
    hold.current = window.setTimeout(() => setPaused(true), 260);
  };

  const up = (dir) => (e) => {
    clearTimeout(hold.current);
    const dx = e.clientX - start.current.x;
    if (Math.abs(dx) > 60) { go(idx + (dx < 0 ? 1 : -1)); return; }
    if (paused) { setPaused(false); return; }
    go(idx + dir);
  };

  const frame = frames[idx];

  return (
    <main
      ref={stageRef}
      onPointerMove={onPointerMove}
      className={`grain relative h-screen w-screen overflow-hidden ${frame.bg} ${frame.fg}`}
    >
      <div className="halftone pointer-events-none absolute inset-0" />
      <span className="crop crop-tl" />
      <span className="crop crop-tr" />
      <span className="crop crop-bl" />
      <span className="crop crop-br" />

      <div className="absolute inset-x-0 top-0 z-40 flex gap-1.5 px-4 py-3">
        {frames.map((f, i) => (
          <button key={f.id} onClick={() => go(i)} aria-label={f.label} className="h-1 flex-1 overflow-hidden rounded-full bg-current/20">
            <span className="block h-full bg-current transition-[width] duration-100" style={{ width: i < idx ? "100%" : i === idx ? `${progress * 100}%` : "0%" }} />
          </button>
        ))}
      </div>

      <div className="absolute inset-x-0 top-8 z-40 flex items-center justify-between px-6 text-[10px] uppercase tracking-[0.3em] opacity-70">
        <span className="pointer-events-none">Isha · Issue 01</span>
        <button onClick={() => setIndexOpen(true)} className="underline-offset-4 hover:underline">
          {String(idx + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")} · index
        </button>
      </div>

      {frames.map((f, i) => (
        <div key={f.id} className={`fr ${i === idx ? "live" : ""} ${i < idx ? "before" : ""}`}>
          <div className="flex h-full w-full items-center justify-center px-6 py-24">
            {f.content}
          </div>
        </div>
      ))}

      <button className="absolute inset-y-0 left-0 z-30 w-1/3 cursor-w-resize" aria-label="Previous" onPointerDown={down} onPointerUp={up(-1)} onPointerLeave={() => clearTimeout(hold.current)} />
      <button className="absolute inset-y-0 right-0 z-30 w-2/3 cursor-e-resize" aria-label="Next" onPointerDown={down} onPointerUp={up(1)} onPointerLeave={() => clearTimeout(hold.current)} />

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-40 flex items-center justify-between px-6 text-[10px] uppercase tracking-[0.28em] opacity-60">
        <span>{paused ? "paused · tap to resume" : "tap · hold to pause · swipe"}</span>
        <span className="hidden sm:block">← → · C for index</span>
      </div>

      {indexOpen && (
        <div className="absolute inset-0 z-50 bg-ink/95 px-6 py-16 text-paper">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-baseline justify-between">
              <h2 className="font-display text-4xl font-black uppercase tracking-tight">Contents</h2>
              <button onClick={() => setIndexOpen(false)} className="text-[10px] uppercase tracking-[0.3em] opacity-70 hover:opacity-100">
                close ✕
              </button>
            </div>
            <ol className="mt-8">
              {frames.map((f, i) => (
                <li key={f.id}>
                  <button onClick={() => { go(i); setIndexOpen(false); }} className="group flex w-full items-center gap-5 border-b border-paper/15 py-4 text-left">
                    <span className={`h-8 w-8 shrink-0 border border-paper/30 ${f.bg}`} />
                    <span className="font-display text-lg font-black text-ochre">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-xl transition group-hover:translate-x-1">{f.label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </main>
  );
}