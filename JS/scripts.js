// Navigation functionality
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navbar = document.getElementById("navbar");

// Toggle mobile menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});
// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});
// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".feature-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

// Intersection Observer for animations in the skill section
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");

      // ✅ Special handling for skill bars
      if (entry.target.classList.contains("skill-item")) {
        const progressBar = entry.target.querySelector(".skill-progress");
        const width = progressBar.getAttribute("data-width");
        setTimeout(() => {
          progressBar.style.width = width + "%";
        }, 200);
      }
    }
  });
}, observerOptions);

// ✅ Observe skill items
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-item").forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
  });
});
