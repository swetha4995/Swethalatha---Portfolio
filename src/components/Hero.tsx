import { ArrowDown, MapPin } from "lucide-react";
import { SplitText } from "./Reveal";
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero video
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (titleRef.current) {
        titleRef.current.style.transform = `translateY(${y * 0.15}px)`;
        titleRef.current.style.opacity = String(Math.max(0, 1 - y / 600));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden noise">
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      {/* Ambient glow */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 animate-glow-pulse pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--cream) / 0.25), transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-12 pt-28 pb-12">
        <div className="flex justify-between font-mono-label text-cream/80 animate-fade-in">
          <div>Portfolio · 2025</div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-1 justify-end">
              <MapPin size={12} /> Coimbatore, India
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-cream animate-pulse" />
              Available for work
            </div>
          </div>
        </div>

        <div ref={titleRef} className="flex-1 flex flex-col justify-end max-w-5xl">
          <div className="font-mono-label text-cream/70 mb-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Software · IoT · Research
          </div>
          <h1 className="font-serif font-light text-cream leading-[0.95] tracking-tight text-[clamp(3.5rem,12vw,11rem)]">
            <SplitText text="Hi, I'm " stagger={40} />
            <em className="italic font-normal">
              <SplitText text="Swetha." stagger={50} />
            </em>
          </h1>
          <p
            className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed font-light animate-blur-in"
            style={{ animationDelay: "1.2s" }}
          >
            I build things that bridge code and the physical world. An engineering
            student shipping IoT products and polished interfaces.
          </p>
        </div>

        <div className="flex justify-between items-end mt-12 font-mono-label text-cream/70 animate-fade-in" style={{ animationDelay: "1.6s" }}>
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-cream/60" />
            Scroll to explore
          </div>
          <a href="#about" className="flex items-center gap-2 hover:text-cream transition-colors group">
            <ArrowDown size={14} className="animate-scroll-bounce group-hover:animate-none" /> Next
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
