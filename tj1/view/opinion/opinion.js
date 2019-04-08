$(".up").on("change",function(e){
    var file=e.target.value;
    console.log(file)
    $(this).prev($("img")).attr("src",file);
});