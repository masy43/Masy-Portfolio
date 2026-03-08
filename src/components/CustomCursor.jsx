import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    let cursorX = 0,
      cursorY = 0,
      outlineX = 0,
      outlineY = 0;

    const onMouseMove = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = cursorX + "px";
        dotRef.current.style.top = cursorY + "px";
      }
    };

    function animateOutline() {
      outlineX += (cursorX - outlineX) * 0.12;
      outlineY += (cursorY - outlineY) * 0.12;
      if (outlineRef.current) {
        outlineRef.current.style.left = outlineX + "px";
        outlineRef.current.style.top = outlineY + "px";
      }
      requestAnimationFrame(animateOutline);
    }

    document.addEventListener("mousemove", onMouseMove);
    animateOutline();

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll(
        "a, button, .btn, .skill-card, .srv-card, .proj-card, .testi-card, .cnt-link, .cnt-social, input, textarea, .theme-toggle, .btn-back-top, .header-social-icon",
      );
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-outline" ref={outlineRef} />
    </>
  );
}
