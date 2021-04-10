$(document).ready(function(){
    $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
        return false;
    });
    
    
    $('.notice .title').each(function(){
        if($(this).text().length > 45) {
            $(this).html($(this).text().substr(0,45)+"...");
        }
    });
    
    $('.notice a:first').click(function(){
        $('#modal').show();
    });
    $('.closeBtn').click(function(){
        $('#modal').hide();
    });
});