var paused = false; 

function getSeconds() {
    hours = Number(document.getElementById("hours").value);
    minutes = Number(document.getElementById("minutes").value);
    seconds = Number(document.getElementById("seconds").value);
    return ((hours * 60 * 60) + (minutes * 60) + seconds); 
}

function pauseInterval() {
    window.timerValue = timerValue;
    window.paused = true;
    clearInterval(countdownInterval);
}

function manageInterval() {
    if (!window.paused) {
        window.timerValue = getSeconds() || 1500;
    }
    window.countdownInterval = setInterval(function() {
        if (timerValue < 0) {
            clearInterval(countdownInterval);
        } else{
            setElements();
        }
    }, 1000);
}

function setTimeFormat() {
    timeUnits = setValues();
    if (timerValue > 3600) {
        return [timeUnits.hours + " hours  " , timeUnits.minutes + " minutes  ", timeUnits.seconds % 100 + " seconds"].join("");
    } else {
        return [timeUnits.minutes + " minutes  ", timeUnits.seconds % 100 + " seconds"].join("");
    }

}

function setElements() {
    return document.getElementById("time").innerHTML = setTimeFormat();
}

function setValues() {
    timerValue--;
    return {
        hours: Math.floor(timerValue / 60 / 60), 
        minutes: Math.floor((timerValue / 60) % 60), 
        seconds: Math.floor((timerValue - (Math.floor((timerValue / 60) % 60)) * 60))
    };
}
