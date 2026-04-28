const revealItems = document.querySelectorAll("[data-reveal]");
const yearSlot = document.getElementById("current-year");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => observer.observe(item));

if (yearSlot) {
  yearSlot.textContent = new Date().getFullYear();
}
