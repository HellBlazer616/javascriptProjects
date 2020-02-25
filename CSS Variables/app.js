const inputs = document.querySelectorAll('input');

function changeStyle(event) {
	let content = event.target;
	const suffix = content.dataset.sizing || '';

	document.documentElement.style.setProperty(
		`--${content.name}`,
		`${content.value}${suffix}`
	);
}

inputs.forEach((input) => {
	input.addEventListener('input', changeStyle);
});
