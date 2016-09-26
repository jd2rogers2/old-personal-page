$(document).ready(function() {
  hideSubPosts();
  togglePosts();
});

function togglePosts() {
  $('.post').on("click", function(){
    $(this).find('.subPost').slideToggle();
  });
}

function hideSubPosts(){
  $('.subPost').hide();
}