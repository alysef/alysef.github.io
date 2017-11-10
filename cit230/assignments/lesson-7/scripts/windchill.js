//f = 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t * s^0.16

var t = 50;

var s = 5;

var s2 = Math.pow(s, 0.16);

var t2 = 0.6215 * t;

var f = 35.74 + t2 - (35.75 * s2) + (0.4215 * t * s2);

document.getElementById("demo").innerHTML = f;
