$(function() {
    var i = 0;
    $(".button").click(function() {
        $(".button").toggleClass("rotate");
        if (i == 0) {
            console.log(i);
            $("#music")[0].pause();
            i = 1;
        } else {
            console.log(i);
            $("#music")[0].play();
            i = 0;
        }
    })
})