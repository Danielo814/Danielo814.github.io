function getValue() {
    var num = document.getElementById("celc").value;
    if (num[num.length - 1] === "f" ||  num[num.length - 1] === "F") {
        celcius = ((parseInt(num, 10) - 32) *  (5 / 9)).toFixed(2) + "&#8451";
    } else if ((num[num.length - 1] === "C" ||  num[num.length - 1] === "c" || num.length > 0)) {
        celcius = ((parseInt(num, 10) * 1.8) + 32).toFixed(2) + "&#8457";
        // document.getElementById("box").innerHTML = celcius + "&#8457";
    } else {
        celcius = "";
    }
    document.getElementById("box").innerHTML = celcius;
}
