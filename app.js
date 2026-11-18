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
