const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const menuItems = document.querySelectorAll(".nav-item");


let showMenu = false;



let toggleMenu = () => {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        menuItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        menuItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu);