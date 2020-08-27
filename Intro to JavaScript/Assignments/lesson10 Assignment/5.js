function multiply(arr, multiplier){
  const arr1 = [];
  for (let i = 0 ; i < arr.length ; i++){
     arr1[i] = arr[i]*multiplier;
  }
  return arr1;
}
 let list = [17,8,9,5,20];
 let products = multiply(list,3);
 console.log(products);

