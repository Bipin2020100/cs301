let prompt = require("prompt-sync")();

const scores = [];
let sum = 0;
for (let i = 0; i < 10 ; i++){
  scores[i]= Math.ceil(Math.random()*10)
}

average = findAverage(scores);
console.log(average);
