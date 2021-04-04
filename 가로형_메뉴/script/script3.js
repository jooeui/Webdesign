$(document).ready(function(){
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
        $('#menuwrap').stop().animate({'height' : '260px'});
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
        $('#menuwrap').stop().animate({'height' : '100px'});
    })
})