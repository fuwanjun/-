//轮播图
var slide = new auiSlide({
    container: document.getElementById("aui-slide"),
    // "width":300,
    "height": 240,
    "speed": 500,
    "autoPlay": 3000, //自动播放
    "loop": true,
    "pageShow": true,
    "pageStyle": 'line',
    'dotPosition': 'center'
});
//tab 切换
// $(".aui-tab-item").on("click",function(){
//     var i=$(this).index();
//     $(".aui-tab-item").removeClass("aui-active");
//     $(".aui-tab-item").eq(i).addClass("aui-active");
//     $(".con-item").removeClass("con-active");
//     $(".con-item").eq(i).addClass("con-active");
// });

//点击分享
$(".share").on("click",function(){
    $(".share-mask").show();
    $(".share-box").show();
});

//点击蒙板
$(".share-mask").on("click",function(){
    $(".share-mask").hide();
    $(".share-box").hide();
});

//点击取消
$(".close-mask").on("click",function(){
    $(".share-mask").hide();
    $(".share-box").hide();
});