


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
//uses dayjs to tell the program what the current hour is
  for (var i = 0; i < hours.length; i++) {
    var hourBlock = i + 9;
    var timeBlock = $("<div>").addClass("row time-block").attr("id", "hour-" + hourBlock);

    var hourCol = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hours[i]);
    var descriptionCol = $("<textarea>").addClass("col-8 col-md-10 description");

    // this retrieves the saved event from local storage and put it in text
    var savedEvent = localStorage.getItem("hour-" + hourBlock);
    descriptionCol.val(savedEvent);

    var saveButton = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save");
    var saveIcon = $("<i>").addClass("fas fa-save").attr("aria-hidden", "true");

    saveButton.append(saveIcon);
    timeBlock.append(hourCol, descriptionCol, saveButton);
    $(".container-fluid").append(timeBlock);

    // Apply a class based on the current hour
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
