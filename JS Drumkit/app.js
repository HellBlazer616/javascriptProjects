const keys = document.querySelectorAll('.key');
document.addEventListener('keydown', (e) => {
	const audio = document.querySelector(`audio[data-key="${e.key}"]`);
	const key = document.querySelector(`.key[data-key="${e.key}"]`);
	if (!audio) return null;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
});

keys.forEach((key) => {
	key.addEventListener('transitionend', (e) => {
		if (e.propertyName !== 'transform') return null;
		e.target.classList.remove('playing');
	});
});
