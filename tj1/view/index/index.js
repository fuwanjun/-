$(function(){
    // var w=$(".slide-list").width();
    // $("#slide").css("width",w*$(".slide-list").length+"px")
});

//轮播图
var slide3 = new auiSlide({
    container: document.getElementById("aui-slide"),
    // "width":300,
    "height": 200,
    "speed": 500,
    "autoPlay": 3000, //自动播放
    "loop": true,
    "pageShow": true,
    "pageStyle": 'dot',
    'dotPosition': 'center'
});

// 点击搜索框
$("#search-input").on("focus",function(){
    $(window).scrollTop(0);
    $("#searchBox").fadeIn();
    $(".iconBack").fadeIn();
    $("#searchBox").on("touchmove",function(e){e.preventDefault()});
    $("body").css("overflow","hidden");
});



//点击返回
$(".iconBack").on("click",function(){
    $("#searchBox").fadeOut();
    $(".iconBack").fadeOut();
    $("body").css("overflow","auto");
});

//点击热搜文字
$(".search-btns").on("click",".btn-item",function(){
    var text=$(this).find("p").text();
    $("#search-input").val(text);
});

//点击“全部清空”文字
$(".search-clear").on("click",function(){
	alert("全部清空")
})

//点击 “X” 删除搜索历史
$(".search-history").on("click",".history-item .aui-icon-close",function(){
	var i=$(this).parent().index();
	alert(i);
})

//点击搜索历史文字
$(".search-history").on("click",".history-item p",function(){
	var text=$(this).html();
	$("#search-input").val(text);
})
