//wait for the html to be fully loaded before running any JS
$(document).ready(function() {

  $("#change-red").on("click", function() {
    // change background color of #red on click
    $("#red").css("background-color", "red");
  });

  $("#change-green").on("click", function() {
    // change background color of #red on click
    $("#green").css("background-color", "green");
  });

  $("#change-blue").on("click", function() {
    // change background color of #red on click
    $("#blue").css("background-color", "blue");
  });

  $("#make-big").on("click", function() {
    // make #big-red bigger and background color red on click
    $("#big-red").addClass("big-red");
  });

  $("#make-small").on("click", function() {
    // make #small-green smaller and background color green on click of #make-small
    $("#small-green").addClass("small-green");
  });

  $("#animate-div").on("click", function() {
    // make #twirl-div spin on click of #animate-div button
    $("#twirl-div").addClass("twirl-div");
  });

  $("#create-overlay").on("click", function() {
    // On click of the create-overlay button, show overlay. On click of the overlay, hide the overlay. You may want to reference jQuery [.hide()](http://api.jquery.com/hide/) and [.show()](http://api.jquery.com/show/).
    // $(".overlay").show();
    $(".overlay").css("display", "block");
  });

});
