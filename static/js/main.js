$(function() {
    var top = $(window).scrollTop();
    console.log(top);
    $(".bay").click(function () {
        $("body, html").animate(
        {scrollTop: 0}, 1000);
        return false;
    });    
});

