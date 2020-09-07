"use strict";


function vowelCount(str){
  let count = 0;
  for (let i = 0 ; i < str.length ; i++){
    if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u')
    count ++;
  }
  return count;
}

let x = ['ram', 'happy', 'there']
let y = x.map(s => vowelCount(s))

console.log(z);