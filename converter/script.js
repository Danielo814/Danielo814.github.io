function convert() {
    var num = document.getElementById("input").value;
    if (num[num.length - 1] === "f" ||  num[num.length - 1] === "F") {
        temperature = toFarenheit();
    } else if ((num[num.length - 1] === "C" ||  num[num.length - 1] === "c" || num.length > 0)) {
        temperature = toCelcius();
    } else {
        temperature = "";
    }
    document.getElementById("output").innerHTML = temperature;
}

function toFarenheit() {
    var farenheit = document.getElementById("input").value;
    var celcius = ((parseInt(farenheit, 10) - 32) *  (5 / 9)).toFixed(2) + "&#8451";
    return celcius;
}

function toCelcius() {
    var celcius = document.getElementById("input").value;
    var farenheit = ((parseInt(celcius, 10) * 1.8) + 32).toFixed(2) + "&#8457";
    return farenheit;
}
