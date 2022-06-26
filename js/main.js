$(function () {

    $('#title-fadein').hide().fadeIn(3000);
    $('#title-fadein2').hide().fadeIn(3000);

    $(window).scroll(function() {
        $('.fadein').each(function() {
            var mainHeight = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > mainHeight - windowHeight) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});


