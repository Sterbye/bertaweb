$(document).ready(
    function(){
        var header = $('header'),
            mainHeading = header.find('.main-heading');

            mainHeading.css({position: 'relative'});
            mainHeading.animate({top: 250}, 3000, 'linear').fadeIn();
    }
);
a

