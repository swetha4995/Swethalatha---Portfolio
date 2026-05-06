import { ArrowUpRight } from "lucide-react";
import { Reveal, SplitText } from "./Reveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    n: "01",
    tag: "IoT · Published (IEEE)",
    year: "2025",
    title: "Smart Retractable Speed Breaker",
    sub: "GPS-triggered traffic system for emergency vehicles",
    desc: "Automated traffic-management system that detects approaching ambulances via GPS and dynamically retracts the speed breaker for smooth passage — improving response times without compromising road safety.",
    stack: ["Arduino", "GPS Module", "C++", "Servo Control", "Embedded"],
    img: "https://images.unsplash.com/photo-1700116035176-99d81e11c60b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "02",
    tag: "Patent Filed",
    year: "2025",
    title: "EMG Silent-Speech Biometric IoT",
    sub: "Body-heat powered hands-free device control",
    desc: "A wearable that reads EMG signals for silent speech input and authenticates through biometrics — powered by body heat. Patent-filed concept for secure, eco-friendly human–device interaction.",
    stack: ["EMG Sensors", "Biometrics", "Thermoelectric", "Embedded C"],
    img: "https://images.pexels.com/photos/30547577/pexels-photo-30547577.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    n: "03",
    tag: "AI · Published",
    year: "2024",
    title: "Face Attendance Recognition",
    sub: "Deep-learning attendance for classrooms",
    desc: "Automated attendance system built with computer vision and deep learning — recognizes faces in real-time, logs attendance, and eliminates manual roll-calls. Presented at an international conference.",
    stack: ["Python", "OpenCV", "Deep Learning", "Computer Vision"],
    img: "https://images.pexels.com/photos/14314636/pexels-photo-14314636.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    n: "04",
    tag: "Safety · IoT",
    year: "2024",
    title: "Alcohol Detection & Engine Lock",
    sub: "Embedded safety system with live GPS tracking",
    desc: "An embedded safety module that detects alcohol in the driver's breath, locks the engine and streams live vehicle location via GPS — a low-cost road-safety intervention for fleets.",
    stack: ["MQ-3 Sensor", "Arduino", "GPS", "Relay Control"],
    img: "https://images.unsplash.com/photo-1507220529008-e931df30d1ed?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "05",
    tag: "AI · Web",
    year: "2024",
    title: "AI Personalized Chatbot",
    sub: "Context-aware conversational assistant",
    desc: "A chatbot that understands intent and personalizes its responses. Focused on accurate answers, smooth UX, and a clean interface that makes AI feel helpful rather than mechanical.",
    stack: ["Python", "NLP", "React", "REST API"],
    img: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    n: "06",
    tag: "Web",
    year: "2024",
    title: "Weather Prediction Web App",
    sub: "Responsive, real-time weather on any device",
    desc: "A responsive web app that surfaces real-time weather via public APIs, designed with a mobile-first interface and meaningful data hierarchy — clarity over clutter.",
    stack: ["JavaScript", "HTML", "CSS", "Weather API"],
    img: "https://images.unsplash.com/photo-1616133321649-d29ebc595799?auto=format&fit=crop&w=1400&q=80",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative px-6 md:px-12 py-28 border-t border-soft">
      <div className="font-mono-label text-muted-foreground mb-16">Selected Works / 03</div>

      <div className="grid lg:grid-cols-12 gap-12 mb-20">
        <h2 className="lg:col-span-7 font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,6rem)]">
          Projects I&rsquo;m <em className="italic">proud</em> of.
        </h2>
        <p className="lg:col-span-5 text-muted-foreground lg:pt-6 text-lg">
          A blend of IoT systems, published research and web applications — each
          built to solve a concrete problem, not just to demo a tech.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((p, i) => (
          <Reveal key={p.n} variant="blur">
            <article
              className={`grid lg:grid-cols-12 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <TiltCard>
                  <div className="group relative overflow-hidden bg-secondary aspect-[16/10]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:saturate-[1.1]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-xs font-mono-label px-3 py-1 bg-background/80 backdrop-blur text-cream">
                        {p.tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 text-xs font-mono-label px-3 py-1 bg-background/80 backdrop-blur text-cream">
                      {p.year}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-serif italic text-cream text-lg">View project</span>
                      <ArrowUpRight className="text-cream" />
                    </div>
                  </div>
                </TiltCard>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="font-mono-label text-muted-foreground">{p.n} — Project</div>
                <h3 className="font-serif text-cream text-3xl md:text-4xl leading-tight">
                  <SplitText text={p.title} stagger={20} />
                </h3>
                <p className="text-cream/80 italic font-serif">{p.sub}</p>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 bg-secondary text-cream/80 rounded transition-all duration-300 hover:bg-cream hover:text-primary-foreground hover:-translate-y-0.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-cream font-mono-label pt-4 story-link"
                >
                  Case Study
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Work;
