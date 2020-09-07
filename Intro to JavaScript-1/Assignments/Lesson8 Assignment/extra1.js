prompt = require("prompt-sync")();

let sum = "";
for (let j = 1; j <= 5; j++) {
  for (let i = 1; i <= j; i++) {
    sum = sum + j;
  } 
  
  console.log(sum);
  sum = "";
}