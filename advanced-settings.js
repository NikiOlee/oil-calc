const detailsElement = document.querySelector(".advanced-settings");
const btn = document.querySelector("#calcBtn");

if (detailsElement && btn) {
  btn.addEventListener("click", function () {
    detailsElement.open = false;
  });
  inputs.forEach((input) => {
    input.addEventListener("click", function () {
      detailsElement.open = true;
    });
  });
} else {
  console.warn("Не удалось найти элементы .advanced-settings или #calcBtn");
}
