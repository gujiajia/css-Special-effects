// 第一个页面
var i = 0;
var ms = 6000;
var time = setInterval(function() {
    $(".loading p").css("width", i + "%");
    i = i + (1000 / ms);
    $(".read h1").text(Math.round(i) + "%")
    if (i > 100) {
        $(".read h1").text("100%");
        setTimeout(function() {
            window.location.href = "demo7_2.html";
        }, 200);
        clearInterval(time);
    }
}, 10);