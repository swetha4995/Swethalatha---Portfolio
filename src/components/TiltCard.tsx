import { useRef } from "react";

/** 3D tilt + cursor-spotlight wrapper for project images. */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (y - 0.5) * -8;
    const ry = (x - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative transition-transform duration-300 ease-out will-change-transform"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at var(--mx,50%) var(--my,50%), hsl(var(--cream) / 0.18), transparent 50%)",
        }}
      />
    </div>
  );
};

export default TiltCard;
