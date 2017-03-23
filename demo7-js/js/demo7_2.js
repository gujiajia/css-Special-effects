// 第二个页面
$(".back").click(function() {
    window.location.href = "demo7.html";
})
$(".button").click(function() {
    console.log("button");
    $(".button").css({
        "border": "none",
        "background": "#1987f7",
        "color": "#d3e8fd"
    });
    $(".button").text("检查更新中...");
    setTimeout(function() {
        $(".button").text("数据包已是最新");
    }, 2000);
});
var i = 0;
$(".read_2_2_2").click(function() {
    if (i == 0) {
        console.log("dian");
        $(".read_2_2_2 p").css("background", "#98d4ff");
        $(".read_2_2_2 span").css({ "background": "#28a4fe", "left": "50px" });
        i = 1;
    } else {
        $(".read_2_2_2 p").css("background", "#c9c8c8");
        $(".read_2_2_2 span").css({ "background": "#f2f2f3", "left": "23px" });
        console.log("返回");
        i = 0;

    }
})