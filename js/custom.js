$(function() {
  $('#questions form').submit(function(event) {
    event.preventDefault();
    var question1 = $("input#question1").val().toLowerCase();
    var question2 = $("input#question2").val().toLowerCase();
    var question3 = $("input#question3").val().toLowerCase();
    var question4 = $("input#question4").val().toLowerCase();
    var question5 = $("input#question5").val().toLowerCase();


// control flow conditional for determining appropriate destinations
    $(".destination").hide();
//question 1 conditional
    if (question1 === "hot") {
      $('.hot').show();
    } else if (question1 === "cold") {
      $('.cold').show();
    }

//question 2 conditional
    if (question2 === "city") {
      $('.city').show();
    } else if (question2 === "country") {
      $('.country').show();
    }

//question 3 conditional
    if (question3 === "sun") {
      $('.sun').show();
    } else if (question3 === "rain") {
      $('.rain').show();
    }

//question 4 conditional
    if (question4 === "english") {
      $('.english').show();
    } else if (question4 === "foreign") {
      $('.foreign').show();
    }
//question 5 conditional
    if(question5 === "budget") {
      $('.budget').show();
    } else if (question5 === "luxury") {
      $('.luxury').show();
    }
  });
});
