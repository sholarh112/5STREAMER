let menu_bar = document.querySelector('#menu_bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header')

menu_bar.addEventListener('click', () => {
    menu_bar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll', function() {
    var scrollPostiton = this.window.scrollY;
    if (scrollPostiton > 100) {
        header.style.backgroundColor = "#212529";
    } else {
        header.style.backgroundColor = "transparent";
    }
})