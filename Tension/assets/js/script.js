// header template
class MyHeader extends HTMLElement{
    connectedCallback(){
        // ${ } - Template literals
        // condition ? true : false - Ternary conditional operator
        let pageValue = document.querySelector( '#page-value' ).textContent;
        this.innerHTML = `
        <header>
            <div class="intern-container">
                <div class="nav-logo-part">
                    <div>
                        <div class="logo-box">
                            <a href="index.html">
                                <div class="logo-contain logo-base">
                                    <img src="../assets/img/logo-trans.png">
                                </div>
                                <div class="logo-contain logo-hover">
                                    <img src="../assets/img/logo-trans-hover.png">
                                </div>
                            </a>
                        </div>
                        <span>insert into controller</span>
                    </div>
                </div>

                <div class="navigation">
                    <ul>
                        <li><a href="index.html"${ pageValue == 'index' ? 'class="page-active"' : '' }>Domů</a></li>
                        <li><a href="events.html"${ pageValue == 'events' ? 'class="page-active"' : '' }>Akce</a></li>
                        <li><a href="merch.html"${ pageValue == 'merch' ? 'class="page-active"' : '' }>Merch</a></li>
                        <li><a href="galery.html"${ pageValue == 'galery' ? 'class="page-active"' : '' }>Galerie</a></li>
                        <li><a href="contact.html"${ pageValue == 'contact' ? 'class="page-active"' : '' }>Kontakt</a></li>
                    </ul>
                </div>

                <div class="eshop-part">
                    <ul>
                        <li class="searchBox ${ pageValue == 'search' ? 'page-active' : '' }">
                            <?xml version="1.0" encoding="utf-8"?>
                            <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 20.07 19.78" style="enable-background:new 0 0 20.07 19.78;" xml:space="preserve">
                                <path class="st0" d="M7.67,0.21c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5S11.81,0.21,7.67,0.21z M7.67,12.93
                                    c-2.89,0-5.22-2.34-5.22-5.22s2.34-5.22,5.22-5.22s5.22,2.34,5.22,5.22S10.55,12.93,7.67,12.93z"/>
                                <path class="st0" d="M18.7,19.08l0.81-0.81c0.22-0.22,0.22-0.59,0-0.81l-6.55-6.55c-0.22-0.22-0.59-0.22-0.81,0l-0.81,0.81
                                    c-0.22,0.22-0.22,0.59,0,0.81l6.55,6.55C18.11,19.3,18.48,19.3,18.7,19.08z"/>
                            </svg>
                        </li>
                        <li class="nav-special-icon ${ pageValue == 'cart' ? 'page-active' : '' }">
                            <a href="cart.html">
                                <?xml version="1.0" encoding="utf-8"?>
                                <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 24.64 19.36" style="enable-background:new 0 0 24.64 19.36;" xml:space="preserve">
                                    <path class="st0" d="M22.29,12.55H5.47c-0.15,0-0.27-0.09-0.3-0.22L3.2,1.58c0,0,0,0,0,0h20.65c0.37,0,0.65,0.3,0.59,0.62
                                        l-1.86,10.12C22.56,12.45,22.44,12.55,22.29,12.55z"/>
                                    <rect x="5.4" y="12.07" transform="matrix(0.9883 -0.1523 0.1523 0.9883 -2.031 1.0706)" class="st0" width="1.15" height="3.44"/>
                                    <circle class="st0" cx="6.39" cy="17.46" r="1.72"/>
                                    <path class="st0" d="M4.37,1.58H0.66c-0.23,0-0.41-0.19-0.41-0.43v-0.6c0-0.22,0.17-0.39,0.38-0.39H3.7c0.21,0,0.41,0.17,0.46,0.39
                                        L4.37,1.58z"/>
                                    <path class="st0" d="M21.89,16.22H5.94c-0.16,0-0.3-0.13-0.3-0.3v-0.68c0-0.16,0.13-0.3,0.3-0.3h15.95c0.16,0,0.3,0.13,0.3,0.3v0.68
                                        C22.19,16.08,22.06,16.22,21.89,16.22z"/>
                                    <circle class="st0" cx="21.25" cy="17.46" r="1.72"/>
                                </svg>
                            </a>
                        </li>
                        <li class="nav-special-icon ${ pageValue == 'profile' ? 'page-active' : '' }">
                            <a href="profile.html">
                                <?xml version="1.0" encoding="utf-8"?>
                                <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 13.87 13.05" style="enable-background:new 0 0 13.87 13.05;" xml:space="preserve">
                                    <path class="st0" d="M9.02,7.97c-0.04-0.01-0.09,0-0.13,0.02c-0.56,0.31-1.25,0.5-2,0.5c-0.75,0-1.44-0.19-2-0.5
                                        C4.85,7.96,4.8,7.96,4.76,7.97c-2.64,0.66-4.55,2.51-4.59,4.7c0.07,0.08,0.11,0.12,0.19,0.19c1.5,0,11.56,0,13.06,0
                                        c0.07-0.08,0.11-0.12,0.19-0.19C13.57,10.48,11.66,8.63,9.02,7.97z"/>
                                    <circle class="st0" cx="6.89" cy="3.49" r="3.14"/>
                                    <line class="st0" x1="3.56" y1="5.2" x2="3.56" y2="5.69"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- responsive menu -->
                <div class="nav-responsive">
                    <div class="eshop-part-resp">
                        <ul>
                            <li class="searchBox-resp ${ pageValue == 'search' ? 'page-active' : '' }">
                                <?xml version="1.0" encoding="utf-8"?>
                                <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 20.07 19.78" style="enable-background:new 0 0 20.07 19.78;" xml:space="preserve">
                                    <path class="st0" d="M7.67,0.21c-4.14,0-7.5,3.36-7.5,7.5s3.36,7.5,7.5,7.5s7.5-3.36,7.5-7.5S11.81,0.21,7.67,0.21z M7.67,12.93
                                    c-2.89,0-5.22-2.34-5.22-5.22s2.34-5.22,5.22-5.22s5.22,2.34,5.22,5.22S10.55,12.93,7.67,12.93z"/>
                                    <path class="st0" d="M18.7,19.08l0.81-0.81c0.22-0.22,0.22-0.59,0-0.81l-6.55-6.55c-0.22-0.22-0.59-0.22-0.81,0l-0.81,0.81
                                    c-0.22,0.22-0.22,0.59,0,0.81l6.55,6.55C18.11,19.3,18.48,19.3,18.7,19.08z"/>
                                </svg>
                            </li>
                            <li class="nav-special-icon ${ pageValue == 'cart' ? 'page-active' : '' }">
                                <a href="cart.html">
                                    <?xml version="1.0" encoding="utf-8"?>
                                    <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 24.64 19.36" style="enable-background:new 0 0 24.64 19.36;" xml:space="preserve">
                                        <path class="st0" d="M22.29,12.55H5.47c-0.15,0-0.27-0.09-0.3-0.22L3.2,1.58c0,0,0,0,0,0h20.65c0.37,0,0.65,0.3,0.59,0.62
                                        l-1.86,10.12C22.56,12.45,22.44,12.55,22.29,12.55z"/>
                                        <rect x="5.4" y="12.07" transform="matrix(0.9883 -0.1523 0.1523 0.9883 -2.031 1.0706)" class="st0" width="1.15" height="3.44"/>
                                        <circle class="st0" cx="6.39" cy="17.46" r="1.72"/>
                                        <path class="st0" d="M4.37,1.58H0.66c-0.23,0-0.41-0.19-0.41-0.43v-0.6c0-0.22,0.17-0.39,0.38-0.39H3.7c0.21,0,0.41,0.17,0.46,0.39
                                        L4.37,1.58z"/>
                                        <path class="st0" d="M21.89,16.22H5.94c-0.16,0-0.3-0.13-0.3-0.3v-0.68c0-0.16,0.13-0.3,0.3-0.3h15.95c0.16,0,0.3,0.13,0.3,0.3v0.68
                                        C22.19,16.08,22.06,16.22,21.89,16.22z"/>
                                        <circle class="st0" cx="21.25" cy="17.46" r="1.72"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-special-icon ${ pageValue == 'profile' ? 'page-active' : '' }">
                                <a href="profile.html">
                                    <?xml version="1.0" encoding="utf-8"?>
                                    <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 13.87 13.05" style="enable-background:new 0 0 13.87 13.05;" xml:space="preserve">
                                        <path class="st0" d="M9.02,7.97c-0.04-0.01-0.09,0-0.13,0.02c-0.56,0.31-1.25,0.5-2,0.5c-0.75,0-1.44-0.19-2-0.5
                                        C4.85,7.96,4.8,7.96,4.76,7.97c-2.64,0.66-4.55,2.51-4.59,4.7c0.07,0.08,0.11,0.12,0.19,0.19c1.5,0,11.56,0,13.06,0
                                        c0.07-0.08,0.11-0.12,0.19-0.19C13.57,10.48,11.66,8.63,9.02,7.97z"/>
                                        <circle class="st0" cx="6.89" cy="3.49" r="3.14"/>
                                        <line class="st0" x1="3.56" y1="5.2" x2="3.56" y2="5.69"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="hamburger-box">
                        <div class="hamburger-div2">
                            <div class="menu-line2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- side bar -->
            <div class="intern-container">
                <div class="nav-sidebar">
                    <div class="sidebar-content">
                        <div class="nav-sidebar-search">
                            <input type="text" name="find" placeholder="hledat" id="s">
                            <div class="search-fixed">
                                <div class="submit-button">
                                    <a href="search.html">
                                        <button id="searchsubmit">Hledat</button>
                                    </a>
                                </div>
                                <div class="search-cross">
                                    <?xml version="1.0" encoding="utf-8"?>
                                    <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        viewBox="0 0 14.37 14.3" style="enable-background:new 0 0 14.37 14.3;" xml:space="preserve">
                                        <path d="M13.89,13.49l-0.26,0.26c-0.33,0.33-0.86,0.33-1.18,0L0.63,1.93C0.3,1.6,0.3,1.07,0.63,0.74l0.26-0.26
                                        c0.33-0.33,0.86-0.33,1.18,0L13.89,12.3C14.22,12.63,14.22,13.16,13.89,13.49z"/>
                                        <path d="M0.63,13.49l0.26,0.26c0.33,0.33,0.86,0.33,1.18,0L13.89,1.93c0.33-0.33,0.33-0.86,0-1.18l-0.26-0.26
                                        c-0.33-0.33-0.86-0.33-1.18,0L0.63,12.3C0.3,12.63,0.3,13.16,0.63,13.49z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    <div class="header-menu-responsive">
        <div class="navigation-responsive">
            <ul>
                <li><a href="index.html" ${ pageValue == 'index' ? 'class="page-active"' : '' }>Domů</a></li>
                <li><a href="events.html" ${ pageValue == 'events' ? 'class="page-active"' : '' }>Akce</a></li>
                <li><a href="merch.html" ${ pageValue == 'merch' ? 'class="page-active"' : '' }>Merch</a></li>
                <li><a href="galery.html" ${ pageValue == 'galery' ? 'class="page-active"' : '' }>Galerie</a></li>
                <li><a href="contact.html" ${ pageValue == 'contact' ? 'class="page-active"' : '' }>Kontakt</a></li>
            </ul>
        </div>
    </div>
        `;
    }
}
customElements.define( 'my-header', MyHeader );
// footer template
class MyFooter extends HTMLElement{
    connectedCallback (){
        let pageValue = document.querySelector( '#page-value' ).textContent;
        this.innerHTML = `
        <div class="extern-container footer-container">
        <div class="footer-dark">
            <div class="intern-container">
                <div class="footer">
                    <div class="footer-responsive">
                        <div class="footer-column column-one">
                            <div class="owner-info">
                                <div class="logo-box-footer">
                                    <a href="index.html">
                                        <div class="logo-contain logo-base-footer">
                                            <img src="../assets/img/logo-trans.png">
                                        </div>
                                        <div class="logo-contain logo-hover-footer">
                                            <img src="../assets/img/logo-trans-hover.png">
                                        </div>
                                    </a>
                                </div>
                                <span>insert into controller</span>
                            </div>
                            <div class="theme-change">
                                <div class="theme-box">
                                    <div class="light-theme">
                                        <?xml version="1.0" encoding="utf-8"?>
                                        <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 22.59 22.5" style="enable-background:new 0 0 22.59 22.5;" xml:space="preserve">
                                            <g>
                                                <path d="M4.68,14.94c-0.2,0.14-0.35,0.33-0.41,0.55l-0.75,2.9c-0.16,0.61,0.28,0.95,0.92,0.75l2.74-0.87
                                                c0.19-0.06,0.35-0.2,0.48-0.37L4.68,14.94z"/>
                                                <path d="M11.25,3.76c-4.19,0-7.58,3.39-7.58,7.58c0,4.19,3.39,7.58,7.58,7.58c4.19,0,7.58-3.39,7.58-7.58
                                                C18.83,7.15,15.43,3.76,11.25,3.76z M11.25,18.36c-3.88,0-7.03-3.15-7.03-7.03c0-3.88,3.15-7.03,7.03-7.03
                                                c3.88,0,7.03,3.15,7.03,7.03C18.27,15.22,15.13,18.36,11.25,18.36z"/>
                                                <circle cx="11.25" cy="11.34" r="5.73"/>
                                                <path d="M9.17,18.52c-0.05,0.24-0.02,0.48,0.09,0.68l1.49,2.6c0.31,0.55,0.86,0.49,1.18-0.11l1.35-2.53
                                                c0.09-0.17,0.12-0.39,0.09-0.6L9.17,18.52z"/>
                                                <path d="M4.04,9.24C3.8,9.2,3.55,9.22,3.36,9.33l-2.6,1.49C0.21,11.13,0.27,11.68,0.87,12l2.54,1.35c0.17,0.09,0.39,0.12,0.6,0.09
                                                L4.04,9.24z"/>
                                                <path d="M18.5,9.24c0.24-0.05,0.48-0.02,0.68,0.09l2.6,1.49c0.55,0.31,0.49,0.86-0.11,1.18l-2.54,1.35
                                                c-0.17,0.09-0.39,0.12-0.6,0.09L18.5,9.24z"/>
                                                <path d="M13.35,4.05c0.05-0.24,0.02-0.48-0.09-0.68l-1.49-2.6c-0.31-0.55-0.86-0.49-1.18,0.11L9.25,3.42
                                                C9.16,3.59,9.13,3.8,9.16,4.01L13.35,4.05z"/>
                                                <path d="M17.78,14.94c0.2,0.14,0.35,0.33,0.41,0.55l0.75,2.9c0.16,0.61-0.28,0.95-0.92,0.75l-2.74-0.87
                                                c-0.19-0.06-0.35-0.2-0.48-0.37L17.78,14.94z"/>
                                                <path d="M17.78,7.56c0.2-0.14,0.35-0.33,0.41-0.55l0.75-2.9c0.16-0.61-0.28-0.95-0.92-0.75l-2.74,0.87
                                                c-0.19,0.06-0.35,0.2-0.48,0.37L17.78,7.56z"/>
                                                <path d="M7.54,4.94C7.41,4.75,7.21,4.59,7,4.54L4.1,3.79C3.49,3.63,3.15,4.06,3.35,4.7l0.87,2.74c0.06,0.19,0.2,0.35,0.37,0.48
                                                L7.54,4.94z"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="dark-theme">
                                        <?xml version="1.0" encoding="utf-8"?>
                                        <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 21.33 21.83" style="enable-background:new 0 0 21.33 21.83;" xml:space="preserve">
                                            <path class="st0" d="M14.62,16.59c-4.32,0-7.81-3.5-7.81-7.81c0-4.21,3.34-7.64,7.51-7.8c-1.08-0.38-2.24-0.59-3.45-0.59
                                            c-5.8,0-10.5,4.7-10.5,10.5s4.7,10.5,10.5,10.5c5.04,0,9.25-3.55,10.26-8.29C19.73,15.21,17.34,16.59,14.62,16.59z"/>
                                        </svg>
                                    </div>
                                    <div class="ball"></div>
                                </div>
                            </div>                                
                        </div>
                        <div class="footer-column column-two">
                            <h2>Informace</h2>
                            <ul>
                                <li ${ pageValue == 'terms' ? 'class="page-active"' : '' }><a href="terms.html">obchodní podmínky</a></li>
                                <li ${ pageValue == 'cookie' ? 'class="page-active"' : '' }><a href="cookie.html">cookie</a></li>
                                <li ${ pageValue == 'contact' ? 'class="page-active"' : '' }><a href="contact.html">kontakt</a></li>
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
                                            <?xml version="1.0" encoding="utf-8"?>
                                            <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 7.16 13.39" style="enable-background:new 0 0 7.16 13.39;" xml:space="preserve">
                                                <rect x="2.41" y="4.79" class="st0" width="2.11" height="8.44"/>
                                                <rect x="2.41" y="2.66" transform="matrix(6.123234e-17 -1 1 6.123234e-17 -2.3778 9.3224)" class="st0" width="2.11" height="6.39"/>
                                                <path class="facebook-special" d="M3.48,5.07C3.2,1.98,4.2,0.99,6.8,1.46"/>
                                            </svg>
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/tensionevents/">
                                        <div class="icon-hover">
                                            <?xml version="1.0" encoding="utf-8"?>
                                            <!-- Generator: Adobe Illustrator 26.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 16.76 16.75" style="enable-background:new 0 0 16.76 16.75;" xml:space="preserve">
                                                <path class="st0" d="M12.97,0.27H3.75c-1.95,0-3.53,1.58-3.53,3.53v9.22c0,1.95,1.58,3.53,3.53,3.53h9.22
                                                c1.95,0,3.53-1.58,3.53-3.53V3.79C16.49,1.85,14.91,0.27,12.97,0.27z M15.37,12.67c0,1.51-1.23,2.74-2.74,2.74H4.09
                                                c-1.51,0-2.74-1.23-2.74-2.74V4.13c0-1.51,1.23-2.74,2.74-2.74h8.54c1.51,0,2.74,1.23,2.74,2.74V12.67z"/>
                                                <circle class="st0" cx="11.73" cy="4.38" r="1"/>
                                                <path class="st0" d="M8.39,5.37c-1.67,0-3.03,1.36-3.03,3.03c0,1.67,1.36,3.03,3.03,3.03c1.67,0,3.03-1.36,3.03-3.03
                                                C11.42,6.73,10.07,5.37,8.39,5.37z M8.39,10.37c-1.09,0-1.97-0.88-1.97-1.97c0-1.09,0.88-1.97,1.97-1.97c1.09,0,1.97,0.88,1.97,1.97
                                                C10.36,9.49,9.48,10.37,8.39,10.37z"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="footer-column column-four">
                            <div class="shot-out">
                                <p class="shot-out-text">Powered by</p><a href="https://www.facebook.com/machalafilip">Filip Machala</a>
                            </div>
                            <p class="shot-out-special">© Tension - všechna práva vyhrazena</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
customElements.define( 'my-footer', MyFooter );
// intro
function moveToPage(){
    setTimeout( () =>{
        $( ".tension-banner" ).fadeOut( 500 );
    }, 1000 );
}
moveToPage();
function windowOut(){
    setTimeout( () => {
        $( ".contact-fixed" ).fadeOut( 500 );
    }, 4000 );
}
windowOut();
// cookie
function cookieWindow(){
    var closeButton = document.querySelector( ".cookie-alert-close" );
    if ( closeButton ){
        closeButton.addEventListener( "click", () => {   
            // 6 months expiration (Google Cookie Rules)
            Cookies.set( "cookie-window", "false", { expires: 7 } );
            $( ".cookie-alert" ).slideUp( 200 );
        });
    }
}
cookieWindow();
function windowClose(){
    var cookieWindow = document.querySelector( ".cookie-alert" );
    if ( cookieWindow ){
        var cookieWindowStatus = Cookies.get( "cookie-window" );
        if ( cookieWindowStatus === "false" ){
            cookieWindow.style = 'display: none';
        }
    }
}
windowClose();

// === HEADER SCRIPTS ===

// scroll navgation
function navScroll(){
    var header = document.querySelector( 'header' );
    if ( header ){
        window.addEventListener( 'scroll', check );
    }
    function check (){
        var top = ( window.pageYOffset || document.documentElement.scrollTop ) - ( document.documentElement.clientTop || 0 );
        if ( top > 0 ){
            header.classList.add( 'nav-active' );
        } else {
            header.classList.remove( 'nav-active' );
        }
    }
}
navScroll();
// hhamburger animation
function openMenu(){
    const menuBtnTwo = document.querySelector( '.hamburger-div2' );
    let menuOpenTwo = false;
    var navULTwo = document.querySelector( ".header-menu-responsive" );
    menuBtnTwo.addEventListener( 'click', () => {
        if ( !menuOpenTwo ){
            menuBtnTwo.classList.add( 'open2' );
            menuOpenTwo = true;
            navULTwo.classList.add( 'window-active' );
        } else {
            menuBtnTwo.classList.remove( 'open2' );
            menuOpenTwo = false;
            navULTwo.classList.remove( 'window-active' );
        }
    } );
}
openMenu();
// header show search input
function openSearch(){
    let openButton = document.querySelector( ".searchBox" );
    let openButtonResp = document.querySelector( ".searchBox-resp" );

    let closeButton = document.querySelector( ".search-cross" );
    let navHeader = document.querySelector( "header" );

    openButton.addEventListener( 'click', () => {
        $( ".nav-sidebar" ).slideDown( 100 );
        navHeader.classList.add( "sidebar-active" );

    });
    openButtonResp.addEventListener( 'click', () => {
        $( ".nav-sidebar" ).slideDown( 100 );
        navHeader.classList.add( "sidebar-active" );

    });
    closeButton.addEventListener( 'click', () => {
        $( ".nav-sidebar" ).slideUp( 100 );
        navHeader.classList.remove( "sidebar-active" );
    } );
}
openSearch();
// single shop product-image hover
function shopImage(){
    let imgBox = document.querySelector( ".single-column-img" );

    if ( imgBox ){
        let imageOne = document.querySelector( ".img-one" );
        let imageTwo = document.querySelector( ".img-two" );

        let imgCounter = document.querySelector( ".img-counter" );
        let imgNumber = imgCounter.querySelector( "span" );

        imgBox.addEventListener( 'mouseover', () => {
            imageOne.style = 'display: none';
            imageTwo.style = 'display: flex';
            imgNumber.textContent = '2/2';
        });
        imgBox.addEventListener( 'mouseout', () => {
            imageOne.style = 'display: flex';
            imageTwo.style = 'display: none';
            imgNumber.textContent = '1/2';
        });
    }
}
shopImage();
// header logo hover
function logoImage(){
    let logoBox = document.querySelector( ".logo-box" );

    if ( logoBox ){
        let logoOne = document.querySelector( ".logo-base" );
        let logoTwo = document.querySelector( ".logo-hover" );

        logoBox.addEventListener( 'mouseover', () => {
            logoOne.style = 'display: none';
            logoTwo.style = 'display: flex';
        });
        logoBox.addEventListener( 'mouseout', () => {
            logoOne.style = 'display: flex';
            logoTwo.style = 'display: none';
        });
    }
}
logoImage();
// footer logo hover
function logoImageFooter(){
    let logoBox = document.querySelector( ".logo-box-footer" );

    if ( logoBox ){
        let logoOne = document.querySelector( ".logo-base-footer" );
        let logoTwo = document.querySelector( ".logo-hover-footer" );

        logoBox.addEventListener( 'mouseover', () => {
            logoOne.style = 'display: none';
            logoTwo.style = 'display: flex';
        });
        logoBox.addEventListener( 'mouseout', () => {
            logoOne.style = 'display: flex';
            logoTwo.style = 'display: none';
        });
    }
}
logoImageFooter();
// merch - sizes
function sizeWindow(){
    $( ".sizes-open-button" ).click( function (){
        $( ".merch-sizes" ).fadeIn( 200 );
    });
    $( ".sizes-close-button" ).click( function (){
        $( ".merch-sizes" ).fadeOut( 200 );
    });
}
sizeWindow();
// theme change
function darkMode(){
    var ball = document.querySelector(".ball");
    var theme = 'dark-theme';
    // === index ===
    // chookie
    var cookieBox = document.querySelector( ".cookie-alert" );
    // slider - indicator
    var indicatorBox = document.querySelector( ".carousel-indicators" );
    // about ( index - contact )
    var aboutPart = document.querySelector( ".index-about" );
    // note image one
    var noteBoxOne = document.querySelector( ".background-effect-one" );
    // note image two
    var noteBoxTwo = document.querySelector( ".background-effect-two" );
    // galery
    var galeryPart = document.querySelector( ".galery" );
    // === events ===
    var eventPart = document.querySelector( ".single-page" );
    // === contact ===
    var contactPage = document.querySelector( ".contact" );
    // === cart ===
    var cartPage = document.querySelector( ".cart" );
    // == profile ==
    var profilePage = document.querySelector( ".profile" );

    document.body.style.backgroundColor = "#191919";
    ball.style = "transform: translateX(35px)";

    if ( cookieBox ){
        cookieBox.classList.add( theme );
        indicatorBox.classList.add( theme );
        noteBoxOne.classList.add( theme );
        noteBoxTwo.classList.add( theme );
        galeryPart.classList.add( theme );
    }
    if ( aboutPart ){
        aboutPart.classList.add( theme );
    }
    if ( eventPart ){
        eventPart.classList.add( theme );
    }
    if ( contactPage ){
        contactPage.classList.add( theme );
        noteBoxOne.classList.add( theme );
    }
    if ( cartPage ){
        cartPage.classList.add( theme );
    }
    if ( profilePage ){
        profilePage.classList.add( theme );
    }
}
function lightMode(){
    var ball = document.querySelector(".ball");
    var theme = 'dark-theme';
    // === index ===
    // chookie
    var cookieBox = document.querySelector( ".cookie-alert" );
    // slider - indicator
    var indicatorBox = document.querySelector( ".carousel-indicators" );
    // about ( index - contact )
    var aboutPart = document.querySelector( ".index-about" );
    // note image one
    var noteBoxOne = document.querySelector( ".background-effect-one" );
    // note image two
    var noteBoxTwo = document.querySelector( ".background-effect-two" );
    // galery
    var galeryPart = document.querySelector( ".galery" );
    // === events ===
    var eventPart = document.querySelector( ".single-page" );
    // === contact ===
    var contactPage = document.querySelector( ".contact" );
    // === cart ===
    var cartPage = document.querySelector( ".cart" );
    // == profile ==
    var profilePage = document.querySelector( ".profile" );

    document.body.style.backgroundColor = "#f0f0f0";
    ball.style = "transform: translateX(0px)";

    if ( cookieBox ){
        cookieBox.classList.remove( theme );
        indicatorBox.classList.remove( theme );
        noteBoxOne.classList.remove( theme );
        noteBoxTwo.classList.remove( theme );
        galeryPart.classList.remove( theme );
    }
    if ( aboutPart ){
        aboutPart.classList.remove( theme );
    }
    if ( eventPart ){
        eventPart.classList.remove( theme );
    }
    if ( contactPage ){
        contactPage.classList.remove( theme );
        noteBoxOne.classList.remove( theme );
    }
    if ( cartPage ){
        cartPage.classList.remove( theme );
    }
    if ( profilePage ){
        profilePage.classList.remove( theme );
    }
}
// local storage
function themeSwap(){
    var themeStatus = localStorage.getItem("theme");

    if ( themeStatus === "dark" ){
        darkMode();
    }
    if ( themeStatus === "light" ){
        lightMode();
    }   
}
themeSwap();
// theme button
function themeButton(){
    var buttonLight = document.querySelector(".light-theme");
    var buttonDark = document.querySelector(".dark-theme");
    
    buttonLight.addEventListener("click", () => {
        localStorage.setItem("theme","light");
        lightMode();
    })
    buttonDark.addEventListener("click", () => {
        localStorage.setItem("theme","dark");
        darkMode();
    })
}
themeButton();
