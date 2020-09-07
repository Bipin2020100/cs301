 "use strict";

let x = "disable";
let y = "distasteful";

function prefix(a, b) {
  let arr = a.split("");
  let brr = b.split("");
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == brr[i]) {
      sum = sum + arr[i]
    }
  }
  return sum;
}

let output = prefix(x,y);
console.log(output);