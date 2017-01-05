$(document).ready(function () {
    $(window).scroll(function (e) {
        parallax();
    });
    function parallax() {
        var scrolled = $(window).scrollTop();
        // $('#layer3').css('top', -(scrolled * 0.2) + 'px'); ez a leghozzám közelebbi ez nem mozog
        $('#layer2').css('margin-top', (scrolled * 0.4) + 'px');
        $('#layer1').css('margin-top', (scrolled * 0.6) + 'px');
    }
});