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
// to change color based on if the event planner entry is in the past, current or in the future.
// It will be a little redundant as each time entry will have its own variable and function.
// Will update later once a solution is found compile multiple hour variables into one.

var timeNow = new Date().getHours();

function colorTimeBlockChange() {
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
};
colorTimeBlockChange()

// Variables for local storage entries
// Creating variables that are pulling IDs from HTML table body time blocks.
var timeBlock1 = $("#colorEntry1");
var timeBlock2 = $("#colorEntry2");
var timeBlock3 = $("#colorEntry3");
var timeBlock4 = $("#colorEntry4");
var timeBlock5 = $("#colorEntry5");
var timeBlock6 = $("#colorEntry6");
var timeBlock7 = $("#colorEntry7");
var timeBlock8 = $("#colorEntry8");
var timeBlock9 = $("#colorEntry9");
var timeBlock10 = $("#colorEntry10");
var timeBlock11 = $("#colorEntry11");

// Function below will start storing entry on local storage.
// The event is numbered 1-11 because thats how many blocks there are in the
// event planner. Second part is getting the var from above that is named timeBlock()
// and adds a string of text blank to store the USER's entry.
function localStorageEntry() {
    localStorage.setItem("eventOne", timeBlock1.text());
    localStorage.setItem("eventTwo", timeBlock2.text());
    localStorage.setItem("eventThree", timeBlock3.text());
    localStorage.setItem("eventFour", timeBlock4.text());
    localStorage.setItem("eventFive", timeBlock5.text());
    localStorage.setItem("eventSix", timeBlock6.text());
    localStorage.setItem("eventSeven", timeBlock7.text());
    localStorage.setItem("eventEight", timeBlock8.text());
    localStorage.setItem("eventNine", timeBlock9.text());
    localStorage.setItem("eventTen", timeBlock10.text());
    localStorage.setItem("eventEleven", timeBlock11.text());
};

// Now that information is stored on local storage, it needs to be fetched
// and displayed to the USER. Creating a new variable that it's sole purpose
// is to GET that time block entry.
var getTimeBlock1 = localStorage.getItem("eventOne");
var getTimeBlock2 = localStorage.getItem("eventTwo");
var getTimeBlock3 = localStorage.getItem("eventThree");
var getTimeBlock4 = localStorage.getItem("eventFour");
var getTimeBlock5 = localStorage.getItem("eventFive");
var getTimeBlock6 = localStorage.getItem("eventSix");
var getTimeBlock7 = localStorage.getItem("eventSeven");
var getTimeBlock8 = localStorage.getItem("eventEight");
var getTimeBlock9 = localStorage.getItem("eventNine");
var getTimeBlock10 = localStorage.getItem("eventTen");
var getTimeBlock11 = localStorage.getItem("eventEleven");

// Creating variable to pull ALL timeblock entries.
var pullEvents = [getTimeBlock1, getTimeBlock2, getTimeBlock3, getTimeBlock4, getTimeBlock5, getTimeBlcok6, getTimeBlock7, getTimeBlock8, getTimeBlock9, getTimeBlock10, getTimeBlock11];

// Creating a "for" loop that keep bringing up the entries posted from before.
for(i = 0; i < pullEvents.length; i++) {
    timeBlock1.text(getTimeBlock1);
    timeBlock2.text(getTimeBlock2);
    timeBlock3.text(getTimeBlock3);
    timeBlock4.text(getTimeBlock4);
    timeBlock5.text(getTimeBlock5);
    timeBlock6.text(getTimeBlock6);
    timeBlock7.text(getTimeBlock7);
    timeBlock8.text(getTimeBlock8);
    timeBlock9.text(getTimeBlock9);
    timeBlock10.text(getTimeBlock10);
    timeBlock11.text(getTimeBlock11);
 };
 
// Event Listeners to the SAVE button.

// 0700 Time Block SAVE BUTTON
$("#saveOne").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 0800 Time Block SAVE BUTTON
$("#saveTwo").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 0900 Time Block SAVE BUTTON
$("#saveThree").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1000 Time Block SAVE BUTTON
$("#saveFour").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1100 Time Block SAVE BUTTON
$("#saveFive").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1200 Time Block SAVE BUTTON
$("#saveSix").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1300 Time Block SAVE BUTTON
$("#saveSeven").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1400 Time Block SAVE BUTTON
$("#saveEight").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1500 Time Block SAVE BUTTON
$("#saveNine").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1600 Time Block SAVE BUTTON
$("#saveTen").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });

  // 1700 Time Block SAVE BUTTON
$("#saveEleven").submit(function(event) {
    event.preventDefault();
    storeEntry();
  });