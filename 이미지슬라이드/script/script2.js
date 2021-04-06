$(document).ready(function(){
    var slideCount = $('.imgslide a').length;
    var slideWidth = 1200 * slideCount + "px";
    $('.slideList').css({'width' : slideWidth});
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < slideCount-1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = -1200 * currentIndex + "px";
        $('.slideList').animate({'left' : slidePosition});
    }, 3000);
});