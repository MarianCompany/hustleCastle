$(document).ready(function () {
    $('.accordion__header').on('click', function () {
        const item = $(this).closest('.accordion__item');

        if (item.hasClass('accordion__item_active')) {
            item.find('.accordion__content').slideUp();
            item.removeClass('accordion__item_active');
        } else {
            $('.accordion__item_active').find('.accordion__content').slideUp();
            $('.accordion__item_active').removeClass('accordion__item_active');

            item.find('.accordion__content').slideDown();
            item.addClass('accordion__item_active');
        }
    });
})