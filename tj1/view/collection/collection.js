var tab=0;
$(".chose-tab .tab").on("click",function(){
    var i=$(this).index();
    tab=i;
    $(".tab").removeClass("tab-active");
    $(".tab").eq(i).addClass("tab-active");
    $(".con-item").removeClass("con-active");
    $(".con-item").eq(i).addClass("con-active");
    if(i==0){
        $(".con-item").eq(1).find(".check").hide();
        $("#check-box2").hide();
    }else if(i==1){
        $(".con-item").eq(0).find(".check").hide();
        $("#check-box").hide();
    }
});
var edit1=true;
var edit2=true;
$(".share").on('click',function(){
    if(tab==0){
        if(edit1){
            // $(".share").html('取消');
            $(".con-item").eq(0).find(".check").show();
            $("#check-box").show();
            edit1=false;
        }else{
            // $(".share").html('编辑');
            $(".con-item").eq(0).find(".check").hide();
            $("#check-box").hide();
            edit1=true;
        }
    }else if(tab==1){
        if(edit2){
            // $(".share").html('取消');
            $(".con-item").eq(1).find(".check").show();
            $("#check-box2").show();
            edit2=false;
        }else{
            // $(".share").html('编辑');
            $(".con-item").eq(1).find(".check").hide();
            $("#check-box2").hide();
            edit2=true;
        }
    }
});

$("#check-box").find(".check-all input").on("change",function(){
    if($(this).is(':checked')){
        $(".con-item").eq(0).find("input[type='checkbox']").prop("checked",true);
    }else{
        $(".con-item").eq(0).find("input[type='checkbox']").prop("checked",false);
    }
});
$("#check-box2").find(".check-all input").on("change",function(){
    if($(this).is(':checked')){
        $(".con-item").eq(1).find("input[type='checkbox']").prop("checked",true);
    }else{
        $(".con-item").eq(1).find("input[type='checkbox']").prop("checked",false);
    }
});