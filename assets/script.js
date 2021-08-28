// Starting with the current time and date to be presented as the page opens
var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
  var timerInterval = setInterval(function () {
    todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
    $("#currentDay").text(todaysDate);
  }, 1000);
}

setTime();

// Below are some conditional variables and funtions that will be able
// to change color based on if the event planner entry.
// It will be a little redundant as each time entry will have its own variable and function.
// Will update later once a solution is found.

var timeNow = new Date().getHours();

function colorTime() {
  // 0700 time block function
  if (timeNow < 7) {
    $("#colorEntry1").addClass("futureTime");
  } else if (timeNow == 7) {
    $("#colorEntry1").addClass("currentTime");
  } else if (timeNow > 7) {
    $("#colorEntry1").addClass("pastTime");
  }

  // 0800 time block funtion
  if (timeNow < 7) {
    $("#colorEntry1").addClass("futureTime");
  } else if (timeNow == 7) {
    $("#colorEntry1").addClass("currentTime");
  } else if (timeNow > 7) {
    $("#colorEntry1").addClass("pastTime");
  }
}
colorTime();
