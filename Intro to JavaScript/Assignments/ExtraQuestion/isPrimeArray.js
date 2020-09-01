"use strict"
 
function isPrime(n){
  let count = 0;
  for (let i = 2; i < n ; i++){
    if (n % i === 0){
      count++;
    }
  }
  if ( count >= 1){
    return false;
  }else {
    return true;
  }

}

function isPerfectPrimeArray(arr){
  for (let i = 1 ; i < arr.length ; i = i + 2){
    if (isPrime(arr[i]) === false){
      return false;
    }
  }
  return true;
}

console.log(isPerfectPrimeArray([1,3,5,5,6,7]))
console.log(isPerfectPrimeArray([2,7,6,9]))