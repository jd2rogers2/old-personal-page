$(document).ready(function(){
  navbarListener();
  $(window).resize(navbarListener);
  hideContent();
  showPost();
});

function navbarListener(){
  if ($(window).width() < 900){
    $('.navbar-left').removeClass('navbar-left').addClass('navbar-top');
    $('.content-right').removeClass('content-right').addClass('content-bottom');
  } 

  if ($(window).width() >= 900) {
    $('.navbar-top').removeClass('navbar-top').addClass('navbar-left');
    $('.content-bottom').removeClass('content-bottom').addClass('content-right');
  }
}

function hideContent(){
  $('.hidden-content').hide();
}

function showPost(){
  $('.showPost').click(function(){
    $h3 = $(this);
    $hidden = $h3.parent().children('.hidden-content');
    $hidden.slideToggle(250, function(){
      // $h3.text(function(){
      //   return $hidden.is(":visible") ? "less" : "more";
      // });
    });
  });
}