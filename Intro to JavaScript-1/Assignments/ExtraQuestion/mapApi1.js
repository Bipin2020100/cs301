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
 let output ;
 for (let i = 0 ; i < arr.length ; i++){
    output = findSumOfDigits(arr[i]);
  brr[j] = output;
  j++;
}
return brr;
}
let y =[25,3,123,45]
// let z = y.map(n => findSumOfDigits(n))
let z = mapper(y)

console.log(z);