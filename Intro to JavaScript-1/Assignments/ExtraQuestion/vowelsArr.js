'use strict'

function noVowels(str) {

  for (let s of str) {
    if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
      return true;
    }
  }
  return false;
}

let arr = [ 'apple', 'ball', 'sync']

let j = arr.filter(s =>! noVowels(s));
console.log(j);