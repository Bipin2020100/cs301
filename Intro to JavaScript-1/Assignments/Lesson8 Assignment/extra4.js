prompt = require("prompt-sync")();

let sum = "";
for (let i = 1; i <= 5 ; i++){
  for (let j = 1; j <=5 ; j++ ){
    sum = sum + j;
    // console.log(sum);
  }
  console.log(sum);
  sum ="";
}