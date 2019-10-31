var timerApp = {
    started: false,
    timeLeft: null,
    initialTime: null
}

function getSeconds() {
    hours = Number(document.getElementById("hours").value);
    minutes = Number(document.getElementById("minutes").value);
    seconds = Number(document.getElementById("seconds").value);
    return ((hours * 60 * 60) + (minutes * 60) + seconds); 
}

function setTimeFormat() {
    timeUnits = getValues();
    if (timerApp.timeLeft > 3600) {
        return `${timeUnits.hours} hours  ${timeUnits.minutes} minutes  ${timeUnits.seconds % 100} seconds`;
    } else {
        return `${timeUnits.minutes} minutes  ${timeUnits.seconds % 100} seconds`;
    }

}

function setElements() {
    return document.getElementById("time").innerHTML = setTimeFormat();
}

function getValues() {
    let timerValue = timerApp.timeLeft;
    return {
        hours: Math.floor(timerValue / 60 / 60), 
        minutes: Math.floor((timerValue / 60) % 60), 
        seconds: Math.floor((timerValue - (Math.floor((timerValue / 60) % 60)) * 60))
    };
}

function updateTimer() {
    timerApp.timeLeft--;
    setElements();
    console.log(timerApp.timeLeft);
}

function startCountdown() {
    if (!timerApp.started) {
        timerApp.timeLeft = getSeconds() > 0 ? getSeconds() : 1500;
        timerApp.initialTime = timerApp.timeLeft;
        timerApp.started = true;
    }
    timerApp.interval = setInterval(updateTimer, 1000);
}

function pauseCountdown() {
    clearInterval(timerApp.interval);
}

function resetCountdown() {
    timerApp.started = false;
    timerApp.timeLeft = timerApp.initialTime;
    setElements();
}

function startHandler() {
    var startButton = document.querySelector("#startButton");
    var pauseButton = document.querySelector("#pauseButton");
    var resetButton = document.querySelector("#resetButton");
    resetButton.classList.remove("hide");
    pauseButton.classList.remove("hide");
    startButton.classList.add("hide");
    startCountdown();
}

function pauseHandler() {
    var pauseButton = document.querySelector("#pauseButton");
    var resumeButton = document.querySelector("#resumeButton");
    pauseButton.classList.add("hide");
    resumeButton.classList.remove("hide");
    pauseCountdown();
}

function resumeHandler() {
    var resumeButton = document.querySelector("#resumeButton");
    var pauseButton = document.querySelector("#pauseButton");
    resumeButton.classList.add("hide");
    pauseButton.classList.remove("hide");
    startCountdown();
}

function resetHandler() {
    var resetButton = document.querySelector("#resetButton");
    resetButton.classList.remove("hide");
    resetCountdown();
}
