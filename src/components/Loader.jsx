"use client";

import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => { setDone(true); onDone?.(); }, 2100);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className={`loader ${done ? "done" : ""}`}>
      <div className="relative flex flex-col items-center">
        <svg className="loader-ring" width="110" height="110" viewBox="0 0 110 110">
          <circle cx="55" cy="55" r="48" />
        </svg>
        <span className="loader-word absolute font-display text-2xl font-semibold tracking-tight">Isha</span>
      </div>
    </div>
  );
}