import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { education, experience } from "../data/portfolio";

function TimelineEntry({ item, index }) {
  return (
    <div className="timeline-entry">
      <div
        className={`timeline-dot ${item.current ? "timeline-dot--active" : ""}`}
      />
      <div
        className={`timeline-card ${item.current ? "timeline-card--current" : ""}`}
      >
        <div
          className={`timeline-card-accent ${item.current ? "timeline-card-accent--active" : ""}`}
        />
        {item.current ? (
          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[1.2px] text-white bg-primary px-3.5 py-[5px] rounded-full mb-3.5 animate-badge-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-[liveDot_1.5s_ease-in-out_infinite]" />
            Current
          </span>
        ) : item.year ? (
          <span className="inline-block text-[0.75rem] font-bold text-primary bg-[rgba(var(--color-primary-rgb),0.08)] px-3.5 py-1 rounded-lg tracking-[0.5px] mb-3.5">
            {item.year}
          </span>
        ) : null}
        <div className="w-[46px] h-[46px] rounded-[14px] bg-[rgba(var(--color-primary-rgb),0.08)] flex items-center justify-center text-[1.1rem] text-primary mb-3.5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <i className={item.icon} />
        </div>
        <h4 className="font-display text-[1.15rem] font-bold text-text-main mb-1 tracking-[-0.3px]">
          {item.title}
        </h4>
        <p className="text-[0.9rem] font-medium text-text-muted mb-1">
          {item.org}
        </p>
        {item.detail && (
          <p className="text-[0.85rem] text-text-muted leading-[1.7] mt-2.5 flex items-start gap-2">
            <i
              className={`${item.detailIcon || "fa-solid fa-arrow-right"} text-primary text-[0.7rem] mt-[5px] shrink-0 opacity-60`}
            />
            {item.detail}
          </p>
        )}
      </div>
    </div>
  );
}

function TimelineColumn({ icon, title, items, delay }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeline.classList.add("tl-visible");
            const tlEntries = timeline.querySelectorAll(".timeline-entry");
            tlEntries.forEach((el, i) => {
              setTimeout(
                () => el.classList.add("tl-entry-visible"),
                200 + i * 150,
              );
            });
            observer.unobserve(timeline);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(timeline);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="reveal-up relative" data-delay={delay}>
      <div className="flex items-center gap-3.5 mb-9 pb-5 border-b border-[var(--color-border)]">
        <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.12)] to-[rgba(var(--color-primary-rgb),0.04)] flex items-center justify-center text-[1.25rem] text-primary transition-all duration-300">
          <i className={icon} />
        </div>
        <h3 className="font-display text-[1.3rem] font-bold text-text-main tracking-[-0.3px]">
          {title}
        </h3>
      </div>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line" />
        {items.map((item, i) => (
          <TimelineEntry key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function EducationExperience() {
  const ref = useScrollReveal();

  return (
    <section
      id="education-experience"
      ref={ref}
      className="relative z-[1]"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="mb-[60px]">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            02 — Background
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            Education & <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <TimelineColumn
            icon="fa-solid fa-graduation-cap"
            title="Education"
            items={education}
            delay="150"
          />
          <TimelineColumn
            icon="fa-solid fa-briefcase"
            title="Experience"
            items={experience}
            delay="300"
          />
        </div>
      </div>
    </section>
  );
}
