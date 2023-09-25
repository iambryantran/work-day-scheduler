// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const hourEls = [];
hourEls[0] = document.getElementById('hour-9');
hourEls[1] = document.getElementById('hour-10');
hourEls[2] = document.getElementById('hour-11');
hourEls[3] = document.getElementById('hour-12');
hourEls[4] = document.getElementById('hour-13');
hourEls[5] = document.getElementById('hour-14');
hourEls[6] = document.getElementById('hour-15');
hourEls[7] = document.getElementById('hour-16');
hourEls[8] = document.getElementById('hour-17');

// Grabbing the current day and hour
setInterval(function() {
  var currentDay = dayjs().format('dddd, MMMM D');
  $('#current-day').text(currentDay);
  console.log(currentDay);
  var currentHour = dayjs().format('H');

  let i = 0;
  while (i < hourEls.length) {
    let currentHour = dayjs().format('H');
    if (hourEls[i].dataset.hour < currentHour) {
      hourEls[i].classList.add('past');
    } else if (hourEls[i].dataset.hour == currentHour) {
      hourEls[i].classList.add('present');
    } else {
      hourEls[i].classList.add('future');
    }
    i++;
  }
}, 1000);

$(function () {
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

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //

    // TODO: Add code to display the current date in the header of the page.


});
