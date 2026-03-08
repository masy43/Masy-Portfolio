import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { services } from "../data/portfolio";

export default function Services() {
  const ref = useScrollReveal();
  const bentoRef = useRef(null);

  useEffect(() => {
    const bento = bentoRef.current;
    if (!bento) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = bento.querySelectorAll(".srv-card");
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add("srv-visible"), i * 100);
            });
            observer.unobserve(bento);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(bento);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="relative z-[1]"
      style={{ padding: "80px 0" }}
    >
      <div className="max-w-container mx-auto px-6">
        <div className="mb-10">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            04 — Services
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            What I Offer
          </h2>
        </div>

        <div
          ref={bentoRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((srv) => (
            <div
              key={srv.num}
              className={`srv-card group ${srv.featured ? "md:col-span-2" : ""}`}
            >
              <div className="srv-card__accent" />
              <span className="absolute top-4 right-[22px] font-display text-[3.4rem] font-extrabold text-[rgba(var(--color-primary-rgb),0.05)] leading-none tracking-[-3px] pointer-events-none select-none transition-colors duration-300 group-hover:text-[rgba(var(--color-primary-rgb),0.12)]">
                {srv.num}
              </span>
              <div
                className={`${srv.featured ? "w-[62px] h-[62px] text-[1.7rem] rounded-[18px]" : "w-14 h-14 text-[1.5rem] rounded-2xl"} flex items-center justify-center text-primary bg-[rgba(var(--color-primary-rgb),0.08)] mb-[22px] transition-all duration-300 ease-out-expo group-hover:bg-primary group-hover:text-white group-hover:scale-[1.08] group-hover:rotate-[-4deg]`}
              >
                <i className={srv.icon} />
              </div>
              <div className="flex-1">
                <h3
                  className={`font-display ${srv.featured ? "text-[1.3rem]" : "text-[1.18rem]"} font-bold text-text-main mb-2.5 transition-colors duration-300 group-hover:text-primary`}
                >
                  {srv.title}
                </h3>
                <p className="text-[0.91rem] leading-[1.72] text-text-muted m-0">
                  {srv.desc}
                </p>
              </div>
              <div className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[rgba(var(--color-primary-rgb),0.07)] text-primary text-[0.9rem] mt-5 self-start transition-all duration-300 ease-out-expo group-hover:bg-primary group-hover:text-white group-hover:translate-x-1.5">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
