// Get all the days
let days = document.getElementsByTagName("li");

let today = new Date().toJSON().substring(0, 10);
let todayMS = new Date();

// Check each day to see if its included date matches today's date
for (let i = 0; i < days.length; i++) {
	let dayStamp = days[i]
		.getElementsByTagName("time")[0]
		.getAttribute("datetime");

	if (dayStamp == today) {
		days[i].classList.add("today");
		break;
	} else if (
		new Date(dayStamp) < todayMS &&
		new Date(dayStamp).getUTCMonth() == todayMS.getUTCMonth()
	) {
		// need to compare UTC months or February 1 will not be marked as completed.
		days[i].classList.add("old");
		days[i].innerHTML += '<i class="fa-solid fa-check done"></i>';
	}
}
