// animations.js
// Exports functions to init site animations and navbar scroll behaviour.
// Designed to be called once in App.jsx.

export function handleNavbarOnScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black", "bg-opacity-90", "backdrop-blur-lg");
  } else {
    navbar.classList.remove("bg-black", "bg-opacity-90", "backdrop-blur-lg");
  }
}

export function initRevealAnimations() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // if user prefers reduced motion, make elements visible and skip animation
    document.querySelectorAll(".animate-fade-in, .animate-slide-up, .animate-slide-right").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition = "opacity 600ms ease, transform 600ms ease";
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".animate-fade-in, .animate-slide-up, .animate-slide-right").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    observer.observe(el);
  });
}

export function initSmoothInternalLinks() {
  // delegate clicks to internal anchors
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // close mobile menu if present
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.add("hidden");
    }
  });
}
