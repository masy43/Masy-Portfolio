import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/portfolio";

const filters = ["all", "frontend", "backend", "database", "tools"];

export default function Skills() {
  const ref = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("all");
  const mosaicRef = useRef(null);

  // Scroll-triggered staggered entrance
  useEffect(() => {
    const mosaic = mosaicRef.current;
    if (!mosaic) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card");
            cards.forEach((card, i) => {
              card.style.opacity = "0";
              card.style.transform = "translateY(24px) scale(0.96)";
              setTimeout(() => {
                card.style.transition =
                  "opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-out-expo)";
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
              }, i * 70);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(mosaic);
    return () => observer.disconnect();
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (!mosaicRef.current) return;

    const cards = mosaicRef.current.querySelectorAll(".skill-card");
    let visibleIndex = 0;

    cards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
        card.style.opacity = "0";
        card.style.transform = "translateY(16px) scale(0.96)";
        const delay = visibleIndex * 60;
        setTimeout(() => {
          card.style.transition =
            "opacity 0.45s var(--ease-out-expo), transform 0.45s var(--ease-out-expo)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }, delay);
        visibleIndex++;
      } else {
        card.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        card.style.opacity = "0";
        card.style.transform = "scale(0.92) translateY(12px)";
        setTimeout(() => card.classList.add("hidden"), 250);
      }
    });
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-[1]"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="mb-[60px]">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            03 — Skills
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </div>

        {/* Filters */}
        <div
          className="reveal-up flex flex-wrap gap-1.5 justify-center mb-11"
          data-delay="150"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={`px-6 py-2.5 border rounded-full font-display text-[0.88rem] font-semibold cursor-pointer transition-all duration-300 ease-out-expo relative overflow-hidden isolate
                ${
                  activeFilter === filter
                    ? "text-white border-primary bg-primary"
                    : "text-text-muted border-[var(--color-border)] bg-surface hover:border-primary hover:text-primary hover:bg-[rgba(var(--color-primary-rgb),0.04)]"
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={mosaicRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5"
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-card group"
              data-category={skill.category}
              style={{ opacity: 0, transform: "translateY(24px) scale(0.96)" }}
            >
              <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-[rgba(var(--color-primary-rgb),0.06)] flex items-center justify-center transition-all duration-300 relative z-[1] group-hover:bg-[rgba(var(--color-primary-rgb),0.12)] group-hover:scale-105 group-hover:rotate-[-2deg]">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width="44"
                  className="block transition-all duration-300 group-hover:scale-[1.08]"
                />
              </div>
              <div className="flex-1 min-w-0 relative z-[1]">
                <h4 className="font-display text-[1.05rem] font-bold text-text-main mb-1.5 tracking-[-0.2px] transition-all duration-300 group-hover:text-primary">
                  {skill.name}
                </h4>
                <p className="text-[0.82rem] leading-[1.6] text-text-muted m-0">
                  {skill.desc}
                </p>
              </div>
              <span className="absolute top-3 right-3.5 text-[0.65rem] font-semibold uppercase tracking-[1px] text-primary bg-[rgba(var(--color-primary-rgb),0.06)] px-2.5 py-[3px] rounded-md opacity-0 translate-y-[-4px] transition-all duration-300 z-[1] group-hover:opacity-100 group-hover:translate-y-0">
                {skill.category.charAt(0).toUpperCase() +
                  skill.category.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
