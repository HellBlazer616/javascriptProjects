const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('form');

function showError(element, message) {
	const parentElement = element.parentElement;
	parentElement.classList = `form-group error`;
	const small = parentElement.querySelector('small');
	message !== undefined ? (small.innerText = message) : null;
}

function showValid(element) {
	const parentElement = element.parentElement;
	parentElement.classList = `form-group valid`;
}

function userNameCheck(element) {
	const value = String(element.value).trim();

	if (value.length === 0) {
		showError(element);
	} else if (value.length < 3) {
		showError(element, 'User name must be at least 3 characters');
	} else {
		showValid(element);
	}
}

function emailCheck(element) {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const valid = regex.test(element.value);

	if (element.value.trim() === '') {
		showError(element);
	} else if (!valid) {
		showError(element, 'Please enter a valid email address');
	} else {
		showValid(element);
	}
}

function passwordCheck(element) {
	value = element.value;
	console.log(`${value === confirmPassword.value}  `);
	if (value.length < 8) {
		showError(element, 'Password must be 8 characters or higher');
	} else if (value === userName) {
		showError(element, 'User name is not a valid password');
	} else if (value === email) {
		showError(element, 'User email is not a valid password');
	} else if (value !== confirmPassword.value) {
		console.log(`oops`);
		showError(element, 'Passwords do no match');
	} else {
		showValid(element);
	}
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	userNameCheck(userName);
	emailCheck(email);
	passwordCheck(password);
});
