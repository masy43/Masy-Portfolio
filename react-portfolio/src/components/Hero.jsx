import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useMemo } from "react";

export default function Hero() {
  const ref = useScrollReveal();
  const roles = useMemo(
    () => ["FullStack Developer", "Frontend Developer", "Backend Developer"],
    [],
  );
  const typingText = useTypingEffect(roles);

  return (
    <section
      id="cover"
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-[var(--header-height)] pb-20 z-[1]"
      style={{ padding: "var(--header-height) 0 80px" }}
    >
      <div className="max-w-container mx-auto px-6 relative z-[2] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center w-full">
          {/* Left */}
          <div className="max-w-[650px]">
            <div
              className="reveal-up inline-flex items-center gap-2.5 px-5 py-2 bg-[rgba(34,197,94,0.06)] border border-[rgba(34,197,94,0.2)] rounded-full text-[0.78rem] font-semibold text-green-500 mb-8 tracking-[1.5px] uppercase"
              data-delay="0"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot" />
              AVAILABLE FOR HIRE
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-[-3px] mb-6">
              <span
                className="block overflow-hidden reveal-up"
                data-delay="100"
              >
                <span className="inline-block">Hello, I'm</span>
              </span>
              <span
                className="block overflow-hidden reveal-up"
                data-delay="200"
              >
                <span className="inline-block">
                  <span className="gradient-text">Masy</span>
                </span>
              </span>
            </h1>

            <div
              className="reveal-up flex items-center gap-2 font-display text-lg sm:text-xl font-medium text-primary mb-5"
              data-delay="300"
            >
              <span className="font-bold">&gt;</span>
              <span className="text-text-muted">{typingText}</span>
              <span className="text-primary animate-blink font-light">|</span>
            </div>

            <p
              className="reveal-up text-text-muted text-base sm:text-[1.05rem] max-w-[520px] mb-9 leading-[1.8]"
              data-delay="400"
            >
              Crafting robust digital ecosystems through fullstack engineering —
              from responsive frontends to scalable backend architectures.
            </p>

            <div className="reveal-up flex flex-wrap gap-4" data-delay="500">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <i className="fa-solid fa-arrow-right" />
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            className="reveal-up flex items-center justify-center relative"
            data-delay="400"
          >
            <div className="floating-card w-full max-w-[360px] lg:max-w-[450px] h-[280px] lg:h-[480px]">
              <div className="card-window">
                <img
                  src="/images/headerPhoto.png"
                  alt="Masy Mohamed"
                  className="w-full h-full object-cover object-top rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
