$(window).on('load', (function(){
    $("#pre-loader").slideToggle('slow');
    $("#main-page").fadeIn('slow');// set duration in brackets
}));  

$(document).ready(function(){
    
    $('.nav-menu').on('click', function(){

        $('.burger').toggleClass('open');
        
        $('.full-menu').slideToggle();
        $('.name-logo h2, .name-logo h3').toggleClass('white-nav-menu');
        $('.burger ').toggleClass('white-nav-burger');
        var menuNavLinks = $(".full-menu .full-menu-content ");

    });
    $('.page-menu ul li a').on('click', function(){
        $('.full-menu').fadeOut('fast');
    })
//Burger div animation to x,
const navBurger=()=>{
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    navMenu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}
navBurger();

/* Smooth scrolling of the page on click */
    function smoothScroll( target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration)  {
            requestAnimationFrame(animation);
        }
        }
    
    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
});





