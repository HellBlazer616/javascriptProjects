'use strict';

const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

const togglePlay = (e) => {
	video.paused ? video.play() : video.pause();
};

const updateButton = (e) => {
	const icon = e.target.paused ? '▶' : '⏸';
	toggle.textContent = icon;
};

const handleProgress = () => {
	let percent = (video.currentTime / video.duration) * 100;
	console.log('yo');
	progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	console.log(scrubTime);
	video.currentTime = scrubTime;
};

skipButtons.forEach((skipButton) => {
	skipButton.addEventListener('click', (e) => {
		video.currentTime += Number(skipButton.dataset.skip);
	});
});

ranges.forEach((range) => {
	range.addEventListener('change', (e) => {
		let name = e.target.name;
		video[name] = e.target.value;
	});
});

let mousedown = false;

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
