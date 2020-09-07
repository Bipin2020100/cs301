
function rotateLeft(arr){
  const arr1 = [];
  let j = 0;
  for (let i = 0; i <(arr.length) ; i++){
    if (i == 0){
      arr1[j] = arr[arr.length - 1];
    } else {
      arr1[j -1] = arr[i];
    }
    j++; 
  }
  arr1[j-1]=arr[0];
  
  return arr1;
}

let list = [17,8,9,5,20]
let rotate= rotateLeft(list);
console.log(rotate);
