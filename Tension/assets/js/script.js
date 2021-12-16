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

// footer template
class MyHeader extends HTMLElement{
    connectedCallback(){
        // ${ } - Template literals
        // condition ? true : false - Ternary conditional operator
        let pageValue = document.querySelector('#page-value').textContent;
        this.innerHTML = `
        <header>
        <div class="intern-container">
            <div class="nav-logo-part">
                <a href="index.html" class="logo-box">
                    <div class="logo-contain logo-base">
                        <img src="assets/img/logo-trans.png">
                    </div>
                    <div class="logo-contain logo-hover">
                        <img src="assets/img/logo-trans-hover.png">
                    </div>
                </a>
                <span>insert into controller</span>
            </div>
            <div class="navigation">
                <ul>
                    <li><a href="index.html"${ pageValue == 'index' ? 'class="page-active"' : ''}>Domů</a></li>
                    <li><a href="events.html"${ pageValue == 'events' ? 'class="page-active"' : ''}>Akce</a></li>
                    <li><a href="merch.html"${ pageValue == 'merch' ? 'class="page-active"' : ''}>Merch</a></li>
                    <li><a href="galery.html"${ pageValue == 'galery' ? 'class="page-active"' : ''}>Galerie</a></li>
                    <li><a href="contact.html"${ pageValue == 'contact' ? 'class="page-active"' : ''}>Kontakt</a></li>
                </ul>
            </div>
            <div class="eshop-part">
               <ul>
                    <li class="searchBox"><i class="fas fa-search"></i></li>
                    <li><i class="fas fa-shopping-cart"></i></li>
                    <li><i class="fas fa-user"></i></li>      
               </ul>
            </div>
    
            <div class="nav-responsive">
                <div class="eshop-part-resp">
                    <ul>
                        <li class="searchBox-resp"><i class="fas fa-search"></i></li>
                        <li><i class="fas fa-shopping-cart"></i></li>
                        <li><i class="fas fa-user"></i></li>      
                    </ul>
                 </div>
                 
                <div class="hamburger-div2">
                    <div class="menu-line2"></div>
                </div>
            </div>
        </div>
        <div class="nav-sidebar">
            <div class="sidebar-content">
                <div class="nav-sidebar-search">
                    <input type="text" name="find" placeholder="hledat" id="s">
                    <button type="submit" id="searchsubmit">Hledat</button>
                </div>
                <div class="hamburger-div3">
                    <div class="menu-line3"></div>
                </div>
            </div>
        </div>
    </header>

    <div class="header-menu-responsive">
        <div class="navigation-responsive">
            <ul>
                <li><a href="index.html" ${ pageValue == 'index' ? 'class="page-active"' : ''}>Domů</a></li>
                <li><a href="events.html" ${ pageValue == 'events' ? 'class="page-active"' : ''}>Akce</a></li>
                <li><a href="merch.html" ${ pageValue == 'merch' ? 'class="page-active"' : ''}>Merch</a></li>
                <li><a href="galery.html" ${ pageValue == 'galery' ? 'class="page-active"' : ''}>Galerie</a></li>
                <li><a href="contact.html" ${ pageValue == 'contact' ? 'class="page-active"' : ''}>Kontakt</a></li>
            </ul>
        </div>
    </div>
        `
    }
}
customElements.define('my-header', MyHeader);
// footer template
class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <div class="extern-container footer-container">
        <div class="footer-dark">
            <div class="intern-container">
                <div class="footer">
                    <div class="footer-responsive">
                        <div class="footer-column column-one">
                            <a href="index.html" class="logo-box-footer">
                                <div class="logo-contain logo-base-footer">
                                    <img src="assets/img/logo-trans.png">
                                </div>
                                <div class="logo-contain logo-hover-footer">
                                    <img src="assets/img/logo-trans-hover.png">
                                </div>
                            </a>
                            <div class="owner-motto">
                                <span>insert into controller</span>
                            </div>
                        </div>
                        <div class="footer-column column-two">
                            <h2>Informace</h2>
                            <ul>
                                <li><a href="">obchodní podmínky</a></li>
                                <li><a href="">cookies</a></li>
                                <li><a href="">kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-responsive">
                        <div class="footer-column column-three">
                            <h2>Sociální sítě</h2>
                            <div class="social-sites">
                                <p>Sledujte nás</p>
                                <div class="social-icon-flex">
                                    <a href="https://www.facebook.com/tensionevents">
                                        <div class="icon-hover">
                                            <i class="fab fa-facebook-f"></i>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/tensionevents/" class="div-insta">
                                        <div class="icon-hover">
                                            <i class="fab fa-instagram"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-column column-four">
                            <div class="shot-out">
                                <p class="shot-out-text">Powered by</p><a href="">Filip Machala</a>
                            </div>
                            <p class="shot-out-special">© Tension - všechna práva vyhrazena</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}
