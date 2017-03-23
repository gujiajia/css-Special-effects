// $(function() {
//     var i = 0;
//     // 获取放img的li的长度
//     var size = $(".banner .img li").size();
//     // 点击向右滑动
//     $(".banner .btn_l").click(function() {
//         i++
//         if (i == size) {
//             i = 0;
//         }
//         $(".banner .img").stop().animate({ left: -i * 640 }, 500)
//     });
//     // 点击向左滑动
//     $(".banner .btn_r").click(function() {
//         i--
//         if (i == -1) {
//             i = size - 1;
//         }
//         $(".banner .img").stop().animate({ left: -i * 640 }, 500)
//     })
// })

// $(document).ready(function(){})

$(function() {
    // 第一张小图片加上被选中的样式
    $(".cirul li:first").addClass("on");
    // 获取图片的容器
    var $imgCon = $(".img");
    // 获取图片的宽度
    var $offset = $(".img li").width();
    //获取图片的数量
    var $imglength = $(".img li").length;
    // 1.点击左箭头 切换上一张
    $(".prev").click(function() {
        // 获取当前图片的索引值
        var $index = $(".on").index();
        // 如果是第一张的话,跳到最后一张
        if ($index == 0) {
            $index = $imglength - 1;
            $imgCon.stop().animate({ left: "-=" + ($index * $offset) + "px" }, 1000);
            // 小图加上被选中的样式
            $(".cirul li").eq($index).addClass("on").siblings().removeClass("on");
        } else {
            $imgCon.stop().animate({ left: "+=" + $offset + "px" }, 1000);
            // 小图加上被选中的样式 
            $(".cirul li").eq($index - 1).addClass("on").siblings().removeClass("on");
        }

    });
    $(".next").click(function() {
        // 获取当前图片的索引值
        var $index = $(".on").index();
        // 如果是第一张的话,跳到最后一张
        if ($index == $imglength - 1) {
            $index = 0;
            $imgCon.stop().animate({ left: 0 + "px" }, 1000);
            // 小图加上被选中的样式
            $(".cirul li").eq($index).addClass("on").siblings().removeClass("on");
        } else {
            $imgCon.stop().animate({ left: "-=" + $offset + "px" }, 1000);
            // 小图加上被选中的样式 
            $(".cirul li").eq($index + 1).addClass("on").siblings().removeClass("on");
        }
    });
    $(".cirul li").click(function() {
        // var $leftVal = -1 * $offset;
        var $index = $(this).index();
        $imgCon.stop().animate({ left: "-" + $index * $offset + "px" }, 1000);
        // $imgCon.animate({ left: $index * $leftVal + "px" }, 1000);
        $(this).eq($index).addClass("on").siblings().removeClass("on");
    });
    // 定时器自动轮播
    var $play = setInterval(function() {
        // 获取当前图片的索引值
        var $index = $(".on").index();
        // 如果是第一张的话,跳到最后一张
        if ($index == $imglength - 1) {
            $index = 0;
            $imgCon.stop().animate({ left: 0 + "px" }, 1000);
            // 小图加上被选中的样式
            $(".cirul li").eq($index).addClass("on").siblings().removeClass("on");
        } else {
            $imgCon.stop().animate({ left: "-=" + $offset + "px" }, 1000);
            // 小图加上被选中的样式 
            $(".cirul li").eq($index + 1).addClass("on").siblings().removeClass("on");
        }
    }, 2000);
    $imgCon.hover(function() {
        clearInterval($play);
    }, function() {
        $play = setInterval(function() {
            // 获取当前图片的索引值
            var $index = $(".on").index();
            // 如果是第一张的话,跳到最后一张
            if ($index == $imglength - 1) {
                $index = 0;
                $imgCon.stop().animate({ left: 0 + "px" }, 1000);
                // 小图加上被选中的样式
                $(".cirul li").eq($index).addClass("on").siblings().removeClass("on");
            } else {
                $imgCon.stop().animate({ left: "-=" + $offset + "px" }, 1000);
                // 小图加上被选中的样式 
                $(".cirul li").eq($index + 1).addClass("on").siblings().removeClass("on");
            }
        }, 2000);
    })
})


// 2.点击右箭头 切换下一张
// 3.小图 点击小图切换对应的大图
// 4.自动切换