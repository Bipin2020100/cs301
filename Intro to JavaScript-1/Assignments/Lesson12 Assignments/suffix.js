// "use strict";

let x = "swimming";
let y = "walking";

function suffix(a, b) {
  let h = a.length;
  let j = b.length;
  let sum = "";
  for (let i = h; i > 0; i--) {

    if (a[i] === b[j]) {
      sum = a[i] + sum;
      j--;
    }
  }
  return sum;
}

let output = suffix(x, y);
console.log(output);