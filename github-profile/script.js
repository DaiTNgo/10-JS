<<<<<<< HEAD
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const APIURL = 'https://api.github.com/users/';

const main = $('#main');
const form = $('#form');
const search = $('#search');

getUser('florinpop17');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const value = search.value;

	getUser(value);
});

async function getUser(username) {
	const resp = await fetch(APIURL + username);
	const respData = await resp.json();
	createUserCard(respData);
	getRepos(username);
}
async function getRepos(username) {
	const resp = await fetch(APIURL + username + '/repos');
	const respData = await resp.json();
	addReposToCard(respData);
}

function createUserCard(user) {
	const cardHTML = `
        <div class="card">
            <div>
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;

	main.innerHTML = cardHTML;
}

function addReposToCard(respData) {
	const repos = $('#repos');
	respData
		.sort((a, b) => {
			return b.stargazers_count - a.stargazers_count;
		})
		.slice(0, 9)
		.forEach((repo) => {
			const rep = `
            <a class='repo' href = ${repo.html_url} target="_blank">${repo.name}</a>
            `;
			repos.insertAdjacentHTML('beforeend', rep);
		});
}
=======

>>>>>>> ef96b20ec60d2b0870534e1a530edfb8e95e37ec
