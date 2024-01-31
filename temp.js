var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

cel.addEventListener('input', function () {
    let c = parseFloat(this.value); // Ensure that the input is treated as a floating-point number
    let f = (c * (9 / 5)) + 32;
    let k = c + 273.15;

    kel.value = k;
    fah.value = f.toFixed(3); // Keep 3 decimal places only if necessary, otherwise, display as an integer
});

fah.addEventListener('input', function () {
    let f = parseFloat(this.value);
    let c = (f - 32) * (5 / 9);
    let k = ((f - 32) * (5 / 9)) + 273.15;

    kel.value = k.toFixed(3);
    cel.value = c.toFixed(3);
});

kel.addEventListener('input', function () {
    let k = parseFloat(this.value);
    let c = k - 273.15;
    let f = ((k - 273.15) * (9 / 5))+32;

    fah.value = f.toFixed(3);
    cel.value = c.toFixed(3);
});
