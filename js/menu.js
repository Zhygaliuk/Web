const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("links");

function toggleMenu() {
if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
} else {
    navLinks.classList.add(OPEN_CLASSNAME);
}
}