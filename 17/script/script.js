$(document).ready(function () {
    // 메뉴
    $('.navi li').mouseover(function(){
        $('.navi').find('.submenu').stop().slideDown(400);
        $('a', this).addClass('active');
        $('#menuwrap').stop().animate({ 'height':'220px' });
    }).mouseout(function(){
        $('.navi').find('.submenu').stop().slideUp(400);
        $('a', this).removeClass('active');
        $('#menuwrap').stop().animate({ 'height':'100px' });
    });
    
    // 이미지 슬라이드
    $('.imgslide a:gt(0)').hide();
    
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');
    }, 3000);
    
    // 모달 레이어 팝업창
    $('.notice a:first-child').click(function(){
        $('#modal').addClass('active');
    });
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    });
});
