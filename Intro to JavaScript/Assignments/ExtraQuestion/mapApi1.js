"use strict";

function findSumOfDigits(num){
 let sum = 0;

 while(num>0){
   sum += num%10;
   num = Math.floor(num/10) ;
 }
 return sum;
}


function mapper(arr){
 let  brr = [];
 let j = 0;
    let output = findSumOfDigits(arr[i]);
  brr[j] = output;
  j++;
}

console.log(mapper[25,3,123,45]);