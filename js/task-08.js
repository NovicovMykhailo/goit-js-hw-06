/* Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

1 Обработка отправки формы form.login-form должна быть по событию submit.

2 При отправке формы страница не должна перезагружаться.

3 Если в форме есть незаполненные поля, выводи alert 
  с предупреждением о том, что все поля должны быть заполнены.

4 Если пользователь заполнил все поля и отправил форму, 
  - собери значения полей в обьект, 
    где имя поля будет именем свойства,  а значение поля - значением свойства. 
    Для доступа к элементам формы используй свойство elements.

5 Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */

const refs = {
	form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onSubmit);



function onSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === '' || password === '') {
		window.alert("все поля должны быть заполнены");
	}

	const formData = {
		email,
		password,
	};

  console.table(formData)
  
  refs.form.reset()
	
}
