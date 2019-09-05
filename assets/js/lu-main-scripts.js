'use_strict';

window.addEventListener('load', function() {

    $('#clickme').hover(function (e) {

            $('#chef').fadeIn('800');
            console.log(e);
            $('#chef-img').rotate({
                angle: 0,
                animateTo: 360
            });
            
        }, function () {
            
            $('#chef').fadeOut('500');

            $('#chef-img').rotate({
                angle: 360,
                animateTo: 0
            });

        }
    );

});