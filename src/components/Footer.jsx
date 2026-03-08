import { useEffect, useRef } from "react";

export default function Footer() {
  const topBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topBtnRef.current) {
        if (window.scrollY > 500) {
          topBtnRef.current.classList.add("visible");
        } else {
          topBtnRef.current.classList.remove("visible");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative z-[1] bg-transparent text-center"
      style={{ padding: "40px 20px 30px" }}
    >
      <div className="max-w-container mx-auto flex flex-col items-center gap-5">
        <p className="text-[0.88rem] text-text-muted font-medium tracking-[0.3px]">
          &copy; 2026 Masy Mohamed. All rights reserved.
        </p>
      </div>

      <button
        ref={topBtnRef}
        onClick={scrollToTop}
        className="back-to-top"
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </footer>
  );
}
