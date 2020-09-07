'use strict';

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
  }
  return sum;

}

function sumsafe(brr) {

  if (brr.length === 0) {
    return false;
  }
  for (let i = 0; i < brr.length; i++) {
    if (brr[i] === sum(i))
      return false
  }
  return true;
}

console.log(sumsafe([5, -5, 0]))
console.log(sumsafe([5, -2, 1]))