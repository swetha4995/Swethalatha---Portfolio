import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, SplitText } from "./Reveal";

const stats = [
  { n: "01", v: "3+", l: "Years building" },
  { n: "02", v: "10+", l: "Projects shipped" },
  { n: "03", v: "1", l: "Patent filed" },
  { n: "04", v: "2", l: "IEEE papers" },
];

const About = () => {
  return (
    <section id="about" className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="flex justify-between font-mono-label text-muted-foreground mb-20">
        <span>About / 01</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse" />
          Available for work
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(3rem,8vw,7rem)]">
            <SplitText text="I build " stagger={35} />
            <em className="italic"><SplitText text="things" stagger={35} /></em> <br />
            <SplitText text="that " stagger={35} />
            <em className="italic"><SplitText text="matter." stagger={35} /></em>
          </h2>
        </div>
        <div className="lg:col-span-5 space-y-6 lg:pt-6">
          <div className="font-mono-label text-cream">
            IoT Engineer · Researcher · Builder
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I am a Computer Science &amp; Engineering (IoT) undergraduate with a strong
            foundation in programming, embedded systems and modern web development.
            My work spans real-time GPS-integrated automation, AI applications and
            wearable IoT devices.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy the place where firmware meets software — turning sensors, code
            and interfaces into products that solve tangible problems. I care about
            clean architecture, thoughtful detail, and shipping things that actually
            work.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="/swetha-resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-cream text-primary-foreground font-mono-label hover:opacity-80 transition"
            >
              Download Resume <ArrowUpRight size={14} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 border border-soft text-cream font-mono-label hover:bg-secondary transition"
            >
              See Work <ArrowRight size={14} />
            </a>
          </div>
          <div className="font-serif italic text-cream/70 pt-2">— Swetha</div>
        </div>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-soft-line/20 mt-24 border border-soft">
        {stats.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} className="bg-background p-8 group hover:bg-secondary/40 transition-colors duration-500 cursor-default">
            <div className="font-mono-label text-muted-foreground mb-6">{s.n}</div>
            <div className="font-serif text-cream text-5xl md:text-6xl mb-2 transition-transform duration-500 group-hover:-translate-y-1">{s.v}</div>
            <div className="text-muted-foreground text-sm">{s.l}</div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 font-mono-label text-muted-foreground">Currently</div>
        <p className="lg:col-span-6 text-cream/90 text-xl font-serif leading-snug">
          Pursuing B.E. in CSE (IoT) at Nandha Engineering College — building
          research-backed IoT products and looking for software engineering opportunities.
        </p>
        <div className="lg:col-span-3 flex flex-wrap gap-2 content-start">
          {["Embedded C", "Computer Vision", "GPS Systems", "React", "Research"].map((t) => (
            <span key={t} className="text-xs px-3 py-1 border border-soft text-cream/80 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
