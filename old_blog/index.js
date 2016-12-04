$(document).ready(function() {
  // hideSubPosts();
  // clickMoreLess();
});

function clickMoreLess(){
  $('.moreLess').on("click", function(event){
    debugger;
    $('.moreLess').parentElement.children.forEach(function(element){
      element.toggleClass('.subPost');
    });
    // togglePost(this);
    event.preventDefault();
  });
}

function togglePost(a_tag) {
  // debugger;
  
  // a_tag.parentElement.parentElement.find('.subPost').slideToggle();
  // event.preventDefault();
}

function hideSubPosts(){
  $('.subPost').hide();
}