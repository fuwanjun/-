$(function(){
    var w=$(".slide-list").width();

    $("#slide").css("width",w*$(".slide-list").length+"px")
});
var slide3 = new auiSlide({
    container: document.getElementById("aui-slide"),
    // "width":300,
    "height": 240,
    "speed": 500,
    "autoPlay": 3000, //自动播放
    "loop": true,
    "pageShow": true,
    "pageStyle": 'dot',
    'dotPosition': 'center'
});