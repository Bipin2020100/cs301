const prompt = require ("prompt-sync")();

let x = prompt("enter words with , to print in reverse :");
let words = x.split(",");
words.reverse();
console.log(words);
