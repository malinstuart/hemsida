// årtal i footer
document.getElementById("year")?.append(new Date().getFullYear());

// mobilmeny
const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
btn?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});
