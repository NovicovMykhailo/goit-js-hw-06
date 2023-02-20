/* Напиши скрипт создания и очистки коллекции элементов. 

Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. -->
*/

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amountOfBoxes;

const refs = {
	create: document.querySelector("[data-create]"),
	destroy: document.querySelector("[data-destroy]"),
	input: document.querySelector("#controls > input"),
	container: document.querySelector("#boxes"),
};

refs.input.addEventListener("input", onInputNumber);
refs.create.addEventListener("click", onMakeBoxes);
refs.destroy.addEventListener("click", onRemoveBoxes);

function onInputNumber(event) {
	amountOfBoxes = event.currentTarget.value;
}

function onMakeBoxes() {
	const collection = createBoxes(amountOfBoxes);
  refs.container.append(...collection);
}

function onRemoveBoxes() {
	refs.container.innerHTML = "";
	refs.input.value = "";
	amountOfBoxes = 0;
}

function createBoxes(amount) {
	let collection = [];
	for (let i = 0; i < amount; i += 1) {
		let currentColor = getRandomHexColor();

		const box = document.createElement("div");
		box.setAttribute("style", `background-color:${currentColor}`);
		box.style.width = `${i * 10 + 30}px`;
		box.style.height = `${i * 10 + 30}px`;

		collection.push(box);
	}
	return collection;
}
// keyboard events
window.addEventListener("keydown", (event) => {
  if(event.key === 'Enter'){
    return onMakeBoxes();
  }
});

window.addEventListener("keydown", (event) => {
  if(event.key === 'Escape'){
    return onRemoveBoxes();
  }
});