/*Напиши скрипт который:

    Посчитает и выведет в консоль количество категорий в ul#categories, 
        то есть элементов li.item.
    Для каждого элемента li.item в списке ul#categories, 
        найдет и выведет в консоль текст заголовка элемента (тега <h2>)
        и количество элементов в категории (всех вложенных в него <li>).
    В результате, в консоли будут выведены такие сообщения.

   // Number of categories: 3

    Category: Animals
    Elements: 4

    Category: Products
    Elements: 3

    Category: Technologies
    Elements: 5

*/

const categoryItemEl = document.querySelectorAll(".item");

logElements(categoryItemEl);

function logElements(array) {
	    console.log(`Number of categories: ${array.length}`);
        console.log('')//зроблено задля краси у консолі

	for (let el of array) {
		console.log(`Category: ${el.children[0].textContent}`);
		console.log(`Elements: ${el.children[1].childElementCount}`);
        console.log('')//зроблено задля краси у консолі
	}
}



