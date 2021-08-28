// Starting with the current time and date to be presented as the page opens
var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
  }

setTime();

// Below are some conditional variables and funtions that will be able
// to change color based on if the event planner entry