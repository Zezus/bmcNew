AOS.init();


//const line_progress = document.querySelector('.line_anim');
//
//observer = new IntersectionObserver((entries) =>{
//    
//    if(entries[0].intersectionRatio>0){
//        entries[0].target.style.animation = 'line 2s ease-out';
//    }
//    else{
//        entries[0].target.style.animation = 'none';
//    }
//})
//observer.observe(line_progress);

new Splide( '.p3_slider' ).mount();

var swiper = new Swiper(".p3_flex1_phone", {
    effect: "cube",
    loop: true,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
