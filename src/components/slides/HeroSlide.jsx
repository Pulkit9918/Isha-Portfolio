export default function HeroSlide() {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
      <span className="a inline-flex w-fit items-center gap-2 rounded-full border border-line bg-cloud/60 px-4 py-1.5 text-xs font-medium text-slate backdrop-blur" style={{ "--i": 0 }}>
        <span className="h-1.5 w-1.5 rounded-full bg-coral" /> Open for projects · Aug 2026
      </span>
      <h1 className="a kinetic mt-7 text-[11vw] leading-[0.85] sm:text-8xl" style={{ "--i": 1 }}>
        Social media
      </h1>
      <p className="a a-l kinetic text-[11vw] leading-[0.85] text-coral sm:text-8xl" style={{ "--i": 2 }}>
        with a plan.
      </p>
      <p className="a mt-8 max-w-md text-lg leading-relaxed text-slate" style={{ "--i": 3 }}>
        I&apos;m Isha — a social strategist who helps brands stop posting
        randomly and start showing up with purpose.
      </p>
    </div>
  );
}