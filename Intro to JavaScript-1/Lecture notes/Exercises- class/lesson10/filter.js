const arr = [1,2,-1,3,-2,5,6];
// const positive_arr = arr.filter(n=> n >= 0);
// console.log(positive_arr);

function positive_arr(arr1){
  arr1=[];
  j= 0;
  for (let i = 0; i<arr.length ; i++){
    arr1[j]= arr[i] ;
  }
  console.log(arr)
  return arr1
}