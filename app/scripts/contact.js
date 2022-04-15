/* eslint-disable quotes */
// Selection

var select = document.querySelector(".selectOption");
var selectValue = document.querySelector(".selectOption__value");
var selectOption = document.querySelectorAll(".selectMenu__option");
var selectMenu = document.querySelector(".selectMenu");

selectOption.forEach((option) => {
  option.addEventListener("click", (e) => {
    console.log(option);
    selectValue.innerText = option.innerText;
    selectMenu.style.display = "none";
    e.stopPropagation();
  });
});

select.addEventListener("click", () => {
  if (selectMenu.style.display == "block") {
    selectMenu.style.display = "none";
  } else {
    selectMenu.style.display = "block";
  }
});
