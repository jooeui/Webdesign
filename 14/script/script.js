$(document).ready(function () {
    // 메뉴
    $('.navi > li').mouseover(function () {
        $(this).find('a').addClass("active");
        $(this).find('.submenu').stop().slideDown(400);
    }).mouseout(function () {
        $(this).find('a').removeClass("active");
        $(this).find('.submenu').stop().slideUp(400);
    });
    
    // 이미지 슬라이드
    slideCount = $('.slideList > a').length;
    slideWidth = slideCount * 800 + "px";
    $('.slideList').css("width", slideWidth);
    
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < slideCount-1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        
        slidePosition = currentIndex * (-800) + "px";
        $('.slideList').animate( { left : slidePosition }, 400);
    }, 3000);
    
    // 탭 메뉴
    $('.tabmenu > li > a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    // 레이어 팝업창
    $('.notice li:first').click(function(){
        $('#modal').addClass("active");
    });
    $('.btn').click(function(){
        $('#modal').removeClass("active");
    });
});