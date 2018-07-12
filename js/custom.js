$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      $(".scrollTopButton").fadeIn();
    } else {
      $(".scrollTopButton").fadeOut();
    }
  });

  $(".scrollTopButton").click(function(){
    $("html, body").animate({
      scrollTop:0
    }, 1000)
  });
});