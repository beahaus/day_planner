var displayDay = document.querySelector("#currentDay");

var currentDay = moment().format("MMM Do YY");
var currentTime = moment().format("hh:mm");

displayDay.innerHTML = currentDay + " " + currentTime;

var tasks = 
    {
        'tasks7': "Tasks",
        'tasks8': "Tasks",
        'tasks9': "Tasks",
        'tasks10': "Tasks",
        'tasks11': "Tasks",
        'tasks12': "Tasks",
        'tasks13': "Tasks",
        'tasks14': "Tasks",
        'tasks15': "Tasks",
        'tasks16': "Tasks",
        'tasks17': "Tasks",
        'tasks18': "Tasks",
        'tasks19': "Tasks",
        'tasks20': "Tasks",
    };

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

// if statements for changing the color of the hour blocks once the hour has passed
    if (07 < (moment)().hour()) {
    time7.style.backgroundColor = "grey";
    time7.style.color = "white";
    }
    if (08 < (moment().hour())) {
        time8.style.backgroundColor = "grey";
        time8.style.color = "white";
    }
    if (09 < (moment().hour())) {
        time9.style.backgroundColor = "grey";
        time9.style.color = "white";
    }
    if (10 < (moment().hour())) {
        time10.style.backgroundColor = "grey";
        time10.style.color = "white";
    }
    if (11 < (moment().hour())) {
        time11.style.backgroundColor = "grey";
        time11.style.color = "white";
    }
    if (12 < (moment().hour())) {
        time12.style.backgroundColor = "grey";
        time12.style.color = "white";
    }
    if (13 < (moment().hour())) {
        time13.style.backgroundColor = "grey";
        time13.style.color = "white";
    }
    if (14 < (moment().hour())) {
        time14.style.backgroundColor = "grey";
        time14.style.color = "white";
    }
    if (15 < (moment().hour())) {
        time15.style.backgroundColor = "grey";
        time15.style.color = "white";
    }
    if (16 < (moment().hour())) {
        time16.style.backgroundColor = "grey";
        time16.style.color = "white";
    }
    if (17 < (moment().hour())) {
        time17.style.backgroundColor = "grey";
        time17.style.color = "white";
    }
    if (18 < (moment().hour())) {
        time18.style.backgroundColor = "grey";
        time18.style.color = "white";
    }
    if (19 < (moment().hour())) {
        time19.style.backgroundColor = "grey";
        time19.style.color = "white";
    }
    if (20 < (moment().hour())) {
        time20.style.backgroundColor = "grey";
        time20.style.color = "white";
    }
    


// if statements for changing the color of the hour block on the hour
    if (07 == (moment().hour())) {
        time7.style.backgroundColor = "red";
        time7.style.color = "white";
    }
    if (08 == (moment().hour())) {
        time8.style.backgroundColor = "red";
        time8.style.color = "white";
    }
    if (09 == (moment().hour())) {
        time9.style.backgroundColor = "red";
        time9.style.color = "white";
    }
    if (10 == (moment().hour())) {
        time10.style.backgroundColor = "red";
        time10.style.color = "white";
    }
    if (11 == (moment().hour())) {
        time11.style.backgroundColor = "red";
        time11.style.color = "white";
    }
    if (12 == (moment().hour())) {
        time12.style.backgroundColor = "red";
        time12.style.color = "white";
    }
    if (13 == (moment().hour())) {
        time13.style.backgroundColor = "red";
        time13.style.color = "white";
    }
    if (14 == (moment().hour())) {
        time14.style.backgroundColor = "red";
        time14.style.color = "white";
    }
    if (15 == (moment().hour())) {
        time15.style.backgroundColor = "red";
        time15.style.color = "white";
    }
    if (16 == (moment().hour())) {
        time16.style.backgroundColor = "red";
        time16.style.color = "white";
    }
    if (17 == (moment().hour())) {
        time17.style.backgroundColor = "red";
        time17.style.color = "white";
    }
    if (18 == (moment().hour())) {
        time18.style.backgroundColor = "red";
        time18.style.color = "white";
    }
    if (19 == (moment().hour())) {
        time19.style.backgroundColor = "red";
        time19.style.color = "white";
    }
    if (20 == (moment().hour())) {
        time20.style.backgroundColor = "red";
        time20.style.color = "white";
    }

var save7 = document.querySelector("#save7");
var save8 = document.querySelector("#save8");
var save9 = document.querySelector("#save9");
var save10 = document.querySelector("#save10");
var save11 = document.querySelector("#save11");
var save12 = document.querySelector("#save12");
var save13 = document.querySelector("#save13");
var save14 = document.querySelector("#save14");
var save15 = document.querySelector("#save15");
var save16 = document.querySelector("#save16");
var save17 = document.querySelector("#save17");
var save18 = document.querySelector("#save18");
var save19 = document.querySelector("#save19");
var save20 = document.querySelector("#save20");

save7.addEventListener("click", function () {
    localStorage.setItem("tasks7", time7.value);
    });
save8.addEventListener("click", function () {
    localStorage.setItem("tasks8", time8.value);
    });
