var displayDay = document.querySelector("#currentDay");

var currentDay = moment().format("MMM Do YY");
var currentTime = moment().format("hh:mm");

displayDay.innerHTML = currentDay + " " + currentTime;

let tasks = [];
var time7 = document.querySelector("#time7");
var time8 = document.querySelector("#time8");
var time9 = document.querySelector("#time9");
var time10 = document.querySelector("#time10");
var time11 = document.querySelector("#time11");
var time12 = document.querySelector("#time12");
var time13 = document.querySelector("#time13");
var time14 = document.querySelector("#time14");
var time15 = document.querySelector("#time15");
var time16 = document.querySelector("#time16");
var time17 = document.querySelector("#time17");
var time18 = document.querySelector("#time18");
var time19 = document.querySelector("#time19");
var time20 = document.querySelector("#time20");

function afterTheHour() {
    if (moment().hour("07") < (moment)().hour("HH")) {
    time7.style.backgroundColor = "grey";
    time7.style.color = "white";
    }
    if (moment().hour("08") < (moment().hour("HH"))) {
        time8.style.backgroundColor = "grey";
        time8.style.color = "white";
    }
    if (moment().hour("09") < (moment().hour("HH"))) {
        time9.style.backgroundColor = "grey";
        time9.style.color = "white";
    }
    if (moment().hour("10") < (moment().hour("HH"))) {
        time10.style.backgroundColor = "grey";
        time10.style.color = "white";
    }
    if (moment().hour("11") < (moment().hour("HH"))) {
        time11.style.backgroundColor = "grey";
        time11.style.color = "white";
    }
    if (moment().hour("12") < (moment().hour("HH"))) {
        time12.style.backgroundColor = "grey";
        time12.style.color = "white";
    }
    if (moment().hour("13") < (moment().hour("HH"))) {
        time13.style.backgroundColor = "grey";
        time13.style.color = "white";
    }
    if (moment().hour("14") < (moment().hour("HH"))) {
        time14.style.backgroundColor = "grey";
        time14.style.color = "white";
    }
    if (moment().hour("15") < (moment().hour("HH"))) {
        time15.style.backgroundColor = "grey";
        time15.style.color = "white";
    }
    if (moment().hour("16") < (moment().hour("HH"))) {
        time16.style.backgroundColor = "grey";
        time16.style.color = "white";
    }
    if (moment().hour("17") < (moment().hour("HH"))) {
        time17.style.backgroundColor = "grey";
        time17.style.color = "white";
    }
    if (moment().hour("18") < (moment().hour("HH"))) {
        time18.style.backgroundColor = "grey";
        time18.style.color = "white";
    }
    if (moment().hour("19") < (moment().hour("HH"))) {
        time19.style.backgroundColor = "grey";
        time19.style.color = "white";
    }
    if (moment().hour("20") < (moment().hour("HH"))) {
        time20.style.backgroundColor = "grey";
        time20.style.color = "white";
    }
    
};

// function for changing the color of the time block on the hour
function onTheHour () {
    if (moment().hour("07") == (moment().hour("HH"))) {
        time7.style.backgroundColor = "red";
        time7.style.color = "white";
    }
    if (moment().hour("08") == (moment().hour("HH"))) {
        time8.style.backgroundColor = "red";
        time8.style.color = "white";
    }
    if (moment().hour("09") == (moment().hour("HH"))) {
        time9.style.backgroundColor = "red";
        time9.style.color = "white";
    }
    if (moment().hour("10") == (moment().hour("HH"))) {
        time10.style.backgroundColor = "red";
        time10.style.color = "white";
    }
    if (moment().hour("11") == (moment().hour("HH"))) {
        time11.style.backgroundColor = "red";
        time11.style.color = "white";
    }
    if (moment().hour("12") == (moment().hour("HH"))) {
        time12.style.backgroundColor = "red";
        time12.style.color = "white";
    }
    if (moment().hour("13") == (moment().hour("HH"))) {
        time13.style.backgroundColor = "red";
        time13.style.color = "white";
    }
    if (moment().hour("14") == (moment().hour("HH"))) {
        time14.style.backgroundColor = "red";
        time14.style.color = "white";
    }
    if (moment().hour("15") == (moment().hour("HH"))) {
        time15.style.backgroundColor = "red";
        time15.style.color = "white";
    }
    if (moment().hour("16") == (moment().hour("HH"))) {
        time16.style.backgroundColor = "red";
        time16.style.color = "white";
    }
    if (moment().hour("17") == (moment().hour("HH"))) {
        time17.style.backgroundColor = "red";
        time17.style.color = "white";
    }
    if (moment().hour("18") == (moment().hour("HH"))) {
        time18.style.backgroundColor = "red";
        time18.style.color = "white";
    }
    if (moment().hour("19") == (moment().hour("HH"))) {
        time19.style.backgroundColor = "red";
        time19.style.color = "white";
    }
    if (moment().hour("20") == (moment().hour("HH"))) {
        time20.style.backgroundColor = "red";
        time20.style.color = "white";
    }
}

function onSave() {
 
$("#save7").on("click", localStorage.setItem("Tasks 7:", JSON.stringify(time7.val())));


}

onSave();
afterTheHour();
