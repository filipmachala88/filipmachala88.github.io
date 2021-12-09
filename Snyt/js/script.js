     /* scrolling navigation */
    window.addEventListener('scroll', function (){
    	var header = document.querySelector('.main-nav-index');
    	var windowPosition = window.scrollY> 0;
        header.classList.toggle('scrolling-active', windowPosition);
    })
    window.addEventListener('scroll', function () {            
        var header = document.querySelector('.side-nav');
        var windowPosition = window.scrollY> 0;
        header.classList.toggle('scrolling-active-two', windowPosition);
    })
    /* hamburger menu */
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    var navUL = document.querySelector(".nav-ul");
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            navUL.classList.add('nav-ul-show');
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            navUL.classList.remove('nav-ul-show');
        }
    });
    /* menu - alergens */
    function showAlergens() {
        document.querySelector(".alergens-window").classList.remove("alergens-window-hide");
        document.querySelector(".alergens-window").classList.add("alergens-window-show");
    }
    function hideAlergens() {
        document.querySelector(".alergens-window").classList.remove("alergens-window-show");
        document.querySelector(".alergens-window").classList.add("alergens-window-hide");
    }
    /* galery - show */

            function windowNineShow(){
                    document.querySelector(".window-nine-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-nine-hidde").classList.add("window-show");
                };
            function windowNineRemove(){
                    document.querySelector(".window-nine-hidde").classList.remove("window-show");
                    document.querySelector(".window-nine-hidde").classList.add("window-hidde");
                };
            function windowEightShow(){
                    document.querySelector(".window-eight-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-eight-hidde").classList.add("window-show");
                };
            function windowEightRemove(){
                    document.querySelector(".window-eight-hidde").classList.remove("window-show");
                    document.querySelector(".window-eight-hidde").classList.add("window-hidde");
                };
            function windowSevenShow(){
                    document.querySelector(".window-seven-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-seven-hidde").classList.add("window-show");
                };
            function windowSevenRemove(){
                    document.querySelector(".window-seven-hidde").classList.remove("window-show");
                    document.querySelector(".window-seven-hidde").classList.add("window-hidde");
                };
            function windowSixShow(){
                    document.querySelector(".window-six-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-six-hidde").classList.add("window-show");
                };
            function windowSixRemove(){
                    document.querySelector(".window-six-hidde").classList.remove("window-show");
                    document.querySelector(".window-six-hidde").classList.add("window-hidde");
                };
            function windowFiveShow(){
                    document.querySelector(".window-five-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-five-hidde").classList.add("window-show");
                };
            function windowFiveRemove(){
                    document.querySelector(".window-five-hidde").classList.remove("window-show");
                    document.querySelector(".window-five-hidde").classList.add("window-hidde");
                };
            function windowFourShow(){
                    document.querySelector(".window-four-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-four-hidde").classList.add("window-show");
                };
            function windowFourRemove(){
                    document.querySelector(".window-four-hidde").classList.remove("window-show");
                    document.querySelector(".window-four-hidde").classList.add("window-hidde");
                };
            function windowThreeShow(){
                    document.querySelector(".window-three-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-three-hidde").classList.add("window-show");
                };
            function windowThreeRemove(){
                    document.querySelector(".window-three-hidde").classList.remove("window-show");
                    document.querySelector(".window-three-hidde").classList.add("window-hidde");
                };
            function windowTwoShow(){
                    document.querySelector(".window-two-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-two-hidde").classList.add("window-show");
                };
            function windowTwoRemove(){
                    document.querySelector(".window-two-hidde").classList.remove("window-show");
                    document.querySelector(".window-two-hidde").classList.add("window-hidde");
                };
            function windowOneShow(){
                    document.querySelector(".window-one-hidde").classList.remove("window-hidde");
                    document.querySelector(".window-one-hidde").classList.add("window-show");
                };
    /* english - lanaguage */             
    function enLan(){
        /* active */
        document.querySelector(".lanaguage-CZ").classList.remove("lan-active");
        document.querySelector(".lanaguage-EN").classList.add("lan-active");
        /* lang */
        var lang = document.getElementsByTagName('html')[0];
        lang.setAttribute('lang', 'en');
        /* navigation */
        document.querySelector(".switch-1").textContent = "Follow us";

        document.querySelector(".switch-2").textContent = "Home";
        document.querySelector(".switch-3").textContent = "Menu";
        document.querySelector(".switch-4").textContent = "Events";
        document.querySelector(".switch-5").textContent = "Galery";
        document.querySelector(".switch-6").textContent = "Review";
        document.querySelector(".switch-7").textContent = "Contact";
        /* footer */
        document.querySelector(".switch-1-1").textContent = "opening hours";
        document.querySelector(".switch-1-2").textContent = "Mo - Th";
        document.querySelector(".switch-1-3").textContent = "Fr";
        document.querySelector(".switch-1-4").textContent = "Sa";
        document.querySelector(".switch-1-5").textContent = "02.04.2021 - Good Friday";
        document.querySelector(".switch-1-6").textContent = "14:00 - 20:00 open";

        document.querySelector(".switch-1-7").textContent = "contact";
        document.querySelector(".switch-1-8").textContent = "Restaurant Šnyt Brno";
        document.querySelector(".switch-1-9").textContent = "Created by: Filip Machala for: Šnyt Brno - all rights reserved"; 
        /* translate */
        var a = document.querySelector('#page-value').textContent;            
        if (a == "index") {
            /* title */
            document.title = 'Home - Šnyt';
            /* slider */
            document.querySelector(".switch-8").textContent = "Friday";
            document.querySelector(".switch-9").textContent = "Grilled";
            document.querySelector(".switch-10").textContent = "Ribs";
            document.querySelector(".switch-11").textContent = "We cordially invite you to our Friday event, which will take place on September 18, 2020 in our restaurant. On this day, grilled ...";
                    
            document.querySelector(".switch-13").textContent = "events";
            /* index-menu*/
            document.querySelector(".switch-14").textContent = "menu";
            document.querySelector(".switch-15").textContent = "Choose from our menu, which is prepared by our top chefs";

            document.querySelector(".switch-16").textContent = "Daily menu - January 18, 2021";
            document.querySelector(".switch-17").textContent = "Soup";
            document.querySelector(".switch-18").textContent = "Mushroom (7)";
            document.querySelector(".switch-19").textContent = "Mushrooms, potatoes, cream";

            document.querySelector(".switch-20").textContent = "Main course";
            document.querySelector(".switch-21").textContent = "Chicken rolls with boiled potatoes (7)";
            document.querySelector(".switch-22").textContent = "Chicken, sun-dried tomatoes, mozzarella";

            document.querySelector(".switch-23").textContent = "Fried cauliflower (3)";
            document.querySelector(".switch-24").textContent = "Cauliflower, breadcrumbs, french fries, tartar sauce";
            document.querySelector(".switch-25").textContent = "A list of allergens can be found in the Menu subpage";

            document.querySelector(".switch-26").textContent = "events";
            /* advert one */
            document.querySelector(".switch-27").textContent = "Event grilled ribs already this Friday";
            document.querySelector(".switch-28").textContent = "Book your seat while it is free";
            document.querySelector(".switch-29").textContent = "events";
            /* galery */
            document.querySelector(".switch-30").textContent = "galery";
            document.querySelector(".switch-31").textContent = "See the moments we captured in our restaurant";

            document.querySelector(".switch-32").textContent = "Delicious";
            document.querySelector(".switch-33").textContent = "food";
            document.querySelector(".switch-34").textContent = "Relaxing";
            document.querySelector(".switch-35").textContent = "atmosphere";
            document.querySelector(".switch-36").textContent = "Great";
            document.querySelector(".switch-37").textContent = "drinks";

            document.querySelector(".switch-38").textContent = "galery";
            /* advert two */
            document.querySelector(".switch-39").textContent = "main courses";
            document.querySelector(".switch-40").textContent = "types of burger";
            document.querySelector(".switch-41").textContent = "types of beer";

            document.querySelector(".switch-42").textContent = "menu";
            /* contact */
            document.querySelector(".switch-43").textContent = "contact";
            document.querySelector(".switch-44").textContent = "about us";

            document.querySelector(".switch-45").textContent = "Imagine properly drafted, tasty, handcrafted beer along with excellent home cooking. This is exactly the restaurant Snyt";
            document.querySelector(".switch-46").textContent = "The concept is based on a combination of modern gastronomy and beer culture. The franchise is the flagship of the Pivovary Lobkowicz group, which allows us to present the diversity of beers brewed within the group in a controlled environment and in the best possible way";
            document.querySelector(".switch-47").textContent = "We achieve the highest level of beer quality with the help of the most modern beer technology. The restaurant offers a wide portfolio of artisanally brewed beers stored in chilled beer boxes and tapped into pre-chilled glasses";
            document.querySelector(".switch-48").textContent = "The simple interior design and selection of homemade dishes focus on promoting the ideal combination of beer taste and food";
        } else if (a == "menu") {
            /* title */
            document.title = 'Menu - Šnyt';
            /* alergnes */
            document.querySelector(".switch-8").textContent = "Alergens";
            document.querySelector(".switch-9").textContent = "Gluten";
            document.querySelector(".switch-10").textContent = "Crustacean";
            document.querySelector(".switch-11").textContent = "Egg";
            document.querySelector(".switch-12").textContent = "Fish";
            document.querySelector(".switch-13").textContent = "Peanut";
            document.querySelector(".switch-14").textContent = "Soya";
            document.querySelector(".switch-15").textContent = "Milk";
            document.querySelector(".switch-16").textContent = "Nuts";
            document.querySelector(".switch-17").textContent = "Celery";
            document.querySelector(".switch-18").textContent = "Mustard";
            document.querySelector(".switch-19").textContent = "Sesame";
            document.querySelector(".switch-20").textContent = "Sulfur oxides";
            document.querySelector(".switch-21").textContent = "Lupine";
            document.querySelector(".switch-22").textContent = "Mollusc";
            /* menu */
            document.querySelector(".switch-23").textContent = "menu";           
            document.querySelector(".switch-24").textContent = "Choose from our menu, which is prepared by our top chefs";
                   
            document.querySelector(".switch-25").textContent = "alergens";

            document.querySelector(".switch-26").textContent = "Daily menu - January 18, 2021"; 
            document.querySelector(".switch-27").textContent = "Soup";
            document.querySelector(".switch-28").textContent = "Mushroom (7)";
            document.querySelector(".switch-29").textContent = "Mushrooms, potatoes, cream";

            document.querySelector(".switch-30").textContent = "Main course";
            document.querySelector(".switch-31").textContent = "Chicken rolls with boiled potatoes (7)";
            document.querySelector(".switch-32").textContent = "Chicken, sun-dried tomatoes, mozzarella";

            document.querySelector(".switch-33").textContent = "Fried cauliflower (3)";
            document.querySelector(".switch-34").textContent = "Cauliflower, breadcrumbs, french fries, tartar sauce";
                    
            document.querySelector(".switch-35").textContent = "Menu";
            document.querySelector(".switch-36").textContent = "Main courses";
            document.querySelector(".switch-37").textContent = "Meaty roasted ribs";
            document.querySelector(".switch-38").textContent = "Pork ribs, wholemeal bread, sauce";

            document.querySelector(".switch-39").textContent = "Beer courses";
            document.querySelector(".switch-40").textContent = "Fresh fried chips";
            document.querySelector(".switch-41").textContent = "Fried potato chips with sauce";
            document.querySelector(".switch-42").textContent = "Onion rings";
            document.querySelector(".switch-43").textContent = "Fried, breaded onion rings with sauce";

            document.querySelector(".switch-44").textContent = "Side courses";
            document.querySelector(".switch-45").textContent = "Chips";
            document.querySelector(".switch-46").textContent = "Fried potato chips";
            document.querySelector(".switch-47").textContent = "Beans on bacon";
            document.querySelector(".switch-48").textContent = "Roasted bean pods with pieces of bacon";

            document.querySelector(".switch-49").textContent = "Non-alco";
            document.querySelector(".switch-50").textContent = "Coca-Cola";
            document.querySelector(".switch-51").textContent = "Sweet sparkling drink of brand Coca-Cola";
            document.querySelector(".switch-52").textContent = "Fanta";
            document.querySelector(".switch-53").textContent = "Sweet sparkling drink of brand Fanta with orange flavor";
        } else if (a == "events") {
            /* title */
            document.title = 'Events - Šnyt';
            /* menu - menu */
            document.querySelector(".switch-8").textContent = "events";
            document.querySelector(".switch-9").textContent = "We would like to welcome you to our special Friday event";

            document.querySelector(".switch-10").textContent = "Friday Grilled Ribs";
            document.querySelector(".switch-11").textContent = "We invite you to our event, where delicious grilled ribs with fresh bread and sauce will be served";
            document.querySelector(".switch-12").textContent = "March 28, 2021";

            document.querySelector(".switch-13").textContent = "Friday Grilled Fish";
            document.querySelector(".switch-14").textContent = "We invite you to our event, where excellent grilled fish with grilled vegetables will be served";
            document.querySelector(".switch-15").textContent = "February 28, 2021";

            document.querySelector(".switch-16").textContent = "Friday Mega-steak";
            document.querySelector(".switch-17").textContent = "We invite you to our event, where a fleshy fried steak with fresh bread and sauce will be served";
            document.querySelector(".switch-18").textContent = "January 28, 2021";
        } else if (a == "galery") {
            /* title */
            document.title = 'Galery - Šnyt';
            /* galery */
            document.querySelector(".switch-8").textContent = "galery";
            document.querySelector(".switch-9").textContent = "Experiences are what we carry with us forever and we follow accordingly";
        } else if (a == "review") {
            /* title */
            document.title = 'Review - Šnyt';
            /* review */
            document.querySelector(".switch-8").textContent = "Review";
            document.querySelector(".switch-9").textContent = "Customers will be happy to tell us about our care and great taste of food, and we appreciate it";

            document.querySelector(".switch-10").textContent = "June 30, 2020";
            document.querySelector(".switch-11").textContent = "Beer Démon tastes great and they are well served";

            document.querySelector(".switch-12").textContent = "November 8, 2019";
            document.querySelector(".switch-13").textContent = "Super service, good food.";

            document.querySelector(".switch-14").textContent = "October 4, 2019";
            document.querySelector(".switch-15").textContent = "Super service, great food and good beer 🍺";
        } else if (a == "contact") {
            /* title */
            document.title = 'Contact - Šnyt';
            /* contact */
            document.querySelector(".switch-8").textContent = "contact";
            document.querySelector(".switch-9").textContent = "info";

            document.querySelector(".switch-10").textContent = "Mo - Th";
            document.querySelector(".switch-11").textContent = "Fr";
            document.querySelector(".switch-12").textContent = "Sa";
            document.querySelector(".switch-13").textContent = "02.04.2021 - Good Friday";
            document.querySelector(".switch-14").textContent = "14:00 - 20:00 open";
            document.querySelector(".switch-15").textContent = "Restaurant Šnyt Brno";

            document.querySelector(".switch-16").textContent = "about us";
            document.querySelector(".switch-17").textContent = "Imagine properly drafted, tasty, handcrafted beer along with excellent home cooking. This is exactly the restaurant Snyt";
            document.querySelector(".switch-18").textContent = "The concept is based on a combination of modern gastronomy and beer culture. The franchise is the flagship of the Pivovary Lobkowicz group, which allows us to present the diversity of beers brewed within the group in a controlled environment and in the best possible way";
            document.querySelector(".switch-19").textContent = "We achieve the highest level of beer quality with the help of the most modern beer technology. The restaurant offers a wide portfolio of artisanally brewed beers stored in chilled beer boxes and tapped into pre-chilled glasses";
            document.querySelector(".switch-20").textContent = "The simple interior design and selection of homemade dishes focus on promoting the ideal combination of beer taste and food";
        } else if (a == "eventsRibs") {
            /* title */
            document.title = 'Ribs - Events - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Grilled Ribs";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where delicious grilled ribs with fresh bread and sauce will be served. The price will be set at 59kč/100 g and you will be able to determine the weight of the portion";     

            document.querySelector(".switch-10").textContent = "Restaurant Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Friday - 28. 6. 2020";

            document.querySelector(".switch-12").textContent = "When entering our restaurant, you can choose whether to use the entrance to our terrace and enjoy your meal in the fresh air or in bad weather to sit in the restaurant";
            document.querySelector(".switch-13").textContent = "In our gallery you will not only find out what it looks like with us, but you will also know that we prepare dishes with love and care, both in taste and appearance. See our gallery";
            document.querySelector(".switch-14").textContent = "galery";

            document.querySelector(".switch-15").textContent = "While enjoying our Friday meal, you can also order excellent drinks, both alcoholic and non-alcoholic. In case of greater hunger, you can choose an extra side dish in our menu";
            document.querySelector(".switch-16").textContent = "If you are really an eater, you will definitely enjoy the selection of our delicious main dishes, which will really satisfy you. You can choose from our menu, for example, burgers, steaks and much more";
            document.querySelector(".switch-17").textContent = "menu";
        } else if (a == "eventsFish") {
            /* title */
            document.title = 'Fish - Events - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Grilled Fish";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where excellent grilled trout with grilled vegetables will be served. The price will be set at 65kč/100g. Serving weight will be 200-300g/pc";     

            document.querySelector(".switch-10").textContent = "Restaurant Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Friday - 28. 5. 2020";

            document.querySelector(".switch-12").textContent = "When entering our restaurant, you can choose whether to use the entrance to our terrace and enjoy your meal in the fresh air or in bad weather to sit in the restaurant";
            document.querySelector(".switch-13").textContent = "In our gallery you will not only find out what it looks like with us, but you will also know that we prepare dishes with love and care, both in taste and appearance. See our gallery";
            document.querySelector(".switch-14").textContent = "galery";

            document.querySelector(".switch-15").textContent = "While enjoying our Friday meal, you can also order excellent drinks, both alcoholic and non-alcoholic. In case of greater hunger, you can choose an extra side dish in our menu";
            document.querySelector(".switch-16").textContent = "If you are really an eater, you will definitely enjoy the selection of our delicious main dishes, which will really satisfy you. You can choose from our menu, for example, burgers, steaks and much more";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Event is over";
        } else if (a == "eventsSteak") {
            /* title */
            document.title = 'Mega-Steak - Events - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Mega-Steak";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where meat fried steak (300g) with fresh bread and sauce will be served. You can choose between chicken, pork or mix";     

            document.querySelector(".switch-10").textContent = "Restaurant Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Friday - 28. 4. 2020";

            document.querySelector(".switch-12").textContent = "When entering our restaurant, you can choose whether to use the entrance to our terrace and enjoy your meal in the fresh air or in bad weather to sit in the restaurant";
            document.querySelector(".switch-13").textContent = "In our gallery you will not only find out what it looks like with us, but you will also know that we prepare dishes with love and care, both in taste and appearance. See our gallery";
            document.querySelector(".switch-14").textContent = "galery";

            document.querySelector(".switch-15").textContent = "While enjoying our Friday meal, you can also order excellent drinks, both alcoholic and non-alcoholic. In case of greater hunger, you can choose an extra side dish in our menu";
            document.querySelector(".switch-16").textContent = "If you are really an eater, you will definitely enjoy the selection of our delicious main dishes, which will really satisfy you. You can choose from our menu, for example, burgers, steaks and much more";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Event is over";
        }
    }
    function csLan(){
        /* active */
        document.querySelector(".lanaguage-EN").classList.remove("lan-active");
        document.querySelector(".lanaguage-CZ").classList.add("lan-active");
        /* lang */
        var lang = document.getElementsByTagName('html')[0];
        lang.setAttribute('lang', 'cs');
        /* navigation */
        document.querySelector(".switch-1").textContent = "Sledujte nás";

        document.querySelector(".switch-2").textContent = "Domů";
        document.querySelector(".switch-3").textContent = "Menu";
        document.querySelector(".switch-4").textContent = "Akce";
        document.querySelector(".switch-5").textContent = "Galerie";
        document.querySelector(".switch-6").textContent = "Recenze";
        document.querySelector(".switch-7").textContent = "Kontakt";
        /* footer */
        document.querySelector(".switch-1-1").textContent = "otevírací doba";
        document.querySelector(".switch-1-2").textContent = "Po - Čt";
        document.querySelector(".switch-1-3").textContent = "Pá";
        document.querySelector(".switch-1-4").textContent = "So";
        document.querySelector(".switch-1-5").textContent = "02.04.2021 - Velký pátek";
        document.querySelector(".switch-1-6").textContent = "14:00 - 20:00 otevřeno";

        document.querySelector(".switch-1-7").textContent = "kontakt";
        document.querySelector(".switch-1-8").textContent = "Restaurace Šnyt Brno";
        document.querySelector(".switch-1-9").textContent = "Vytvořil: Filip Machala, pro: Šnyt Brno - všechna práva vyhrazena";
        /* translate */
        var a = document.querySelector('#page-value').textContent;
        if (a == "index") {
            /* title */
            document.title = 'Domů - Šnyt';
            /* slider */
            document.querySelector(".switch-8").textContent = "Páteční";
            document.querySelector(".switch-9").textContent = "Grilovaná";
            document.querySelector(".switch-10").textContent = "Žebra";
            document.querySelector(".switch-11").textContent = "Srdečně Vás zveme na naší páteční akci, která se bude konat 18. 9. 2020 v naší restauraci. Tento den budou podávaná grilovaná...";
                    
            document.querySelector(".switch-13").textContent = "akce";
            /* index - menu*/
            document.querySelector(".switch-14").textContent = "menu";
            document.querySelector(".switch-15").textContent = "Vyberte si z našeho menu, který je připravován našimi špičkovými kuchaři";

            document.querySelector(".switch-16").textContent = "Denní menu - 18. ledna 2021";
            document.querySelector(".switch-17").textContent = "Polévka";
            document.querySelector(".switch-18").textContent = "Žampiónová (7)";
            document.querySelector(".switch-19").textContent = "Žampióny, brambory, smetana";

            document.querySelector(".switch-20").textContent = "Hlavní jídlo";
            document.querySelector(".switch-21").textContent = "Kuřecí závitek s vařenými brambory (7)";
            document.querySelector(".switch-22").textContent = "Kuřecí maso, sušená rajčata, mozzarela";

            document.querySelector(".switch-23").textContent = "Smažený květák (3)";
            document.querySelector(".switch-24").textContent = "Květák, strouhanka, hranolky, tatarská omáčka";
            document.querySelector(".switch-25").textContent = "Seznam alergenů je k nalezení v podstránce Menu";

            document.querySelector(".switch-26").textContent = "akce";
            /* advert one*/
            document.querySelector(".switch-27").textContent = "Akce grilovaná žebra již tento pátek";
            document.querySelector(".switch-28").textContent = "Rezervujte si své místo, dokud je volné";
            document.querySelector(".switch-29").textContent = "akce";
            /* galery */
            document.querySelector(".switch-30").textContent = "galerie";
            document.querySelector(".switch-31").textContent = "Prohlédněte si námi zachycené okamžiky v naší restauraci";

            document.querySelector(".switch-32").textContent = "Lahodná";
            document.querySelector(".switch-33").textContent = "jídla";
            document.querySelector(".switch-34").textContent = "Relaxovací";
            document.querySelector(".switch-35").textContent = "atmosféra";
            document.querySelector(".switch-36").textContent = "Výborné";
            document.querySelector(".switch-37").textContent = "nápoje";

            document.querySelector(".switch-38").textContent = "galerie";
            /* advert two */
            document.querySelector(".switch-39").textContent = "hlavních jídel";
            document.querySelector(".switch-40").textContent = "druhů burgeru";
            document.querySelector(".switch-41").textContent = "druhů piva";

            document.querySelector(".switch-42").textContent = "menu";
            /* contact */
            document.querySelector(".switch-43").textContent = "kontakt";
            document.querySelector(".switch-44").textContent = "o nás";

            document.querySelector(".switch-45").textContent = "Představte si správně načepované, chutné, řemeslně vyráběné pivo spolu s vynikající domácí kuchyní. Přesně to je restaurace Šnyt";
            document.querySelector(".switch-46").textContent = "Koncept je založen na spojení moderní gastronomie a pivní kultury. Franšíza představuje vlajkovou loď skupiny Pivovary Lobkowicz, která umožňuje představit různorodost piv vařených v rámci skupiny v kontrolovaném prostředí a tím nejlepším způsobem";
            document.querySelector(".switch-47").textContent = "Nejvyšší úrovně kvality piva dosahujeme pomocí nejmodernější pivní technologie. Restaurace nabízí široké portfolio řemeslně vařených piv skladovaných v chlazených pivních boxech a čepovaných do předchlazených sklenic";
            document.querySelector(".switch-48").textContent = "Jednoduchý design interiéru a výběr z domácích jídel se soustředí na podporu ideálního spojení chuti piva s jídlem";
        } else if (a == "menu") {
            /* title */
            document.title = 'Menu - Šnyt';
            /* alergens*/
            document.querySelector(".switch-8").textContent = "Alergeny";
            document.querySelector(".switch-9").textContent = "Lepek";
            document.querySelector(".switch-10").textContent = "Korýš";
            document.querySelector(".switch-11").textContent = "Vejce";
            document.querySelector(".switch-12").textContent = "Ryba";
            document.querySelector(".switch-13").textContent = "Arašíd";
            document.querySelector(".switch-14").textContent = "Sója";
            document.querySelector(".switch-15").textContent = "Mléko";
            document.querySelector(".switch-16").textContent = "Ořechy";
            document.querySelector(".switch-17").textContent = "Celer";
            document.querySelector(".switch-18").textContent = "Hořčice";
            document.querySelector(".switch-19").textContent = "Sezam";
            document.querySelector(".switch-20").textContent = "Oxidy siř.";
            document.querySelector(".switch-21").textContent = "Lupina";
            document.querySelector(".switch-22").textContent = "Měkkýš";
            /* menu */
            document.querySelector(".switch-23").textContent = "menu";           
            document.querySelector(".switch-24").textContent = "Vyberte si z našeho menu, které je připravován našimi špičkovými kuchaři";
                    
            document.querySelector(".switch-25").textContent = "alergeny";

            document.querySelector(".switch-26").textContent = "Denní menu - 18. ledna 2021"; 
            document.querySelector(".switch-27").textContent = "Polévka";
            document.querySelector(".switch-28").textContent = "Žampiónová (7)";
            document.querySelector(".switch-29").textContent = "Žampióny, brambory, smetana";

            document.querySelector(".switch-30").textContent = "Hlavní jídlo";
            document.querySelector(".switch-31").textContent = "Kuřecí závitek s vařenými brambory (7)";
            document.querySelector(".switch-32").textContent = "Kuřecí závitek plněný sušenými rajčaty mozzarelou";

            document.querySelector(".switch-33").textContent = "Smažený květák (3)";
            document.querySelector(".switch-34").textContent = "Květák, strouhanka, hranolky, tatarka";

            document.querySelector(".switch-35").textContent = "Jídelní list";
            document.querySelector(".switch-36").textContent = "Hlavní jídla";
            document.querySelector(".switch-37").textContent = "Masitá pečená žebra (1)";
            document.querySelector(".switch-38").textContent = "Vepřová žebra, celozrnný chléb, omáčka";

            document.querySelector(".switch-39").textContent = "Jídla k pivu";
            document.querySelector(".switch-40").textContent = "Čerstvé smažené chipsy";
            document.querySelector(".switch-41").textContent = "Smažené bramborové chipsy s omáčkou";
            document.querySelector(".switch-42").textContent = "Cibulové kroužky";
            document.querySelector(".switch-43").textContent = "Smažené, obalované cibulové kroužky s omáčkou";

            document.querySelector(".switch-44").textContent = "Přílohy";
            document.querySelector(".switch-45").textContent = "Bramborové hranolky";
            document.querySelector(".switch-46").textContent = "Smažené bramborové hranolky";
            document.querySelector(".switch-47").textContent = "Fazolové lusky na slanině";
            document.querySelector(".switch-48").textContent = "Restované fazolové lusky s kousky slaniny";

            document.querySelector(".switch-49").textContent = "Nealko";
            document.querySelector(".switch-50").textContent = "Coca-Cola";
            document.querySelector(".switch-51").textContent = "Sladký perlivý nápoj značky Coca-Cola";
            document.querySelector(".switch-52").textContent = "Fanta";
            document.querySelector(".switch-53").textContent = "Sladký perlivý nápoj značky Fanta s příchutí pomeranče";
        } else if (a == "events") {
            /* title */
            document.title = 'Akce - Šnyt';
            /* menu - menu */
            document.querySelector(".switch-8").textContent = "akce";
            document.querySelector(".switch-9").textContent = "Rádi vás uvítáme na námi pořádané speciální páteční akci";

            document.querySelector(".switch-10").textContent = "Páteční grilovaná Žebra";
            document.querySelector(".switch-11").textContent = "Zveme vás na naší akci, kdy budou servírována vynikající grilovaná žebra s čerstvým chlebem a omáčkou";
            document.querySelector(".switch-12").textContent = "28. března 2021";

            document.querySelector(".switch-13").textContent = "Páteční grilovaná Ryba";
            document.querySelector(".switch-14").textContent = "Zveme vás na naší akci, kdy bude servírována výborná grilovaná ryba s grilovanou zeleninou";
            document.querySelector(".switch-15").textContent = "28. února 2021";

            document.querySelector(".switch-16").textContent = "Páteční Mega-řízek";
            document.querySelector(".switch-17").textContent = "Zveme vás na naší akci, kdy bude servírován masitý smažený řízek s čerstvým chlebem a omáčkou";
            document.querySelector(".switch-18").textContent = "28. ledna 2021";
        } else if (a == "galery") {
            /* title */
            document.title = 'Galerie - Šnyt';
            /* galery */
            document.querySelector(".switch-8").textContent = "galerie";
            document.querySelector(".switch-9").textContent = "Zážitky jsou to, co si sebou neseme navždy a podle toho se také řídíme";
        } else if (a == "review") {
            /* title */
            document.title = 'Recenze - Šnyt';
            /* review */
            document.querySelector(".switch-8").textContent = "Recenze";
            document.querySelector(".switch-9").textContent = "Naši pečlivost a skvělou chuť jídel nám zákazníci rádi sdělí a my si toho vážíme";

            document.querySelector(".switch-10").textContent = "30. června 2020";
            document.querySelector(".switch-11").textContent = "Pivo Démon skvěle chutná a mají dobrou obsluhu";

            document.querySelector(".switch-12").textContent = "8. listopadu 2019";
            document.querySelector(".switch-13").textContent = "Super obsluha, dobré jídlo.";

            document.querySelector(".switch-14").textContent = "4. října 2019";
            document.querySelector(".switch-15").textContent = "Super obsluha, Výborné jídlo a dobré pivečko 🍺";
        } else if (a == "contact") {
            /* title */
            document.title = 'Kontakt - Šnyt';
            /* contact */
            document.querySelector(".switch-8").textContent = "kontakt";
            document.querySelector(".switch-9").textContent = "info";

            document.querySelector(".switch-10").textContent = "Po - Čt";
            document.querySelector(".switch-11").textContent = "Pá";
            document.querySelector(".switch-12").textContent = "So";
            document.querySelector(".switch-13").textContent = "02.04.2021 - Velký pátek";
            document.querySelector(".switch-14").textContent = "14:00 - 20:00 otevřeno";
            document.querySelector(".switch-15").textContent = "Restaurace Šnyt Brno";

            document.querySelector(".switch-16").textContent = "o nás";
            document.querySelector(".switch-17").textContent = "Představte si správně načepované, chutné, řemeslně vyráběné pivo spolu s vynikající domácí kuchyní. Přesně to je restaurace Šnyt";
            document.querySelector(".switch-18").textContent = "Koncept je založen na spojení moderní gastronomie a pivní kultury. Franšíza představuje vlajkovou loď skupiny Pivovary Lobkowicz, která umožňuje představit různorodost piv vařených v rámci skupiny v kontrolovaném prostředí a tím nejlepším způsobem";
            document.querySelector(".switch-19").textContent = "Nejvyšší úrovně kvality piva dosahujeme pomocí nejmodernější pivní technologie. Restaurace nabízí široké portfolio řemeslně vařených piv skladovaných v chlazených pivních boxech a čepovaných do předchlazených sklenic";
            document.querySelector(".switch-20").textContent = "Jednoduchý design interiéru a výběr z domácích jídel se soustředí na podporu ideálního spojení chuti piva s jídlem";
        } else if (a == "eventsRibs") {
            /* title */
            document.title = 'Žebra - Akce - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Páteční grilovaná Žebra";
            document.querySelector(".switch-9").textContent = "Srdečne Vás zveme na naší akci, kdy budou servírována vynikající grilovaná žebra s čersvým chlebem a omáčkou. Cena bude stanovena na 59kč/100g a váhu porce si budete moci určit";     

            document.querySelector(".switch-10").textContent = "Restaurace Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Pátek - 28. 6. 2020";

            document.querySelector(".switch-12").textContent = "Při vstupu do naší restaurace si můžete vybrat, zda-li využijete vchod do naší terasy a vychutnáte si své jídlo na čersvém vzduchu nebo při nevhodném počasí posedíte v restauraci";
            document.querySelector(".switch-13").textContent = "V naší galerii nejen zjistíte jak to u nás vypadá, ale také poznáte, že připravujeme pokrmy s láskou a pečlivostí jak chutí, tak i vzhledem. Prohlédněte si naši galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "Během vychutnávání našeho pátečního jídla si také můžete objednat výborné nápoje jak alkoholické, tak i nealkoholické. V případě většího hladu si v našem menu můžete vybrat přílohu navíc";
            document.querySelector(".switch-16").textContent = "V případě, že jste opravdu jedlík, tak Vás určitě potěší výběr z našich lahodných hlavních jídel, které Vás opravdu zasytí. Na výběr v našem menu naleznete např. burgery, steaky a spoustu dalšího";
            document.querySelector(".switch-17").textContent = "menu";
        } else if (a == "eventsFish") {
            /* title */
            document.title = 'Ryba - Akce - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Páteční grilovaná Ryba";
            document.querySelector(".switch-9").textContent = "Srdečne Vás zveme na naší akci, kdy bude servírována výborná grilovaný pstruh s grilovanou zeleninou. Cena bude stanovena na 65kč/100g. Váha porce bude 200-300g/ks";     

            document.querySelector(".switch-10").textContent = "Restaurace Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Pátek - 28. 5. 2020";

            document.querySelector(".switch-12").textContent = "Při vstupu do naší restaurace si můžete vybrat, zda-li využijete vchod do naší terasy a vychutnáte si své jídlo na čersvém vzduchu nebo při nevhodném počasí posedíte v restauraci";
            document.querySelector(".switch-13").textContent = "V naší galerii nejen zjistíte jak to u nás vypadá, ale také poznáte, že připravujeme pokrmy s láskou a pečlivostí jak chutí, tak i vzhledem. Prohlédněte si naši galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "Během vychutnávání našeho pátečního jídla si také můžete objednat výborné nápoje jak alkoholické, tak i nealkoholické. V případě většího hladu si v našem menu můžete vybrat přílohu navíc";
            document.querySelector(".switch-16").textContent = "V případě, že jste opravdu jedlík, tak Vás určitě potěší výběr z našich lahodných hlavních jídel, které Vás opravdu zasytí. Na výběr v našem menu naleznete např. burgery, steaky a spoustu dalšího";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Akce již skončila";
        } else if (a == "eventsSteak") {
            /* title */
            document.title = 'Mega-řízek - Akce - Šnyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Páteční Mega-řízek";
            document.querySelector(".switch-9").textContent = "Srdečne Vás zveme na naší akci, kdy budou servírován masitý smažený řízek (300g) s čersvým chlebem a omáčkou. Na výběr bude mezi kuřecím, vepřovým nebo mixem";     

            document.querySelector(".switch-10").textContent = "Restaurace Šnyt Brno";
            document.querySelector(".switch-11").textContent = "Pátek - 28. 4. 2020";

            document.querySelector(".switch-12").textContent = "Při vstupu do naší restaurace si můžete vybrat, zda-li využijete vchod do naší terasy a vychutnáte si své jídlo na čersvém vzduchu nebo při nevhodném počasí posedíte v restauraci";
            document.querySelector(".switch-13").textContent = "V naší galerii nejen zjistíte jak to u nás vypadá, ale také poznáte, že připravujeme pokrmy s láskou a pečlivostí jak chutí, tak i vzhledem. Prohlédněte si naši galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "Během vychutnávání našeho pátečního jídla si také můžete objednat výborné nápoje jak alkoholické, tak i nealkoholické. V případě většího hladu si v našem menu můžete vybrat přílohu navíc";
            document.querySelector(".switch-16").textContent = "V případě, že jste opravdu jedlík, tak Vás určitě potěší výběr z našich lahodných hlavních jídel, které Vás opravdu zasytí. Na výběr v našem menu naleznete např. burgery, steaky a spoustu dalšího";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Akce již skončila";
        }
    }













