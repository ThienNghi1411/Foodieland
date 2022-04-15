/* eslint-disable quotes */
//sticky Menu

window.onscroll = function () {
  myFunction();
};

// Get the navbar
var header = document.querySelector(".header");

// Get the offset position of the navbar
var getSticky = document.querySelector(".categories");
var sticky = getSticky.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
