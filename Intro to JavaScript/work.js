const prompt = require("prompt-sync")();

let x = prompt("enter a number between 1 to 10: ")
x = parseInt(x);
while (x !== 7)
{
  console.log("try agian");
  x = prompt("enter a number between 1 to 10: ")
  x = parseInt(x);
} 
console.log("bingo");
