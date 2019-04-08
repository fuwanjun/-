//初始化
$(function(){
    playAnimation();
});

//Event............................................................................................................................
//点击立即观看按钮
$(".animate-box").on("click",".goBtn",function(e){
    alert("111");
});

//Functions.....................................................................................................................
// 初始化动画
function playAnimation(){
    //获取设备高度
    $(".animate-box").css("height",$(window).height()+"px");
    // $("body").css("overflow","hidden");
    $(".animate-box img").attr("src","../../image/before-live1.png");
    fadeInOut($(".animate-box img"),"../../image/before-live2.png",1000);
    fadeInOut($(".animate-box img"),"../../image/before-live3.png",2000);
    fadeInOut($(".animate-box img"),"../../image/before-live4.png",3000);
    fadeInOut($(".animate-box img"),"../../image/before-live5.png",4000);
    fadeInOut($(".animate-box img"),"../../image/before-live-last.png",5000);
    setTimeout(function(){
        if($(".animate-box img").attr("src")=="../../image/before-live-last.png"){
            var goBtn='<button class="goBtn">立即观看</button>';
            $(goBtn).appendTo(".animate-box");
        }
    },5100)
}

//改变img的url
function fadeInOut(elem,src,time){
    setTimeout(function(){
        elem.attr("src",src);
    },time);
}