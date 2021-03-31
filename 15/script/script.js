$(document).ready(function () {
    // 드롭다운 메뉴
    $('.navi>li').mouseover(function () {
        $(this).find('a').addClass("active");
        $(this).find('.submenu').stop().slideDown(400);
    }).mouseout(function(){
        $(this).find('a').removeClass("active");
        $(this).find('.submenu').stop().slideUp(400);
    });
    
    // 이미지 슬라이드
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');
    }, 3000);
    
    // 탭 메뉴
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
    });
    
    // 레이어 팝업창
    $('.notice li:first').click(function(){
        $('#modal').addClass("active");
    });
    $('.btn').click(function(){
        $('#modal').removeClass("active");
    });
});