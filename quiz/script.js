const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const quizData = [
	{
		question: 'What is the most used programming language in 2019?',
		a: 'Java',
		b: 'C',
		c: 'Python',
		d: 'JavaScript',
		correct: 'd',
	},
	{
		question: 'Who is the President of US?',
		a: 'Florin Pop',
		b: 'Donald Trump',
		c: 'Ivan Saldano',
		d: 'Mihai Andrei',
		correct: 'b',
	},
	{
		question: 'What does HTML stand for?',
		a: 'Hypertext Markup Language',
		b: 'Cascading Style Sheet',
		c: 'Jason Object Notation',
		d: 'Helicopters Terminals Motorboats Lamborginis',
		correct: 'a',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		d: 'none of the above',
		correct: 'b',
	},
];

window.onload = () => {
	const btnSubmit = $('button');
	const questionEle = $('h1');
	const aEle = $('#a');
	const bEle = $('#b');
	const cEle = $('#c');
	const dEle = $('#d');
	let score = 0;
	let currentQuiz = 0;
	const loadQuestion = () => {
		if (currentQuiz >= quizData.length) return;
		const { a, b, c, d, question, correct } = quizData[currentQuiz];
		questionEle.innerText = question;
		aEle.nextElementSibling.innerText = a;
		bEle.nextElementSibling.innerText = b;
		cEle.nextElementSibling.innerText = c;
		dEle.nextElementSibling.innerText = d;
	};

	loadQuestion();

	btnSubmit.addEventListener('click', () => {
		if (!isAnswer()) {
			score += 0;
			currentQuiz++;
			loadQuestion();
		} else {
			score += 1;
			currentQuiz++;
			loadQuestion();
		}
		if (currentQuiz >= quizData.length)
			$(
				'.container-quiz'
			).innerHTML = `${score} / 4 <button onclick = 'location.reload()'>Reload</button>`;
	});

	function isAnswer() {
		let answers = [...$$('label')];
		let result = false;
		answers.forEach((answer) => {
			if (currentQuiz >= quizData.length) return;
			if (
				quizData[currentQuiz][quizData[currentQuiz].correct] ===
					answer.innerText &&
				answer.control.checked
			) {
				result = true;
			}
		});
		return result;
	}
	isAnswer();
};
