// SoftAgents - Interactive Logic

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Footer Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Intersection Observer for Scroll Revelations
  const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, revealOptions);

  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => revealObserver.observe(el));

  // 4. Navbar Scroll Effect
  const navbar = document.querySelector(".nav-vaultix");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.05)";
    } else {
      navbar.style.backdropFilter = "none";
      navbar.style.borderBottom = "none";
    }
  });
});
