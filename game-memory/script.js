const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'fries',
			picture: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			picture: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			picture: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			picture: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			picture: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			picture: 'images/hotdog.png',
		},
		{
			name: 'fries',
			picture: 'images/fries.png',
		},
		{
			name: 'cheeseburger',
			picture: 'images/cheeseburger.png',
		},
		{
			name: 'ice-cream',
			picture: 'images/ice-cream.png',
		},
		{
			name: 'pizza',
			picture: 'images/pizza.png',
		},
		{
			name: 'milkshake',
			picture: 'images/milkshake.png',
		},
		{
			name: 'hotdog',
			picture: 'images/hotdog.png',
		},
	];
	cardArray.sort(() => 0.5 - Math.random());
	function creatCard() {
		const grid = $('.grid');
		cardArray.forEach((card, index) => {
			const img = document.createElement('img');
			img.setAttribute('data-id', index);
			img.setAttribute('src', 'images/blank.png');
			// img.addEventListener('click', flipCard);
			grid.append(img);
		});
	}
	creatCard();
});
