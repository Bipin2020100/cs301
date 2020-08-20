prompt = require("prompt-sync")();

let age = prompt("Enter your age ");
age = parseFloat(age);

if ( age <= 0){
  console.log("please enter your valid age");
} else if (age <= 14){
  console.log("You can't drive yet");
} else if ( age <= 18){
  console.log("You can drive under supervision.");
} else
console.log("You can drive");
