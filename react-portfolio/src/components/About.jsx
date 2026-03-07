import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  {
    icon: "fa-solid fa-layer-group",
    title: "End-to-End Engineering",
    desc: "From pixel-perfect frontends to bulletproof APIs and optimized databases — I own the full stack so nothing falls through the cracks.",
  },
  {
    icon: "fa-solid fa-server",
    title: "Scalable Backend Systems",
    desc: "I design secure RESTful APIs, authentication flows, and server-side architectures built for reliability and growth.",
  },
  {
    icon: "fa-solid fa-rocket",
    title: "Performance Obsessed",
    desc: "Every project is built with speed, accessibility, and scalability at its core — ensuring your product isn't just beautiful, but a powerful tool that converts.",
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-[1]"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="mb-[60px]">
          <span className="reveal-up block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
            01 — About
          </span>
          <h2
            className="reveal-up font-display text-[1.9rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[3.2rem] font-bold text-text-main tracking-[-1.5px] leading-[1.15]"
            data-delay="100"
          >
            Building the <span className="gradient-text">Future</span>, One Line
            at a Time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[50px] items-center relative z-[2]">
          {/* Photo */}
          <div
            className="reveal-up flex justify-center md:order-first order-first"
            data-delay="150"
          >
            <div
              className="relative w-full max-w-[400px]"
              style={{ transformStyle: "preserve-3d", perspective: "800px" }}
            >
              <img
                src="/images/Aboutphoto.png"
                alt="Masy Mohamed"
                className="w-full h-auto block object-cover transition-all duration-500 ease-out-expo hover:scale-[1.02] hover:brightness-105 will-change-transform"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="reveal-up mb-9" data-delay="200">
              <p className="text-[1.2rem] leading-[1.9] text-text-muted">
                I'm{" "}
                <strong className="text-text-main font-bold">
                  Masy Mohamed
                </strong>{" "}
                — a full stack developer who turns complex requirements into
                reliable, scalable products.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="reveal-up group flex flex-col sm:flex-row gap-3.5 sm:gap-5 p-5 sm:p-6 bg-surface border border-[var(--color-border)] rounded-[18px] transition-all duration-300 ease-out-expo relative overflow-hidden hover:border-[rgba(var(--color-primary-rgb),0.3)] hover:translate-x-1.5 hover:shadow-[var(--shadow-md)]"
                  data-delay={250 + i * 100}
                >
                  <div className="w-12 h-12 min-w-[48px] rounded-[14px] bg-[rgba(var(--color-primary-rgb),0.08)] flex items-center justify-center text-primary text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                    <i className={h.icon} />
                  </div>
                  <div>
                    <h4 className="font-display text-[1.05rem] font-bold text-text-main mb-1.5">
                      {h.title}
                    </h4>
                    <p className="text-[0.9rem] text-text-muted leading-[1.7]">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
