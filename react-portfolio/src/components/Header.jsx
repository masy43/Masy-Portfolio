import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastScrollY.current && y > 200);
      lastScrollY.current = y;

      // Active nav
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (y + 200 >= top && y + 200 < top + height) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education-experience", label: "Education & Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const headerClasses = `${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`;

  return (
    <>
      <header id="main-header" className={headerClasses}>
        <div className="max-w-container mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#cover"
            onClick={(e) => scrollTo(e, "#cover")}
            className="relative z-[1001] inline-flex items-center"
          >
            <img
              src="/images/headerPhoto.png"
              alt="Masy Mohamed"
              className="h-[42px] w-auto object-cover transition-all duration-300 ease-out-expo opacity-95 hover:scale-[1.12] hover:opacity-100 drop-shadow-[0_2px_8px_rgba(var(--color-primary-rgb),0.1)]"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex gap-9">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`font-medium text-[0.92rem] tracking-wide py-1 text-text-muted hover:text-primary ${activeSection === link.href.slice(1) ? "active text-primary" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3.5">
            <a
              href="https://github.com/masy43"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-icon hidden md:inline-flex w-[42px] h-[42px] rounded-full items-center justify-center text-text-main text-lg hover:text-primary transition-all duration-300"
            >
              <i className="fa-brands fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/masy-mohamed/"
              target="_blank"
              rel="noopener noreferrer"
              className="header-social-icon hidden md:inline-flex w-[42px] h-[42px] rounded-full items-center justify-center text-text-main text-lg hover:text-primary transition-all duration-300"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title="Toggle Dark/Light Mode"
            >
              <i className="fa-solid fa-moon" />
              <i className="fa-solid fa-sun" />
            </button>
            <button
              className={`btn-mobile-menu lg:hidden flex flex-col items-center justify-center gap-[5px] w-[42px] h-[42px] rounded-xl bg-transparent border-none cursor-pointer p-2.5 transition-all duration-300 ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <nav className={`mobile-nav lg:hidden ${mobileOpen ? "active" : ""}`}>
        <ul className="flex flex-col gap-0">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-[var(--color-border)] last:border-b-0"
            >
              <a
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`block px-2 py-3.5 text-[0.95rem] font-medium text-text-muted hover:text-primary ${activeSection === link.href.slice(1) ? "text-primary" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
