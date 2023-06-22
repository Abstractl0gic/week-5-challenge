


$(function () {
  // Using Day.js to display the current date at the header of the page
  var currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  // These variables represent the 9-5 business hours
  var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  var currentHour = dayjs().format("H");
//uses dayjs to tell the program what the current hour
  for (var i = 0; i < hours.length; i++) {
    var hourBlock = i + 9;
    var timeBlock = $("<div>").addClass("row time-block").attr("id", "hour-" + hourBlock);

    var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hours[i]);
    var descriptionCol = $("<textarea>").addClass("col-8 col-md-10 description");

    // Retrieve the saved event from local storage and set the textarea value
    var savedEvent = localStorage.getItem("hour-" + hourBlock);
    descriptionCol.val(savedEvent);

    var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");

    saveButton.append(saveIcon);
    timeBlock.append(hourCol, descriptionCol, saveButton);
    $(".container-fluid").append(timeBlock);

    // Apply the appropriate class based on the current hour
    if (hourBlock < currentHour) {
      descriptionCol.addClass("past");
    } else if (hourBlock == currentHour) {
      descriptionCol.addClass("present");
    } else {
      descriptionCol.addClass("future");
    }
  }

  // Save button click event listener
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    // Save the event in local storage using the hour as the key
    localStorage.setItem(hour, description);
  });
});

  







  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
