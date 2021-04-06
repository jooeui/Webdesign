$(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(400);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(400);
    });
});