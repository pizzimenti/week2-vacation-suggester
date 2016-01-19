$(function() {
  $('#questions form').submit(function(event) {
    event.preventDefault();
    var question1 = $("input#question1").val().toLowerCase();
    var question2 = $("input#question2").val().toLowerCase();
    var question3 = $("input#question3").val().toLowerCase();
    var question4 = $("input#question4").val().toLowerCase();
    var question5 = $("input#question5").val().toLowerCase();


// control flow conditional for determining appropriate destinations

//question 1 conditional
// if (array has "hot" in it) {
//   $('.cold').show();
// } else if (array has cold in it) {
//   $('.hot').show();
// }

//question 2 conditional
//question 3 conditional
//question 4 conditional
//question 5 conditional
  });
});
