$(function () {
    $(".mymusicOf").hide();
    $(".mymusic").click(function () {
        $(".mymusic").hide()
        $(".mymusicOf").show()
        $("#of")[0].pause()
    })
    $(".mymusicOf").click(function () {
        $(".mymusicOf").hide();
        $(".mymusic").show()
        $("#of")[0].play()
    })
})



   

