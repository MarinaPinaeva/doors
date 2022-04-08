
$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    $("a[href^='#up']").click(function(){
        $("html, body").animate({scrollTop: "0px"});
        return false;
    });
});


