let control = document.getElementById("font-size-control");

let text = document.getElementById("text");

control.addEventListener("input", () => {
  text.style.fontSize = control.value + "px";
});
