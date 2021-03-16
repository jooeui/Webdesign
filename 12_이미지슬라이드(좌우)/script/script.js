jQuery(document).ready(function(){
    /* 메뉴 */
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(400);
    }).mouseout(function(){
        $(this).find(".submenu").stop().slideUp(400);
    });
    
    /* 탭메뉴 */
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
    
    /* 레이어 팝업 */
    $(".layerPopup").click(function(){
        $(".layer").show();
        $(".layer-bg").show();
    });
    $(".layer .close").click(function(){
        $(".layer").hide();
        $(".layer-bg").hide();
    });
    
    /* 이미지 슬라이드 */
    var slideCount = $(".slideImg").length;
    var widthLength = 1200*slideCount+"px";
    $(".slideList").css("width", widthLength);
    var currentIndex = 0;
    
    setInterval(function(){
        if(currentIndex < slideCount-1){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        slidePosition = currentIndex * (-1200)+"px";
        $(".slideList").animate({left:slidePosition}, 400);
    }, 3000);
});