// Empty array for all tasks
var tasks = []

// Current day and date
var currentDate = moment().format("dddd" + ", " + "MMMM DD");

// Display current day and date in header
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


// TASK PARAGRAPH WAS CLICKED
$(".row").on("click", ".text-area", function() {
    var text = $(this)
      .text()
      .trim();

    var textInput = $("<textarea>")
      .addClass("form-control col-10")
      .val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

    console.log(text);
  });

// SAVE TO LOCAL STORAGE
var saveTask = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// SAVE BUTTON WAS CLICKED
$(".saveBtn").click(function() {

    // STEP 1. get textarea element
    var textArea = $(this).prev();
    var textClasses = $(this).prev().attr("class");

    if ($(textArea).hasClass("form-control")) {

        // STEP 1. get text and time values
        var taskText = $(this).prev().val();
        var taskTime = $(this).parent().attr("id");
        console.log(taskText);
        console.log(taskTime);

        // STEP 3: recreate text section element
        var textSection = $("<section>")
        .addClass("col-10 text-area").text(taskText);

        $(textArea).replaceWith(textSection);

        // STEP 4. run task audit to re-add color coding
        auditTask();

        // save in tasks array
        tasks.push({
            time: taskTime,
            taskText: taskText
        });

        saveTask();
    }

    else {
        return;
    }
});

// EVALUATE ALL TASK TIMES AND APPLY COLORS TO EACH TASK BASED ON CURRENT TIME
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

// load tasks for the first time
// loadTasks();