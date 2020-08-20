prompt = require("prompt-sync")();

// let i = 11111;
// let j =1
// while (j <= 5) {
//   console.log(i*j)
//   j++;
// }

for (let i = 1; i <= 5; i++){
  let row = ""
  for (let j = 1; j <=5 ; j++){
    row += j;
  }
  console.log(row);
}