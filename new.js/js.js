$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".main").offset().top},
        'slow');
});