prompt = require("prompt-sync")()

let sales = prompt ("Sales in dollar:");
sales = parseInt(sales);
let c ;

if (sales < 300){
  c = 0;
} 
else if (sales < 600){
  c = sales *0.02;
}
else if (sales < 1000){
  c = sales *0.025;
}
else 
 c = sales *0.03;

 console.log("commission earned is " + c);
