$(".check-btn").on("click",function(){
    var dialog = new auiDialog();

    dialog.alert({
        title:"验证码发送成功，请及时使用",
        // msg:'这里是内容',
        buttons:['确定']
    },function(ret){})
});

//点击下一步
$("#nextBtn").on("click",function(){
    $(".main-write").removeClass("main-active");
    $(".main-write").eq(1).addClass("main-active");
});

//点击上一步
$("#prevBtn").on("click",function(){
    $(".main-write").removeClass("main-active");
    $(".main-write").eq(0).addClass("main-active");
});