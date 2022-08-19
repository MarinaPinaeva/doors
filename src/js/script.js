
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

    $('.slider__wrapper').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    });


});
