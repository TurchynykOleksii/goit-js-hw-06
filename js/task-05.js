let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

input.addEventListener("input", () => {
  if (input.value === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = input.value;
  }
});
