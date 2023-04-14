const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
	navbarToggle.classList.toggle("active");
});

let details = navigator.userAgent;

let regexp = /android|iphone|kindle|ipad/i;

let isMobile = regexp.test(details);

const helloText = [
	"hola",
	"bonjour",
	"ciao",
	"hi",
	"नमस्ते",
]

const randomHello = Math.floor(Math.random() * 5);

if (isMobile) {
	const header = document.querySelector(".typewriter-text-mainpage");
	header.innerHTML = `${helloText[randomHello]},<br>I'm Rahul`;
	header.style.textAlign = "center";
} else {
	const header = document.querySelector(".typewriter-text-mainpage");
	header.innerHTML = `${helloText[randomHello]}, I'm Rahul!`;
	header.style.textAlign = "center";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function toggleFunction() {
	var x = document.getElementById("navbar-links");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}