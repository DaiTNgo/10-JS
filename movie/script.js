const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onload = () => {
	const APIURL =
		'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
	const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
	const search = $('#search');

	const getImg = async () => {
		const result = await fetch(APIURL);
		let resourceImg = await result.json();
		resourceImg = resourceImg.results;
		if (search.value === '') {
			const movies = resourceImg.reduce((movies, currentMovie) => {
				return (movies += `
		            <div class='movie'>
		                <img src='${IMGPATH + currentMovie.backdrop_path}' />
		                <div class='movie-info'>
		                    <h3 class='movie-name'>${currentMovie.title}</h3>
		                    <p class='movie-rate ${getClass(
													currentMovie.vote_average
												)}' >${currentMovie.vote_average}</p>
		                </div>
		            </div>
		            `);
			}, '');
			$('main').innerHTML = movies;
		}
		search.onkeyup = (e) => {
			const movies = resourceImg.reduce((movies, currentMovie) => {
				if (
					currentMovie.title
						.toLowerCase()
						.includes(e.target.value.toLowerCase())
				) {
					movies += `
                    <div class='movie'>
                        <img src='${IMGPATH + currentMovie.backdrop_path}' />
                        <div class='movie-info'>
                            <h3 class='movie-name'>${currentMovie.title}</h3>
                            <p class='movie-rate ${getClass(
															currentMovie.vote_average
														)}' >${currentMovie.vote_average}</p>
                        </div>
                    </div>
                            `;
				}
				return movies;
			}, '');
			$('main').innerHTML = movies;
		};
	};
	getImg();

	function getClass(rate) {
		if (rate >= 8) {
			return 'green';
		} else if (rate < 8 && rate > 5) {
			return 'orange';
		} else return 'red';
	}
};
