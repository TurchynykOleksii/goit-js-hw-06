const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}\n `);

const categoriesArr = [...categories]
  .map(
    (item) => `Category: ${item.children[0].textContent}
Elements: ${item.children[1].children.length}`
  )
  .join("\n \n");
console.log(categoriesArr);
