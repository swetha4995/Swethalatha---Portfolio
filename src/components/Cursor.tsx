import { useEffect, useRef, useState } from "react";

/** Soft cream blob that follows the cursor — global ambient effect. */
const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12;
      pos.current.y += (target.current.y - pos.current.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 200}px, ${pos.current.y - 200}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[1] w-[400px] h-[400px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--cream) / 0.18) 0%, hsl(var(--cream) / 0.06) 30%, transparent 65%)",
        filter: "blur(40px)",
      }}
    />
  );
};

export default Cursor;
