function show() {
  $('').className('');
}

function reHide() {
  $('').className('hidden');
}

$(document).ready(function() {
  $('.hidden').hide();
  $('a.show_hide').on("click", show());
  $('a.show_hide').on("click", reHide());
  // toggle ???
});