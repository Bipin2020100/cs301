"use strict";

function titleCase(s) {
  let length = s.length;
  let arr = s.split("");
  let sum = ""
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      sum = arr[i].toUpperCase(arr[i]);
    } else {
      sum = sum + arr[i];
    }
  }
  return sum;
}
let b = "bipin";
let output = titleCase(b);
console.log(output);