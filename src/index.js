const HEADER = document.querySelector(".header");
const TOGGLE = document.querySelector(".toggle");
const BODY = document.body;
const mediaQueryList = window.matchMedia("(max-width: 768px)");

mediaQueryList.addEventListener("change", ({ matches }) => {
  HEADER.classList.toggle("header--is-open", false);
  BODY.classList.toggle("no-scroll", false);
});

function toggleMenu() {
  BODY.classList.toggle(
    "no-scroll",
    mediaQueryList.matches && !HEADER.classList.contains("header--is-open")
  );
  HEADER.classList.toggle(
    "header--is-open",
    mediaQueryList.matches && !HEADER.classList.contains("header--is-open")
  );
}

TOGGLE.addEventListener("click", toggleMenu);
