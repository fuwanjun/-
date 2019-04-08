$(function(){

});

$(".addBtn").on("click",function(){
    window.location.href='../add-attendee/add-attendee.html';
});

$(".attend").on("click","li .item-edit",function(){
    window.location.href='../change-attendee/change-attendee.html';
});
