'use strict';
let arr = [1,2,2,2,3,1]
if(arr[0] === 1 && arr[arr.length-1] === 1){
  for (let i = 1 ; i < arr.length -2 ; i++){
    if(arr[i] !== 2){
      console.log( false);
    }
    console.log(true);
  }
}
console.log(false);