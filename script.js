// årtal i footer
document.getElementById("year")?.append(new Date().getFullYear());

// mobilmeny
const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
btn?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});
// Rullgardin (accordion)
document.querySelectorAll('[data-accordion]').forEach(acc => {
  const items = acc.querySelectorAll('[data-acc]');
  items.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;

      // Stäng andra
      items.forEach(other => {
        const p = other.nextElementSibling;
        if (other !== btn) {
          other.classList.remove('is-open');
          p.classList.remove('open');
          p.style.maxHeight = null;
        }
      });

      // Toggle vald
      const isOpen = btn.classList.toggle('is-open');
      panel.classList.toggle('open', isOpen);
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : null;
    });
  });
});
