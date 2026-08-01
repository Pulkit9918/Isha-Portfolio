"use client";

import { useEffect, useRef, useState } from "react";

function Stat({ end, suffix, decimals = 0, label, idx, live }) {
  const [v, setV] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!live || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1500, 1);
      setV(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [live, end]);
  return (
    <div className="a a-s glass rounded-3xl px-6 py-10 text-center" style={{ "--i": idx + 1 }}>
      <p className="font-display text-6xl font-semibold tracking-tight text-coral">{v.toFixed(decimals)}{suffix}</p>
      <p className="mt-3 text-sm text-slate">{label}</p>
    </div>
  );
}

export default function ResultsSlide({ live }) {
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center text-center">
      <h2 className="a font-display text-3xl font-semibold tracking-tight sm:text-5xl" style={{ "--i": 0 }}>
        Numbers that moved.
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <Stat end={88} suffix="K+" label="organic views" idx={0} live={live} />
        <Stat end={1.7} suffix="K+" decimals={1} label="interactions" idx={1} live={live} />
        <Stat end={150} suffix="+" label="event attendees" idx={2} live={live} />
      </div>
    </div>
  );
}