/* eslint-disable quotes */
//navMenu
var wrapper = document.querySelector(".wrapper");
var navMenu = document.querySelector(".navMenu");
var navIcon = document.querySelector(".header__navMenu-icon");

console.log(navMenu);
wrapper.addEventListener("click", () => {
  navMenu.style.display = "none";
});

navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

navIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.style.display = "block";
});

// Click Heart Icon
var heartIcon = document.querySelectorAll(".heartCont");
console.log(heartIcon);
heartIcon.forEach((heart) => {
  heart.addEventListener("click", (e) => {
    e.preventDefault();
    heart.style.transtion = "all 0.2s linear";
    if (heart.classList.contains("heartIconActive")) {
      heart.classList.remove("heartIconActive");
    } else {
      heart.classList.add("heartIconActive");
    }
  });
});
