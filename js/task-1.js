const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsCount}`);
});
