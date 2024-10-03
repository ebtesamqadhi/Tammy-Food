const nav = document.querySelector("nav"),
  openNav = document.querySelector(".bars i"),
  closeNav = document.querySelector("nav i");

openNav.addEventListener("click", () => {
  nav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  nav.classList.remove("active");
});
