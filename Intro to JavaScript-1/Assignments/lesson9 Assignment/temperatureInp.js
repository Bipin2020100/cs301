const prompt = require("prompt-sync")()

function farhToCels(x){
  let cls = (x - 32)*(5/9);
  console.log(cls)
}

let inp = prompt ("Enter the temperature in Fahrenheit: ")
inp = parseFloat(inp) ;

farhToCels(inp);