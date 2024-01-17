const menu = document.querySelector(".nav");
const menuButton = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__list");


const toggleMenu = () => {
    if (menu.classList.contains("nav--closed")) {
        menu.classList.remove("nav--closed");
        menu.classList.add("nav--opened");
        navMenu.style.display = "block";
    } else {
        menu.classList.remove("nav--opened");
        menu.classList.add("nav--closed");
        navMenu.style.display = "none";
    }
}

menuButton.addEventListener('click', toggleMenu);

