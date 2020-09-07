prompt = require("prompt-sync")();

let x  = 20

let y = prompt("Guess a number between 1 to 20: ");
y = parseInt(y);
let count = 0;
while (y != x){
  count++;
  y = prompt("Guess a number between 1 to 20: ");
}
console.log("Congratulations... You guessed it correct on " + count + "times.");



