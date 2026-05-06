import { Reveal } from "./Reveal";

const groups = [
  { n: "01", title: "Languages", desc: "The vocabulary I build with.", items: ["C", "C++", "Python", "Java", "JavaScript"] },
  { n: "02", title: "Web", desc: "Interfaces people actually use.", items: ["HTML", "CSS", "JavaScript", "React", "REST APIs"] },
  { n: "03", title: "IoT & Embedded", desc: "Where code meets hardware.", items: ["Arduino", "Raspberry Pi", "Sensors", "GPS Modules", "Microcontrollers"] },
  { n: "04", title: "Tools & Platforms", desc: "My daily kit.", items: ["Git", "VS Code", "GitHub", "Canva", "Figma"] },
];

const allTags = groups.flatMap((g) => g.items);

const Skills = () => {
  return (
    <section className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="font-mono-label text-muted-foreground mb-16">Technical Arsenal / 02</div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <h2 className="lg:col-span-7 font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          Tools that let me <em className="italic">ship.</em>
        </h2>
        <p className="lg:col-span-5 text-muted-foreground lg:pt-6 text-lg">
          A focused stack across code, web and hardware — used end-to-end on shipped
          projects, research work, and hackathon prototypes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-soft-line/20 border border-soft">
        {groups.map((g, idx) => (
          <Reveal
            key={g.n}
            delay={idx * 100}
            className="bg-background p-8 min-h-[260px] flex flex-col group hover:bg-secondary/50 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="font-mono-label text-muted-foreground mb-6 group-hover:text-cream transition-colors">{g.n}</div>
            <h3 className="font-serif text-cream text-2xl mb-2">{g.title}</h3>
            <p className="text-muted-foreground text-sm mb-6">{g.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {g.items.map((i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-secondary text-cream/80 rounded transition-all duration-300 hover:bg-cream hover:text-primary-foreground">
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* marquee */}
      <div className="mt-20 overflow-hidden border-y border-soft py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...allTags, ...allTags].map((t, i) => (
            <span key={i} className="font-serif italic text-cream/60 text-3xl mx-6">
              {t} <span className="text-muted-foreground">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
