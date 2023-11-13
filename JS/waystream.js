let menu_bar = document.querySelector('#menu_bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.low_header');
let sub_menu = document.querySelector('.sub_menu');
let user_btn = document.querySelector('#user_btn');
let login_form = document.querySelector('.login_form_container');
let login_close_btn = document.querySelector('#login_close_btn');
let login_link = document.querySelector('#login_link');
let register_form = document.querySelector('.register_form_container');
let register_close_btn = document.querySelector('#register_close_btn');
let register_link = document.querySelector('#register_link');

menu_bar.addEventListener('click', () => {
    menu_bar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.onscroll = () =>{
    sub_menu.classList.remove("active");
}

window.addEventListener('scroll', function() {
    var scrollPostiton = this.window.scrollY;
    if (scrollPostiton > 100) {
        header.style.backgroundColor = "#212529";
    } else {
        header.style.backgroundColor = "transparent";
    }
})


user_btn.addEventListener('click', () => {
    // user_btn.classList.toggle('fa-times');
    sub_menu.classList.toggle('active');
    menu_bar.classList.remove('fa-times');
    navbar.classList.remove('active');
    
})

login_close_btn.addEventListener('click', () => {
    login_form.classList.remove('active');
})

login_link.addEventListener('click', () => {
    login_form.classList.add('active');
})

register_close_btn.addEventListener('click', () => {
    register_form.classList.remove('active');
})

register_link.addEventListener('click', () => {
    register_form.classList.add('active');
})