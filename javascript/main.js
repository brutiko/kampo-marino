$(function () {
    $(".product-thumb-item").slice(0, 12).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".product-thumb-item:hidden").slice(0, 6).slideDown();
        if ($(".product-thumb-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});