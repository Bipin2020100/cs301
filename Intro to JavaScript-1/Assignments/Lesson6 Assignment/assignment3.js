prompt = require("prompt-sync")();

let name = prompt ("enter student's name: ");
let credit = prompt ("enter university credit: ");
credit = parseInt(credit);
if (credit < 30){
  console.log("freshman");
} else if (credit < 60){
  console.log("sophomore");
} else if (credit < 90){
  console.log("junior");
} else {
  console.log("senior")
}