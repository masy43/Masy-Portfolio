import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { testimonials } from "../data/portfolio";

function TestiCard({ t, ariaHidden = false }) {
  return (
    <div className="testi-card group" aria-hidden={ariaHidden || undefined}>
      <div className="testi-card__glow" />
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-[rgba(var(--color-primary-rgb),0.08)] flex items-center justify-center text-[1.1rem] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-[1.08] group-hover:rotate-[-4deg]">
          <i className="fa-solid fa-quote-left" />
        </div>
        <div className="flex gap-[3px] text-amber-500 text-[0.78rem]">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa-solid fa-star" />
          ))}
        </div>
      </div>
      {/* Text */}
      <p className="text-base leading-[1.85] text-text-muted italic flex-1 mb-7">
        {t.text}
      </p>
      {/* Author */}
      <div className="flex items-center gap-3.5 pt-5 border-t border-[var(--color-border)]">
        <div className="p-0.5 rounded-2xl bg-gradient-to-br from-primary to-[var(--color-primary-light)] transition-transform duration-300 group-hover:scale-[1.08] group-hover:rotate-[-3deg]">
          <div className="w-[46px] h-[46px] min-w-[46px] rounded-[14px] bg-surface flex items-center justify-center text-primary text-[0.88rem] font-bold tracking-[0.5px]">
            {t.initials}
          </div>
        </div>
        <div className="flex flex-col gap-0.5 flex-1">
          <span className="text-base font-semibold text-text-main">
            {t.name}
          </span>
          <span className="text-[0.82rem] text-text-muted">{t.role}</span>
        </div>
        <div className="w-[34px] h-[34px] rounded-[10px] bg-[rgba(var(--color-primary-rgb),0.07)] flex items-center justify-center text-primary text-[0.9rem] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-0.5">
          <i className={t.platform} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal();
  const trackRef = useRef(null);

  useEffect(() => {
    const marquee = document.querySelector(".testi-marquee");
    const track = trackRef.current;
    if (!marquee || !track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track.classList.add("running");
            observer.unobserve(marquee);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(marquee);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden z-[1]"
      style={{ padding: "var(--section-padding)" }}
    >
      {/* Watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] lg:text-[28rem] text-primary opacity-[0.018] pointer-events-none z-0 leading-none"
        aria-hidden="true"
      >
        <i className="fa-solid fa-quote-left" />
      </div>

      <div className="max-w-container mx-auto px-6">
        <div className="mb-[60px]">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            06 — Testimonials
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            What Clients Say
          </h2>
        </div>

        {/* Stats */}
        <div
          className="reveal-up flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 mb-14 px-6 sm:px-9 lg:px-12 py-6 sm:py-7 bg-surface border border-[var(--color-border)] rounded-[20px] relative z-[1]"
          data-delay="200"
        >
          {[
            { value: "5.0", label: "Avg. Rating" },
            { value: "20+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex items-center gap-5 sm:gap-8 lg:gap-10"
            >
              {i > 0 && (
                <div className="w-px h-8 sm:h-11 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
              )}
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-[1.4rem] sm:text-[1.6rem] lg:text-[2rem] font-extrabold gradient-text leading-[1.2]">
                  {stat.value}
                </span>
                <span className="text-[0.72rem] sm:text-[0.82rem] font-semibold text-text-muted uppercase tracking-[1px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="testi-marquee">
          <div className="testi-track" ref={trackRef}>
            {testimonials.map((t, i) => (
              <TestiCard key={i} t={t} />
            ))}
            {testimonials.map((t, i) => (
              <TestiCard key={`clone-${i}`} t={t} ariaHidden />
            ))}
          </div>
        </div>
        <div className="testi-marquee-fade testi-marquee-fade--left" />
        <div className="testi-marquee-fade testi-marquee-fade--right" />
      </div>
    </section>
  );
}
