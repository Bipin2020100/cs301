const prompt = require("prompt-sync")()

let x = prompt("enter your age : ");
x = parseFloat(x);

while (x <= 18){
  x = prompt("enter your age :");
  x = parseFloat(x);
}
console.log("Congratulations!, You can drive.")