// business logic
var words = function (word) {
  return false;
}



// user interface logic
$(document).ready(function() {
  $("form#wordorder").submit(function(event) {
    event.preventDefault();

    $(".word").text(words);


    $("#result").show();
  });
});
