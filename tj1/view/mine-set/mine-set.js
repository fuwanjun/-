$(function(){

});

$(".head").on("click",function(){
    openChangeHead();
});


var actionsheet = new auiActionsheet();
function openChangeHead(){
    actionsheet.init({
        frameBounces:true,//当前页面是否弹动，（主要针对安卓端）
        // title:"这里是标题",
        cancelTitle:'取消',
        // destructiveTitle:'红色警告按钮',
        buttons:['拍照','图库选择']
    },function(ret){
        console.log(ret);
        if(ret.buttonIndex==1){
            alert('拍照');
        }else if(ret.buttonIndex==2){
            alert('图库选择')
        }
    })
}

//点击推荐给朋友
$("#recommend").on("click",function(){
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