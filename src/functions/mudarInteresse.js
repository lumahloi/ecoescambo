function mudarInteresse(button) {
  if (button.textContent === "Tenho interesse") {
    button.textContent = "Tirar interesse";
    button.classList.add("btn-interest");
  } else {
    button.textContent = "Tenho interesse";
    button.classList.remove("btn-interest");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (
      button.textContent === "Tenho interesse" ||
      button.textContent === "Tirar interesse"
    ) {
      button.addEventListener("click", function () {
        mudarInteresse(this);
      });
    }
  });
});
