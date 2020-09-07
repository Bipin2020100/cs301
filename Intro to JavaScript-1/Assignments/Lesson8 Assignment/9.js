prompt = require("prompt-sync")();

let n = prompt("input an integer: ");

let k = ""
for (let i = 1 ; i <= n ; i++){
  for (let j = 1; j <= n ; j++){
    k = (i) + "\t" + (i*2) + "\t" + (i*3)+ "\t" +(i*i)+ "\t" +(i*i*i);  
  }
  console.log(k);
}
