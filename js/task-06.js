let inputValid = document.getElementById("validation-input");

let totalLenght = inputValid.getAttribute("data-length");
let inputSymbolsLength = parseInt(totalLenght, 10);

inputValid.addEventListener("blur", () => {
  if (inputValid.value.length === inputSymbolsLength) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
  }
  if (inputValid.value.length === 0) {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
  }
  if (
    inputValid.value.length !== inputSymbolsLength &&
    inputValid.value.length !== 0
  ) {
    inputValid.classList.add("invalid");
  }
});
