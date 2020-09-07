"use strict";

const prompt = require("prompt-sync")();

let radius = prompt("input radius: ");
radius = parseFloat(radius);
while (radius < 0) {
  radius = prompt("Input correct value: ");
  radius = parseFloat(radius);
}
radius = (Math.PI) * (Math.pow(radius, 2));
console.log(radius);