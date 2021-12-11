
		function navScroll() {
    		var header = document.querySelector('.main-menu');
    		if (header) {
        		window.addEventListener('scroll',check);
    		}
    		function check() {
        		var top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
       			if (top > 0) {
            		header.classList.add('scroll-active');
        		} else {
           			header.classList.remove('scroll-active');
        		}
    		}
    	}
   		navScroll();


    var menuLine2 = document.querySelector('.hamburger-div2');
    var menuOpen2 = false;
    menuLine2.addEventListener('click', () => {
      if(!menuOpen2){
        menuLine2.classList.add('open2');
        menuOpen2 = true;
      } else {
        menuLine2.classList.remove('open2');
        menuOpen2 = false;
      }
    });


    const menuBtnTwo = document.querySelector('.hamburger-div2');
    let menuOpenTwo = false;
    var navULTwo = document.querySelector(".window-two");
    menuBtnTwo.addEventListener('click', () => {
        if(!menuOpenTwo) {
            menuBtnTwo.classList.add('open');
            menuOpenTwo = true;
            navULTwo.classList.add('window-two-active');
        } else {
            menuBtnTwo.classList.remove('open');
            menuOpenTwo = false;
            navULTwo.classList.remove('window-two-active');
        }
    });

    window.addEventListener('scroll',reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');

      for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
    }
  }

     window.addEventListener('scroll',revealOne);

    function revealOne(){
      var reveals = document.querySelectorAll('.reg-column-one');

      for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('reg-one-active');
      }
    }
  }

      window.addEventListener('scroll',revealTwo);

    function revealTwo(){
      var reveals = document.querySelectorAll('.reg-column-two');

      for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('reg-two-active');
      }
    }
  }

   window.addEventListener('scroll',revealThree);

    function revealThree(){
      var reveals = document.querySelectorAll('.reg-column-three');

      for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('reg-three-active');
      }
    }
  }


  /* slider */
function MainSlider(){
  const slides=document.querySelector(".slider").children;
  const prev=document.querySelector(".prev");
  const next=document.querySelector(".next");
  const indicator=document.querySelector(".indicator");
  let index=0;

   prev.addEventListener("click",function(){
       prevSlide();
       updateCircleIndicator(); 
       resetTimer();
   })

   next.addEventListener("click",function(){
      nextSlide(); 
      updateCircleIndicator();
      resetTimer();
   })
   // create circle indicators
    function circleIndicator(){
        for(let i=0; i< slides.length; i++){
          const div=document.createElement("div");
                
                div.id=i;
                if(i==0){
                  div.className="active";
                }
               indicator.appendChild(div);
        }
    }
    circleIndicator();
         
    function updateCircleIndicator(){
      for(let i=0; i<indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
      }
      indicator.children[index].classList.add("active");
    }

    function prevSlide(){
        if(index==0){
          index=slides.length-1;
        }
        else{
          index--;
        }
        changeSlide();
      }

      function nextSlide(){
          if(index==slides.length-1){
            index=0;
          }
          else{
            index++;
          }
          changeSlide();
      }
   
   function changeSlide(){
           for(let i=0; i<slides.length; i++){
             slides[i].classList.remove("active");
           }

       slides[index].classList.add("active");
   }

   function resetTimer(){
      // when click to indicator or controls button 
      // stop timer 
      clearInterval(timer);
      // then started again timer
      timer=setInterval(autoPlay,8000);
   }
   
  function autoPlay(){
      nextSlide();
      updateCircleIndicator();
  }

  let timer=setInterval(autoPlay,8000);
}
MainSlider();

  function closeLoginWindow(){
    $(".loginbutton").click(function(){
      $(".login-section-dark").fadeIn(200);
      $(".login-transparent-log").fadeIn(200);
    })

    $(".login-cross").click(function(){
      $(".login-section-dark").fadeOut(200);
      $(".login-transparent-log").fadeOut(1);
      $(".login-transparent-pass").fadeOut(1);
      $(".login-transparent-reg").fadeOut(1);
    })
  }
  closeLoginWindow();


  function loginRegistration(){
    $(".login-reg").click(function(){
      $(".login-transparent-log").fadeOut(200);
      $(".login-transparent-pass").fadeOut(200);
      $(".login-transparent-reg").fadeIn(200);
    })
    $(".login-log").click(function(){
      $(".login-transparent-pass").fadeOut(200);
      $(".login-transparent-reg").fadeOut(200);
      $(".login-transparent-log").fadeIn(200);
    })
    $(".forgetPass").click(function(){
      $(".login-transparent-log").fadeOut(200);
      $(".login-transparent-reg").fadeOut(200);
      $(".login-transparent-pass").fadeIn(200);
    })
    $(".login-pass").click(function(){
      $(".login-transparent-pass").fadeOut(200);
      $(".login-transparent-reg").fadeOut(200);
      $(".login-transparent-log").fadeIn(200);
    })
  }
  loginRegistration();

  function searching(){
      // getting all requied elements
      const searchWrapper = document.querySelector(".searching");
      const inputBox = searchWrapper.querySelector("input");
      const suggBox = searchWrapper.querySelector(".search-tips");


      
      // if user press any key and release
      inputBox.onkeyup = (e)=>{
        let userData = e.target.value; //user enetered data
        let emptyArray = [];
        if(userData){


            
           
            emptyArray = suggestions.filter((data /* pojmenovat */)=>{
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data)=>{
                // passing return data inside li tag
                return data = `
                  <li>
                      <a href="${data.url}">
                        <img src="${data.image}"></img>
                        <div class="sugg-info">
                          <h2>${data.name}</h2>
                          <div class="sugg-tags">
                            <p class="info-side">${data.year}</p>
                            <i class="dot"></i>
                            <p>${data.time}</p>
                            <i class="dot"></i>
                            <p>${data.form}</p>
                          </div>
                        </div>
                      </a>
                  </li>`;
                  
            });
            suggBox.classList.add("searchBar-active"); //show autocomplete box
        
        }else{
          suggBox.classList.remove("searchBar-active"); //hide autocomplete box
        }
        showSuggestions(emptyArray);             
    } 
    
    function showSuggestions(list){
        let listData;
        if(!list.length){
          userValue = inputBox.value;
          listData = `
            <li>
              <div class="uknown-flex">   
                  <p class="sugg-unknown-info">Neznámý výraz</p>
                  <p class="sugg-unknown">"${userValue}"</p>
              </div>
            </li>`;
        }else{    
          listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
  }
  searching();

  function find(){
    const searchWrapper = document.querySelector(".searching");
    const inputBox = searchWrapper.querySelector("input");

    inputValue = inputBox.value;
    location.replace("search.html/" + inputValue);
  }