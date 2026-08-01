const steps = [
  ["Problem", "The feed was inconsistent and the audience wasn't growing."],
  ["Insight", "People follow brands that talk back, not brands that broadcast."],
  ["Approach", "Reels-led content, a fixed posting rhythm, and daily replies."],
  ["Result", "The brand's best-performing month on record."],
];

export default function CaseSlide() {
  return (
    <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
      <p className="a text-sm font-medium text-coral" style={{ "--i": 0 }}>Case study</p>
      <h2 className="a mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl" style={{ "--i": 1 }}>
        Project One
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {steps.map(([k, v], i) => (
          <div key={k} className="a a-r lift glass rounded-2xl p-5" style={{ "--i": i + 2 }}>
            <p className="text-xs font-semibold uppercase tracking-wide text-coral">{k}</p>
            <p className="mt-2 leading-relaxed text-ink">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}