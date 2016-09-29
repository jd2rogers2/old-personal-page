$(document).ready(function() {
  hideSubPosts();
});

function togglePosts(a_tag) {
  debugger;
  a_tag.parentElement.parentElement.find('.subPost').slideToggle();
}

function hideSubPosts(){
  $('.subPost').hide();
}