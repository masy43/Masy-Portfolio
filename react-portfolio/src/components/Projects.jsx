import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/portfolio";

export default function Projects({ openModal }) {
  const ref = useScrollReveal();
  const showcaseRef = useRef(null);

  useEffect(() => {
    const showcase = showcaseRef.current;
    if (!showcase) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = showcase.querySelectorAll(".proj-card");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("proj-visible"), i * 120);
            });
            observer.unobserve(showcase);
          }
        });
      },
      { threshold: 0.08 },
    );
    observer.observe(showcase);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-[1]"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="mb-[60px]">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            05 — Work
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            Featured Projects
          </h2>
        </div>

        <div
          ref={showcaseRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {projects.map((proj) => (
            <div key={proj.title} className="proj-card group">
              {/* Visual */}
              <div className="proj-card__visual relative h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo"
                />
                <div className="proj-card__overlay">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-card__overlay-btn"
                  >
                    <i className="fa-brands fa-github" />
                  </a>
                </div>
                <div className="absolute top-4 left-4 px-3.5 py-[5px] text-[0.72rem] font-bold tracking-[0.6px] uppercase text-white bg-primary rounded-lg z-[2] shadow-[0_4px_12px_rgba(var(--color-primary-rgb),0.3)]">
                  {proj.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex flex-wrap gap-[7px] mb-3.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.72rem] font-semibold tracking-[0.4px] px-[11px] py-1 rounded-[7px] bg-[rgba(var(--color-primary-rgb),0.07)] text-primary transition-colors duration-300 group-hover:bg-[rgba(var(--color-primary-rgb),0.13)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-[1.35rem] font-bold text-text-main mb-2.5 transition-colors duration-300 group-hover:text-primary">
                  {proj.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.72] text-text-muted m-0 mb-auto pb-5">
                  {proj.desc}
                </p>
                <div className="flex gap-2.5 flex-wrap pt-[18px] border-t border-[var(--color-border)]">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-[7px] px-[18px] py-2 text-[0.82rem] font-semibold rounded-[10px] border border-primary bg-primary text-white transition-all duration-300 hover:bg-transparent hover:text-primary hover:-translate-y-0.5"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" />{" "}
                      Live Demo
                    </a>
                  )}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[7px] px-[18px] py-2 text-[0.82rem] font-semibold rounded-[10px] border border-[var(--color-border)] bg-transparent text-text-main transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5"
                  >
                    <i className="fa-brands fa-github" /> GitHub
                  </a>
                  <button
                    onClick={() => openModal(proj.title, proj.features)}
                    className="inline-flex items-center gap-[7px] px-[18px] py-2 text-[0.82rem] font-semibold rounded-[10px] border border-[rgba(var(--color-primary-rgb),0.12)] bg-[rgba(var(--color-primary-rgb),0.06)] text-primary cursor-pointer transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5"
                  >
                    <i className="fa-solid fa-list-check" /> Features
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
