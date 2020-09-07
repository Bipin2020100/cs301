'use strict'

function switchCase(n){
  let sum = "";
  for (let s of n){
    if (s >= 'a' && s <= 'z'){
      s = s.toUpperCase();
    } else if( s >= 'A' && s <= 'Z'){
        s = s.toLowerCase();
      }
      sum += s;
    }
    return sum;
  }

console.log(switchCase("caYHYHch 22"));
