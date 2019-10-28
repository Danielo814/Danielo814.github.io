#!/usr/bin/env node

 function countdown() {
    var endtime = new Date();
    var timerValue = document.getElementById("input").value;
    endtime.setMinutes(endtime.getMinutes() + Number(timerValue));

    var myVar = setInterval(function() {
    var starttime = new Date();

    let result = Math.round((endtime.getTime() - starttime.getTime()) / 1000);
    console.log(result);

    if (result <= 0) {
        clearInterval(myVar);
    } else {
        document.getElementById("seconds").innerHTML = result + " s";
    }

    }, 1000);
   
}
