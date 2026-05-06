import { useEffect, useState } from "react";

/** Thin cream progress bar at top of viewport reflecting scroll depth. */
const ScrollProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-transparent">
      <div
        className="h-full bg-cream origin-left transition-transform duration-150"
        style={{ transform: `scaleX(${p / 100})`, transformOrigin: "left" }}
      />
    </div>
  );
};

export default ScrollProgress;
