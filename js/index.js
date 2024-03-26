const nav = document.getElementById("site-menu");
const header = document.getElementById("top");

function navToggle() {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("menu");

  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
}
