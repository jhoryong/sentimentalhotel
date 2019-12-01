// fade-in to loader and fadeout
window.onload = function() {
var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart; 
    //alert('Page load time is '+ loadTime);
    if (loadTime < 5000) {
        setTimeout(function() {$('.preloader').hide();}, 5000)
        setTimeout(function() {$('.fade-box').fadeIn(1000).fadeOut(2000);}, 4000);
        start();
        //setTimeout(function() {$('.dialogue-0, .dialogue-0 .line, .dialogue-box').show();}, 7000);
    } else {
        window.addEventListener("load", function() {
            setTimeout(function() {$('.preloader').hide();}, 1000);
            $('.fade-box').fadeIn(1000).fadeOut(2000);
            start();
            //setTimeout(function() {$('.dialogue-0-1, .dialogue-0-1 .line, .dialogue-box').show();}, 3000);
        })
    }
}
