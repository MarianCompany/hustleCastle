$(document).ready(function () {
    $('.read-more').on('click', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".section-2").offset().top
        }, 1000);
    });
});