document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".map-text, .model-subscribe, .model-column-tel, .left-panel, .social-title, .footer-top, .footer-contact, .footer-subscribe");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {
              entry.target.classList.remove("visible"); // Скрывает текст при прокрутке вверх
          }
      });
  }, { threshold: 0.1 });

  elements.forEach((el) => observer.observe(el));
});
