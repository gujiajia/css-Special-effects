$(function() {
    $(".img li:not(:first)").hide();
    $(".small li:first").addClass("on");
    var t = setInterval("showAuto()", 1000);
    $(".small li").hover(function() {
        var $index = $(".on").index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".img li").eq($index).fadeIn(1000).siblings().fadeOut(1000);
        clearInterval(t);
        console.log($index);
    }, function() {
        t = setInterval("showAuto()", 1000);
    });
    $(".img li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval("showAuto()", 1000);
    })
})

function showAuto() {
    var $imgLen = $(".img li").length;
    var $index = $(".on").index();
    if ($index == $imgLen - 1) {
        $index = -1;
        $(".small li").eq($index + 1).addClass("on").siblings().removeClass("on");
        $(".img li").eq($index + 1).fadeIn(1000).siblings().fadeOut(1000);
    } else {
        $(".small li").eq($index + 1).addClass("on").siblings().removeClass("on");
        $(".img li").eq($index + 1).fadeIn(1000).siblings().fadeOut(1000);
        console.log($index);
    }

}