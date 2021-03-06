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
        document.querySelector(".switch-1-8").textContent = "Restaurant ??nyt Brno";
        document.querySelector(".switch-1-9").textContent = "Created by: Filip Machala for: ??nyt Brno - all rights reserved"; 
        /* translate */
        var a = document.querySelector('#page-value').textContent;            
        if (a == "index") {
            /* title */
            document.title = 'Home - ??nyt';
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
            document.title = 'Menu - ??nyt';
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
            document.title = 'Events - ??nyt';
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
            document.title = 'Galery - ??nyt';
            /* galery */
            document.querySelector(".switch-8").textContent = "galery";
            document.querySelector(".switch-9").textContent = "Experiences are what we carry with us forever and we follow accordingly";
        } else if (a == "review") {
            /* title */
            document.title = 'Review - ??nyt';
            /* review */
            document.querySelector(".switch-8").textContent = "Review";
            document.querySelector(".switch-9").textContent = "Customers will be happy to tell us about our care and great taste of food, and we appreciate it";

            document.querySelector(".switch-10").textContent = "June 30, 2020";
            document.querySelector(".switch-11").textContent = "Beer D??mon tastes great and they are well served";

            document.querySelector(".switch-12").textContent = "November 8, 2019";
            document.querySelector(".switch-13").textContent = "Super service, good food.";

            document.querySelector(".switch-14").textContent = "October 4, 2019";
            document.querySelector(".switch-15").textContent = "Super service, great food and good beer ????";
        } else if (a == "contact") {
            /* title */
            document.title = 'Contact - ??nyt';
            /* contact */
            document.querySelector(".switch-8").textContent = "contact";
            document.querySelector(".switch-9").textContent = "info";

            document.querySelector(".switch-10").textContent = "Mo - Th";
            document.querySelector(".switch-11").textContent = "Fr";
            document.querySelector(".switch-12").textContent = "Sa";
            document.querySelector(".switch-13").textContent = "02.04.2021 - Good Friday";
            document.querySelector(".switch-14").textContent = "14:00 - 20:00 open";
            document.querySelector(".switch-15").textContent = "Restaurant ??nyt Brno";

            document.querySelector(".switch-16").textContent = "about us";
            document.querySelector(".switch-17").textContent = "Imagine properly drafted, tasty, handcrafted beer along with excellent home cooking. This is exactly the restaurant Snyt";
            document.querySelector(".switch-18").textContent = "The concept is based on a combination of modern gastronomy and beer culture. The franchise is the flagship of the Pivovary Lobkowicz group, which allows us to present the diversity of beers brewed within the group in a controlled environment and in the best possible way";
            document.querySelector(".switch-19").textContent = "We achieve the highest level of beer quality with the help of the most modern beer technology. The restaurant offers a wide portfolio of artisanally brewed beers stored in chilled beer boxes and tapped into pre-chilled glasses";
            document.querySelector(".switch-20").textContent = "The simple interior design and selection of homemade dishes focus on promoting the ideal combination of beer taste and food";
        } else if (a == "eventsRibs") {
            /* title */
            document.title = 'Ribs - Events - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Grilled Ribs";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where delicious grilled ribs with fresh bread and sauce will be served. The price will be set at 59k??/100 g and you will be able to determine the weight of the portion";     

            document.querySelector(".switch-10").textContent = "Restaurant ??nyt Brno";
            document.querySelector(".switch-11").textContent = "Friday - 28. 6. 2020";

            document.querySelector(".switch-12").textContent = "When entering our restaurant, you can choose whether to use the entrance to our terrace and enjoy your meal in the fresh air or in bad weather to sit in the restaurant";
            document.querySelector(".switch-13").textContent = "In our gallery you will not only find out what it looks like with us, but you will also know that we prepare dishes with love and care, both in taste and appearance. See our gallery";
            document.querySelector(".switch-14").textContent = "galery";

            document.querySelector(".switch-15").textContent = "While enjoying our Friday meal, you can also order excellent drinks, both alcoholic and non-alcoholic. In case of greater hunger, you can choose an extra side dish in our menu";
            document.querySelector(".switch-16").textContent = "If you are really an eater, you will definitely enjoy the selection of our delicious main dishes, which will really satisfy you. You can choose from our menu, for example, burgers, steaks and much more";
            document.querySelector(".switch-17").textContent = "menu";
        } else if (a == "eventsFish") {
            /* title */
            document.title = 'Fish - Events - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Grilled Fish";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where excellent grilled trout with grilled vegetables will be served. The price will be set at 65k??/100g. Serving weight will be 200-300g/pc";     

            document.querySelector(".switch-10").textContent = "Restaurant ??nyt Brno";
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
            document.title = 'Mega-Steak - Events - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "Friday Mega-Steak";
            document.querySelector(".switch-9").textContent = "We cordially invite you to our event, where meat fried steak (300g) with fresh bread and sauce will be served. You can choose between chicken, pork or mix";     

            document.querySelector(".switch-10").textContent = "Restaurant ??nyt Brno";
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
        document.querySelector(".switch-1").textContent = "Sledujte n??s";

        document.querySelector(".switch-2").textContent = "Dom??";
        document.querySelector(".switch-3").textContent = "Menu";
        document.querySelector(".switch-4").textContent = "Akce";
        document.querySelector(".switch-5").textContent = "Galerie";
        document.querySelector(".switch-6").textContent = "Recenze";
        document.querySelector(".switch-7").textContent = "Kontakt";
        /* footer */
        document.querySelector(".switch-1-1").textContent = "otev??rac?? doba";
        document.querySelector(".switch-1-2").textContent = "Po - ??t";
        document.querySelector(".switch-1-3").textContent = "P??";
        document.querySelector(".switch-1-4").textContent = "So";
        document.querySelector(".switch-1-5").textContent = "02.04.2021 - Velk?? p??tek";
        document.querySelector(".switch-1-6").textContent = "14:00 - 20:00 otev??eno";

        document.querySelector(".switch-1-7").textContent = "kontakt";
        document.querySelector(".switch-1-8").textContent = "Restaurace ??nyt Brno";
        document.querySelector(".switch-1-9").textContent = "Vytvo??il: Filip Machala, pro: ??nyt Brno - v??echna pr??va vyhrazena";
        /* translate */
        var a = document.querySelector('#page-value').textContent;
        if (a == "index") {
            /* title */
            document.title = 'Dom?? - ??nyt';
            /* slider */
            document.querySelector(".switch-8").textContent = "P??te??n??";
            document.querySelector(".switch-9").textContent = "Grilovan??";
            document.querySelector(".switch-10").textContent = "??ebra";
            document.querySelector(".switch-11").textContent = "Srde??n?? V??s zveme na na???? p??te??n?? akci, kter?? se bude konat 18. 9. 2020 v na???? restauraci. Tento den budou pod??van?? grilovan??...";
                    
            document.querySelector(".switch-13").textContent = "akce";
            /* index - menu*/
            document.querySelector(".switch-14").textContent = "menu";
            document.querySelector(".switch-15").textContent = "Vyberte si z na??eho menu, kter?? je p??ipravov??n na??imi ??pi??kov??mi kucha??i";

            document.querySelector(".switch-16").textContent = "Denn?? menu - 18. ledna 2021";
            document.querySelector(".switch-17").textContent = "Pol??vka";
            document.querySelector(".switch-18").textContent = "??ampi??nov?? (7)";
            document.querySelector(".switch-19").textContent = "??ampi??ny, brambory, smetana";

            document.querySelector(".switch-20").textContent = "Hlavn?? j??dlo";
            document.querySelector(".switch-21").textContent = "Ku??ec?? z??vitek s va??en??mi brambory (7)";
            document.querySelector(".switch-22").textContent = "Ku??ec?? maso, su??en?? raj??ata, mozzarela";

            document.querySelector(".switch-23").textContent = "Sma??en?? kv??t??k (3)";
            document.querySelector(".switch-24").textContent = "Kv??t??k, strouhanka, hranolky, tatarsk?? om????ka";
            document.querySelector(".switch-25").textContent = "Seznam alergen?? je k nalezen?? v podstr??nce Menu";

            document.querySelector(".switch-26").textContent = "akce";
            /* advert one*/
            document.querySelector(".switch-27").textContent = "Akce grilovan?? ??ebra ji?? tento p??tek";
            document.querySelector(".switch-28").textContent = "Rezervujte si sv?? m??sto, dokud je voln??";
            document.querySelector(".switch-29").textContent = "akce";
            /* galery */
            document.querySelector(".switch-30").textContent = "galerie";
            document.querySelector(".switch-31").textContent = "Prohl??dn??te si n??mi zachycen?? okam??iky v na???? restauraci";

            document.querySelector(".switch-32").textContent = "Lahodn??";
            document.querySelector(".switch-33").textContent = "j??dla";
            document.querySelector(".switch-34").textContent = "Relaxovac??";
            document.querySelector(".switch-35").textContent = "atmosf??ra";
            document.querySelector(".switch-36").textContent = "V??born??";
            document.querySelector(".switch-37").textContent = "n??poje";

            document.querySelector(".switch-38").textContent = "galerie";
            /* advert two */
            document.querySelector(".switch-39").textContent = "hlavn??ch j??del";
            document.querySelector(".switch-40").textContent = "druh?? burgeru";
            document.querySelector(".switch-41").textContent = "druh?? piva";

            document.querySelector(".switch-42").textContent = "menu";
            /* contact */
            document.querySelector(".switch-43").textContent = "kontakt";
            document.querySelector(".switch-44").textContent = "o n??s";

            document.querySelector(".switch-45").textContent = "P??edstavte si spr??vn?? na??epovan??, chutn??, ??emesln?? vyr??b??n?? pivo spolu s vynikaj??c?? dom??c?? kuchyn??. P??esn?? to je restaurace ??nyt";
            document.querySelector(".switch-46").textContent = "Koncept je zalo??en na spojen?? modern?? gastronomie a pivn?? kultury. Fran????za p??edstavuje vlajkovou lo?? skupiny Pivovary Lobkowicz, kter?? umo????uje p??edstavit r??znorodost piv va??en??ch v r??mci skupiny v kontrolovan??m prost??ed?? a t??m nejlep????m zp??sobem";
            document.querySelector(".switch-47").textContent = "Nejvy?????? ??rovn?? kvality piva dosahujeme pomoc?? nejmodern??j???? pivn?? technologie. Restaurace nab??z?? ??irok?? portfolio ??emesln?? va??en??ch piv skladovan??ch v chlazen??ch pivn??ch boxech a ??epovan??ch do p??edchlazen??ch sklenic";
            document.querySelector(".switch-48").textContent = "Jednoduch?? design interi??ru a v??b??r z dom??c??ch j??del se soust??ed?? na podporu ide??ln??ho spojen?? chuti piva s j??dlem";
        } else if (a == "menu") {
            /* title */
            document.title = 'Menu - ??nyt';
            /* alergens*/
            document.querySelector(".switch-8").textContent = "Alergeny";
            document.querySelector(".switch-9").textContent = "Lepek";
            document.querySelector(".switch-10").textContent = "Kor????";
            document.querySelector(".switch-11").textContent = "Vejce";
            document.querySelector(".switch-12").textContent = "Ryba";
            document.querySelector(".switch-13").textContent = "Ara????d";
            document.querySelector(".switch-14").textContent = "S??ja";
            document.querySelector(".switch-15").textContent = "Ml??ko";
            document.querySelector(".switch-16").textContent = "O??echy";
            document.querySelector(".switch-17").textContent = "Celer";
            document.querySelector(".switch-18").textContent = "Ho????ice";
            document.querySelector(".switch-19").textContent = "Sezam";
            document.querySelector(".switch-20").textContent = "Oxidy si??.";
            document.querySelector(".switch-21").textContent = "Lupina";
            document.querySelector(".switch-22").textContent = "M??kk????";
            /* menu */
            document.querySelector(".switch-23").textContent = "menu";           
            document.querySelector(".switch-24").textContent = "Vyberte si z na??eho menu, kter?? je p??ipravov??n na??imi ??pi??kov??mi kucha??i";
                    
            document.querySelector(".switch-25").textContent = "alergeny";

            document.querySelector(".switch-26").textContent = "Denn?? menu - 18. ledna 2021"; 
            document.querySelector(".switch-27").textContent = "Pol??vka";
            document.querySelector(".switch-28").textContent = "??ampi??nov?? (7)";
            document.querySelector(".switch-29").textContent = "??ampi??ny, brambory, smetana";

            document.querySelector(".switch-30").textContent = "Hlavn?? j??dlo";
            document.querySelector(".switch-31").textContent = "Ku??ec?? z??vitek s va??en??mi brambory (7)";
            document.querySelector(".switch-32").textContent = "Ku??ec?? z??vitek pln??n?? su??en??mi raj??aty mozzarelou";

            document.querySelector(".switch-33").textContent = "Sma??en?? kv??t??k (3)";
            document.querySelector(".switch-34").textContent = "Kv??t??k, strouhanka, hranolky, tatarka";

            document.querySelector(".switch-35").textContent = "J??deln?? list";
            document.querySelector(".switch-36").textContent = "Hlavn?? j??dla";
            document.querySelector(".switch-37").textContent = "Masit?? pe??en?? ??ebra (1)";
            document.querySelector(".switch-38").textContent = "Vep??ov?? ??ebra, celozrnn?? chl??b, om????ka";

            document.querySelector(".switch-39").textContent = "J??dla k pivu";
            document.querySelector(".switch-40").textContent = "??erstv?? sma??en?? chipsy";
            document.querySelector(".switch-41").textContent = "Sma??en?? bramborov?? chipsy s om????kou";
            document.querySelector(".switch-42").textContent = "Cibulov?? krou??ky";
            document.querySelector(".switch-43").textContent = "Sma??en??, obalovan?? cibulov?? krou??ky s om????kou";

            document.querySelector(".switch-44").textContent = "P????lohy";
            document.querySelector(".switch-45").textContent = "Bramborov?? hranolky";
            document.querySelector(".switch-46").textContent = "Sma??en?? bramborov?? hranolky";
            document.querySelector(".switch-47").textContent = "Fazolov?? lusky na slanin??";
            document.querySelector(".switch-48").textContent = "Restovan?? fazolov?? lusky s kousky slaniny";

            document.querySelector(".switch-49").textContent = "Nealko";
            document.querySelector(".switch-50").textContent = "Coca-Cola";
            document.querySelector(".switch-51").textContent = "Sladk?? perliv?? n??poj zna??ky Coca-Cola";
            document.querySelector(".switch-52").textContent = "Fanta";
            document.querySelector(".switch-53").textContent = "Sladk?? perliv?? n??poj zna??ky Fanta s p????chut?? pomeran??e";
        } else if (a == "events") {
            /* title */
            document.title = 'Akce - ??nyt';
            /* menu - menu */
            document.querySelector(".switch-8").textContent = "akce";
            document.querySelector(".switch-9").textContent = "R??di v??s uv??t??me na n??mi po????dan?? speci??ln?? p??te??n?? akci";

            document.querySelector(".switch-10").textContent = "P??te??n?? grilovan?? ??ebra";
            document.querySelector(".switch-11").textContent = "Zveme v??s na na???? akci, kdy budou serv??rov??na vynikaj??c?? grilovan?? ??ebra s ??erstv??m chlebem a om????kou";
            document.querySelector(".switch-12").textContent = "28. b??ezna 2021";

            document.querySelector(".switch-13").textContent = "P??te??n?? grilovan?? Ryba";
            document.querySelector(".switch-14").textContent = "Zveme v??s na na???? akci, kdy bude serv??rov??na v??born?? grilovan?? ryba s grilovanou zeleninou";
            document.querySelector(".switch-15").textContent = "28. ??nora 2021";

            document.querySelector(".switch-16").textContent = "P??te??n?? Mega-????zek";
            document.querySelector(".switch-17").textContent = "Zveme v??s na na???? akci, kdy bude serv??rov??n masit?? sma??en?? ????zek s ??erstv??m chlebem a om????kou";
            document.querySelector(".switch-18").textContent = "28. ledna 2021";
        } else if (a == "galery") {
            /* title */
            document.title = 'Galerie - ??nyt';
            /* galery */
            document.querySelector(".switch-8").textContent = "galerie";
            document.querySelector(".switch-9").textContent = "Z????itky jsou to, co si sebou neseme nav??dy a podle toho se tak?? ????d??me";
        } else if (a == "review") {
            /* title */
            document.title = 'Recenze - ??nyt';
            /* review */
            document.querySelector(".switch-8").textContent = "Recenze";
            document.querySelector(".switch-9").textContent = "Na??i pe??livost a skv??lou chu?? j??del n??m z??kazn??ci r??di sd??l?? a my si toho v??????me";

            document.querySelector(".switch-10").textContent = "30. ??ervna 2020";
            document.querySelector(".switch-11").textContent = "Pivo D??mon skv??le chutn?? a maj?? dobrou obsluhu";

            document.querySelector(".switch-12").textContent = "8. listopadu 2019";
            document.querySelector(".switch-13").textContent = "Super obsluha, dobr?? j??dlo.";

            document.querySelector(".switch-14").textContent = "4. ????jna 2019";
            document.querySelector(".switch-15").textContent = "Super obsluha, V??born?? j??dlo a dobr?? pive??ko ????";
        } else if (a == "contact") {
            /* title */
            document.title = 'Kontakt - ??nyt';
            /* contact */
            document.querySelector(".switch-8").textContent = "kontakt";
            document.querySelector(".switch-9").textContent = "info";

            document.querySelector(".switch-10").textContent = "Po - ??t";
            document.querySelector(".switch-11").textContent = "P??";
            document.querySelector(".switch-12").textContent = "So";
            document.querySelector(".switch-13").textContent = "02.04.2021 - Velk?? p??tek";
            document.querySelector(".switch-14").textContent = "14:00 - 20:00 otev??eno";
            document.querySelector(".switch-15").textContent = "Restaurace ??nyt Brno";

            document.querySelector(".switch-16").textContent = "o n??s";
            document.querySelector(".switch-17").textContent = "P??edstavte si spr??vn?? na??epovan??, chutn??, ??emesln?? vyr??b??n?? pivo spolu s vynikaj??c?? dom??c?? kuchyn??. P??esn?? to je restaurace ??nyt";
            document.querySelector(".switch-18").textContent = "Koncept je zalo??en na spojen?? modern?? gastronomie a pivn?? kultury. Fran????za p??edstavuje vlajkovou lo?? skupiny Pivovary Lobkowicz, kter?? umo????uje p??edstavit r??znorodost piv va??en??ch v r??mci skupiny v kontrolovan??m prost??ed?? a t??m nejlep????m zp??sobem";
            document.querySelector(".switch-19").textContent = "Nejvy?????? ??rovn?? kvality piva dosahujeme pomoc?? nejmodern??j???? pivn?? technologie. Restaurace nab??z?? ??irok?? portfolio ??emesln?? va??en??ch piv skladovan??ch v chlazen??ch pivn??ch boxech a ??epovan??ch do p??edchlazen??ch sklenic";
            document.querySelector(".switch-20").textContent = "Jednoduch?? design interi??ru a v??b??r z dom??c??ch j??del se soust??ed?? na podporu ide??ln??ho spojen?? chuti piva s j??dlem";
        } else if (a == "eventsRibs") {
            /* title */
            document.title = '??ebra - Akce - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "P??te??n?? grilovan?? ??ebra";
            document.querySelector(".switch-9").textContent = "Srde??ne V??s zveme na na???? akci, kdy budou serv??rov??na vynikaj??c?? grilovan?? ??ebra s ??ersv??m chlebem a om????kou. Cena bude stanovena na 59k??/100g a v??hu porce si budete moci ur??it";     

            document.querySelector(".switch-10").textContent = "Restaurace ??nyt Brno";
            document.querySelector(".switch-11").textContent = "P??tek - 28. 6. 2020";

            document.querySelector(".switch-12").textContent = "P??i vstupu do na???? restaurace si m????ete vybrat, zda-li vyu??ijete vchod do na???? terasy a vychutn??te si sv?? j??dlo na ??ersv??m vzduchu nebo p??i nevhodn??m po??as?? posed??te v restauraci";
            document.querySelector(".switch-13").textContent = "V na???? galerii nejen zjist??te jak to u n??s vypad??, ale tak?? pozn??te, ??e p??ipravujeme pokrmy s l??skou a pe??livost?? jak chut??, tak i vzhledem. Prohl??dn??te si na??i galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "B??hem vychutn??v??n?? na??eho p??te??n??ho j??dla si tak?? m????ete objednat v??born?? n??poje jak alkoholick??, tak i nealkoholick??. V p????pad?? v??t????ho hladu si v na??em menu m????ete vybrat p????lohu nav??c";
            document.querySelector(".switch-16").textContent = "V p????pad??, ??e jste opravdu jedl??k, tak V??s ur??it?? pot?????? v??b??r z na??ich lahodn??ch hlavn??ch j??del, kter?? V??s opravdu zasyt??. Na v??b??r v na??em menu naleznete nap??. burgery, steaky a spoustu dal????ho";
            document.querySelector(".switch-17").textContent = "menu";
        } else if (a == "eventsFish") {
            /* title */
            document.title = 'Ryba - Akce - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "P??te??n?? grilovan?? Ryba";
            document.querySelector(".switch-9").textContent = "Srde??ne V??s zveme na na???? akci, kdy bude serv??rov??na v??born?? grilovan?? pstruh s grilovanou zeleninou. Cena bude stanovena na 65k??/100g. V??ha porce bude 200-300g/ks";     

            document.querySelector(".switch-10").textContent = "Restaurace ??nyt Brno";
            document.querySelector(".switch-11").textContent = "P??tek - 28. 5. 2020";

            document.querySelector(".switch-12").textContent = "P??i vstupu do na???? restaurace si m????ete vybrat, zda-li vyu??ijete vchod do na???? terasy a vychutn??te si sv?? j??dlo na ??ersv??m vzduchu nebo p??i nevhodn??m po??as?? posed??te v restauraci";
            document.querySelector(".switch-13").textContent = "V na???? galerii nejen zjist??te jak to u n??s vypad??, ale tak?? pozn??te, ??e p??ipravujeme pokrmy s l??skou a pe??livost?? jak chut??, tak i vzhledem. Prohl??dn??te si na??i galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "B??hem vychutn??v??n?? na??eho p??te??n??ho j??dla si tak?? m????ete objednat v??born?? n??poje jak alkoholick??, tak i nealkoholick??. V p????pad?? v??t????ho hladu si v na??em menu m????ete vybrat p????lohu nav??c";
            document.querySelector(".switch-16").textContent = "V p????pad??, ??e jste opravdu jedl??k, tak V??s ur??it?? pot?????? v??b??r z na??ich lahodn??ch hlavn??ch j??del, kter?? V??s opravdu zasyt??. Na v??b??r v na??em menu naleznete nap??. burgery, steaky a spoustu dal????ho";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Akce ji?? skon??ila";
        } else if (a == "eventsSteak") {
            /* title */
            document.title = 'Mega-????zek - Akce - ??nyt';
            /* event */
            document.querySelector(".switch-8").textContent = "P??te??n?? Mega-????zek";
            document.querySelector(".switch-9").textContent = "Srde??ne V??s zveme na na???? akci, kdy budou serv??rov??n masit?? sma??en?? ????zek (300g) s ??ersv??m chlebem a om????kou. Na v??b??r bude mezi ku??ec??m, vep??ov??m nebo mixem";     

            document.querySelector(".switch-10").textContent = "Restaurace ??nyt Brno";
            document.querySelector(".switch-11").textContent = "P??tek - 28. 4. 2020";

            document.querySelector(".switch-12").textContent = "P??i vstupu do na???? restaurace si m????ete vybrat, zda-li vyu??ijete vchod do na???? terasy a vychutn??te si sv?? j??dlo na ??ersv??m vzduchu nebo p??i nevhodn??m po??as?? posed??te v restauraci";
            document.querySelector(".switch-13").textContent = "V na???? galerii nejen zjist??te jak to u n??s vypad??, ale tak?? pozn??te, ??e p??ipravujeme pokrmy s l??skou a pe??livost?? jak chut??, tak i vzhledem. Prohl??dn??te si na??i galerii";
            document.querySelector(".switch-14").textContent = "galerie";

            document.querySelector(".switch-15").textContent = "B??hem vychutn??v??n?? na??eho p??te??n??ho j??dla si tak?? m????ete objednat v??born?? n??poje jak alkoholick??, tak i nealkoholick??. V p????pad?? v??t????ho hladu si v na??em menu m????ete vybrat p????lohu nav??c";
            document.querySelector(".switch-16").textContent = "V p????pad??, ??e jste opravdu jedl??k, tak V??s ur??it?? pot?????? v??b??r z na??ich lahodn??ch hlavn??ch j??del, kter?? V??s opravdu zasyt??. Na v??b??r v na??em menu naleznete nap??. burgery, steaky a spoustu dal????ho";
            document.querySelector(".switch-17").textContent = "menu";

            document.querySelector(".switch-18").textContent = "Akce ji?? skon??ila";
        }
    }













