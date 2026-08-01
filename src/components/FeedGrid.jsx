import Image from "next/image";

export default function FeedGrid({ handle, name, bio, stats, posts }) {
  return (
    <div className="w-full max-w-sm border-2 border-current bg-paper text-ink">
      <div className="flex items-center gap-4 border-b border-ink/20 p-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-blood">
          <Image src="/isha.jpg" alt={name} fill className="object-cover" sizes="64px" />
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-black">{handle}</p>
          <div className="mt-1 flex gap-4 text-[10px] uppercase tracking-wide">
            {stats.map((s) => (
              <span key={s[1]}>
                <strong className="font-display text-xs">{s[0]}</strong> {s[1]}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-ink/20 px-4 py-3">
        <p className="font-display text-xs font-black">{name}</p>
        <p className="mt-1 text-[11px] leading-snug opacity-75">{bio}</p>
      </div>

      <div className="grid grid-cols-3 gap-px bg-ink/20">
        {posts.map((p, i) => (
          <div key={i} className={`relative aspect-square ${p.tone}`}>
            {p.src ? (
              <Image src={p.src} alt={p.label} fill className="object-cover" sizes="120px" />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center p-2 text-center text-[9px] font-semibold uppercase leading-tight tracking-wide">
                {p.label}
              </span>
            )}
            {p.pin ? (
              <span className="absolute right-1 top-1 text-[9px] opacity-70">📌</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}