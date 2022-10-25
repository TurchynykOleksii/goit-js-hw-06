const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let listsUl = document.getElementById("ingredients");
const ingredientsVegetable = ingredients.forEach((vegetable) => {
  let items = document.createElement("li");
  items.classList.add("item");
  items.innerHTML = vegetable;
  listsUl.append(items);
});
