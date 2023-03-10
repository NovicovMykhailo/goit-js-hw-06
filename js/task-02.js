const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
/*
В HTML есть пустой список ul#ingredients.
<ul id="ingredients"></ul>

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. 
Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.
*/
const listOfIngredientsEl = document.querySelector("#ingredients");
const listElementsItems = createList(ingredients);

function createList(array) {
	let elementsList = [];
	for (let item of array) {
		const listItem = document.createElement("li");
		listItem.classList.add("item");
		listItem.textContent = item;
		elementsList.push(listItem);
	}
	return elementsList;
}

listOfIngredientsEl.append(...listElementsItems);

console.table(ingredients)