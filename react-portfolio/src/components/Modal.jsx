import { useEffect, useRef } from "react";

export default function Modal({ data, onClose }) {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    // Trigger open animation
    requestAnimationFrame(() => {
      overlayRef.current?.classList.add("active");
      contentRef.current?.classList.add("active");
    });

    // Animate feature list items
    const items = contentRef.current?.querySelectorAll(".modal-feature-item");
    items?.forEach((item, i) => {
      setTimeout(() => item.classList.add("visible"), 100 + i * 60);
    });

    // ESC to close
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [data]);

  const handleClose = () => {
    overlayRef.current?.classList.remove("active");
    contentRef.current?.classList.remove("active");
    setTimeout(() => onClose(), 350);
  };

  if (!data) return null;

  return (
    <div ref={overlayRef} className="modal-overlay" onClick={handleClose}>
      <div
        ref={contentRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">
            <i className="fa-solid fa-sparkles text-primary text-[0.85em] mr-1.5" />
            {data.projectName} — Key Features
          </h3>
          <button
            className="modal-close"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <ul className="modal-features">
          {data.features?.map((feat, i) => (
            <li key={i} className="modal-feature-item">
              <i className="fa-solid fa-circle-check text-primary text-[0.85em] mr-2 mt-0.5 shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
