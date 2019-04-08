$(function () {

});

$(".chose-tab .tab").on("click",function(){
    var i=$(this).index();
    $(".chose-tab .tab").removeClass("tab-active");
    $(".chose-tab .tab").eq(i).addClass("tab-active");
    $(".con-lists").removeClass("list-active");
    $(".con-lists").eq(i).addClass("list-active");
});