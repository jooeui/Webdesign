$(document).ready(function(){
    $('.navi').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    })
})