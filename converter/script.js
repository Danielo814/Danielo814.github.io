function convert() {
    function toFahrenheit(input) {
        var celcius = ((parseInt(input, 10) - 32) *  (5 / 9)).toFixed(2) + "&#8451";
        return celcius;
    }

    function toCelcius(input) {
        var farenheit = ((parseInt(input, 10) * 1.8) + 32).toFixed(2) + "&#8457";
        return farenheit;
    }

    function isFahrenheit(input) {
        if (input[input.length - 1] === "f" ||  input[input.length - 1] === "F") {
            return true;
        }
    }

    function isCelcius(input) {
        if (input[input.length - 1] === "C" ||  input[input.length - 1] === "c" || num.length > 0) {
            return true;
        }
    }
    var num = document.getElementById("input").value;
    if (isFahrenheit(num)) {
        temperature = toFahrenheit(num);
    } else if (isCelcius(input)) {
        temperature = toCelcius(num);
    } else {
        temperature = "";
    }
    document.getElementById("output").innerHTML = temperature;
}

