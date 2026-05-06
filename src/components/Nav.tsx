import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-soft" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#top" className="flex items-center gap-2 font-mono-label text-cream">
          <span className="w-1.5 h-1.5 rounded-full bg-cream inline-block" />
          Swethalatha
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono-label text-muted-foreground">
          <a href="#about" className="hover:text-cream transition-colors">About</a>
          <a href="#work" className="hover:text-cream transition-colors">Work</a>
          <a href="#research" className="hover:text-cream transition-colors">Research</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
        </nav>
        <a
          href="/swetha-resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-mono-label text-cream flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          Resume <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  );
};

export default Nav;
