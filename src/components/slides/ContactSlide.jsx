import Magnetic from "@/components/Magnetic";

const socials = ["Instagram", "LinkedIn", "TikTok", "Resume"];

export default function ContactSlide() {
  return (
    <div className="glass mx-auto w-full max-w-3xl rounded-[2rem] px-8 py-14 text-center">
      <h2 className="a font-display text-3xl font-semibold tracking-tight sm:text-5xl" style={{ "--i": 0 }}>
        Let&apos;s build something
        <br />
        worth following.
      </h2>
      <p className="a mx-auto mt-5 max-w-md text-slate" style={{ "--i": 1 }}>
        Available for freelance projects and full-time roles.
      </p>
      <div className="a mt-8" style={{ "--i": 2 }}>
        <Magnetic>
          <a href="mailto:hello@example.com" className="block rounded-full bg-coral px-8 py-4 text-sm font-medium text-cloud transition hover:bg-ink">
            hello@example.com
          </a>
        </Magnetic>
      </div>
      <div className="a mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate" style={{ "--i": 3 }}>
        {socials.map((s) => (
          <a key={s} href="#" className="transition hover:text-coral">{s}</a>
        ))}
      </div>
    </div>
  );
}