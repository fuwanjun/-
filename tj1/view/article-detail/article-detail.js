
$("#search-input").on("focus",function(){
    $(".share-mask").show();
    $(".com2").show();
    $("textarea").focus();
});

//点击分享
$("#share").on("click",function(){
    $(".share-mask").show();
    $(".share-box").show();
});

//点击蒙板
$(".share-mask").on("click",function(){
    $(".share-mask").hide();
    $(".share-box").hide();
    $(".com2").hide();
});

//点击取消
$(".close-mask").on("click",function(){
    $(".share-mask").hide();
    $(".share-box").hide();
});