const nav = document.querySelector('nav');

function affixed () {
	const scrollValue = window.scrollY;
	if (scrollValue > 220) {
		nav.classList.add('affixed');
	} else if (scrollValue < 220) {
		nav.classList.remove('affixed');
	}
}

document.addEventListener('scroll', (e) => {
	affixed();
});
