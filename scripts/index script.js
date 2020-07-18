/* Fade in out of header and main*/

var scrollEffect = document.getElementById('scroll-fade');
window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    scrollEffect.style.opacity = Math.max(0, Math.min(1,-scroll/300 +1.5 ));
    
});

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
});

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