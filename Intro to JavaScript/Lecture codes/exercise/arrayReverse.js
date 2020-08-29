
"use strict";

function arrayReverse(arr){
  let output = [];
  let j = 0 ;
  for (let i = arr.length -1 ; i >= 0 ; i-- ){
    output[j] = arr[i] 
    j++;
  }
  return output;
}

let brr = [5,4,2,1]
let c = arrayReverse(brr);
console.log(c);
