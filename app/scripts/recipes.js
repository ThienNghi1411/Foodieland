/* eslint-disable quotes */
// check option
var options = document.querySelectorAll(".optionIngredient");
options.forEach((option) => {
  option.addEventListener("click", () => {
    let btn = option.querySelector(".optionIngredient__iconCont");
    let textOption = option.querySelector(".optionIngredient__name");
    btn.style.transition = "all 0.2s linear";
    textOption.style.transition = "all 0.2s linear";
    if (btn.classList.contains("activeIngredient")) {
      btn.classList.remove("activeIngredient");
    } else {
      btn.classList.add("activeIngredient");
    }
    if (textOption.classList.contains("activeText")) {
      textOption.classList.remove("activeText");
    } else {
      textOption.classList.add("activeText");
    }
  });
});