customElements.define('my-footer', MyFooter);

// intro
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
// header show search input
function openSearch(){
    let openButton = document.querySelector(".searchBox");
    let openButtonResp = document.querySelector(".searchBox-resp")

    let closeButton = document.querySelector(".hamburger-div3");
    let navHeader = document.querySelector("header");

    openButton.addEventListener('click', () => {
        $(".nav-sidebar").slideDown(100);
        navHeader.classList.add("sidebar-active");

    })
    openButtonResp.addEventListener('click', () => {
        $(".nav-sidebar").slideDown(100);
        navHeader.classList.add("sidebar-active");

    })
    closeButton.addEventListener('click', () => {
        $(".nav-sidebar").slideUp(100);
        navHeader.classList.remove("sidebar-active");
    })
}
openSearch();
// single shop product-image hover
function shopImage(){
    let imgBox = document.querySelector(".single-column-img");

    if(imgBox){
        let imageOne = document.querySelector(".img-one");
        let imageTwo = document.querySelector(".img-two");
    
        let imgCounter = document.querySelector(".img-counter");
        let imgNumber = imgCounter.querySelector("span");

        imgBox.addEventListener('mouseover', () => {
            imageOne.style = 'display: none';
            imageTwo.style = 'display: flex';
            imgNumber.textContent = '2/2';
        })
        imgBox.addEventListener('mouseout', () => {
            imageOne.style = 'display: flex';
            imageTwo.style = 'display: none';
            imgNumber.textContent = '1/2';
        })
    }
}
shopImage();
// header logo hover
function logoImage(){
    let logoBox = document.querySelector(".logo-box");
    
    if(logoBox){
        let logoOne = document.querySelector(".logo-base");
        let logoTwo = document.querySelector(".logo-hover");

        logoBox.addEventListener('mouseover', () => {
            logoOne.style = 'display: none';
            logoTwo.style = 'display: flex';
        })
        logoBox.addEventListener('mouseout', () => {
            logoOne.style = 'display: flex';
            logoTwo.style = 'display: none';
        })
    }
}
logoImage();
// footer logo hover
function logoImageFooter(){
    let logoBox = document.querySelector(".logo-box-footer");
    
    if(logoBox){
        let logoOne = document.querySelector(".logo-base-footer");
        let logoTwo = document.querySelector(".logo-hover-footer");

        logoBox.addEventListener('mouseover', () => {
            logoOne.style = 'display: none';
            logoTwo.style = 'display: flex';
        })
        logoBox.addEventListener('mouseout', () => {
            logoOne.style = 'display: flex';
            logoTwo.style = 'display: none';
        })
    }
}
logoImageFooter();

function sizeWindow(){
    $(".sizes-open-button").click(function(){
        $(".merch-sizes").fadeIn(200);
    })
    $(".sizes-close-button").click(function(){
        $(".merch-sizes").fadeOut(200);
    })
}
sizeWindow();
