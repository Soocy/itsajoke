$(document).ready(function () {


    $(window).scroll(function () {
        if(whereIam() < 1011){
            parallax();
        }
        // console.log(whereIam() + 'px');
        // parallax();
    });


    function whereIam() {
        // var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        return scrollTop;
    }

    function parallax() {
        var scrolled = $(window).scrollTop();
        // $('#layer3').css('top', -(scrolled * 0.2) + 'px'); ez a leghozzám közelebbi ez nem mozog
        $('#layer2').css('margin-top', (scrolled * 0.4) + 'px');
        $('#moon').css('margin-top', (scrolled * 0.1) + 'px');
        $('#layer1').css('margin-top', (scrolled * 0.6) + 'px');
        console.log("megy");
    }
});