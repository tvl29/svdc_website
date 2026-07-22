import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
};

const hiddenTransform: Record<NonNullable<RevealProps["direction"]>, string> = {
  up: "translate-y-6",
  left: "-translate-x-8",
  right: "translate-x-8",
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Default to visible, not hidden — if IntersectionObserver is ever
  // unavailable, or if this fires after the element is already on screen,
  // content should never be permanently stuck invisible. We only flip to
  // "hide, then reveal" once we've confirmed we can observe it.
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const isHidden = ready && !visible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isHidden ? `opacity-0 ${hiddenTransform[direction]}` : "opacity-100 translate-x-0 translate-y-0"
      } ${className}`}
      style={{ transitionDelay: isHidden ? "0ms" : `${delay}ms` }}
    >
      {children}
    </div>
  );
}
