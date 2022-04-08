$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.back-btn').fadeIn();
        } else {
            $('.back-btn').fadeOut();
        }
    });
});