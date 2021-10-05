const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.onload = () => {
	const hex = $('input');
	hex.onkeyup = () => {
		document.body.style.backgroundColor = hex.value;
	};
};
