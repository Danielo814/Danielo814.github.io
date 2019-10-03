function getInput() {
    return document.getElementById("input").value;
}

function toFahrenheit(input) {
    return ((parseInt(input, 10) - 32) *  (5 / 9)).toFixed(2) + "&#8451";
}

function toCelcius(input) {
    return ((parseInt(input, 10) * 1.8) + 32).toFixed(2) + "&#8457";
}

function isFahrenheit(input) {
    return input[input.length - 1] === "f" ||  input[input.length - 1] === "F";

}

function isCelcius(input) {
    return input[input.length - 1] === "C" ||  input[input.length - 1] === "c";
}

function convert() {
    var input = getInput();
    if (isFahrenheit(input)) {
        temperature = toFahrenheit(input);
    } else if (isCelcius(input) || input.length > 0) {
        temperature = toCelcius(input);
    } else {
        temperature = "";
    }
    document.getElementById("output").innerHTML = temperature;
}
