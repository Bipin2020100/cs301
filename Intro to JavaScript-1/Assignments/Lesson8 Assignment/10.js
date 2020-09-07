prompt = require("prompt-sync")();

let n = 12;
let m = 1;
for (let i = 1; i <= 12; i++) {
  m = n * i;
  console.log (n + " x " + i + " = " + m );
}