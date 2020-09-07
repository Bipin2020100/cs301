prompt = require("prompt-sync")();

let cost = prompt('Enter the cost of the house: ');
cost = parseInt(cost);

if (cost < 50000){
  dp = 0.05 * cost;
} else if ( cost < 100000){
  dp = 2000 + 0.10 *(cost - 50000)
} else if ( cost < 200000){
  dp = 7500 + 0.20 *(cost - 100000)
} else {
  dp = 27500 + 0.25 *(cost - 200,000)
}

console.log(dp);

