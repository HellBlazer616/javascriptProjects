'use strict';
const binaryInput = document.querySelector('.content__input');
const decimalInput = document.querySelector('.content__output');
const binaryForm = document.querySelector('#binaryForm');
const decimalForm = document.querySelector('#decimalForm');
const labelBinary = document.querySelector('.content__labelBinary');
const labelDecimal = document.querySelector('.content__labelDecimal');
const binaryButton = document.querySelector('#binary');
const decimalButton = document.querySelector('#decimal');
document.addEventListener('DOMContentLoaded', (e) => {
	binaryInput.addEventListener('keypress', (event) => {
		window.setTimeout(() => {
			if (event.key !== '0' && event.key !== '1') {
				labelBinary.innerText = 'Wrong Input, Enter Binary Number';
				binaryInput.value = binaryInput.value.slice(
					0,
					binaryInput.value.length - 1
				);
			} else {
				if (labelBinary.innerText !== 'Enter Binary Number') {
					labelBinary.innerText = 'Enter Binary Number';
				}
			}
		}, 300);
	});
	decimalInput.addEventListener('keypress', (event) => {
		const regex = /\d/g;

		window.setTimeout(() => {
			if (!regex.test(event.key)) {
				labelDecimal.innerText = 'Wrong Input, Enter Decimal Number';
				decimalInput.value = decimalInput.value.slice(
					0,
					decimalInput.value.length - 1
				);
			} else {
				if (labelDecimal.innerText !== 'Decimal Number') {
					labelDecimal.innerText = 'Decimal Number';
				}
			}
		}, 300);
	});

	binaryForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if (binaryInput.value === '') labelBinary.innerText = 'Binary Number';
		else {
			decimalInput.value = parseInt(binaryInput.value, 2);
			labelBinary.innerText = 'Binary Number';
			labelDecimal.innerText = 'Decimal Number';
		}
	});
	decimalForm.addEventListener('submit', (e) => {
		e.preventDefault();
		if (decimalInput.value === '')
			labelDecimal.innerText = 'Decimal Number';
		else {
			let ans = Number(decimalInput.value);
			binaryInput.value = ans.toString(2);
			labelBinary.innerText = 'Binary Number';
		}
	});
});
