document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Menü schließen bei Klick außerhalb
  document.addEventListener('click', function(e) {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });

  // ESC-Taste schließt Menü
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      navLinks.classList.remove('open');
    }
  });
});