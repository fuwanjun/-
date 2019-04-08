var screenHeight=$(window).height();
$(function(){
    // $("#invoice-con").css("height",screenHeight);
    $("#invoice-con").css("bottom",-screenHeight).css("top",screenHeight);
});


$("#invoice").on("change",function(e){
    if($(this).is(':checked')){
        fillShow();
    }
});

$("#back2").on("click",function(){
    fillHide();
});

$("#sign-up").on("click",function(){
     $(".aui-mask").show();
    $("#pay-box").show();
});

$(".aui-mask").on("click",function(){
    $(".aui-mask").hide();
    $("#pay-box").hide();
});

function fillShow(){
    $("#invoice-con").show();
    $("#invoice-con").animate({top:"0",bottom:"0"});
}

function fillHide(){
    $("#invoice-con").animate({top:screenHeight,bottom:-screenHeight},function(){
        $("#invoice").prop("checked",false);
        $("#invoice-con").hide();
    });


}