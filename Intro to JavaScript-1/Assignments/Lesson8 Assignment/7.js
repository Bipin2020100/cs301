prompt = require("prompt-sync")();

let a = 0;
let b = 1;
console.log(a);
console.log(b);

for (let i = 0 ; i <= 25 ; i++){
  sum = a + b;
  a = b;
  b= sum;
  
  console.log(sum);
}