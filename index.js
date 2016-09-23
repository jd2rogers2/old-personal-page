function show() {}

function hide() {}

$(document).ready(function() {
  $('a.show').on("click", show());
  $('a.hide').on("click", hide());
});