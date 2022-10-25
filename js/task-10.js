function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//vars
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
const boxesEl = document.querySelector("#boxes");
const controlsEl = document.querySelector("#controls");
//btn create and destroy
btnCreateEl.addEventListener("click", onBtnCreateEl);
btnDestroyEl.addEventListener("click", onBtnDestroyEl);
//logic destroy  btn
function onBtnDestroyEl() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
//logic create  btn
function onBtnCreateEl() {
  createBoxes(Number(inputEl.value));
}
//function with create boxes and style
function createBoxes(amount) {
  let markup = ``;

  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="background-color: ${getRandomHexColor()}"></div>`;
  }

  boxesEl.insertAdjacentHTML("afterbegin", markup);

  const arr = [...boxesEl.children];
  arr.forEach((div, index) => {
    div.style.width = `${30 + 10 * (index + 1)}px`;
    div.style.height = `${30 + 10 * (index + 1)}px`;
  });
}
