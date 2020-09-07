prompt = require("prompt-sync")()

let sum = "";
for (let i = 5; i >= 1 ; i--){
  for (let j = 1; j <= i ; j++){
    sum = sum + i;
  }
  console.log(sum);
  sum = ""
}