'use strict';

function reverseArray(arr) {
  let output = "";
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    output += arr[i];
    j++;
  }
  return output;

}