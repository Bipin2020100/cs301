const prompt = require ("prompt-sync")();

let x = prompt("enter a word: ");
x = x.toUpperCase(x);
do{
  x = prompt("enter a word: ");
}while (x !== "STOP")
