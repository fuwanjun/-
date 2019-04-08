$(function(){

});

$(".check-btn").on("click",function(){
    var dialog = new auiDialog();

    dialog.alert({
        title:"验证码发送成功，请及时使用",
        // msg:'这里是内容',
        buttons:['确定']
    },function(ret){})
});

$("#login").on("click",function(){
    var dialog = new auiDialog();
    dialog.alert({
        title:"用户名密码不匹配",
        // msg:'这里是内容',
        buttons:['确定']
    },function(ret){})
});