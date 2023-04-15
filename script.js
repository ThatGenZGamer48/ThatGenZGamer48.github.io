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
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.position = "absolute";
		x.style.top = "80px";
		x.style.left = "0";
		x.style.right = "0";
		x.style.backgroundColor = "#130f40";
		x.style.backgroundImage = "linear-gradient(0deg, #130f40 0%, #000000 75%)"
		x.style.padding = "10px";
		x.style.display = "flex";
		x.style.flexDirection = "column";
		x.style.alignItems = "center";
		x.style.textAlign = "center";
	}
}
