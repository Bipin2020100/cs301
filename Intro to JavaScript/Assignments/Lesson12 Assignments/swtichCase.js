"use strict";

function switchCase(s){
  let sum = "";
  for (let i = 0 ; i <= s.length-1 ; i++){
  
    if (sum[i]>= 'a' && sum[i] <= 'A'){
      sum[i] = sum[i].toUpperCase
    } else if ( sum[i] >= 'A'&& sum[i] <= 'Z'){
      sum[i] = sum[i].toLocaleLowerCase
    }
    sum= sum + sum[i];

  }
  return sum;
  
}