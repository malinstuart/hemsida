const knapp = document.getElementById("knapp");
const status = document.getElementById("status");

knapp.addEventListener("click", () => {
  status.textContent = "Du klickade på knappen! 🎉";
});