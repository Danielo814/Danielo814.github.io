#!/usr/bin/env node

//  var endtime = new Date(); 
//  endtime.setMinutes(endtime.getMinutes() + 1);
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

    // document.getElementById("seconds").innerHTML = result + " s";
    // console.log(Math.round(result));
    }, 1000);
   
}



