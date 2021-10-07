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
	const grid = $('.grid');
	const score = $('.score');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];
	function creatCard() {
		cardArray.forEach((card, index) => {
			const img = document.createElement('img');
			img.setAttribute('data-id', index);
			img.setAttribute('src', 'images/blank.png');
			img.addEventListener('click', flipCard);
			grid.append(img);
		});
	}
	function checkForMatch() {
		const cards = $$('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (optionOneId === optionTwoId) {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
		} else if (cardArray[optionOneId].name === cardArray[optionTwoId].name) {
			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');
			cards[optionOneId].removeEventListener('click', flipCard);
			cards[optionTwoId].removeEventListener('click', flipCard);
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
		}
		cardsChosen = [];
		cardsChosenId = [];
		calcScore();
	}
	function calcScore() {
		score.innerText = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			score.innerText = 'Congratulations! You found them all!';
		}
	}
	function flipCard() {
		const cardId = this.dataset.id;
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].picture);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}
	creatCard();
});
