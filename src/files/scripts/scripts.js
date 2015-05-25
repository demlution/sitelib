$(function() {
    $(".s-left .s-txt").focus(function() {
        $(this).animate({
            width: "150px"
        });
    });

    $(".s-left .s-txt").blur(function() {
        $(this).animate({
            width: "80px"
        });
    });

    $('#search-form').submit(function(event) {
        var code = $('.s-txt').val();
        window.location.hash = '#/t/search/' + code;
        event.preventDefault();
    })
})


$("#solution-info").actabctl({menu:'.tit', content: '.tab-pane',selectedCss: "active", evt:0});
