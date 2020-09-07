function getMiddle(arr){
  let middle = 0 ;
  if (arr.length % 2 === 0 ){
    middle = (arr[(arr.length/2 - 1 )] + arr[(arr.length/2) ])/ 2;
  
  }else {
    middle = arr[Math.floor(arr.length/2)]
  }
  return middle;
  
}
  // let list = [17,8,9,5,20];
let list = [12,4,8,15,17,5,20,11,7];

let value = getMiddle(list);
console.log(value);