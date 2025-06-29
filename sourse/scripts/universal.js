// для header всех страниц

document.addEventListener("DOMContentLoaded", function () {
    const navBtn = document.querySelector(".nav-btn");
    const navBar = document.querySelector(".nav-bar");

    navBtn.addEventListener("click", function () {
        navBar.classList.toggle("active"); 
    });
});