const prompt = require("prompt-sync")();

let age = prompt("enter your age: ");

age = parseFloat(age);

for (let i = 1 ; i <= age ; i++){
  console.log("Happy Birthday");
}