// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const hourEls = [];
hourEls[0] = document.getElementById('hour-9');  // Tried hourEls = $('#hour-9'); but it didn't work
hourEls[1] = document.getElementById('hour-10');
hourEls[2] = document.getElementById('hour-11');
hourEls[3] = document.getElementById('hour-12');
hourEls[4] = document.getElementById('hour-13');
hourEls[5] = document.getElementById('hour-14');
hourEls[6] = document.getElementById('hour-15');
hourEls[7] = document.getElementById('hour-16');
hourEls[8] = document.getElementById('hour-17');

let i = 0;
while (i < hourEls.length) {
  var currentHour = dayjs().format('H');
  if (parseInt(hourEls[i].dataset.hour) < parseInt(currentHour)) {
    hourEls[i].classList.add('past');
  } else if (parseInt(hourEls[i].dataset.hour) === parseInt(currentHour)) {
    hourEls[i].classList.add('present');
  } else {
    console.log('hit')
    hourEls[i].classList.add('future');
  }
  i++;
}
// setInterval the runs every minute
setInterval(function() {

  // Updates the current day
  var currentDay = dayjs().format('dddd, MMMM D');
  $('#current-day').text(currentDay);

}, 1000);

// Local Storage
function saveItem() {
  // console.log('hit');
  // console.log($(this).siblings('.description').val());
  // console.log($(this).parent().attr('id'))
  // Checks local storage for saved tasks, if none, creates an empty array
  localStorage.setItem($(this).parent().attr('id'), $(this).siblings('.description').val());
};

// Event listener for save button
$('.saveBtn').on("click", saveItem);

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to apply the past, present, or future class to each time - Done
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.

});

$('#hour-9 .description').val(localStorage.getItem("hour-9"));
$('#hour-10 .description').val(localStorage.getItem("hour-10"));
$('#hour-11 .description').val(localStorage.getItem("hour-11"));
$('#hour-12 .description').val(localStorage.getItem("hour-12"));
$('#hour-13 .description').val(localStorage.getItem("hour-13"));
$('#hour-14 .description').val(localStorage.getItem("hour-14"));
$('#hour-15 .description').val(localStorage.getItem("hour-15"));
$('#hour-16 .description').val(localStorage.getItem("hour-16"));
$('#hour-17 .description').val(localStorage.getItem("hour-17"));