window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  navMenu.classList.add("active");
});

navMenu.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
});
