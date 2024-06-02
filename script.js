  // <!-- Initialize Swiper -->
  // <!-- https://swiperjs.com/swiper-api#initialize-swiper -->

    var swiper = new Swiper(".swiper", {
    
//     autoplay: {
//   delay: 5000,
// },
			initialSlide: 0,
      //centeredSlides: true,
      //spaceBetween: 50,
 
   		freeMode: {
    		enabled: true,
    		sticky: false,
  		},
      
      slidesPerView: 6,
      
			loop: true,
        mousewheel: {
    		enabled: true,
    		sensitivity: 0.5,
        forceToAxis: true,
  		},

    });
    
    
    var swipertop = new Swiper(".swipertop", {

			initialSlide: 0, //index number of initial slide.
      
   		freeMode: {
    		enabled: true,
    		sticky: false,
  		},
      
      slidesPerView: 5,
      
			loop: true,
        mousewheel: {
    		enabled: true,
    		sensitivity: 0.5,
        forceToAxis: true,
  		},

    });    
    
    
    
    var mybswiper = new Swiper(".myb-swiper", {

			initialSlide: 0, //index number of initial slide.
      parallax: true,
      speed: 1500,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    
        renderBullet: function (index, className) {
        if (index == 0)
    			return '<span class="' + className + ' barista' + (index + 1) + '">' + (index + 1) + '</span>';
        if (index == 1)
          return '<span class="' + className + ' barista' + (index + 1) + '">' + (index + 1) + '</span>';
       else
       return '<span class="' + className + '">' + (index + 1) + "dd" + '</span>';
       
  }
  },
  

  
   autoplay: {
   delay: 5000,
   disableOnInteraction: true,
   pauseOnMouseEnter: false, //was true
 },
      
   		freeMode: {
    		enabled: true,
    		sticky: true,
  		},
      
      slidesPerView: 1,
      
			loop: true,
        mousewheel: {
    		enabled: true,
    		sensitivity: 0.5,
        forceToAxis: true,
  		},

    });      
    
    
    
    
//go to today's slide, shifted over by one
var dateobj = new Date();
var dayofweek = dateobj.getDay();

shiftedday = dayofweek - 1;
            
if (dayofweek == 0)
	shiftedday = 6;


$($(".swiper-slide.top > .ttttoday")[dayofweek]).css("display", "flex");
//3x needed because of loop
swipertop.slideToLoop(shiftedday, 0);
swipertop.slideToLoop(shiftedday, 0);
swipertop.slideToLoop(shiftedday, 0);   

//delay needed for DOM
//setTimeout(function(){
//$(".swiper-slide.top.swiper-slide-next > .ttttoday").css("display", "flex");
//},10);











    //            function test() {
                    
                        const e = "\n          display: inline-block;\n          font-size: 14px;\n          background: linear-gradient(to right, #455EEE, #985DD0, #B62286);\n          color: white;\n          padding: 4px;\n          border-radius: 4px;";
                        
const aaa = "color: white; font-family: sans-serif; font-size: 6vw; background: linear-gradient(45deg, #f36565, #5e7cc9, #83ae40); padding: 10px 10px 10px 10px;";

                        let t = "\n\n";
                        t += "📈 Increased conversion rates\n",
                        t += "📈 Increased average order value\n",
                        t += "📈 Increased customer lifetime value\n",
                        t += "\n\n",
                        t += "Learn more at: https://flowghost.com/\n\n",
                        t += "FLOW GHOST 👻"
                        console.group("%cFLOW GHOST 👻", aaa),
                        console.log(`%c${t}`, "font-size: 14px;"),
                        console.groupEnd(),
                      
                    
  //              }

//test();

console.log("%cFLOW GHOST 👻", "color: white; font-family: sans-serif; font-size: 50px; background: linear-gradient(45deg, #f36565, #5e7cc9, #83ae40); padding: 10px 10px 10px 10px; border-radius: 25px; border: 5px solid #fefefe;");




// <!-- LOTTIE PRELOADER -->

// Return a promise that resolves to true once animation is loaded
async function animationLoaded (animation) {
  if (animation.isLoaded) {
    return true
  }
  
  return new Promise((resolve, reject) => {
    animation.addEventListener('DOMLoaded', () => {
      resolve(true)
    })
  })
}

// Return a promise that resolves to true once all animations are loaded
async function waitForAnimationsLoaded (animations) {
  await Promise.all(animations.map(animationLoaded))
}

async function initAnimations () {
  const lottie = Webflow.require('lottie').lottie
  const animations = lottie.getRegisteredAnimations()
  await waitForAnimationsLoaded(animations)
}

var Webflow = Webflow || []

Webflow.push(() => {
  initAnimations()
    .then(() => {
      console.log('Initialized animations')
      // hide splash screen
      const splash = document.getElementById('splash')
splash.style.opacity = 0
setTimeout(() => splash.style.display = 'none', 200)
    })
    .catch((error) => {
      console.error(error)
    })
})

// <!-- END LOTTIE PRELOADER -->