const services = [
  { title: "Social Media Management", body: "Content built around goals, audience behavior, and platform trends." },
  { title: "Strategic Planning", body: "Calendars and community management that keep the brand consistent." },
  { title: "Content & Editing", body: "Reels, carousels, and video designed to stop the scroll." },
  { title: "Brand Positioning", body: "Saying one clear thing, better than anyone in the feed." },
  { title: "Analytics", body: "Turning what happened into next month's decisions." },
  { title: "Paid Social", body: "Meta and TikTok campaigns against real targets." },
];

export default function ServicesSlide() {
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
      <p className="a text-sm font-medium text-coral" style={{ "--i": 0 }}>What I do</p>
      <h2 className="a mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl" style={{ "--i": 1 }}>
        Everything a brand needs to show up well online.
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="a a-s glass rounded-2xl p-5" style={{ "--i": i + 2 }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral/15 text-coral">
              <span className="h-2 w-2 rounded-full bg-coral" />
            </div>
            <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}