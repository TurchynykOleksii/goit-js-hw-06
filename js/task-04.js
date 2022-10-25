const btns = {
  inc: document.querySelector("[data-action='increment']"),
  dec: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};

let counterValue = 0;

btns.inc.addEventListener("click", () => {
  counterValue += 1;

  btns.value.textContent = counterValue;
});

btns.dec.addEventListener("click", () => {
  counterValue -= 1;

  btns.value.textContent = counterValue;
});
