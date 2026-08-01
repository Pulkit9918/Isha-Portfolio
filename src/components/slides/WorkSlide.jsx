const projects = [
  { name: "Project One", type: "Brand Launch", result: "+240%", metric: "follower growth" },
  { name: "Project Two", type: "Event Campaign", result: "88K+", metric: "organic views" },
  { name: "Project Three", type: "Mock Campaign", result: "3.4x", metric: "return on ad spend" },
  { name: "Project Four", type: "Content System", result: "6.8%", metric: "avg. engagement" },
];

export default function WorkSlide() {
  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
      <p className="a text-sm font-medium text-coral" style={{ "--i": 0 }}>Featured work</p>
      <h2 className="a mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl" style={{ "--i": 1 }}>
        Selected projects.
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.name} className="a a-s lift glass flex items-center justify-between gap-6 rounded-3xl p-6" style={{ "--i": i + 2 }}>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate">{p.type}</p>
              <h3 className="mt-2 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate">{p.metric}</p>
            </div>
            <p className="font-display text-5xl font-semibold tracking-tight text-coral">{p.result}</p>
          </article>
        ))}
      </div>
    </div>
  );
}