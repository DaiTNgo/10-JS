const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const newYears = '01 feb 2022';

const countdown = () => {
	const newYearsDate = new Date(newYears);

	let currentDay = new Date();
	let totalSecond = Math.floor(Math.abs(currentDay - newYearsDate) / 1000);
	let days = totalSecond / (24 * 60 * 60);

	let hours = (totalSecond % (24 * 60 * 60)) / (60 * 60);
	let mins = (totalSecond % (60 * 60)) / 60;
	let seconds = totalSecond % 60;

	$('#days').innerText = formatTime(Math.trunc(days));
	$('#hours').innerText = formatTime(Math.ceil(hours));
	$('#seconds').innerText = formatTime(Math.trunc(seconds));
	$('#mins').innerText = formatTime(Math.trunc(mins));
};
const formatTime = (time) => {
	return (time = time < 10 ? `0${time}` : time);
};
window.onload = () => {
	countdown();
	setInterval(countdown, 1000);
};
