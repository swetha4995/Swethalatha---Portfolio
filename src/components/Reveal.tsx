import { useEffect, useRef } from "react";

/** Wraps children in a div that fades+slides in when scrolled into view. */
export const Reveal = ({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "blur";
  as?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${variant === "blur" ? "reveal-blur" : "reveal"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/** Animated split text — letters rise on view. */
export const SplitText = ({
  text,
  className = "",
  stagger = 28,
}: {
  text: string;
  className?: string;
  stagger?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = el.querySelectorAll<HTMLElement>(".letter");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            letters.forEach((l, i) => {
              setTimeout(() => l.classList.add("in"), i * stagger);
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [stagger]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="letter" aria-hidden="true">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
};
