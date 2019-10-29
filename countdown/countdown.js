#!/usr/bin/env node

function getValue() {
    var timerValue = Number(document.getElementById("input").value);
    return timerValue;
    // var myInterval = setInterval(update, 1000, timerValue);
}

function startInterval() {
    var countdownInterval = setInterval(countDown, 1000, getValue());
}

function countDown(timerValue) {
    startInterval()
    timerValue--;
    if (timerValue < 0) {
        clearInterval(myInterval)
    } else{
        document.getElementById("seconds").innerHTML = lol + " s";
    }
    // var timerValue = Number(document.getElementById("input").value);
    // var myInterval = setInterval(update, 1000);
    // startInterval();
    // function update() {
    //     timerValue--;
    //     if (timerValue < 0) {
    //         clearInterval(myInterval)
    //     } else{
    //        document.getElementById("seconds").innerHTML = timerValue + " s";
    //     }
    // }
}

//  function countdown() {
//     var endtime = new Date();
//     var timerValue = document.getElementById("input").value;
//     endtime.setMinutes(endtime.getMinutes() + Number(timerValue));

//     var myVar = setInterval(function() {
//     var starttime = new Date();

//     let result = Math.round((endtime.getTime() - starttime.getTime()) / 1000);
//     console.log(result);

//     if (result <= 0) {
//         clearInterval(myVar);
//     } else {
//         document.getElementById("seconds").innerHTML = result + " s";
//     }

//     }, 1000);
   
// }
