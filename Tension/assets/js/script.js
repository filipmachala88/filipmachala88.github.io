// ===== HEADER SCRIPTS ====
// why doesnt work?
/*
function changeLogo(){
    var image = document.querySelector(".logo-image");

    image.addEventListener('mouseover', function(){
        image.src = "img/logo-trans-hover.png";
    })
    image.addEventListener('mouseout', function(){
        image.src = "img/logo-trans.png";
    })
}
changeLogo();
*/

// connect page
function moveToPage(){
    setTimeout(() => {
        $(".tension-banner").fadeOut(500);
    }, 1000);
}
moveToPage();

function windowOut(){
    setTimeout(() => {
        $(".contact-fixed").fadeOut(500);
    }, 4000);
}
windowOut();
// scroll navgation
function navScroll() {
    var header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll',check);
    }
    function check() {
        var top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
           if (top > 0) {
            header.classList.add('nav-active');
        } else {
            header.classList.remove('nav-active');
        }
    }
}
navScroll();
// hhamburger animation
function openMenu(){
    const menuBtnTwo = document.querySelector('.hamburger-div2');
    let menuOpenTwo = false;
    var navULTwo = document.querySelector(".header-menu-responsive");
    menuBtnTwo.addEventListener('click', () => {
        if(!menuOpenTwo) {
            menuBtnTwo.classList.add('open2');
            menuOpenTwo = true;
            navULTwo.classList.add('window-active');
        } else {
            menuBtnTwo.classList.remove('open2');
            menuOpenTwo = false;
            navULTwo.classList.remove('window-active');
        }
    });
}
openMenu();

function openSearch(){
    let openButton = document.querySelector(".fa-search");
    let closeButton = document.querySelector(".hamburger-div3");
    let navHeader = document.querySelector("header");

    openButton.addEventListener('click', () => {
        $(".nav-sidebar").slideDown(100);
        navHeader.classList.add("sidebar-active");

    })
    closeButton.addEventListener('click', () => {
        $(".nav-sidebar").slideUp(100);
        navHeader.classList.remove("sidebar-active");
    })
}
openSearch();
  