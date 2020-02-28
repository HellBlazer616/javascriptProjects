'use strict';

const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const data = [];
const search = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

async function getData(url) {
	try {
		const urlData = await fetch(url);
		const urlJsonData = await urlData.json();
		data.push(...urlJsonData);
	} catch (err) {
		console.error('Fetch Failed');
	}
}
getData(endpoint);

function findMatches(wordsToMatch, data) {
	return data.filter((place) => {
		const regex = new RegExp(wordsToMatch, 'gi');
		return place.city.match(regex) || place.city.match(regex);
	});
}
function highlight(highlight, place) {
	const regex = new RegExp(highlight, 'gi');
	const cityName = place.city.replace(regex, `<span class="hl">${highlight}</span>`);
	const stateName = place.city.replace(regex, `<span class="hl">${highlight}</span>`);

	return { cityName, stateName };
}
let timeoutId;
function displayMatches(e) {
	clearTimeout(timeoutId);

	timeoutId = setTimeout(function() {
		const matchArray = findMatches(e.target.value, data);
		const html = matchArray
			.map((place) => {
				const { cityName, stateName } = highlight(e.target.value, place);
				return `
                        <li>
                            <span class="name">${cityName}, ${stateName}</span>
                            <span class="population">${Number(
								place.population
							).toLocaleString()}</span>
                        </li>
                     `;
			})
			.join('');
		suggestion.innerHTML = html;
	}, 300);
}

search.addEventListener('input', displayMatches);
