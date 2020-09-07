

const prompt = require("prompt-sync")();

let h = prompt ("enter first number: ");
let s = prompt ("enter second number: ");
h = parseInt(h);
s = parseInt(s);
if ( h > s){
  console.log(h -s)
}
else 
console.log(s-h);
