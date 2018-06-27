function setSpacer () {
	const navHeight = document.querySelector('nav').offsetHeight;
	document.querySelector('.spacer').style.height = `${navHeight}px`;
}

/* eslint no-undef: off */
$(document).ready(function () {
	setSpacer();
	window.addEventListener('resize', function () {
		setSpacer();
	});
});
