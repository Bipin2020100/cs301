// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// const arr_sum = arr1.reduce(reducer);
// console.log(arr_sum);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reducer(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let arr_sum = reducer(arr1)
console.log(arr_sum);