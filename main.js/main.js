const header = document.querySelector(".site-header");
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

function onScroll() {
  if (window.scrollY > 10) header.classList.add("is-scrolled");
  else header.classList.remove("is-scrolled");
}
window.addEventListener("scroll", onScroll);
onScroll();

// Mobile menu toggle
function setMenu(open) {
  burger.setAttribute("aria-expanded", String(open));
  mobileMenu.style.display = open ? "block" : "none";
  mobileMenu.setAttribute("aria-hidden", String(!open));
}
setMenu(false);

burger?.addEventListener("click", () => {
  const isOpen = burger.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Close menu on link click
mobileMenu?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => setMenu(false));
});
