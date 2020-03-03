const checkBoxes = document.querySelectorAll('input[type=checkbox]');

let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkBoxes.forEach((checkBox) => {
			if (checkBox === this || checkBox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkBox.checked = true;
			}
		});
	}

	lastChecked = this;
}

checkBoxes.forEach((checkBox) => {
	checkBox.addEventListener('click', handleCheck);
});
