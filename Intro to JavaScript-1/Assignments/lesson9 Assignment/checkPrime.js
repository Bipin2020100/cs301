 const prompt = require("prompt-sync")();

function checkPrime(a){
  let count = 0 ;
  for (let i = 2 ; i < a ; i++){
    if ( a % i === 0){
      count ++;
    } 
  }
  if (count === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

checkPrime(11);

