'use strict';

function reverseArray(arr) {
  let output = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    output[j] = arr[i];
    j++;
  }
  return output;

}

let b = [5, 4, 'string']
console.log(reverseArray(b));


function reverseArrInPlace(arr) {
  let j = 0;
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    temp = arr[j];
    arr[j] = arr[i];
    j++

  }
  return arr;
}

let c = [5, 3, 2, 6];
console.log(reverseArrInPlace(c));