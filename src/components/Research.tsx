const items = [
  {
    type: "Publication",
    when: "Sept 2025",
    title: "Smart Retractable Speed Breaker System with GPS Module",
    org: "6th Intl. Conf. on Electronics & Sustainable Communication Systems (ICESCS-2025)",
    note: "Indexed in IEEE Xplore · Hindusthan Institute of Tech., Coimbatore",
  },
  {
    type: "Publication",
    when: "2024",
    title: "Intelligent Face Attendance Recognition using Deep Learning & Computer Vision",
    org: "Presented at International Conference",
    note: "Automated attendance through vision-based deep learning",
  },
  {
    type: "Patent",
    when: "2025",
    title: "EMG Silent Speech & Biometric Control System for Smart IoT Devices Powered by Body Heat",
    org: "Patent Filed",
    note: "Secure, hands-free, sustainable human–device interaction.",
  },
  {
    type: "Award",
    when: "2024",
    title: "Best All-Girls Team — PEC HACKS 3.0",
    org: "36-hour national hackathon",
    note: "₹35,000 cash prize for an innovative technical solution.",
  },
  {
    type: "Award",
    when: "2024",
    title: "2nd Place — Greek Language (Coding) Competition",
    org: "MIT, Chennai",
    note: "Among top finalists at an inter-college coding event.",
  },
];

const Research = () => {
  return (
    <section id="research" className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="font-mono-label text-muted-foreground mb-16">Research & Recognition / 05</div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <h2 className="lg:col-span-7 font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          Published, patented, <em className="italic">awarded.</em>
        </h2>
        <p className="lg:col-span-5 text-muted-foreground lg:pt-6 text-lg">
          A few highlights from conferences, IP filings and national hackathons —
          the public trace of the work.
        </p>
      </div>

      <div className="border-t border-soft">
        {items.map((it) => (
          <div
            key={it.title}
            className="grid md:grid-cols-12 gap-6 py-8 border-b border-soft group hover:bg-secondary/30 transition-colors px-2"
          >
            <div className="md:col-span-2 font-mono-label text-cream flex items-baseline gap-3">
              {it.type}
              <span className="text-muted-foreground">{it.when}</span>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-cream text-xl md:text-2xl leading-snug">
                {it.title}
              </h3>
              <div className="text-muted-foreground mt-1">{it.org}</div>
            </div>
            <div className="md:col-span-3 text-cream/70 text-sm md:text-right">{it.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
