$(document).ready(function () {

    // 스크롤 안했을때도 발동
    $('.hideLeft').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height()+400;  // 위치가 잘 안맞아서 임의대로 +300해보니 잘맞음
        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('fadeLeft');
        }
    });

    $('.hideRight').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height()+300;
        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('fadeRight');
        }
    });

    $(window).scroll(function () {

        // $('.hideme').each(function (i) {
        //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        //     var bottom_of_window = $(window).scrollTop() + $(window).height();
        //     /* 3 */
        //     if (bottom_of_window > bottom_of_object) {
        //         $(this).animate({ 'opacity': '1' }, 500);
        //     }
        // });

        $('.hideLeft').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height()+300;
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('fadeLeft');
            }
        });
    
        $('.hideRight').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height()+300;
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('fadeRight');
            }
        });
    });
});