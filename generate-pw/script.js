const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const lengthEl = $('#length');
const symbolEl = $('#symbol');
const uppercaseEl = $('#uppercase');
const lowercaseEl = $('#lowercase');
const numberEl = $('#number');
const passwordEl = $('#password');
const pwcopy = $('#pw-copy');

const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const numbers = '1234567890';
const symbols = '!@#$%^&*()_+';

function getCharacter() {
	let xs = [];
	if (symbolEl.checked) {
		xs.push(getSymbol());
	}
	if (uppercaseEl.checked) {
		xs.push(getUppercase());
	}
	if (lowercaseEl.checked) {
		xs.push(getLowercase());
	}
	if (numberEl.checked) {
		xs.push(getNumber());
	}

	return xs[Math.floor(Math.random() * xs.length)];
}
function generate() {
	let password = '';
	let countlength = lengthEl.value;
	if (
		symbolEl.checked ||
		uppercaseEl.checked ||
		lowercaseEl.checked ||
		numberEl.checked
	)
		for (let i = 0; i < countlength; i++) {
			password += getCharacter();
		}
	console.log(password.length === 0);
	if (password.length == 0) {
		passwordEl.innerText = 'Vui long lua chon';
	} else passwordEl.innerText = password;
}

function getUppercase() {
	return uppercase[Math.floor(Math.random() * uppercase.length)];
}
function getNumber() {
	return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol() {
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function getLowercase() {
	return lowercase[Math.floor(Math.random() * lowercase.length)];
}
//Copy
pwcopy.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = passwordEl.innerText;

	if (!password) {
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

$('.generate-pw').addEventListener('click', generate);
