jQuery(document).ready(function($) {

    // Counterup
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Gallery
    var mixer = mixitup('.mix-container');

    // Slider
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // autoplay: true,
        loop: true,

    });

    /*-- Menu Sticky --*/
    var windows = $(window);
    var sticky = $('.header-sticky')
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 385) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });


    /*-- Menu Toggle Btn --*/
    $(".menu-toggle-btn").click(function() {
        $(".main-menu").toggleClass("open-menu");
    })

});