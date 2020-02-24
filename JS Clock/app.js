const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	secondHand.style.transform = `rotate(${(seconds / 60) * 360 + 90}deg)`;
	minuteHand.style.transform = `rotate(${(minutes / 60) * 360 + 90}deg)`;
	hourHand.style.transform = `rotate(${(hours / 12) * 360 + 90}deg)`;
}

setInterval(setDate, 1000);
