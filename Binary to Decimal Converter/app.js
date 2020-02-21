document.addEventListener('DOMContentLoaded', (e) => {
	console.log(e);
	const input = document.querySelector('.content__input');
	const form = document.querySelector('form');
	const label = document.querySelector('.content__label');
	console.log(input.innerHTML);

	input.addEventListener('keypress', (event) => {
		window.setTimeout(() => {
			if (event.key !== '0' && event.key !== '1') {
				label.innerText = 'Wrong Input, Enter Binary Number';
				input.value = input.value.slice(0, input.value.length - 1);
			} else {
				if (label.innerText !== 'Enter Binary Number') {
					label.innerText = 'Enter Binary Number';
					console.dir(label.innerText === 'Enter Binary Number');
				}
			}
		}, 300);
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		input.value = parseInt(input.value, 2);
		label.innerText = 'Decimal Number';
	});
});
