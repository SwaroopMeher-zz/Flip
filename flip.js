$(function() {
  $(".flip").hover(function(){
    $(this).css("transform","scale(0.90)");
  },
  function() {
    $(this).css("transform","scale(1)");
  }
);
$(".flip-card").on("click",function() {
 $(this).toggleClass("flipc");
});
});
