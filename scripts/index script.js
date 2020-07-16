/* Fade in out of header and main*/
var scrollEffect = document.getElementById('scroll-fade');
window.addEventListener('scroll', function(e){
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    scrollEffect.style.opacity = Math.max(0, Math.min(1,-scroll/300 +1.5 ));
    
});

var scrollingInto = document.querySelector('.section-about');
window.onscroll = function(){
    var top = window.scrollY;
    
    if (top > 520){
        this.scrollingInto.style.opacity = this.Math.min(1, Math.min(1, top/100 - 3.5));               
    }else{               
        this.scrollingInto.style.opacity = this.Math.min(1, Math.min(1, top/120 - 2));
    }
}

var scrollToTop = document.querySelector('.goTop');
scrollToTop.addEventListener('click', function(){
    smoothScroll('.nav-bar', 1000);
});

var viewSkills = document.querySelector(".view-skills");
viewSkills.addEventListener('click',function(){
    smoothScroll('.skills-section', 1000);
})