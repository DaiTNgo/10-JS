const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onload = () => {
	const meals = $('#meals');
	const arrMeal = getMealLs() || [];
	getRandomMeal();

	async function getRandomMeal() {
		const resp = await fetch(
			'https://www.themealdb.com/api/json/v1/1/random.php'
		);

		const respData = await resp.json();
		const randomMeal = respData.meals[0];
		addMeal(randomMeal);
	}

	async function getMealById(id) {
		const resp = await fetch(
			'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id
		);
	}

	async function getMealsBySearch(term) {
		const resp = await fetch(
			'https://www.themealdb.com/api/json/v1/1/search.php?s=' + term
		);
	}
	function addMeal(meal) {
		meals.innerHTML = `
        <div class="meal">
            <div class="meal-header">
                <img
                    src=${meal.strMealThumb}
                />
            </div>
            <div class="meal-body">
                <h4>${meal.strCategory}</h4>
                <i class="bx bx-heart" id="btn"></i>
            </div>
        </div>`;

		const heart = $('#btn');
		heart.addEventListener('click', () => {
			heart.classList.toggle('active');
			if (heart.classList.contains('active')) {
				setMealIdLs(meal.idMeal);
			} else removeMealIdLs(meal.idMeal);
		});
	}
	function setMealIdLs(mealId) {
		arrMeal.push(mealId);
		localStorage.setItem('mealIds', JSON.stringify(arrMeal));
	}
	function removeMealIdLs(mealId) {
		const index = arrMeal.indexOf(mealId);
		arrMeal.splice(index, 1);
	}

	function getMealLs() {
		return JSON.parse(localStorage.getItem('mealIds'));
	}
};
