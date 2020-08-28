// "use strict";

let x = "swimming";
let y = "walking";

function suffix(a, b) {
  let arr = a.split("");
  let brr = b.split("");
  let h = arr.length;
  if (h < brr.length) {
    h = brr.length;
  }
  let sum = "";
  for (let i = h; i > 0; i--) {
    if (arr[i] == brr[i]) {
      sum = arr[i] + sum;
    }
  }
  return sum;
}

let output = suffix(x, y);
console.log(output);