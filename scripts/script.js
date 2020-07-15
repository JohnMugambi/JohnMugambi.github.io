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

        // $('.full-menu').on("click", function(event){
        //     var $trigger = $(".full-menu");
        //     if($trigger !== event.target && !$trigger.has(event.target).length){
        //         $(".page-menu").slideUp("fast");
                
        //    }            
        //    //$('.full-menu').slideUp();
        // });
        
        /*Fade out nave on menu click */
        var menuNavLinks = $(".full-menu .full-menu-content ");

    });
    $('.goToSkills').on('click', function(){
        var linkTarget = $("#mySkills");
        function wbLink(){
            window.location.href = "about.html";
        }
        
        smoothScroll(linkTarget, 1000);
        
    })
    //Smooth scrolling to part of the page on linkk click




    /* Slick slider */
    // $('.post-wrapper').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });
});
/*Change text on click */


//Burger div animation to x
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

var viewProjects = document.querySelector('.view-projects');
viewProjects.addEventListener('click', function(){
    smoothScroll('.main-section', 1000);
});

var viewSkills = document.querySelector(".view-skills");
viewSkills.addEventListener('click',function(){
    smoothScroll('.skills-section', 1000);
})

var scrollToTop = document.querySelector('.goTop');
scrollToTop.addEventListener('click', function(){
    smoothScroll('.nav-bar', 1000);
});
var scrollToTop = document.querySelector('.goTopAbout');
scrollToTop.addEventListener('click', function(){
    smoothScroll('.nav-bar', 1000);
});




/*
var h = document.getElementsByClassName('nav-bar').clientHeight;
var g= document.getElementsByClassName('nav-bar').offsetHeight;
/*size of nav bar */
/*function sizeOfNav( target){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect();
    console.log(targetPosition);
 }
 sizeOfNav('.nav-bar')
*/
 /* Add classes */
//var toPost = document.querySelector('.to-post');
    //toPost.addEventListener('hover', function(){
    //toPost.classListAdd('fa fa-arrow-right');
//});
/*Page preloader function 
function preLoader (){
    var pagePreloader = document.getElementById('pre-loader');
    var mainPage = document.getElementById('main-page');
    pagePreloader.style.display = 'none';
    mainPage.style.display = 'block';
}
window.onload = preLoader();

var myVar;
function test(){
    myVar = setTimeout(showPage, 1000);
}
function showPage(){
    var pagePreloader = document.getElementById('pre-loader');
    var mainPage = document.getElementById('main-page');
    pagePreloader.style.display = 'none';
    mainPage.style.display = 'block';
}
 test();   
*/