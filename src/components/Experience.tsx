const work = [
  {
    role: "Tech Associate Intern",
    when: "Oct 2024 — Jan 2025",
    org: "Inaiyam Innovations · Hybrid · 3 months",
    bullets: [
      "Worked on technical and system-level problem solving across the product stack.",
      "Shipped features inside a collaborative, fast-moving team environment.",
      "Exposure to real-world development workflows, code reviews and deployment.",
    ],
  },
  {
    role: "Software & IoT Intern",
    when: "2024 — 2025",
    org: "AmyPo Technologies · On-site",
    bullets: [
      "Built real-time IoT and software modules used in production prototypes.",
      "Sharpened debugging, implementation and cross-team collaboration skills.",
      "Contributed to end-to-end feature delivery — from firmware to UI.",
    ],
  },
];

const edu = [
  {
    title: "B.E. Computer Science & Engineering (IoT)",
    when: "2023 — 2027",
    org: "Nandha Engineering College",
    note: "CGPA 8.9 / 10",
  },
  {
    title: "Higher Secondary Education (CBSE)",
    when: "Completed",
    org: "K.V Higher Secondary & CBSE School",
    note: "82%",
  },
];

const Experience = () => {
  return (
    <section className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="font-mono-label text-muted-foreground mb-16">Experience & Education / 04</div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <h2 className="lg:col-span-7 font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          The path <em className="italic">so far.</em>
        </h2>
        <p className="lg:col-span-5 text-muted-foreground lg:pt-6 text-lg">
          Internships where I shipped real product, balanced with an engineering
          degree rooted in IoT and systems.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="font-mono-label text-cream mb-8">Work</div>
          <div className="space-y-10">
            {work.map((w) => (
              <div key={w.role} className="border-l border-soft pl-6 relative">
                <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-cream" />
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="font-serif text-cream text-2xl">{w.role}</h3>
                  <span className="font-mono-label text-muted-foreground">{w.when}</span>
                </div>
                <div className="text-cream/70 mb-4">{w.org}</div>
                <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
                  {w.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono-label text-cream mb-8">Education</div>
          <div className="space-y-10">
            {edu.map((e) => (
              <div key={e.title} className="border-l border-soft pl-6 relative">
                <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-cream" />
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h4 className="font-serif text-cream text-xl">{e.title}</h4>
                  <span className="font-mono-label text-muted-foreground">{e.when}</span>
                </div>
                <div className="text-cream/70">{e.org}</div>
                <div className="text-muted-foreground text-sm mt-1">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