save9.addEventListener("click", function () {
    localStorage.setItem("tasks9", time9.value);
    });
save10.addEventListener("click", function () {
    localStorage.setItem("tasks10", time10.value);
    });
save11.addEventListener("click", function () {
    localStorage.setItem("tasks11", time11.value);
    });
save12.addEventListener("click", function () {
    localStorage.setItem("tasks12", time12.value);
    });
save13.addEventListener("click", function () {
    localStorage.setItem("tasks13", time13.value);
    });
save14.addEventListener("click", function () {
    localStorage.setItem("tasks14", time14.value);
    });
save15.addEventListener("click", function () {
    localStorage.setItem("tasks15", time15value);
    });
save16.addEventListener("click", function () {
    localStorage.setItem("tasks16", time16.value);
    });
save17.addEventListener("click", function () {
    localStorage.setItem("tasks17", time17.value);
    });
save18.addEventListener("click", function () {
    localStorage.setItem("tasks18", time18.value);
    });
save19.addEventListener("click", function () {
    localStorage.setItem("tasks19", time19.value);
    });
save20.addEventListener("click", function () {
    localStorage.setItem("tasks20", time20.value);
    });

var tasks7 = localStorage.getItem("tasks7");
var tasks8 = localStorage.getItem("tasks8");
var tasks9 = localStorage.getItem("tasks9");
var tasks10 = localStorage.getItem("tasks10");
var tasks11 = localStorage.getItem("tasks11");
var tasks12 = localStorage.getItem("tasks12");
var tasks13 = localStorage.getItem("tasks13");
var tasks14 = localStorage.getItem("tasks14");
var tasks15 = localStorage.getItem("tasks15");
var tasks16 = localStorage.getItem("tasks16");
var tasks17 = localStorage.getItem("tasks17");
var tasks18 = localStorage.getItem("tasks18");
var tasks19 = localStorage.getItem("tasks19");
var tasks20 = localStorage.getItem("tasks20");

time7.value = tasks7;
time8.value = tasks8;
time9.value = tasks9;
time10.value = tasks10;
time11.value = tasks11;
time12.value = tasks12;
time13.value = tasks13;
time14.value = tasks14;
time15.value = tasks15;
time16.value = tasks16;
time17.value = tasks17;
time18.value = tasks18;
time19.value = tasks19;
time20.value = tasks20;


var done7 = document.querySelector("#done7");
var done8 = document.querySelector("#done8");
var done9 = document.querySelector("#done9");
var done10 = document.querySelector("#done10");
var done11 = document.querySelector("#done11");
var done12 = document.querySelector("#done12");
var done13 = document.querySelector("#done13");
var done14 = document.querySelector("#done14");
var done15 = document.querySelector("#done15");
var done16 = document.querySelector("#done16");
var done17 = document.querySelector("#done17");
var done18 = document.querySelector("#done18");
var done19 = document.querySelector("#done19");
var done20 = document.querySelector("#done20");

done7.addEventListener("click", function () {
    localStorage.removeItem("tasks7");
    time7.value = ""
    time7.style.backgroundColor = "black";
});
done8.addEventListener("click", function () {
    localStorage.removeItem("tasks8");
    time8.value = ""
    time8.style.backgroundColor = "black";
});
done9.addEventListener("click", function () {
    localStorage.removeItem("tasks9");
    time9.value = ""
    time9.style.backgroundColor = "black";
});
done10.addEventListener("click", function () {
    localStorage.removeItem("tasks10");
    time10.value = ""
    time10.style.backgroundColor = "black";
});
done11.addEventListener("click", function () {
    localStorage.removeItem("tasks11");
    time11.value = ""
    time11.style.backgroundColor = "black";
});
done12.addEventListener("click", function () {
    localStorage.removeItem("tasks12");
    time12.value = ""
    time12.style.backgroundColor = "black";
});
done13.addEventListener("click", function () {
    localStorage.removeItem("tasks13");
    time13.value = ""
    time13.style.backgroundColor = "black";
});
done14.addEventListener("click", function () {
    localStorage.removeItem("tasks14");
    time14.value = ""
    time14.style.backgroundColor = "black";
});
done15.addEventListener("click", function () {
    localStorage.removeItem("tasks15");
    time15.value = ""
    time15.style.backgroundColor = "black";
});
done16.addEventListener("click", function () {
    localStorage.removeItem("tasks16");
    time16.value = ""
    time16.style.backgroundColor = "black";
});
done17.addEventListener("click", function () {
    localStorage.removeItem("tasks17");
    time17.value = ""
    time17.style.backgroundColor = "black";
});
done18.addEventListener("click", function () {
    localStorage.removeItem("tasks18");
    time18.value = ""
    time18.style.backgroundColor = "black";
});
done19.addEventListener("click", function () {
    localStorage.removeItem("tasks19");
    time19.value = ""
    time19.style.backgroundColor = "black";
});
done20.addEventListener("click", function () {
    localStorage.removeItem("tasks20");
    time20.value = ""
    time20.style.backgroundColor = "black";
});