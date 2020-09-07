const prompt = require ("prompt-sync")();

let x = prompt("enter words with , to print in replace for: ");
let updatedinput = x.replace("for","4");

console.log(updatedinput);
