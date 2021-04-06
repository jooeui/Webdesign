$(document).ready(function(){
    var slideCount = $('.imgslide a').length;
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < slideCount-1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        var slidePosition = -300 * currentIndex + "px";
        $('.slideList').animate({'top' : slidePosition});
    }, 3000);
});