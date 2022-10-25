function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyHtml = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const colorEl = document.querySelector(".color");

changeColor.addEventListener("click", changeBgColor);

function changeBgColor() {
  bodyHtml.style.backgroundColor = `${getRandomColor()}`;
  colorEl.textContent = getRandomColor();
}
