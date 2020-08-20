prompt = require("prompt-sync")();

let n = prompt("enter the number: ");
n = parseInt(n);
for (i = 1; i <= n ; i++){
  console.log(i);
}