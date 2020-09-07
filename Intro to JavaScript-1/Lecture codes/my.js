prompt = require("prompt-sync")()

let x = prompt("enter a number upto which prime numbers to be printed: ")
x = parseInt(x);
let j= 0;
  for ( let i = 2 ; i <= x; i++){
    
    for (let k = 2 ; k <= i ; k++){
    if (i % k === 0){
      j = j + 1;
    } 
  
    }
    if (j <=2){
      console.log(i);
    }
    j = 0;
  }