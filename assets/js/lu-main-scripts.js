'use_strict';

window.addEventListener('load', function() {

    const btn = document.getElementById('clickme');
    btn.addEventListener('mouseover', () => {

        $('#chef').fadeIn('800', function() {

        });

        $('#chef-img').rotate({
            angle: 0,
            animateTo:360
        });
        
    });

    $('#clickme').mouseout(function () { 
        
        $('#chef').fadeOut('500', function() {

        });

        $('#chef-img').rotate({
            angle: 360,
            animateTo: 0
        });

    });

});