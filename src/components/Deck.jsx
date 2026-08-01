"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BackgroundScene from "@/components/BackgroundScene";
import Loader from "@/components/Loader";
import HeroSlide from "@/components/slides/HeroSlide";
import ServicesSlide from "@/components/slides/ServicesSlide";
import WorkSlide from "@/components/slides/WorkSlide";
import CaseSlide from "@/components/slides/CaseSlide";
import ResultsSlide from "@/components/slides/ResultsSlide";
import ContactSlide from "@/components/slides/ContactSlide";

const SLIDES = [
  { id: "intro", label: "Intro", C: HeroSlide },
  { id: "services", label: "Services", C: ServicesSlide },
  { id: "work", label: "Work", C: WorkSlide },
  { id: "case", label: "Case study", C: CaseSlide },
  { id: "results", label: "Results", C: ResultsSlide },
  { id: "contact", label: "Contact", C: ContactSlide },
];

export default function Deck() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const lock = useRef(false);
  const touchX = useRef(0);

  const go = useCallback((next) => {
    setActive(Math.min(Math.max(next, 0), SLIDES.length - 1));
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (lock.current) return;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 8) return;
      lock.current = true;
      go(active + (delta > 0 ? 1 : -1));
      setTimeout(() => { lock.current = false; }, 950);
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [active, go]);

  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { go(active + 1); e.preventDefault(); }
      else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { go(active - 1); e.preventDefault(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  useEffect(() => {
    const start = (e) => { touchX.current = e.touches[0].clientX; };
    const end = (e) => {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
    };
    window.addEventListener("touchstart", start, { passive: true });
    window.addEventListener("touchend", end, { passive: true });
    return () => {
      window.removeEventListener("touchstart", start);
      window.removeEventListener("touchend", end);
    };
  }, [active, go]);

  const progress = SLIDES.length > 1 ? active / (SLIDES.length - 1) : 0;

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <BackgroundScene activeRef={active} count={SLIDES.length} />

      <div className="fixed inset-x-0 top-0 z-40 h-[3px]">
        <div className="h-full bg-coral transition-[width] duration-500" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="viewport content">
        <div className="track" style={{ transform: `translateX(-${active * 100}vw)` }}>
          {SLIDES.map((s, i) => {
            const Comp = s.C;
            return (
              <section key={s.id} id={s.id} className={`slide ${i === active && loaded ? "live" : ""}`}>
                <Comp live={i === active && loaded} />
              </section>
            );
          })}
        </div>
      </div>

      {/* dot rail */}
      <nav className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={s.label}
            className={`rounded-full transition-all duration-300 ${i === active ? "h-[3px] w-7 bg-coral" : "h-[3px] w-[3px] bg-ink/30 hover:bg-ink/60"}`}
          />
        ))}
      </nav>

      {/* scroll hint on first slide */}
      {active === 0 && loaded && (
        <div className="hint pointer-events-none fixed bottom-6 right-8 z-40 text-xs uppercase tracking-[0.3em] text-slate">
          scroll →
        </div>
      )}

      <div className="fixed left-6 top-5 z-40 font-display text-lg font-semibold tracking-tight" style={{ mixBlendMode: "difference", color: "#fff" }}>
        Isha
      </div>
    </>
  );
}