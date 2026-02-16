/**
 * MASY MOHAMED — Portfolio JavaScript
 * Professional Redesign with Advanced Animations
 * Features: Custom cursor, scroll animations, magnetic buttons,
 *           tilt effects, parallax, header auto-hide, and more.
 */
document.addEventListener("DOMContentLoaded", () => {
  // Prevent animation flash on load
  document.body.classList.add("loading");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.remove("loading");
    });
  });

  // ==================== CUSTOM CURSOR ====================
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");
  let cursorX = 0,
    cursorY = 0;
  let outlineX = 0,
    outlineY = 0;

  if (cursorDot && cursorOutline && window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursorDot.style.left = cursorX + "px";
      cursorDot.style.top = cursorY + "px";
    });

    function animateCursorOutline() {
      outlineX += (cursorX - outlineX) * 0.12;
      outlineY += (cursorY - outlineY) * 0.12;
      cursorOutline.style.left = outlineX + "px";
      cursorOutline.style.top = outlineY + "px";
      requestAnimationFrame(animateCursorOutline);
    }
    animateCursorOutline();

    // Change cursor on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .btn, .social-icon, .skill-card, .srv-card, .proj-card, .testi-card, .cnt-link, .cnt-social, input, textarea, .theme-toggle, .btn-back-top, .header-social-icon, .floating-icon",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        document.body.classList.add("cursor-hover"),
      );
      el.addEventListener("mouseleave", () =>
        document.body.classList.remove("cursor-hover"),
      );
    });
  }

  // ==================== SCROLL PROGRESS BAR ====================
  const scrollProgress = document.getElementById("scroll-progress");

  // ==================== TYPING EFFECT ====================
  const typingElement = document.getElementById("typing-text");
  if (typingElement) {
    const roles = [
      "FullStack Developer",
      "Frontend Developer",
      "Backend Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeRole() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at full word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
      }

      setTimeout(typeRole, typingSpeed);
    }
    setTimeout(typeRole, 1000);
  }

  // ==================== PARTICLES CANVAS ====================
  const particlesCanvas = document.getElementById("particles-canvas");
  if (particlesCanvas && window.innerWidth > 768) {
    const ctx = particlesCanvas.getContext("2d");
    let particles = [];
    const particleCount = 50;
    const connectionDistance = 150;
    const primaryColor =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-primary")
        .trim() || "#764B24";

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
        : { r: 118, g: 75, b: 36 };
    }

    function resizeCanvas() {
      particlesCanvas.width = particlesCanvas.offsetWidth;
      particlesCanvas.height = particlesCanvas.offsetHeight;
    }

    function createParticle() {
      const colors = [
        { r: 118, g: 75, b: 36 }, // primary
        { r: 175, g: 130, b: 96 }, // primary-light
        { r: 99, g: 102, b: 241 }, // indigo
        { r: 34, g: 197, b: 94 }, // green
        { r: 232, g: 167, b: 100 }, // amber
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * particlesCanvas.width,
        y: Math.random() * particlesCanvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1.5,
        color: color,
        opacity: Math.random() * 0.5 + 0.2,
      };
    }

    function initParticles() {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = "rgba(175, 130, 96, " + opacity + ")";
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > particlesCanvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > particlesCanvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          "rgba(" +
          p.color.r +
          "," +
          p.color.g +
          "," +
          p.color.b +
          "," +
          p.opacity +
          ")";
        ctx.fill();
      }

      requestAnimationFrame(drawParticles);
    }

    initParticles();
    drawParticles();
    window.addEventListener("resize", initParticles);
  }

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = progress + "%";
    }
  }

  // ==================== HEADER SCROLL BEHAVIOR ====================
  const header = document.getElementById("main-header");
  let lastScrollY = 0;
  let ticking = false;

  function updateHeader() {
    const currentScrollY = window.scrollY;

    if (header) {
      // Add scrolled class
      if (currentScrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Auto-hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  // ==================== ACTIVE NAV LINK ====================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  function updateActiveNav() {
    const scrollPos = window.scrollY + 200;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // ==================== COMBINED SCROLL HANDLER ====================
  window.addEventListener(
    "scroll",
    () => {
      updateScrollProgress();
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeader();
          updateActiveNav();
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  // ==================== SMOOTH SCROLL ====================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });

  // ==================== MOBILE MENU ====================
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("main-nav");

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    });
  }

  // ==================== SCROLL REVEAL ANIMATIONS ====================
  const revealElements = document.querySelectorAll(".reveal-up, .reveal-left");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ==================== TIMELINE SCROLL ANIMATION (Education & Experience) ====================
  const timelines = document.querySelectorAll(".timeline");

  if (timelines.length > 0) {
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target;

            // Animate the vertical line
            timeline.classList.add("tl-visible");

            // Stagger-animate each entry
            const tlEntries = timeline.querySelectorAll(".timeline-entry");
            tlEntries.forEach((tlEntry, i) => {
              setTimeout(() => {
                tlEntry.classList.add("tl-entry-visible");
              }, 200 + i * 150);
            });

            timelineObserver.unobserve(timeline);
          }
        });
      },
      { threshold: 0.1 },
    );

    timelines.forEach((tl) => timelineObserver.observe(tl));
  }

  // ==================== CONTACT SECTION ANIMATIONS ====================
  const cntInfo = document.querySelector(".cnt-info");
  const cntForm = document.querySelector(".cnt-form");

  if (cntInfo || cntForm) {
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cnt-visible");
            contactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (cntInfo) contactObserver.observe(cntInfo);
    if (cntForm) contactObserver.observe(cntForm);
  }

  // Input focus state — toggles .focused on parent .cnt-field
  document.querySelectorAll(".cnt-field__input").forEach((input) => {
    input.addEventListener("focus", () => {
      input.closest(".cnt-field")?.classList.add("focused");
    });
    input.addEventListener("blur", () => {
      input.closest(".cnt-field")?.classList.remove("focused");
    });
  });

  // ==================== MAGNETIC BUTTON EFFECT ====================
  const magneticElements = document.querySelectorAll("[data-magnetic]");

  if (window.innerWidth > 768) {
    magneticElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 0.3;
        el.style.transform =
          "translate(" + x * strength + "px, " + y * strength + "px)";
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ==================== TILT EFFECT ====================
  const tiltElements = document.querySelectorAll("[data-tilt]");

  if (window.innerWidth > 768) {
    tiltElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const tiltX = (y - 0.5) * 8;
        const tiltY = (x - 0.5) * -8;
        el.style.transform =
          "perspective(800px) rotateX(" +
          tiltX +
          "deg) rotateY(" +
          tiltY +
          "deg) translateY(-4px)";
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });
  }

  // ==================== PARALLAX FOR HERO ORBS ====================
  const orbs = document.querySelectorAll(".hero-gradient-orb");

  if (window.innerWidth > 768 && orbs.length > 0) {
    window.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 15;
        orb.style.transform =
          "translate(" + x * speed + "px, " + y * speed + "px)";
      });
    });
  }

  // ==================== SKILLS FILTER & STAGGERED ANIMATION ====================
  const skillFilterBtns = document.querySelectorAll(".skills-filter-btn");
  const skillCards = document.querySelectorAll(".skill-card");

  // Filter logic
  skillFilterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // Update active button
      skillFilterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter cards with staggered animation
      let visibleIndex = 0;
      skillCards.forEach((card) => {
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
          setTimeout(() => {
            card.classList.add("hidden");
          }, 250);
        }
      });
    });
  });

  // Scroll-triggered staggered entrance
  const skillsMosaic = document.querySelector(".skills-mosaic");

  if (skillsMosaic) {
    const skillScrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card");
            cards.forEach((card, index) => {
              card.style.opacity = "0";
              card.style.transform = "translateY(24px) scale(0.96)";
              setTimeout(() => {
                card.style.transition =
                  "opacity 0.5s var(--ease-out-expo), transform 0.5s var(--ease-out-expo)";
                card.style.opacity = "1";
                card.style.transform = "translateY(0) scale(1)";
              }, index * 70);
            });
            skillScrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    // Set initial hidden state
    skillCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(24px) scale(0.96)";
    });

    skillScrollObserver.observe(skillsMosaic);
  }

  // ==================== SERVICES STAGGERED SCROLL ANIMATION ====================
  const servicesBento = document.querySelector(".services-bento");
  if (servicesBento) {
    const srvCards = servicesBento.querySelectorAll(".srv-card");

    const srvObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            srvCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("srv-visible");
              }, index * 100);
            });
            srvObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    srvObserver.observe(servicesBento);
  }

  // ==================== PROJECTS STAGGERED SCROLL ANIMATION ====================
  const projShowcase = document.querySelector(".proj-showcase");
  if (projShowcase) {
    const projCards = projShowcase.querySelectorAll(".proj-card");

    const projObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("proj-visible");
              }, index * 120);
            });
            projObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    projObserver.observe(projShowcase);
  }

  // ==================== TESTIMONIALS MARQUEE ====================
  const testiMarquee = document.querySelector(".testi-marquee");
  if (testiMarquee) {
    const track = testiMarquee.querySelector(".testi-track");
    // Start with animation paused, play when in view
    if (track) {
      track.style.animationPlayState = "paused";

      const testiObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              track.style.animationPlayState = "running";
              testiObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      testiObserver.observe(testiMarquee);
    }
  }

  // ==================== CONTACT SCROLL ANIMATION ====================
  const cntGrid = document.querySelector(".cnt-grid");
  if (cntGrid) {
    const cntPanels = cntGrid.querySelectorAll(".cnt-info, .cnt-form");

    const cntObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cntPanels.forEach((panel, index) => {
              setTimeout(() => {
                panel.classList.add("cnt-visible");
              }, index * 200);
            });
            cntObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cntObserver.observe(cntGrid);
  }

  // ==================== CONTACT FORM ====================
  const contactForm = document.querySelector("form");
  if (contactForm) {
    const cntFields = contactForm.querySelectorAll(".cnt-field");
    cntFields.forEach((field) => {
      const errorDiv = document.createElement("div");
      errorDiv.className = "cnt-field__error";
      field.appendChild(errorDiv);
    });

    function showError(fieldName, message) {
      const field = contactForm.querySelector('[name="' + fieldName + '"]');
      if (!field) return;
      const cntField = field.closest(".cnt-field");
      const errorDiv = cntField.querySelector(".cnt-field__error");
      field.classList.add("error");
      errorDiv.textContent = message;
      errorDiv.style.display = "flex";
    }

    function clearError(fieldName) {
      const field = contactForm.querySelector('[name="' + fieldName + '"]');
      if (!field) return;
      const cntField = field.closest(".cnt-field");
      const errorDiv = cntField.querySelector(".cnt-field__error");
      field.classList.remove("error");
      errorDiv.textContent = "";
      errorDiv.style.display = "none";
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const nameInput = contactForm.querySelector('input[name="name"]');
    const emailInput = contactForm.querySelector('input[name="email"]');
    const subjectInput = contactForm.querySelector('input[name="subject"]');
    const messageInput = contactForm.querySelector('textarea[name="message"]');

    if (nameInput) {
      nameInput.addEventListener("input", function () {
        if (this.value.trim().length > 0) clearError("name");
      });
    }
    if (emailInput) {
      emailInput.addEventListener("input", function () {
        if (this.value.trim().length > 0 && isValidEmail(this.value.trim()))
          clearError("email");
      });
    }
    if (subjectInput) {
      subjectInput.addEventListener("input", function () {
        if (this.value.trim().length > 0) clearError("subject");
      });
    }
    if (messageInput) {
      messageInput.addEventListener("input", function () {
        if (this.value.trim().length > 0) clearError("message");
      });
    }

    // Input focus animation
    contactForm.querySelectorAll(".cnt-field__input").forEach((input) => {
      input.addEventListener("focus", function () {
        this.closest(".cnt-field").classList.add("focused");
      });
      input.addEventListener("blur", function () {
        this.closest(".cnt-field").classList.remove("focused");
      });
    });

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let isValid = true;
      const name = nameInput ? nameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim() : "";
      const subject = subjectInput ? subjectInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";

      clearError("name");
      clearError("email");
      clearError("subject");
      clearError("message");

      if (!name) {
        showError("name", "Please enter your name");
        isValid = false;
      } else if (name.length < 2) {
        showError("name", "Name must be at least 2 characters");
        isValid = false;
      }

      if (!email) {
        showError("email", "Please enter your email address");
        isValid = false;
      } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address");
        isValid = false;
      }

      if (!subject) {
        showError("subject", "Please enter a subject");
        isValid = false;
      }

      if (!message) {
        showError("message", "Please enter your message");
        isValid = false;
      } else if (message.length < 10) {
        showError("message", "Message must be at least 10 characters");
        isValid = false;
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector(".cnt-form__submit");
        const btnSpan = submitBtn.querySelector("span");
        const originalText = btnSpan
          ? btnSpan.textContent
          : submitBtn.textContent;
        if (btnSpan) btnSpan.textContent = "Opening Gmail...";
        submitBtn.disabled = true;

        const gmailSubject = encodeURIComponent(
          subject || "Portfolio Contact from " + name,
        );
        const body = encodeURIComponent(
          "Name: " +
          name +
          "\nEmail: " +
          email +
          "\nSubject: " +
          subject +
          "\n\nMessage:\n" +
          message,
        );
        const gmailUrl =
          "https://mail.google.com/mail/?view=cm&fs=1&to=masym32@gmail.com&su=" +
          gmailSubject +
          "&body=" +
          body;
        window.open(gmailUrl, "_blank");

        setTimeout(() => {
          if (btnSpan) btnSpan.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      }
    });
  }

  // ==================== MODAL ====================
  const modal = document.getElementById("features-modal");
  const modalTitle = document.getElementById("modal-title");
  const featuresList = document.getElementById("features-list");
  const featureButtons = document.querySelectorAll(".btn-features");
  const closeModalBtn = document.querySelector(".close-modal");
  const modalBackdrop = document.querySelector(".modal-backdrop");

  if (modal && featureButtons) {
    featureButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const project = button.getAttribute("data-project");
        const features = button.getAttribute("data-features").split(",");

        modalTitle.textContent = project + " Features";
        featuresList.innerHTML = "";

        features.forEach((feature, index) => {
          const li = document.createElement("li");
          li.textContent = feature.trim();
          li.style.opacity = "0";
          li.style.transform = "translateY(10px)";
          li.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          featuresList.appendChild(li);

          // Staggered animation
          setTimeout(
            () => {
              li.style.opacity = "1";
              li.style.transform = "translateY(0)";
            },
            100 + index * 80,
          );
        });

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    const closeFunc = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    };

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeFunc);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeFunc);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) closeFunc();
    });
  }

  // ==================== THEME TOGGLE ====================
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  const currentTheme = savedTheme || "light";
  htmlElement.setAttribute("data-theme", currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme =
        htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }

  // ==================== SCROLL-DRIVEN PARALLAX ====================
  let scrollY = 0;
  const heroSection = document.getElementById("cover");

  // About photo parallax + reveal
  const aboutPhotoWrapper = document.querySelector(".about-photo-wrapper");
  const aboutPhotoFrame = aboutPhotoWrapper
    ? aboutPhotoWrapper.querySelector(".about-photo-frame")
    : null;
  const aboutDecoEls = aboutPhotoWrapper
    ? aboutPhotoWrapper.querySelectorAll(".deco-dot, .deco-line")
    : [];

  function parallaxScroll() {
    scrollY = window.scrollY;
    if (heroSection && scrollY < window.innerHeight) {
      const heroContent = heroSection.querySelector(".hero-content");
      const scrollIndicator = heroSection.querySelector(".scroll-indicator");
      if (heroContent) {
        heroContent.style.transform = "translateY(" + scrollY * 0.15 + "px)";
        heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
      }
      if (scrollIndicator) {
        scrollIndicator.style.opacity = 1 - scrollY / 300;
      }
    }

    // About photo parallax
    if (aboutPhotoFrame) {
      const rect = aboutPhotoWrapper.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const yShift = (progress - 0.5) * -30;
        const rotate = (progress - 0.5) * 3;
        aboutPhotoFrame.style.transform =
          "translateY(" + yShift + "px) rotate(" + rotate + "deg)";

        aboutDecoEls.forEach(function (el, i) {
          const speed = 0.6 + i * 0.2;
          el.style.transform =
            "translateY(" + (progress - 0.5) * -20 * speed + "px)";
        });
      }
    }

    requestAnimationFrame(parallaxScroll);
  }

  if (window.innerWidth > 768) {
    parallaxScroll();
  }

  // ==================== INITIALIZE ====================
  updateScrollProgress();
  updateActiveNav();
});
