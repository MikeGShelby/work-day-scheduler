var tasks = []


var currentDate = moment().format("dddd" + ", " + "MMMM DD");

// add current day and date to header
$('#currentDay').text(currentDate);

// // LOAD ANY SAVED TASKS WHEN PAGE IS LOADED
// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     // STEP 1: if nothing in localStorage, create a new object to track all task for each time block
//     if (!tasks) {
//         tasks = {

//         }
//     }
// }



var auditTask = function () {
    // get current time and log it to console
    var currentTime = moment().get("hours");
    // var currentTime = 16;
    console.log(currentTime);

    $("li").each(function() {

        // get task time for each task item and display to console
        var taskTime = parseInt($(this).attr("id"));
        console.log(taskTime);

        // compare current time to task time and apply conditional styles to each task text area
        if (taskTime < currentTime) {
            $(this).find(".text-area").attr("class", "col-10 text-area past");
            console.log("this happened earlier");
        }

        else if (taskTime === currentTime) {
            $(this).find(".text-area").attr("class", "col-10 text-area present");
            console.log("This is the current time");
        }
        else {
            $(this).find(".text-area").attr("class", "col-10 text-area future");
            console.log("This hasn't happened yet");
        }

    })
}

auditTask();







// get current time







// AUDIT TASKS WITH CONDITIONAL FORMATTING BASED ON DUE DATE
// var auditTask = function() {
//     // STEP 1: get time from task element
//     var time = $(#task-hour).text().trim();

    // // STEP 2: convert to moment object at 5:00pm
    // var time = moment(date, "L").set("hour", 17);

    // // STEP 3: remove any old classes from element
    // $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

    //  // apply new class if task is near/over due date
    //  if (moment().isAfter(time)) {
    //   $(taskEl).addClass("list-group-item-danger");
    //  }
    //  else if (Math.abs(moment().diff(time, "days")) <= 2) {
    //   $(taskEl).addClass("list-group-item-warning");
    // }
//   };


// load tasks for the first time
// loadTasks();