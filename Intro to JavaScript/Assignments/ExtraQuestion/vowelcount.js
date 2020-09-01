"use strict";

const prompt = require("prompt-sync")();

function vowelCount(str){
  let count = 0;
  for (let i = 0 ; i < str.length ; i++){
    if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' ||str[i] === 'u')
    count ++
  }
  return count;
}

let x = prompt("Enter a string to check number of vowels: ")
x = x.toLocaleLowerCase()
let y = vowelCount(x)

console.log(y);