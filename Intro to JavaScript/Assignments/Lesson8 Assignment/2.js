prompt = require("prompt-sync")();

let n = prompt("enter the number: ");
let phrase = prompt("enter a phrase: ");
n = parseInt(n);
for (i = 1; i <= n ; i++){
  console.log(phrase);
}
