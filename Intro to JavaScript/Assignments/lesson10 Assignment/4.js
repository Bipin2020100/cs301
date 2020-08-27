function countEvens(arr){
let sum = 0;
const temp_arr = [];
let j = 0;
  for (let i = 0 ; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      // sum = sum + 1;
      temp_arr[j] = arr[i];
      j= j + 1;
    }
  }
  return temp_arr ;
  // return sum;
}

let list = [17,8,9,5,20];
let count = countEvens(list);
console.log(count);

// also trying to get the list of even numbers . Not just the number of even numbers itself
