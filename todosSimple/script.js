const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onload = () => {
	const input = $('#task');
	const form = $('form');
	const ul = $('#todoList');
	[...JSON.parse(localStorage.getItem('todoList'))].forEach((liText) => {
		const text = document.createElement('li');
		text.innerText = liText;
		ul.append(text);
		text.onclick = () => {
			text.classList.toggle('completed');
		};
		text.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			//prevent show rightClick
			text.remove();
			updateLs();
		});
	});
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		//prevent reload page
		const text = document.createElement('li');
		text.innerText = input.value;
		ul.prepend(text);

		text.onclick = () => {
			text.classList.toggle('completed');
		};
		text.addEventListener('contextmenu', (e) => {
			e.preventDefault();
			//prevent show rightClick
			text.remove();
			updateLs();
		});
		input.value = null;
		updateLs();
	});
	function updateLs() {
		const li = $$('li');
		let arrLi = [];
		// arrLi = [...JSON.parse(arrLi)];  localStorage.getItem('todoList') ||
		[...li].forEach((li) => {
			arrLi = [...arrLi, li.innerText];
		});
		localStorage.setItem('todoList', JSON.stringify(arrLi));
	}
};
