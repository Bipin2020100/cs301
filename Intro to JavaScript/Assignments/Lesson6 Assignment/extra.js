prompt = require("prompt-sync")();

let x = prompt ("enter integer: ");
x = parseInt(x);

if ((x % 2) == 0 ){
  console.log("even")
} else {
  console.log("odd")
}
