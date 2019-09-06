'use_strict';

window.addEventListener('DOMContentLoaded', function() {

    $('.projects').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2500
    });

});