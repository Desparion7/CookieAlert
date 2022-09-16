const cookieBox = document.querySelector('.cookie-box');
const cookieBtn = document.querySelector('.cookie-btn');

const checkCookie = () => {
	const cookieEaten = localStorage.getItem('cookie');
	if (cookieEaten) {
		cookieBox.classList.add('hide');
	}
};

const hideCookieBox = () => {
	localStorage.setItem('cookie', 'accepted');
	cookieBox.classList.add('hide');
};

cookieBtn.addEventListener('click', hideCookieBox);
checkCookie()