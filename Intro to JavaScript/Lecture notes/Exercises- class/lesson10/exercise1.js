let prompt = require("prompt-sync")();

const scores = [10,20,30,40,50];

function findAverage(arr){
  let sum = 0;
  let avg = 0;
  for (let i = 0 ; i < arr.length ; i++){
    sum = sum + scores[i];
  }
  return sum/arr.length;
}

let average = findAverage();

console.log(average);




