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
  if (timeNow < 8) {
    $("#colorEntry2").addClass("futureTime");
  } else if (timeNow == 8) {
    $("#colorEntry2").addClass("currentTime");
  } else if (timeNow > 8) {
    $("#colorEntry2").addClass("pastTime");
  }

  // 0900 time block function
  if (timeNow < 9) {
    $("#colorEntry3").addClass("futureTime");
  } else if (timeNow == 9) {
    $("#colorEntry3").addClass("currentTime");
  } else if (timeNow > 9) {
    $("#colorEntry3").addClass("pastTime");
  }

  // 1000 time block function
  if (timeNow < 10) {
    $("#colorEntry4").addClass("futureTime");
  } else if (timeNow == 10) {
    $("#colorEntry4").addClass("currentTime");
  } else if (timeNow > 10) {
    $("#colorEntry4").addClass("pastTime");
  }

  // 1100 time block function
  if (timeNow < 11) {
    $("#colorEntry5").addClass("futureTime");
  } else if (timeNow == 11) {
    $("#colorEntry5").addClass("currentTime");
  } else if (timeNow > 11) {
    $("#colorEntry5").addClass("pastTime");
  }

  // 1200 time block function
  if (timeNow < 12) {
    $("#colorEntry6").addClass("futureTime");
  } else if (timeNow == 12) {
    $("#colorEntry6").addClass("currentTime");
  } else if (timeNow > 12) {
    $("#colorEntry6").addClass("pastTime");
  }

  // 1300 time block function
  if (timeNow < 13) {
    $("#colorEntry7").addClass("futureTime");
  } else if (timeNow == 13) {
    $("#colorEntry7").addClass("currentTime");
  } else if (timeNow > 13) {
    $("#colorEntry7").addClass("pastTime");
  }

  // 1400 time block function
  if (timeNow < 14) {
    $("#colorEntry8").addClass("futureTime");
  } else if (timeNow == 14) {
    $("#colorEntry8").addClass("currentTime");
  } else if (timeNow > 14) {
    $("#colorEntry8").addClass("pastTime");
  }

  // 1500 time block function
  if (timeNow < 15) {
    $("#colorEntry9").addClass("futureTime");
  } else if (timeNow == 15) {
    $("#colorEntry9").addClass("currentTime");
  } else if (timeNow > 15) {
    $("#colorEntry9").addClass("pastTime");
  }

  // 0900 time block function
  if (timeNow < 16) {
    $("#colorEntry10").addClass("futureTime");
  } else if (timeNow == 16) {
    $("#colorEntry10").addClass("currentTime");
  } else if (timeNow > 16) {
    $("#colorEntry10").addClass("pastTime");
  }

  // 1700 time block function
  if (timeNow < 17) {
    $("#colorEntry11").addClass("futureTime");
  } else if (timeNow == 17) {
    $("#colorEntry11").addClass("currentTime");
  } else if (timeNow > 17) {
    $("#colorEntry11").addClass("pastTime");
  }
}
colorTime();
