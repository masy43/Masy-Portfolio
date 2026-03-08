import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const formRef = useRef(null);
  const gridRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Animate panels on scroll
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const panels = grid.querySelectorAll(".cnt-panel");
            panels.forEach((panel, i) => {
              setTimeout(() => panel.classList.add("cnt-visible"), i * 200);
            });
            observer.unobserve(grid);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on valid input
    if (name === "name" && value.trim().length > 0)
      setErrors((prev) => ({ ...prev, name: "" }));
    if (name === "email" && isValidEmail(value.trim()))
      setErrors((prev) => ({ ...prev, email: "" }));
    if (name === "subject" && value.trim().length > 0)
      setErrors((prev) => ({ ...prev, subject: "" }));
    if (name === "message" && value.trim().length > 0)
      setErrors((prev) => ({ ...prev, message: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const { name, email, subject, message } = formData;

    if (!name.trim()) newErrors.name = "Please enter your name";
    else if (name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!email.trim()) newErrors.email = "Please enter your email address";
    else if (!isValidEmail(email.trim()))
      newErrors.email = "Please enter a valid email address";

    if (!subject.trim()) newErrors.subject = "Please enter a subject";

    if (!message.trim()) newErrors.message = "Please enter your message";
    else if (message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      const gmailSubject = encodeURIComponent(
        subject || `Portfolio Contact from ${name}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      );
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=masym32@gmail.com&su=${gmailSubject}&body=${body}`;
      window.open(gmailUrl, "_blank");
      setTimeout(() => setSubmitting(false), 2000);
    }
  };

  const contactLinks = [
    {
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=masykasaba@gmail.com",
      icon: "fa-solid fa-envelope",
      label: "Email",
      value: "masykasaba@gmail.com",
    },
    {
      href: "tel:+201067051818",
      icon: "fa-solid fa-phone",
      label: "Phone",
      value: "+20 10 6705 1818",
    },
    {
      href: "https://wa.me/201067051818",
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      value: "Chat on WhatsApp",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-[1] bg-transparent"
      style={{ padding: "var(--section-padding)" }}
    >
      <div className="max-w-container mx-auto px-6">
        {/* Hero Banner */}
        <div className="reveal-up relative text-center mb-10 sm:mb-16 px-6 sm:px-10 py-11 sm:py-16 bg-surface border border-[var(--color-border)] rounded-[20px] sm:rounded-[28px] overflow-hidden">
          <div className="absolute rounded-full pointer-events-none blur-[80px] w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] bg-[rgba(var(--color-primary-rgb),0.12)] -top-20 -right-[60px] animate-orb-1" />
          <div className="absolute rounded-full pointer-events-none blur-[80px] w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-[rgba(var(--color-primary-rgb),0.08)] -bottom-[60px] -left-10 animate-orb-2" />
          <div className="relative z-[1]">
            <span className="block text-[0.85rem] font-semibold text-primary tracking-[2px] uppercase mb-3 font-main">
              07 — Contact
            </span>
            <h2 className="font-display text-[2rem] sm:text-[3rem] font-extrabold text-text-main tracking-[-1.5px] leading-[1.15] mt-4 mb-5">
              Let's Build Something
              <br />
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-[0.95rem] sm:text-[1.1rem] text-text-muted leading-[1.8] max-w-[520px] mx-auto mb-7">
              Have a project in mind? I'd love to hear about it. Drop me a
              message and let's turn your idea into reality.
            </p>
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[rgba(var(--color-primary-rgb),0.06)] border border-[rgba(var(--color-primary-rgb),0.15)] rounded-full text-[0.88rem] font-semibold text-text-main tracking-[0.3px]">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_0_3px_rgba(74,222,128,0.2)] animate-avail-pulse" />
              Available for freelance work
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-9 md:gap-12 items-start"
        >
          {/* Info Panel */}
          <div className="cnt-panel opacity-0 translate-y-[30px] md:translate-y-0 md:-translate-x-10 transition-all duration-700 ease-out-expo [&.cnt-visible]:opacity-100 [&.cnt-visible]:translate-y-0 [&.cnt-visible]:translate-x-0">
            <div className="flex flex-col gap-3.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="cnt-link group"
                >
                  <div className="w-[40px] sm:w-[52px] h-[40px] sm:h-[52px] min-w-[40px] sm:min-w-[52px] rounded-2xl bg-gradient-to-br from-[rgba(var(--color-primary-rgb),0.1)] to-[rgba(var(--color-primary-rgb),0.04)] flex items-center justify-center text-primary text-base sm:text-xl transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-[1.06] group-hover:rotate-[-3deg]">
                    <i className={link.icon} />
                  </div>
                  <div className="flex flex-col gap-[3px] flex-1">
                    <span className="text-[0.75rem] font-bold text-text-muted uppercase tracking-[1.5px]">
                      {link.label}
                    </span>
                    <span className="text-[0.9rem] sm:text-base font-semibold text-text-main transition-colors duration-300 group-hover:text-primary">
                      {link.value}
                    </span>
                  </div>
                  <div className="w-9 h-9 min-w-[36px] rounded-[10px] bg-[rgba(var(--color-primary-rgb),0.06)] flex items-center justify-center text-primary text-[0.8rem] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              {[
                {
                  href: "https://www.linkedin.com/in/masy-mohamed/",
                  icon: "fa-brands fa-linkedin-in",
                },
                {
                  href: "https://github.com/masy43",
                  icon: "fa-brands fa-github",
                },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cnt-social w-[50px] h-[50px] rounded-2xl bg-surface border border-[var(--color-border)] flex items-center justify-center text-text-main text-xl transition-all duration-300 hover:border-primary hover:text-white hover:bg-primary hover:-translate-y-1 hover:rotate-[-3deg] hover:shadow-[0_10px_30px_rgba(var(--color-primary-rgb),0.2)]"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Form Panel */}
          <div className="cnt-panel opacity-0 translate-y-[30px] md:translate-y-0 md:translate-x-10 transition-all duration-700 ease-out-expo [&.cnt-visible]:opacity-100 [&.cnt-visible]:translate-y-0 [&.cnt-visible]:translate-x-0 bg-surface p-6 sm:p-11 rounded-3xl border border-[var(--color-border)] shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative overflow-hidden backdrop-blur-2xl hover:border-[rgba(var(--color-primary-rgb),0.2)] hover:shadow-[0_16px_60px_rgba(var(--color-primary-rgb),0.08)]">
            <div className="cnt-form__accent" />

            {/* Header */}
            <div className="flex items-center gap-4 mb-9 pb-6 border-b border-[var(--color-border)]">
              <div className="w-[42px] sm:w-[52px] h-[42px] sm:h-[52px] min-w-[42px] sm:min-w-[52px] rounded-2xl bg-gradient-to-br from-primary to-[var(--color-primary-light)] flex items-center justify-center text-white text-base sm:text-lg transition-transform duration-300 hover:scale-105 hover:rotate-[-3deg]">
                <i className="fa-solid fa-paper-plane" />
              </div>
              <div>
                <h3 className="font-display text-[1.25rem] sm:text-[1.4rem] font-bold text-text-main mb-1">
                  Send a Message
                </h3>
                <p className="text-[0.88rem] text-text-muted">
                  I'll get back to you within 24 hours.
                </p>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
                {[
                  {
                    name: "name",
                    label: "Name",
                    icon: "fa-solid fa-user",
                    placeholder: "Your full name",
                    type: "text",
                  },
                  {
                    name: "email",
                    label: "Email",
                    icon: "fa-solid fa-at",
                    placeholder: "you@example.com",
                    type: "email",
                  },
                ].map((field) => (
                  <div key={field.name} className="mb-[22px]">
                    <label className="flex items-center gap-2 mb-2.5 font-semibold text-[0.88rem] text-text-main tracking-[0.3px]">
                      <i
                        className={`${field.icon} text-[0.78rem] text-primary opacity-70`}
                      />{" "}
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`cnt-field__input ${errors[field.name] ? "error" : ""}`}
                    />
                    {errors[field.name] && (
                      <div className="mt-2 text-[0.82rem] text-red-500 font-medium">
                        {errors[field.name]}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-[22px]">
                <label className="flex items-center gap-2 mb-2.5 font-semibold text-[0.88rem] text-text-main tracking-[0.3px]">
                  <i className="fa-solid fa-tag text-[0.78rem] text-primary opacity-70" />{" "}
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`cnt-field__input ${errors.subject ? "error" : ""}`}
                />
                {errors.subject && (
                  <div className="mt-2 text-[0.82rem] text-red-500 font-medium">
                    {errors.subject}
                  </div>
                )}
              </div>

              <div className="mb-[22px]">
                <label className="flex items-center gap-2 mb-2.5 font-semibold text-[0.88rem] text-text-main tracking-[0.3px]">
                  <i className="fa-solid fa-message text-[0.78rem] text-primary opacity-70" />{" "}
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className={`cnt-field__input ${errors.message ? "error" : ""}`}
                />
                {errors.message && (
                  <div className="mt-2 text-[0.82rem] text-red-500 font-medium">
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="cnt-form__submit"
                disabled={submitting}
              >
                <span>{submitting ? "Opening Gmail..." : "Send Message"}</span>
                <i className="fa-solid fa-arrow-right transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
