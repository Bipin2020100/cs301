prompt = require("prompt-sync")();

let n = prompt("enter the number: ");
n = parseInt(n);
let sum = 0;
for (i = 1; i <= n ; i++){
  if ( i%2 != 0){
   sum += i;
  }
}
console.log(sum);
