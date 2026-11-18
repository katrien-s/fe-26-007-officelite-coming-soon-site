const launchDateEl = document.getElementById('future-date');

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();
const launchDate = new Date(year, month, day + 30);

const options = {
	year: 'numeric',
	month: 'short',
	day: 'numeric'
};

const launchDateText = new Intl.DateTimeFormat('en-GB', options).format(
	launchDate
);
launchDateEl.textContent = launchDateText;

function getRemainingTime() {
	const now = new Date();
	const remainingTime = launchDate - now;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	const oneSecond = 1000;

	const days = Math.floor(remainingTime / oneDay);
	const hours = Math.floor((remainingTime % oneDay) / oneHour);
	const minutes = Math.floor((remainingTime % oneHour) / oneMinute);
	const seconds = Math.floor((remainingTime % oneMinute) / oneSecond);

	const values = [days, hours, minutes, seconds];
}

setInterval(getRemainingTime, 1000);
