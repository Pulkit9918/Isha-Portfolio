import Image from "next/image";
import CountUp from "@/components/CountUp";
import Seal from "./Seal";
import FeedGrid from "@/components/FeedGrid";
import Availability from "@/components/Availability";

const plate = "relative border-2 border-current p-8";

export const FRAMES = [
  {
    id: "cover",
    label: "Cover",
    bg: "bg-paper",
    fg: "text-blood",
    content: (
      <div className="relative w-full max-w-4xl text-center">
        <p className="el text-[11px] uppercase tracking-[0.45em] text-ink/60" style={{ "--i": 0 }}>
          Independent Issue · No. 01
        </p>
        <h1 className="el misreg mt-8 font-display text-[16vw] font-black uppercase leading-[0.78] tracking-tight text-ink sm:text-[9rem]" style={{ "--i": 1 }}>
          Socials
        </h1>
        <p className="el el-l font-display text-4xl italic sm:text-6xl" style={{ "--i": 2 }}>
          by Isha
        </p>
        <div className="el mx-auto mt-10 h-px w-40 bg-current" style={{ "--i": 3 }} />
        <p className="el mt-6 text-xs uppercase tracking-[0.35em] text-ink/60" style={{ "--i": 4 }}>
          Strategy · Content · Community
        </p>
        <div className="animate-slowspin absolute -right-6 top-0 hidden h-32 w-32 text-ochre sm:block"><Seal id="cover-seal" /></div>
      </div>
    ),
  },
  {
    id: "letter",
    label: "Letter",
    bg: "bg-blood",
    fg: "text-paper",
    content: (
      <div className="grid w-full max-w-5xl gap-10 sm:grid-cols-2 sm:items-center">
        <div className="el el-l relative" style={{ "--i": 0 }}>
          <span className="tape -top-3 left-8 -rotate-3" />
          <span className="tape -bottom-3 right-8 rotate-2" />
          <div className="relative aspect-[4/5] w-full">
            <Image src="/isha.jpg" alt="Isha" fill priority className="object-cover" sizes="(max-width:640px) 90vw, 40vw" />
          </div>
        </div>
        <div>
          <p className="el text-[11px] uppercase tracking-[0.4em] opacity-70" style={{ "--i": 1 }}>
            From the desk
          </p>
          <h2 className="el mt-4 font-display text-5xl font-black leading-[0.9] sm:text-6xl" style={{ "--i": 2 }}>
            Hi, I&apos;m Isha.
          </h2>
          <p className="el mt-6 text-base leading-relaxed opacity-85" style={{ "--i": 3 }}>
            I help brands stop posting randomly and start showing up with
            purpose — turning scattered content into a system that compounds.
          </p>
          <p className="el mt-4 text-base leading-relaxed opacity-85" style={{ "--i": 4 }}>
            Strategy through execution: planning, creative, community, and the
            reporting that tells you what actually worked.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "manifesto",
    label: "Manifesto",
    bg: "bg-ochre",
    fg: "text-ink",
    content: (
      <div className="w-full max-w-4xl">
        <p className="el font-display text-3xl italic opacity-70" style={{ "--i": 0 }}>
          Most brands post randomly.
        </p>
        <p className="el misreg-2 font-display text-[15vw] font-black uppercase leading-[0.78] tracking-tight sm:text-[9rem]" style={{ "--i": 1 }}>
          Almost
          <br />
          none plan
        </p>
        <p className="el font-display text-3xl italic opacity-70" style={{ "--i": 2 }}>
          on purpose.
        </p>
        <p className="el mt-10 border-t-2 border-current pt-6 text-sm font-semibold uppercase tracking-[0.2em]" style={{ "--i": 3 }}>
          Good content gets attention · Strategic content builds brands
        </p>
      </div>
    ),
  },
  {
    id: "contents",
    label: "Services",
    bg: "bg-paper",
    fg: "text-ink",
    content: (
      <div className="w-full max-w-4xl">
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight text-blood sm:text-7xl" style={{ "--i": 0 }}>
          Contents
        </h2>
        <ol className="mt-10">
          {[
            ["01", "Social Media Management", "Content built around business goals and audience behavior."],
            ["02", "Strategic Planning", "Calendars and community management that stay consistent."],
            ["03", "Content & Editing", "Reels, carousels, and video built to stop the scroll."],
            ["04", "Brand Positioning", "Saying one clear thing, better than anyone in the feed."],
            ["05", "Analytics", "Turning what happened into next month's decisions."],
          ].map(([n, t, b], i) => (
            <li key={n} className="el el-l grid grid-cols-12 gap-4 border-b border-current/25 py-4" style={{ "--i": i + 1 }}>
              <span className="col-span-2 font-display text-xl font-black text-ochre sm:col-span-1">{n}</span>
              <h3 className="col-span-10 font-display text-lg font-bold sm:col-span-5 sm:text-xl">{t}</h3>
              <p className="col-span-12 text-sm leading-relaxed opacity-70 sm:col-span-6">{b}</p>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
  {
    id: "toolkit",
    label: "Toolkit",
    bg: "bg-teal",
    fg: "text-paper",
    content: (
      <div className="w-full max-w-4xl text-center">
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight sm:text-7xl" style={{ "--i": 0 }}>
          The toolkit
        </h2>
        <p className="el font-display text-3xl italic text-blush" style={{ "--i": 1 }}>
          what I work with
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["Canva", "CapCut", "Notion", "Meta Business Suite", "Buffer", "ChatGPT", "Pinterest", "Lightroom", "Figma", "Analytics", "InShot", "Later"].map((t, i) => (
            <span key={t} className="el el-s inline-block border-2 border-current px-5 py-2.5 text-sm font-semibold uppercase tracking-wide" style={{ "--i": i * 0.5 + 2, transform: `rotate(${(i % 4) - 1.5}deg)` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "work",
    label: "Work",
    bg: "bg-paper",
    fg: "text-ink",
    content: (
      <div className="w-full max-w-5xl">
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight text-blood sm:text-6xl" style={{ "--i": 0 }}>
          The plates
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["Project One", "Brand Launch", "+240%", "follower growth", "bg-blood text-paper", "-1.2deg"],
            ["Project Two", "Event Campaign", "88K+", "organic views", "bg-ochre text-ink", "1deg"],
            ["Project Three", "Mock Campaign", "3.4x", "return on ad spend", "bg-teal text-paper", "-0.6deg"],
          ].map(([name, type, res, metric, tone, rot], i) => (
            <article key={name} className={`el el-s ${plate} ${tone}`} style={{ "--i": i + 1, transform: `rotate(${rot})` }}>
              <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] opacity-70">{type}</p>
              <p className="mt-8 font-display text-5xl font-black leading-none">{res}</p>
              <p className="mt-1 text-xs opacity-75">{metric}</p>
              <h3 className="mt-8 font-display text-sm font-bold uppercase tracking-wide">{name}</h3>
            </article>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "feed",
    label: "The feed",
    bg: "bg-blush",
    fg: "text-ink",
    content: (
      <div className="grid w-full max-w-5xl items-center gap-10 sm:grid-cols-2">
        <div className="el el-l flex justify-center" style={{ "--i": 0 }}>
          <FeedGrid
            handle="@clientname"
            name="Client Name"
            bio="Independent studio · Vienna. Booking now ↓"
            stats={[["12.4K", "followers"], ["148", "posts"], ["6.8%", "eng."]]}
            posts={[
              { label: "Launch carousel", tone: "bg-blood text-paper", pin: true },
              { label: "Founder reel", tone: "bg-ochre text-ink" },
              { label: "Product hero", tone: "bg-teal text-paper" },
              { label: "UGC repost", tone: "bg-ink text-paper" },
              { label: "Behind the scenes", tone: "bg-blush text-ink" },
              { label: "Testimonial", tone: "bg-ochre text-ink" },
              { label: "Educational", tone: "bg-teal text-paper" },
              { label: "Event recap", tone: "bg-blood text-paper" },
              { label: "Poll / story", tone: "bg-ink text-paper" },
            ]}
          />
        </div>

        <div>
          <p className="el font-display text-3xl italic text-blood" style={{ "--i": 1 }}>
            the grid
          </p>
          <h2 className="el font-display text-5xl font-black uppercase leading-[0.88] tracking-tight" style={{ "--i": 2 }}>
            What it
            <br />
            looks like
          </h2>
          <p className="el mt-6 text-sm leading-relaxed opacity-80" style={{ "--i": 3 }}>
            A feed is a composition, not a queue. Colour rhythm across rows,
            alternating formats so nothing feels repetitive, and every third
            slot reserved for something that earns a save.
          </p>
          <ul className="el mt-6 space-y-2 text-sm" style={{ "--i": 4 }}>
            {[
              ["Rhythm", "Alternating dark, warm, and light so rows read as designed"],
              ["Formats", "Carousel, reel, still — never three of the same in a row"],
              ["Anchors", "Pinned posts carry the offer for first-time visitors"],
            ].map(([k, v]) => (
              <li key={k} className="border-l-2 border-blood pl-4">
                <strong className="font-display text-sm font-black uppercase">{k}</strong>
                <span className="block opacity-70">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "feature",
    label: "Case study",
    bg: "bg-blush",
    fg: "text-ink",
    content: (
      <div className="grid w-full max-w-5xl gap-10 sm:grid-cols-2">
        <div>
          <p className="el font-display text-3xl italic text-blood" style={{ "--i": 0 }}>
            the feature
          </p>
          <h2 className="el font-display text-6xl font-black uppercase leading-[0.85] tracking-tight sm:text-7xl" style={{ "--i": 1 }}>
            Project
            <br />
            One
          </h2>
          <dl className="el mt-8 space-y-2 text-sm" style={{ "--i": 2 }}>
            {[
              ["Client", "Client Name"],
              ["Industry", "Industry"],
              ["Platforms", "Instagram · TikTok · LinkedIn"],
              ["Cadence", "5 posts + daily stories"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-current/25 pb-2">
                <dt className="inline font-bold uppercase tracking-wide">{k}: </dt>
                <dd className="inline opacity-75">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="el el-r space-y-5 text-sm leading-relaxed" style={{ "--i": 3 }}>
          <div>
            <h3 className="font-display text-xl font-black uppercase text-blood">The goal</h3>
            <p className="mt-1 opacity-80">What the client needed — growth, a launch, a repositioning.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-black uppercase text-blood">The approach</h3>
            <p className="mt-1 opacity-80">The content pillars, the posting rhythm, and the formats that earned attention.</p>
          </div>
          <div>
            <h3 className="font-display text-xl font-black uppercase text-blood">My role</h3>
            <p className="mt-1 opacity-80">Strategy, copy, short-form editing, and daily community management.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "quote",
    label: "Pull quote",
    bg: "bg-teal",
    fg: "text-paper",
    wipe: "bg-blush",
    content: (
      <div className="w-full max-w-3xl text-center">
        <p className="el font-display text-7xl leading-none text-blush" style={{ "--i": 0 }}>&ldquo;</p>
        <blockquote className="el font-display text-3xl italic leading-snug sm:text-5xl" style={{ "--i": 1 }}>
          She turned our feed from a chore into the thing our customers actually
          look forward to.
        </blockquote>
        <p className="el mt-8 text-[11px] uppercase tracking-[0.35em] opacity-70" style={{ "--i": 2 }}>
          Client name · Role, Company
        </p>
      </div>
    ),
  },
  {
    id: "teardown",
    label: "Teardown",
    bg: "bg-ink",
    fg: "text-paper",
    content: (
      <div className="w-full max-w-5xl">
        <p className="el font-display text-3xl italic text-ochre" style={{ "--i": 0 }}>
          unsolicited
        </p>
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight sm:text-6xl" style={{ "--i": 1 }}>
          The teardown
        </h2>
        <p className="el mt-3 text-xs uppercase tracking-[0.25em] opacity-60" style={{ "--i": 2 }}>
          A brand I don&apos;t work for · what I&apos;d change
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="el el-l" style={{ "--i": 3 }}>
            <h3 className="font-display text-lg font-black uppercase text-blood">What&apos;s not working</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Every post is a product shot — no reason to follow rather than buy once.",
                "Captions announce; they never ask. Comment rate sits near zero.",
                "Reels are repurposed ads, so watch time drops off in the first two seconds.",
              ].map((t) => (
                <li key={t} className="border-l-2 border-blood pl-4 opacity-80">{t}</li>
              ))}
            </ul>
          </div>

          <div className="el el-r" style={{ "--i": 4 }}>
            <h3 className="font-display text-lg font-black uppercase text-ochre">What I&apos;d do</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Split the feed 60/40 — customer stories over catalogue.",
                "One question per caption. Reply to every answer within the hour.",
                "Shoot reels vertically, in the room, hook in the first line of dialogue.",
              ].map((t) => (
                <li key={t} className="border-l-2 border-ochre pl-4 opacity-80">{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="el mt-8 border-t border-paper/20 pt-5 font-display text-lg italic text-blush" style={{ "--i": 5 }}>
          The insight: people follow brands that talk back, not brands that broadcast.
        </p>
      </div>
    ),
  },
  {
    id: "process",
    label: "Process",
    bg: "bg-paper",
    fg: "text-ink",
    wipe: "bg-ochre",
    content: (
      <div className="w-full max-w-5xl">
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight text-blood sm:text-6xl" style={{ "--i": 0 }}>
          How it works
        </h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2">
          <p className="el dropcap text-sm leading-relaxed opacity-85" style={{ "--i": 1 }}>
            Every engagement starts the same way: a week of listening before a
            single post goes out. Who is already talking about the brand, what
            they respond to, and where the gap sits between what the brand says
            and what the audience hears. Everything after that is built on what
            that week turns up.
          </p>
          <ol className="el el-r space-y-4 text-sm" style={{ "--i": 2 }}>
            {[
              ["01", "Audit", "Current performance, competitors, and audience behavior."],
              ["02", "Strategy", "Pillars, tone, cadence, and the metrics that matter."],
              ["03", "Produce", "Content built in batches, scheduled, and shipped."],
              ["04", "Report", "Monthly read on what worked, and what changes next."],
            ].map(([n, t, b]) => (
              <li key={n} className="border-l-2 border-ochre pl-4">
                <span className="font-display text-xs font-black text-ochre">{n}</span>
                <h3 className="font-display text-lg font-bold">{t}</h3>
                <p className="opacity-70">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: "results",
    label: "Results",
    bg: "bg-ink",
    fg: "text-paper",
    content: (
      <div className="w-full max-w-5xl text-center">
        <h2 className="el font-display text-5xl font-black uppercase tracking-tight sm:text-7xl" style={{ "--i": 0 }}>
          The numbers
        </h2>
        <p className="el font-display text-3xl italic text-ochre" style={{ "--i": 1 }}>
          performance
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            [88, "K+", 0, "organic views", "text-ochre"],
            [1.7, "K+", 1, "interactions", "text-blush"],
            [150, "+", 0, "event attendees", "text-teal"],
          ].map(([end, suffix, dec, label, tone], i) => (
            <div key={label} className="el el-s" style={{ "--i": i + 2 }}>
              <p className={`font-display text-6xl font-black tracking-tight sm:text-7xl ${tone}`}>
                <CountUp end={end} suffix={suffix} decimals={dec} />
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] opacity-60">{label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "back",
    label: "Work with me",
    bg: "bg-ochre",
    fg: "text-ink",
    content: (
      <div className="w-full max-w-4xl text-center">
        <div className="el" style={{ "--i": 0 }}>
          <Availability status="Open for projects" when="August 2026" />
        </div>

        <h2 className="el misreg-2 mt-7 font-display text-[12vw] font-black uppercase leading-[0.8] tracking-tight sm:text-7xl" style={{ "--i": 1 }}>
          Let&apos;s work
        </h2>
        <p className="el font-display text-4xl italic text-blood sm:text-5xl" style={{ "--i": 2 }}>
          together
        </p>

        <div className="mt-9 grid gap-4 text-left sm:grid-cols-3">
          {[
            ["Audit", "One-off", "Feed teardown, competitor read, and a 90-day plan."],
            ["Retainer", "Monthly", "Strategy, content production, community, reporting."],
            ["Campaign", "Project", "Launch or event, concept through performance review."],
          ].map(([tier, kind, body], i) => (
            <div key={tier} className="el el-s border-2 border-current p-5" style={{ "--i": i + 3 }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">{kind}</p>
              <h3 className="mt-1 font-display text-xl font-black uppercase">{tier}</h3>
              <p className="mt-2 text-xs leading-relaxed opacity-75">{body}</p>
            </div>
          ))}
        </div>

        <a href="mailto:hello@example.com?subject=Project%20enquiry" className="el mt-9 inline-block bg-ink px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-paper transition hover:-translate-y-0.5" style={{ "--i": 6 }}>
          Start a project →
        </a>
        <p className="el mt-3 text-[11px] opacity-60" style={{ "--i": 7 }}>
          Replies within one working day · hello@example.com
        </p>

        <div className="el mt-8 flex flex-wrap justify-center gap-7 text-xs uppercase tracking-[0.15em]" style={{ "--i": 8 }}>
          {["Instagram", "LinkedIn", "TikTok", "Resume"].map((s) => (
            <a key={s} href="#" className="border-b border-current/50 pb-1 hover:border-current">{s}</a>
          ))}
        </div>
      </div>
    ),
  },
];