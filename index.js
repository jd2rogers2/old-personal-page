$(document).ready(function(){
  navbarListener();
  $(window).resize(navbarListener);
  hideContent();
  showPost();
});

function navbarListener(){
  if ($(window).width() < 800){
    $('.navbar-left').removeClass('navbar-left').addClass('navbar-top');
    $('.content-right').removeClass('content-right').addClass('content-bottom');
  } 

  if ($(window).width() >= 800) {
    $('.navbar-top').removeClass('navbar-top').addClass('navbar-left');
    $('.content-bottom').removeClass('content-bottom').addClass('content-right');
  }
}

function hideContent(){
  $('.hidden-content').hide();
}

function showPost(){
  $('.showPost').click(function(){
    $atag = $(this);
    $hidden = $atag.prev();
    $hidden.slideToggle(500, function(){
      $atag.text(function(){
        return $hidden.is(":visible") ? "less" : "more";
      });
    });
  });
}