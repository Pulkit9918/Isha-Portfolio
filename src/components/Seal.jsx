export default function Seal({ id = "seal", text = "SOCIAL MEDIA · STRATEGY · CONTENT · COMMUNITY · ", className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id={id} fill="none" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fill="currentColor" fontSize="13" fontWeight="700" letterSpacing="3.5">
        <textPath href={`#${id}`}>{text}</textPath>
      </text>
    </svg>
  );
}