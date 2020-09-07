'use strict'

function suffix (str1,str2){
  let suf = "";
  let j = str2.length;
  for (let i = str1.length -1 ; i >= 0 ; i--){
    if( str1[i] === str2[j-1]){
      suf = str1[i] +suf;
      } else {
      break;
    }
    j--;
  }
  return suf;
}

console.log(suffix('swimming', 'walking'))