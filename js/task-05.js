/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
 подставляет его текущее значение в span#name-output. Если инпут пустой, 
 в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const refs = {
	inputEl: document.querySelector("#name-input"),
	outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener('input',onInputChange )

function onInputChange(event){
    refs.outputEl.textContent = event.currentTarget.value
}