jQuery(document).ready(function(){
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(400);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(400);
    });
    
    $(".layerPopup").click(function(){
        $(".layer").show();
        $(".layer-bg").show();
    });
    $(".layer .close").click(function(){
        $(".layer").hide();
        $(".layer-bg").hide();
    });
});

var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
});