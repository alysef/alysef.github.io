//f = 35.74 + 0.6215 * t - 35.75 * s^0.16 + 0.4275 * t * s^0.16

var t = 78;

var s = 5;

var wind = 35.74 + 0.6215 * t - 35.75 * (Math.pow(s, 0.16)) + 0.4275 * t * (Math.pow(s, 0.16));

var rounded = Math.round(wind * 10) /10;

document.getElementById("windchill").innerHTML = wind;
