$(function() {

    var a;
    var b;  
    var c;
    var d;
    var form;
    var basket = $(".basket");
    $(".bay").click(function () {
       
        form = $(this)
          .parent()
          .parent();
        a = form.find("img").attr("src");
        console.log(a);
        b = $("<img>", {src: a});
        a = form.find("img");
        c = a.offset().top - $(window).scrollTop();
        d = a.offset().left;

        b.css({position: "fixed", top:c, left:d})
        .prependTo(form);
        basketLeft = basket.offset().left;          
        b.animate({top: 0, left: basketLeft, width: 65, height: 55, opacity: "0.5"}, 5000);
        $("body, html").animate({scrollTop: 0}, 4500);

        function rm(what) {
           return what.remove();
        };
        setTimeout(rm, 4500, b);
        
        return false;
    });    
});

