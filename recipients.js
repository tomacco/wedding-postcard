

document.addEventListener('DOMContentLoaded', (event) => {
	let recipientsParam = new URL(window.location.href).searchParams.get("recipients");
	let recipients = recipientsParam === null ? [ "Lorem Ipsum", "Dolor Sit Amet" ] : recipientsParam.split(",");
	let html = "";
	let i = 0;
	for (; i < recipients.length; i++) {
	    html += "<p>" + recipients[i] + "</p><div class=\"line\"></div>";
	}

	for (; i < 5; i++) {
	    html += "<p style='color: white'>-</p><div class=\"line\"></div>";
	}
	console.log(html);
	let recipientsDiv = document.getElementById("recipients_list");
	recipientsDiv.innerHTML = html;
	fitText(recipientsDiv, 1.7);
	fitText(document.getElementById("recipients_header"), 1.5);
	fitText(document.getElementById("info"), 2.2);
	//.flip-card:hover .flip-card-inner ->.flipped
});

let flipCard = function() {
	let innerCard = document.getElementById('innerCard');
	let classList = innerCard.classList;
	innerCard.classList.toggle('flipped');
}


