export default function Availability({ status = "Open for projects", when = "August 2026" }) {
  return (
    <span className="inline-flex items-center gap-2.5 border-2 border-current px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
      </span>
      {status} · {when}
    </span>
  );
}