const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const mobileMenu = document.getElementById("mobileMenu");
const closeButton = document.getElementById("closeButton");

function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    menuOverlay.classList.remove("hidden");
}

function closeMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    menuOverlay.classList.add("hidden");
}

menuButton.addEventListener("click", openMenu);
menuOverlay.addEventListener("click", closeMenu);
closeButton.addEventListener("click", closeMenu);
