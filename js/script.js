const menuToggle = document.querySelector(".menu_toggle");
const mobileMenu = document.querySelector("#mobile_menu");

menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});