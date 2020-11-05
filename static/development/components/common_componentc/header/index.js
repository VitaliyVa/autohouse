import './index.scss';




$('.mobile_menu_btn').on('click', function() {
    if ($(this).hasClass('active')) {
        $("html,body").css("overflow", "hidden");
        $('.header_navigate__block').addClass('header_navigate__block_active');
    } else {
        $('.header_navigate__block').removeClass('header_navigate__block_active');
        $("html,body").css("overflow", "visible");
    }
});