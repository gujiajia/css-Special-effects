$(function() {
    var x = 10;
    var y = 20;
    $("img").mouseover(function(e) {
            this.nt = this.title;
            this.title = "";
            var bs = $(this).attr("bs");
            $("body").append("<div class='aimg'><img src=" + bs + " /><br>" + this.nt + "</div>")
            $(".aimg").css({
                position: "absolute",
                top: e.pageY + y,
                left: e.pageX + x
            })
        })
        .mouseout(function() {
            this.title = this.nt
            $(".aimg").remove()
        })
        .mousemove(function(e) {
            $(".aimg").css({
                position: "absolute",
                top: e.pageY + y,
                left: e.pageX + x
            })
        })
})