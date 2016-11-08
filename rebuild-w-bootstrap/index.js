$(document).ready(function(){
  collapseJumbo();

});

function collapseJumbo(){
  $('#collapseJumbo').collapse("hide");
}

function moveNavbarToTop(){
  if($window.width() < 800){
    $('.navbar-fixed-left').removeClass('.navbar-fixed-left').addClass('.navbar-fixed-top');
  }
}